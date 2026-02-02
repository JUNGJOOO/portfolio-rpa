import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ArrowLeft, Calendar, Tag, Play, FileText, Package, ExternalLink, User, BookOpen, Download, Eye, Github} from "lucide-react";
import * as images from '@/assets';

const projects = [
  {
    id: 1,
    title: "블루리본",
    description: "블루리본의 전문가 평가, 대중 평가, 감성 분석을 통합하여 객관적 신뢰도 점수를 자동 산출하는 시스템 구축했습니다.",
    fullDescription: `프로젝트 전체 과정과 기술 문서는 Notion 문서로 정리되어 있습니다.

    • 프로젝트 개요
    • As-is, To-be
    • 프로세스 설계
    • REFramework 아키텍처 상세
    • 각 워크플로우별 상세 분석
    • 프로젝트 결과물
    • 트러블슈팅 & 해결 과정`,
    tags: ["UiPath", "웹 스크래핑", "Kakao Maps API", "Naver Blog API", "Google NLP API", "Google Sheets 연동", "Excel/Mail 자동화"],
    date: "2025.11.03 ~ 2025.11.27 (4주) → 2026.01.05~2026.01.16 (2주) : 리팩토링 및 안정화",
    role: `개발자 : 이정주
    기여도 : 100% (개인 프로젝트)
    담당 : 기획, 설계, 개발, 테스트까지 전 과정 단독 진행
    프로젝트 유형 : 가상 시나리오 기반 프로젝트
    교육 과정: RPA 솔루션 개발자 양성과정 2~3차 프로젝트`,
    demoVideo: "https://www.youtube.com/embed/G2S5LTyEDE0",
    videoOrientation: "landscape", // 가로 영상
    notionUrl: "https://www.notion.so/RPA-2e2f82deb2118005bd18ee2fc3e920e1?source=copy_link",
    deliverables: [
      { name: "사이트(github)", url: "https://jungjooo.github.io/rpa-blueribbon", thumbnail: images.blue_deliverables1, type: "Github" },
      { name: "구글시트", url: "https://docs.google.com/spreadsheets/d/1xHtQ4daPwZtGesz9aHKlHEPi95tO4fQg77-swhZ_QrA/edit?usp=sharing", thumbnail: images.blue_deliverables2, type: "link" },
      { name: "엑셀파일", url: "/files/블루리본_조회내역_2601.xlsx", thumbnail: images.blue_deliverables3, type: "download" }
    ],
  },
  {
    id: 2,
    title: "티켓랭킹",
    description: "티켓랭킹 데이터 자동 수집 및 가공 업무 자동화 시스템 구축했습니다.",
    fullDescription: `프로젝트 전체 과정과 기술 문서는 Notion 문서로 정리되어 있습니다.

    • 프로젝트 개요
    • As-is, To-be
    • 프로세스 설계
    • REFramework 아키텍처 상세
    • 각 워크플로우별 상세 분석
    • 프로젝트 결과물`,
    tags: ["UiPath", "웹 스크래핑", "Excel/Mail 자동화", "데이터 가공", "정규식"],
    date: "2025.12.01 ~ 2025.12.05 (1주)",
    role: `개발자 : 이정주
    기여도 : 100% (개인 프로젝트)
    담당 : 기획, 설계, 개발, 테스트까지 전 과정
    프로젝트 유형 : 가상 시나리오 기반 프로젝트`,
    demoVideo: "https://www.youtube.com/embed/3pogLgrxgjI",
    videoOrientation: "portrait", // 세로 영상 (Shorts)
    notionUrl: "https://www.notion.so/RPA-2ccf82deb21180618cacc8d93e8ad4e7?source=copy_link",
    deliverables: [
      { name: "결과 화면", url: images.ticket_email, thumbnail: images.ticket_email, type: "image" },
      { name: "엑셀파일", url: "/files/티켓랭킹_20251213_이정주.xlsx", thumbnail: images.blue_deliverables3, type: "download" }
    ],
  },
  {
    id: 3,
    title: "의약품 안전나라",
    description: "의약품 행정처분 정보 모니터링 자동화를 통한 업무 효율화 및 신속하게 대응합니다.",
    fullDescription: `프로젝트 전체 과정과 기술 문서는 Notion 문서로 정리되어 있습니다.

    • 프로젝트 개요
    • As-is, To-be
    • 프로세스 설계
    • REFramework 아키텍처 상세
    • 각 워크플로우별 상세 분석
    • 프로젝트 결과물`,
    tags: ["UiPath", "웹 스크래핑", "Excel/Mail 자동화", "데이터 가공", "정규식"],
    date: "2025.12.08 ~ 2025.12.12 (1주)",
    role: `개발자 : 이정주
    기여도 : 100% (개인 프로젝트)
    담당 : 기획, 설계, 개발, 테스트까지 전 과정
    프로젝트 유형 : 가상 시나리오 기반 프로젝트`,
    demoVideo: "https://www.youtube.com/embed/ou7SnBa3R6I",
    videoOrientation: "portrait", // 세로 영상 (Shorts)
    notionUrl: "https://www.notion.so/RPA-2d8f82deb21180a8b8d4d8f909d5b4cd?source=copy_link",
    deliverables: [
      { name: "결과 화면", url: images.medicine_email, thumbnail: images.medicine_email, type: "image" },
      { name: "엑셀파일", url: "/files/의약품_안전나라_20251213_이정주.xlsx", thumbnail: images.blue_deliverables3, type: "download" }
    ],
  },
  {
    id: 4,
    title: "서울문화포털",
    description: "웹 스크래핑 기반 서울문화포털의 기간·조건 필터 기반 검색 대시보드 구축했습니다.",
    fullDescription: null,
    tags: ["Power Automate", "FTP 업로드 자동화", "대시보드 페이지 구축"],
    date: "2025.09.15 - 2025.10.01 (3주)",
    role: `구성 : 4인 팀 프로젝트 (팀오토)
    개발자 : 이정주
    기여도 : 주요 기여 80% (핵심 담당)
    담당 : 설계·개발·테스트 전반 주도
    프로젝트 유형 : 가상 시나리오 기반 프로젝트
    교육 과정 : RPA 솔루션 개발자 양성과정 1차 프로젝트`,
    demoVideo: "https://www.youtube.com/embed/ZjqxeK2xXGk",
    videoOrientation: "landscape", // 가로 영상
    notionUrl: null,
    deliverables: [
      { name: "대시보드(카페24)", url: "https://rpajury.mycafe24.com/Project1/index.html", thumbnail: images.seoul_dashboard, type: "link" },
      { name: "ftp업로드", url: images.seoul_ftp, thumbnail: images.seoul_ftp, type: "image" },
    ],
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl font-bold mb-4">프로젝트를 찾을 수 없습니다</h1>
            <Link to="/projects" className="text-silver hover:text-foreground transition-colors">
              ← 프로젝트 목록으로 돌아가기
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link to="/projects" className="inline-flex items-center gap-2 text-silver-dim hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />프로젝트 목록
            </Link>

            {/* Header */}
            <div className="card-glass rounded-xl p-8 mb-8 animate-fade-in">
              <h1 className="text-3xl md:text-4xl mb-6 font-display font-bold">
                {project.title}
              </h1>
              <p className="text-lg mb-6 text-foreground/60 tracking-tight">
                {project.description}
              </p>
              <div className="flex text-foreground/60 flex-direction flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <p>{project.date}</p>
                </div>
                <div className="flex items-normal gap-2 whitespace-pre-line leading-relaxed">
                  <User className="w-4 h-4"/>
                  <p>{project.role}</p>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Tag className="w-4 h-4" />
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-surface-elevated text-silver-dim">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            {/* 프로젝트 상세 있을때 없을때 */}
            {project.fullDescription && (
              <div className="card-glass rounded-xl p-8 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-lg bg-surface-elevated">
                    <BookOpen className="w-5 h-5 text-silver" />
                  </div>
                  <h2 className="text-xl font-semibold">프로젝트 상세</h2>
                </div>
                <div className="whitespace-pre-line leading-relaxed text-foreground/60">
                  {project.fullDescription}
                </div>
                {project.notionUrl && (
                  <a href={project.notionUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 mt-8 rounded-lg bg-[#39434c] hover:bg-[#0075de] transition-colors">
                    <img src={images.icon_notion} alt="Notion 아이콘" className="w-10 h-10"/>
                    <span className="text-m font-medium text-white">Notion으로 정리했어요!</span>
                  </a>
                )}
              </div>
            )}

            {/* Deliverables Section */}
            <div className="card-glass rounded-xl p-8 mb-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-lg bg-surface-elevated">
                  <Package className="w-5 h-5 text-silver" />
                </div>
                <h2 className="text-xl font-semibold">프로젝트 결과물</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.deliverables.map((item, index) => {
                  // 다운로드
                  if (item.type === "download") {
                    return (
                      <a key={index} href={item.url} download className="group relative rounded-lg bg-surface-elevated overflow-hidden block">
                        <div className="aspect-video bg-surface-glass flex items-center justify-center overflow-hidden">
                          <img src={item.thumbnail} alt={item.name} className="w-full h-full object-cover"/>
                        </div>
                        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Download className="w-6 h-6 text-white" />
                        </div>
                        <div className="p-4 text-center">
                          <span className="text-foreground/6060 tracking-wide group-hover:text-foreground transition-colors">{item.name}</span>
                        </div>
                      </a>
                    );
                  }
                  
                  // 이미지 보기
                  if (item.type === "image") {
                    return (
                      <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="group relative rounded-lg bg-surface-elevated overflow-hidden block">
                        <div className="aspect-video bg-surface-glass flex items-center justify-center overflow-hidden">
                          <img src={item.thumbnail} alt={item.name} className="w-full h-full object-cover"/>
                        </div>
                        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Eye className="w-6 h-6 text-white" />
                        </div>
                        <div className="p-4 text-center">
                          <span className="text-foreground/60 tracking-wide group-hover:text-foreground transition-colors">{item.name}</span>
                        </div>
                      </a>
                    );
                  }
                  
                  // 링크
                  return (
                    <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="group relative rounded-lg bg-surface-elevated overflow-hidden block">
                      <div className="aspect-video bg-surface-glass flex items-center justify-center overflow-hidden">
                        <img src={item.thumbnail} alt={item.name} className="w-full h-full object-cover"/>
                      </div>
                      <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ExternalLink className="w-6 h-6 text-white" />
                      </div>
                      <div className="p-4 text-center">
                        <span className="text-foreground/60 tracking-wide group-hover:text-foreground transition-colors">{item.name}</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Demo Video Section */}
            <div className="card-glass rounded-xl p-8 mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-lg bg-surface-elevated">
                  <Play className="w-5 h-5 text-silver" />
                </div>
                <h2 className="text-xl font-semibold">프로젝트 요약영상</h2>
              </div>
              <div className={`rounded-lg overflow-hidden bg-surface-elevated flex justify-center ${
                project.videoOrientation === 'portrait' 
                  ? 'aspect-[9/16] max-w-md mx-auto' 
                  : 'aspect-video'
              }`}>
                <iframe src={project.demoVideo} title="프로젝트 요약영상" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
              </div>
            </div>

            {/* Technical Documentation Section */}
            {/* <div className="card-glass rounded-xl p-8 mb-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-surface-elevated">
                  <FileText className="w-5 h-5 text-silver" />
                </div>
                <h2 className="text-xl font-semibold">상세 기술 문서</h2>
              </div>
              <a
                href={project.notionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-lg bg-surface-elevated hover:bg-surface-glass transition-colors group"
              >
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  Notion에서 상세 기술 문서 확인하기
                </span>
                <ExternalLink className="w-4 h-4 text-silver-dim group-hover:text-silver transition-colors" />
              </a>
            </div> */}

            
          </div>
        </div>
      </section>
    </Layout>
  );
}
