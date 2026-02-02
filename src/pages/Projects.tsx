import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { ExternalLink, Github } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "블루리본",
    description: "블루리본의 전문가 평가, 대중 평가, 감성 분석을 통합하여 객관적 신뢰도 점수를 자동 산출하는 시스템 구축했습니다.",
    tags: [
      { name: "UiPath", color: "bg-blue-500/20 text-blue-400" },
      { name: "API", color: "bg-surface-elevated text-silver-dim" },
      { name: "Google Sheets 연동", color: "bg-surface-elevated text-silver-dim" },
      { name: "Excel/Mail 자동화", color: "bg-surface-elevated text-silver-dim" },
    ],
    links: [
      { url: "https://jungjooo.github.io/rpa-blueribbon", icon: Github  },
    ],
    status: "완료",
  },
  {
    id: 2,
    title: "티켓랭킹",
    description: "티켓랭킹 데이터 자동 수집 및 가공 업무 자동화 시스템 구축했습니다.",
    tags: [
      { name: "UiPath", color: "bg-blue-500/20 text-blue-400" },
      { name: "스크래핑", color: "bg-surface-elevated text-silver-dim" },
      { name: "Excel/Mail 자동화", color: "bg-surface-elevated text-silver-dim" },
      { name: "데이터 가공", color: "bg-surface-elevated text-silver-dim" },
    ],
    links: [
    ],
    status: "완료",
  },
  {
    id: 3,
    title: "의약품 안전나라",
    description: "의약품 행정처분 정보 모니터링 자동화를 통한 업무 효율화 및 신속하게 대응합니다.",
    tags: [
      { name: "UiPath", color: "bg-blue-500/20 text-blue-400" },
      { name: "스크래핑", color: "bg-surface-elevated text-silver-dim" },
      { name: "Excel/Mail 자동화", color: "bg-surface-elevated text-silver-dim" },
      { name: "데이터 가공", color: "bg-surface-elevated text-silver-dim" },
    ],
    links: [
    ],
    status: "완료",
  },
  {
    id: 4,
    title: "서울문화행사",
    description: "웹 스크래핑 기반 서울문화행사의 기간·조건 필터 기반 검색 대시보드 구축했습니다.",
    tags: [
      { name: "Power Automate", color: "bg-green-500/20 text-green-400" },
      { name: "FTP 업로드 자동화", color: "bg-surface-elevated text-silver-dim" },
      { name: "대시보드 페이지", color: "bg-surface-elevated text-silver-dim" },
    ],
    links: [
      { url: "https://rpajury.mycafe24.com/Project1/index.html", icon: ExternalLink },
    ],
    status: "완료",
  },
];

export default function Projects() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <PageHeader title="프로젝트" subtitle="가상 시나리오를 기반 RPA 역량 강화 프로젝트"/>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <Link to={`/projects/${project.id}`} key={project.id} className="card-glass hover-glow rounded-xl p-8 animate-slide-up block transition-transform hover:scale-[1.02]" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.links.map((link, idx) => (
                      <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 rounded-lg bg-surface-elevated text-muted-foreground hover:bg-blue-500 hover:text-white transition-colors">
                        <link.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag.name} className={`text-xs px-3 py-1.5 rounded-lg ${tag.color}`}>
                      {tag.name}
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
