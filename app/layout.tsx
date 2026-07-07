import type { Metadata } from "next";
import "@fontsource-variable/archivo";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";
import { LanguageProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: `${site.name} — International Media Producer`,
  description: site.tagline,
};

/** 다크모드 FOUC 방지: 렌더 전에 저장된 테마를 적용. 기본값은 다크모드입니다. */
const themeInit = `
(function(){
  try {
    var t = localStorage.getItem("theme");
    if (t !== "light") {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {
    document.documentElement.classList.add("dark");
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
