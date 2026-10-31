/* Ryoony — interview-agent chat widget. Drop into any page:

     <div id="career-agent" data-endpoint="https://YOUR-API/ask"></div>
     <link rel="stylesheet" href="widget.css">
     <script src="widget.js" defer></script>

   Flow: the interviewer leaves an email and agrees to the privacy notice
   (no verification yet), then Ryoony asks which language to use.
   The answer (a chip, or typed) fixes the language for the whole session;
   Ryoony then greets in that language and the interview begins. Bubbles
   build up above the question box. Each answer carries a route/confidence
   badge and the career records it drew on. A session id keeps follow-up
   questions attached to earlier turns.
*/
(function () {
  const root = document.getElementById("career-agent");
  if (!root) return;
  const endpoint = root.dataset.endpoint;
  let lang = null;          // null until the interviewer answers the language question
  let sessionId = null;
  let mode = "gate";        // gate (email) → consent → lang → interview
  let pendingEmail = null;
  const VID_KEY = "ryoony.visitor";
  let visitorId = null;
  try { visitorId = localStorage.getItem(VID_KEY); } catch (_) { /* storage blocked: ask again */ }

  const STR = {
    en: {
      greeting: "Hello, I'm Ryoony, and I'll be answering your questions in today's interview. I'm an interview agent AI model developed by the candidate. My answers may have limits, but I'll do my best throughout the interview.",
      about: "Ryoony is the interview agent for Jungrun (Jo) Kim. It answers questions about her work from her career records, cites where each answer came from, and says so instead of guessing when the records are silent.",
      placeholder: "Ask Ryoony about Jo's experience — follow-ups welcome",
      ask: "Ask",
      thinking: "Ryoony is checking Jo's records…",
      evidence: "Drawn from these records",
      route: { fact: "Fact", competency: "Competency", motivation: "Motivation", out_of_scope: "Out of scope", injection: "Declined" },
      conf: { confirmed: "confirmed", provisional: "provisional", none: "no record" },
      askme: "Ask Jo directly about:",
      understood: "Understood as:",
      newSession: "Start over",
      foot: "Ryoony is an AI model. Answers are drawn only from Jo's career records; where they are silent, Ryoony says so instead of guessing.",
      queued: "Ryoony couldn't fully answer this one, so it has been passed to Jo. She will reply to the email you left.",
      langPicked: "English",
      locked: "The interview will continue in English.",
      samples: ["Introduce Jo in one minute.", "What is her biggest achievement in the export business?", "How does she actually use AI in her work?", "She majored in French. Wasn't it hard to move into studying AI?"],
    },
    ko: {
      greeting: "안녕하세요, 오늘 면접에서 답변을 드릴 류니(Ryoony)입니다. 저는 지원자가 직접 개발한 인터뷰 에이전트 AI 모델입니다. 답변에 한계가 있을 수 있지만, 최선을 다해 면접에 응하겠습니다.",
      about: "류니(Ryoony)는 김정륜 님의 인터뷰 에이전트입니다. 김정륜 님의 경력 기록을 바탕으로 업무에 관한 질문에 답하고, 답마다 근거가 된 기록을 함께 보여줍니다. 기록에 없는 내용은 추측하지 않고 없다고 말씀드립니다.",
      placeholder: "김정륜 님의 경력에 대해 류니에게 물어보세요. 연속질문도 가능하도록 모델 설계가 되어 있습니다.",
      ask: "질문",
      thinking: "류니가 기록을 확인하는 중…",
      evidence: "이 기록을 근거로 답했습니다",
      route: { fact: "사실", competency: "역량", motivation: "동기", out_of_scope: "범위 밖", injection: "거절" },
      conf: { confirmed: "확인됨", provisional: "확인 중", none: "기록 없음" },
      askme: "김정륜 님께 직접 확인해 주세요:",
      understood: "이렇게 이해했습니다:",
      newSession: "처음부터",
      foot: "류니는 AI 모델입니다. 김정륜 님의 경력 기록에 있는 내용만으로 답하며, 기록에 없는 내용은 추측하지 않고 없다고 말씀드립니다.",
      queued: "류니가 충분히 답하지 못한 질문이라 김정륜 님께 전달했습니다. 남겨주신 이메일로 김정륜 님이 직접 답변드릴 예정입니다.",
      langPicked: "한국어",
      locked: "이번 면접은 한국어로 진행합니다.",
      samples: ["김정륜 님을 1분 안에 소개해 주세요.", "해외 수출 사업에서 거둔 가장 큰 성과는 무엇인가요?", "AI를 실제 업무에 어떻게 쓰고 있나요?", "프랑스어를 전공했는데, AI 공부가 어렵지는 않았나요?"],
    },
  };
  // Entry gate: email, then consent. Shown in both languages (no language chosen yet).
  const GATE = {
    ask: "면접을 시작하기 전에 이메일 주소를 남겨 주세요.\n이메일은 개인정보 보호를 위해 누가 경력 정보를 열람했는지 기록하고, AI가 답하지 못한 질문에 김정륜 님이 직접 이메일로 답변드리기 위해 사용됩니다.\n\nBefore we begin, please leave your email address.\nIt is used to keep a record of who views this career information, for privacy, and so that Jo can personally reply by email to any question the AI could not answer.",
    placeholder: "name@company.com",
    next: "다음 · Next",
    invalid: "이메일 주소를 확인해 주세요 · Please check the email address.",
    failed: "입장에 실패했습니다. 잠시 후 다시 시도해 주세요 · Could not start. Please try again.",
    welcomeBack: "다시 오신 것을 환영합니다 · Welcome back",
    otherEmail: "다른 이메일로 입장 · Use another email",
  };
  const CONSENT_VERSION = "2026-10-29";
  const CONSENT = {
    title: "개인정보 수집·이용 동의 · Privacy consent",
    ko: [
      ["수집 항목", "이메일 주소, 면접 중 입력하신 질문과 류니의 답변 기록"],
      ["이용 목적", "경력 정보 열람 기록 관리, AI가 답하지 못한 질문에 대한 김정륜 님의 이메일 회신"],
      ["보유 기간", "마지막 방문일로부터 6개월 후 파기"],
      ["동의 거부", "동의하지 않으실 수 있으며, 이 경우 면접 세션 이용이 제한됩니다."],
    ],
    en: [
      ["What", "Your email address and the questions you ask, with Ryoony's answers"],
      ["Why", "To record who views this career information, and so Jo can reply by email to questions the AI could not answer"],
      ["How long", "Deleted 6 months after your last visit"],
      ["Your choice", "You may decline; the interview session is then unavailable."],
    ],
    note: "수집자: 김정륜 · Collected by Jungrun (Jo) Kim. 마케팅 등 다른 목적으로 사용하지 않습니다 · Never used for any other purpose.",
    agree: "동의하고 입장 · Agree and enter",
    cancel: "취소 · Cancel",
  };

  // Shown before a language is chosen.
  const PRE = {
    ask: "면접을 어떤 언어로 진행할까요?\nWhich language would you like for this interview?",
    placeholder: "한국어 / English — 언어를 먼저 골라 주세요 · Choose a language first",
    send: "보내기 · Send",
    reset: "↺ 처음부터 · Start over",
    foot: "류니는 AI 모델입니다 · Ryoony is an AI model",
  };

  root.innerHTML = `
    <div class="ca-panel">
      <header class="ca-head">
        <div class="ca-avatar" aria-hidden="true">R</div>
        <div class="ca-head-text">
          <div class="ca-name">Ryoony · 류니</div>
          <p class="ca-about"></p>
        </div>
        <button type="button" class="ca-reset" hidden></button>
      </header>
      <div class="ca-thread" aria-live="polite"></div>
      <div class="ca-samples"></div>
      <form class="ca-form">
        <input class="ca-input" type="text" maxlength="500" autocomplete="off" />
        <button class="ca-btn" type="submit"></button>
      </form>
      <p class="ca-foot"></p>
      <div class="ca-consent" hidden role="dialog" aria-modal="true" aria-labelledby="ca-consent-title">
        <div class="ca-consent-card">
          <h3 id="ca-consent-title"></h3>
          <p class="ca-consent-email"></p>
          <table class="ca-consent-table ko"></table>
          <table class="ca-consent-table en"></table>
          <p class="ca-consent-note"></p>
          <div class="ca-consent-actions">
            <button type="button" class="ca-consent-cancel"></button>
            <button type="button" class="ca-consent-agree"></button>
          </div>
        </div>
      </div>
    </div>`;

  const form = root.querySelector(".ca-form");
  const input = root.querySelector(".ca-input");
  const thread = root.querySelector(".ca-thread");
  const resetBtn = root.querySelector(".ca-reset");
  const samplesEl = root.querySelector(".ca-samples");
  const aboutEl = root.querySelector(".ca-about");
  const consentEl = root.querySelector(".ca-consent");
  consentEl.querySelector("h3").textContent = CONSENT.title;
  consentEl.querySelector(".ca-consent-note").textContent = CONSENT.note;
  consentEl.querySelector(".ca-consent-agree").textContent = CONSENT.agree;
  consentEl.querySelector(".ca-consent-cancel").textContent = CONSENT.cancel;
  for (const l of ["ko", "en"]) {
    consentEl.querySelector(`.ca-consent-table.${l}`).innerHTML =
      CONSENT[l].map(([k, v]) => `<tr><th>${k}</th><td>${v}</td></tr>`).join("");
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  function scrollDown() { thread.scrollTo({ top: thread.scrollHeight, behavior: "smooth" }); }

  // Ryoony's text appears as if typed: fast enough that a long answer lands in
  // about three seconds, instant for people who asked for reduced motion.
  const REDUCE = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function typeText(el, text, done) {
    text = String(text);
    if (REDUCE || text.length < 2) { el.textContent = text; done && done(); return; }
    el.textContent = ""; el.classList.add("is-typing");
    const perTick = Math.max(1, Math.ceil(text.length / 160));
    let i = 0;
    const tick = () => {
      i = Math.min(text.length, i + perTick);
      el.textContent = text.slice(0, i);
      if (i % (perTick * 6) === 0) scrollDown();
      if (i < text.length) setTimeout(tick, 18);
      else { el.classList.remove("is-typing"); scrollDown(); done && done(); }
    };
    tick();
  }

  function botSay(text, extraClass = "") {
    const el = document.createElement("div");
    el.className = `ca-msg ca-bot ${extraClass}`.trim();
    el.innerHTML = `<div class="ca-bubble"><p class="ca-answer"></p></div>`;
    thread.appendChild(el); scrollDown();
    typeText(el.querySelector(".ca-answer"), text);
    return el;
  }
  function userSay(text) {
    const el = document.createElement("div");
    el.className = "ca-msg ca-user";
    el.innerHTML = `<div class="ca-bubble">${esc(text)}</div>`;
    thread.appendChild(el); scrollDown();
  }

  // ---- UI state ---------------------------------------------------------
  function renderChrome() {
    const T = lang ? STR[lang] : null;
    aboutEl.innerHTML = T ? esc(T.about)
      : `${esc(STR.ko.about)}<span class="ca-about-en">${esc(STR.en.about)}</span>`;
    const gate = mode === "gate";
    input.type = gate ? "email" : "text";
    input.placeholder = gate ? GATE.placeholder : T ? T.placeholder : PRE.placeholder;
    root.querySelector(".ca-btn").textContent = gate ? GATE.next : T ? T.ask : PRE.send;
    root.querySelector(".ca-foot").textContent = T ? T.foot : PRE.foot;
    resetBtn.textContent = T ? `↺ ${T.newSession}` : PRE.reset;
    samplesEl.innerHTML = "";
    if (T) T.samples.forEach(sm => chip(sm, () => { input.value = sm; form.requestSubmit(); }));
  }
  function chip(label, onClick, target = samplesEl, cls = "ca-chip") {
    const b = document.createElement("button"); b.type = "button"; b.className = cls; b.textContent = label;
    b.addEventListener("click", onClick); target.appendChild(b); return b;
  }

  function start() {
    lang = null; sessionId = null; resetBtn.hidden = true;
    thread.innerHTML = "";
    if (!visitorId) { mode = "gate"; botSay(GATE.ask, "ca-gate-msg"); renderChrome(); return; }
    askLanguage(true);
  }

  function askLanguage(returning = false) {
    mode = "lang";
    if (returning) {
      const wb = botSay(GATE.welcomeBack, "ca-note");
      const other = document.createElement("button"); other.type = "button"; other.className = "ca-link"; other.textContent = GATE.otherEmail;
      other.addEventListener("click", () => { forgetVisitor(); start(); input.focus({ preventScroll: true }); });
      wb.querySelector(".ca-bubble").appendChild(other);
    }
    const q = botSay(PRE.ask, "ca-langq");
    const choices = document.createElement("div"); choices.className = "ca-choices ca-fade";
    chip("한국어", () => chooseLang("ko"), choices, "ca-choice");
    chip("English", () => chooseLang("en"), choices, "ca-choice");
    q.querySelector(".ca-bubble").appendChild(choices);
    renderChrome();
  }

  function forgetVisitor() {
    visitorId = null;
    try { localStorage.removeItem(VID_KEY); } catch (_) {}
  }

  // ---- entry gate ---------------------------------------------------------
  const EMAIL_RE = /^[^@\s]{1,64}@[^@\s]{1,255}\.[A-Za-z]{2,}$/;
  function submitEmail(raw) {
    const email = raw.trim();
    if (!EMAIL_RE.test(email)) { botSay(GATE.invalid, "ca-note ca-warn"); return; }
    pendingEmail = email;
    consentEl.querySelector(".ca-consent-email").textContent = email;
    consentEl.hidden = false;
    consentEl.querySelector(".ca-consent-agree").focus({ preventScroll: true });
  }
  consentEl.querySelector(".ca-consent-cancel").addEventListener("click", () => { consentEl.hidden = true; pendingEmail = null; input.focus({ preventScroll: true }); });
  consentEl.querySelector(".ca-consent-agree").addEventListener("click", async () => {
    const btn = consentEl.querySelector(".ca-consent-agree"); btn.disabled = true;
    try {
      const res = await fetch(endpoint.replace(/\/ask$/, "/visit"), { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: pendingEmail, consent: true, consent_version: CONSENT_VERSION }) });
      if (!res.ok) throw new Error((await res.json()).detail || res.statusText);
      visitorId = (await res.json()).visitor_id;
      try { localStorage.setItem(VID_KEY, visitorId); } catch (_) {}
      consentEl.hidden = true;
      userSay(pendingEmail);
      input.value = "";
      askLanguage();
    } catch (err) {
      consentEl.hidden = true;
      botSay(`${GATE.failed} (${err.message || err})`, "ca-note ca-warn");
    } finally { btn.disabled = false; }
  });

  function chooseLang(l, echo = true) {
    if (lang) return;
    mode = "interview";
    lang = l;
    thread.querySelectorAll(".ca-choice").forEach(b => { b.disabled = true; b.classList.toggle("is-picked", b.textContent === STR[l].langPicked); });
    if (echo) userSay(STR[l].langPicked);
    botSay(STR[l].greeting);
    botSay(STR[l].locked, "ca-note");
    resetBtn.hidden = false;
    renderChrome();
    input.focus({ preventScroll: true });
  }

  // A typed reply to the language question: "한국어", "english", "영어로" …
  function langFromReply(text) {
    const t = text.trim().toLowerCase();
    if (/^(한국어|한글|국어|korean|ko)(?![a-z])/.test(t)) return "ko";
    if (/^(영어|english|eng|en)(?![a-z])/.test(t)) return "en";
    return null;
  }

  resetBtn.addEventListener("click", () => { start(); input.focus({ preventScroll: true }); });

  // ---- asking -----------------------------------------------------------
  function renderTurn(q) {
    userSay(q);
    const T = STR[lang];
    const bot = document.createElement("div");
    bot.className = "ca-msg ca-bot is-thinking";
    bot.innerHTML = `
      <div class="ca-bubble">
        <div class="ca-understood" hidden></div>
        <div class="ca-meta" hidden><span class="ca-badge ca-route"></span><span class="ca-badge ca-conf"></span></div>
        <p class="ca-answer">${T.thinking}</p>
        <p class="ca-askme" hidden></p>
        <div class="ca-evidence" hidden>
          <div class="ca-evidence-title">${T.evidence}</div>
          <ul class="ca-cards"></ul>
        </div>
      </div>`;
    thread.appendChild(bot); scrollDown();
    return bot;
  }

  const TYPE_COLOR = { project: "c1", role: "c2", skill: "c3", unknown: "c4" };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const q = input.value.trim();
    if (!q) return;
    if (mode === "gate") { submitEmail(q); return; }

    if (!lang) {
      const picked = langFromReply(q);
      if (picked) { input.value = ""; userSay(q); chooseLang(picked, false); return; }
      if (q.length < 3) return;
      // They skipped the question and asked straight away: take the language of what they wrote.
      chooseLang(/[가-힣]/.test(q) ? "ko" : "en", false);
    }
    if (q.length < 3) return;
    input.value = "";
    const T = STR[lang];
    const el = renderTurn(q);
    const answer = el.querySelector(".ca-answer");
    try {
      const res = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q, session_id: sessionId, lang, visitor_id: visitorId }) });
      if (res.status === 401 || res.status === 422) {  // unknown visitor (e.g. server DB reset): back to the gate
        el.remove(); thread.lastElementChild && thread.lastElementChild.remove();
        forgetVisitor(); start(); return;
      }
      if (!res.ok) throw new Error((await res.json()).detail || res.statusText);
      const r = await res.json();
      sessionId = r.session_id || sessionId;

      el.classList.remove("is-thinking");
      const meta = el.querySelector(".ca-meta"); meta.hidden = false; meta.classList.add("ca-fade");
      const routeEl = el.querySelector(".ca-route"), confEl = el.querySelector(".ca-conf");
      routeEl.textContent = T.route[r.route] || r.route; routeEl.dataset.route = r.route;
      confEl.textContent = T.conf[r.confidence] || r.confidence; confEl.dataset.conf = r.confidence;
      if (r.search_query) { const u = el.querySelector(".ca-understood"); u.textContent = `${T.understood} ${r.search_query}`; u.hidden = false; }

      typeText(answer, r.answer, () => {
        if (r.ask_me_directly) { const a = el.querySelector(".ca-askme"); a.textContent = `${T.askme} ${r.ask_me_directly}`; a.hidden = false; a.classList.add("ca-fade"); }
        if (r.followup_queued) { const n = document.createElement("p"); n.className = "ca-queued ca-fade"; n.textContent = T.queued; el.querySelector(".ca-bubble").appendChild(n); }
        if (r.evidence && r.evidence.length) {
          const ev = el.querySelector(".ca-evidence"); ev.hidden = false; ev.classList.add("ca-fade");
          const cards = el.querySelector(".ca-cards");
          const seen = new Set();
          r.evidence.forEach(e2 => {
            if (seen.has(e2.card_id)) return;
            seen.add(e2.card_id);
            const hit = (r.hits || []).find(h => h.card_id === e2.card_id) || {};
            const li = document.createElement("li");
            li.className = `ca-card ${TYPE_COLOR[hit.type] || "c4"}`;
            li.style.animationDelay = `${(seen.size - 1) * 90}ms`;
            li.innerHTML = `<span class="ca-gate">${seen.size}</span><div><div class="ca-card-id">${esc(hit.title || e2.card_id)}</div>${e2.quote ? `<div class="ca-quote">“${esc(e2.quote)}”</div>` : ""}</div>`;
            cards.appendChild(li);
          });
        }
        scrollDown();
      });
    } catch (err) {
      el.classList.remove("is-thinking"); el.classList.add("is-error");
      answer.textContent = String(err.message || err);
    }
    scrollDown();
  });

  start();
})();
