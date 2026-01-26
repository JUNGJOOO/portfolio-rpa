import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { ExternalLink, BookOpen, Code, Wrench, Lightbulb } from "lucide-react";

const notionLinks = [
  {
    id: 1,
    title: "프로젝트 개요",
    description: "AUTO RPA 프로젝트 소개 및 목표",
    icon: BookOpen,
    url: "https://notion.so/your-page-1",
  },
  {
    id: 2,
    title: "환경 설정",
    description: "개발 환경 구성 가이드",
    icon: Code,
    url: "https://notion.so/your-page-2",
  },
  {
    id: 3,
    title: "시스템 구조",
    description: "전체 시스템 아키텍처 설명",
    icon: Wrench,
    url: "https://notion.so/your-page-3",
  },
  {
    id: 4,
    title: "데이터 흐름",
    description: "데이터 파이프라인 구조",
    icon: Code,
    url: "https://notion.so/your-page-4",
  },
  {
    id: 5,
    title: "웹 스크래핑 모듈",
    description: "데이터 수집 모듈 상세 설명",
    icon: Wrench,
    url: "https://notion.so/your-page-5",
  },
  {
    id: 6,
    title: "모범 사례",
    description: "효율적인 자동화 구현 팁",
    icon: Lightbulb,
    url: "https://notion.so/your-page-6",
  },
];

export default function Docs() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <PageHeader
            title="기술문서"
            subtitle="Notion에서 상세한 기술 문서와 가이드를 확인하세요"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {notionLinks.map((doc, index) => (
              <a
                key={doc.id}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-glass hover-glow rounded-xl overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Area */}
                <div className="relative aspect-[16/9] bg-surface-elevated overflow-hidden flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-foreground/20 group-hover:scale-110 transition-all duration-300">
                    <doc.icon className="w-7 h-7 text-silver" />
                  </div>
                  
                  {/* External Link Badge */}
                  <div className="absolute top-3 right-3 p-2 rounded-lg bg-background/80 backdrop-blur-sm">
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-gradient transition-all line-clamp-1">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {doc.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
