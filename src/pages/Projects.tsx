import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { ExternalLink, Github } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "자동 데이터 수집 시스템",
    description: "웹 스크래핑 기반의 자동화된 데이터 수집 및 정제 파이프라인",
    tags: ["Python", "Selenium", "MongoDB"],
    status: "완료",
  },
  {
    id: 2,
    title: "문서 자동화 봇",
    description: "엑셀 및 PDF 문서를 자동으로 생성하고 이메일 발송하는 RPA 솔루션",
    tags: ["UiPath", "VBA", "Outlook API"],
    status: "완료",
  },
  {
    id: 3,
    title: "실시간 모니터링 대시보드",
    description: "자동화 프로세스의 실시간 상태 모니터링 및 알림 시스템",
    tags: ["React", "Node.js", "WebSocket"],
    status: "진행중",
  },
  {
    id: 4,
    title: "AI 기반 이상 탐지",
    description: "머신러닝을 활용한 업무 프로세스 이상 패턴 자동 감지",
    tags: ["TensorFlow", "Python", "Kafka"],
    status: "계획중",
  },
];

export default function Projects() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <PageHeader
            title="프로젝트"
            subtitle="자동화와 효율성을 추구하는 다양한 RPA 프로젝트들"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <Link
                to={`/projects/${project.id}`}
                key={project.id}
                className="card-glass hover-glow rounded-xl p-8 animate-slide-up block transition-transform hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-end mb-4">
                  <div className="flex gap-2">
                    <span className="p-2 rounded-lg bg-surface-elevated text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="w-4 h-4" />
                    </span>
                    <span className="p-2 rounded-lg bg-surface-elevated text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-lg bg-surface-elevated text-silver-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
