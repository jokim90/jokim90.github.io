/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",          // 정적 사이트로 내보내기 (GitHub Pages용)
  basePath,                   // 프로젝트 저장소일 때 "/저장소이름" (Actions가 자동 주입)
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
