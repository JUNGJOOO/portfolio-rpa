import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ArrowLeft, Calendar, Tag, Play, FileText, Package, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "자동 데이터 수집 시스템",
    description: "웹 스크래핑 기반의 자동화된 데이터 수집 및 정제 파이프라인",
    fullDescription: `웹 스크래핑 기술을 활용하여 다양한 소스에서 데이터를 자동으로 수집하고, 
    정제하여 분석 가능한 형태로 변환하는 파이프라인입니다. 
    
    주요 기능:
    • 다중 웹사이트 동시 크롤링
    • 데이터 정제 및 표준화
    • MongoDB를 활용한 데이터 저장
    • 스케줄러를 통한 주기적 실행
    • 에러 핸들링 및 재시도 로직`,
    tags: ["Python", "Selenium", "MongoDB"],
    date: "2024.01 - 2024.03",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    docsUrl: "https://notion.so/example-docs-1",
    deliverables: [
      { name: "대시보드", url: "https://example.com/dashboard" },
      { name: "구글시트", url: "https://docs.google.com/spreadsheets" },
      { name: "엑셀파일", url: "https://example.com/excel" },
    ],
  },
  {
    id: 2,
    title: "문서 자동화 봇",
    description: "엑셀 및 PDF 문서를 자동으로 생성하고 이메일 발송하는 RPA 솔루션",
    fullDescription: `반복적인 문서 작업을 자동화하여 업무 효율성을 극대화하는 RPA 솔루션입니다.
    
    주요 기능:
    • 엑셀 데이터 자동 처리 및 리포트 생성
    • PDF 문서 자동 생성
    • Outlook을 통한 자동 이메일 발송
    • 템플릿 기반 문서 생성
    • 작업 로그 및 이력 관리`,
    tags: ["UiPath", "VBA", "Outlook API"],
    date: "2023.10 - 2023.12",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    docsUrl: "https://notion.so/example-docs-2",
    deliverables: [
      { name: "UiPath 워크플로우", url: "https://example.com/uipath" },
      { name: "VBA 매크로", url: "https://example.com/vba" },
      { name: "문서 템플릿", url: "https://example.com/template" },
    ],
  },
  {
    id: 3,
    title: "실시간 모니터링 대시보드",
    description: "자동화 프로세스의 실시간 상태 모니터링 및 알림 시스템",
    fullDescription: `자동화 프로세스의 실행 상태를 실시간으로 모니터링하고, 
    이상 상황 발생 시 즉시 알림을 전송하는 대시보드입니다.
    
    주요 기능:
    • 실시간 프로세스 상태 모니터링
    • WebSocket 기반 실시간 데이터 업데이트
    • 슬랙/이메일 알림 연동
    • 성능 지표 시각화
    • 이력 조회 및 분석`,
    tags: ["React", "Node.js", "WebSocket"],
    date: "2024.06 - 현재",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    docsUrl: "https://notion.so/example-docs-3",
    deliverables: [
      { name: "React 대시보드", url: "https://example.com/react-dashboard" },
      { name: "Node.js API 서버", url: "https://example.com/nodejs-api" },
      { name: "알림 시스템", url: "https://example.com/notification" },
    ],
  },
  {
    id: 4,
    title: "AI 기반 이상 탐지",
    description: "머신러닝을 활용한 업무 프로세스 이상 패턴 자동 감지",
    fullDescription: `머신러닝 알고리즘을 활용하여 업무 프로세스에서 발생하는 
    이상 패턴을 자동으로 감지하고 대응하는 시스템입니다.
    
    주요 기능:
    • 시계열 데이터 분석
    • 이상 패턴 자동 감지
    • 실시간 스트림 처리 (Kafka)
    • 예측 모델 학습 및 배포
    • 대시보드 연동`,
    tags: ["TensorFlow", "Python", "Kafka"],
    date: "2024.09 - 예정",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    docsUrl: "https://notion.so/example-docs-4",
    deliverables: [
      { name: "ML 모델", url: "https://example.com/ml-model" },
      { name: "Kafka 스트림 처리기", url: "https://example.com/kafka" },
      { name: "예측 API", url: "https://example.com/predict-api" },
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
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-silver-dim hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              프로젝트 목록
            </Link>

            {/* Header */}
            <div className="card-glass rounded-xl p-8 mb-8 animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient">
                  {project.title}
                </h1>
                <a
                  href={project.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-elevated hover:bg-surface-glass text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  <span className="text-sm font-medium">Notion</span>
                </a>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-silver-dim">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{project.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-surface-elevated text-silver-dim"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="card-glass rounded-xl p-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-xl font-semibold mb-4">프로젝트 상세</h2>
              <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                {project.fullDescription}
              </div>
            </div>

            {/* Demo Video Section */}
            <div className="card-glass rounded-xl p-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-surface-elevated">
                  <Play className="w-5 h-5 text-silver" />
                </div>
                <h2 className="text-xl font-semibold">프로젝트 시연영상</h2>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden bg-surface-elevated">
                <iframe
                  src={project.demoVideo}
                  title="프로젝트 시연영상"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Technical Documentation Section */}
            <div className="card-glass rounded-xl p-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-surface-elevated">
                  <FileText className="w-5 h-5 text-silver" />
                </div>
                <h2 className="text-xl font-semibold">상세 기술 문서</h2>
              </div>
              <a
                href={project.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-lg bg-surface-elevated hover:bg-surface-glass transition-colors group"
              >
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  Notion에서 상세 기술 문서 확인하기
                </span>
                <ExternalLink className="w-4 h-4 text-silver-dim group-hover:text-silver transition-colors" />
              </a>
            </div>

            {/* Deliverables Section */}
            <div className="card-glass rounded-xl p-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-surface-elevated">
                  <Package className="w-5 h-5 text-silver" />
                </div>
                <h2 className="text-xl font-semibold">프로젝트 결과물</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.deliverables.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative rounded-lg bg-surface-elevated overflow-hidden block"
                  >
                    <div className="aspect-video bg-surface-glass flex items-center justify-center">
                      <span className="text-4xl text-muted-foreground">📊</span>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                    <div className="p-4 text-center">
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item.name}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
