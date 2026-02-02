export function Footer() {
  return (
    <footer className="border-t border-border/30 py-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} JJ. All rights reserved.
          </p>
          <p className="text-sm text-silver-dim">
            Designed & built by JJ<span className="text-silver"></span>
          </p>
        </div>
      </div>
    </footer>
  );
}

// GitHub Pages 배포 문제 해결 과정 정리

// 1️⃣ 404 에러 - 초기 문제
// 원인: package.json에 homepage 설정 누락
// 해결: package.json에 추가
// "homepage": "https://jungjooo.github.io/portfolio-rpa"

// 2️⃣ Vite 프로젝트 특수 설정
// 원인: Vite는 base 경로 설정이 별도로 필요
// 해결: vite.config.ts에 설정 확인
// base: "/portfolio-rpa/"

// 3️⃣ PowerShell 명령어 차이
// 문제: rm -rf 명령어가 PowerShell에서 작동 안 함
// 해결: PowerShell 전용 명령어 사용
// Remove-Item -Recurse -Force dist

// 4️⃣ BrowserRouter vs HashRouter - 핵심 문제
// 원인: GitHub Pages는 SPA 라우팅을 지원하지 않아 BrowserRouter 사용 시 404 발생
// 해결: App.tsx에서 변경
// Before: import { BrowserRouter } from "react-router-dom";
// After: import { HashRouter } from "react-router-dom";

// 5️⃣ 배포 순서
// 올바른 순서:
// 1. 코드 수정
// 2. Git Commit & Push (GitHub Desktop)
// 3. npm run deploy (dist 폴더를 gh-pages 브랜치에 자동 배포)
// 4. 1-2분 대기

// ✅ 최종 해결책
// - package.json: homepage 설정
// - vite.config.ts: base 경로 설정
// - App.tsx: HashRouter 사용
// - 배포: npm run deploy로 자동화