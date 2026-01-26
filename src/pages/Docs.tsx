import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { ExternalLink, FileText, BookOpen, Code, Wrench, Lightbulb } from "lucide-react";

const notionLinks = [
  {
    id: 1,
    title: "시작하기",
    icon: BookOpen,
    docs: [
      { title: "프로젝트 개요", description: "AUTO RPA 프로젝트 소개 및 목표", url: "https://notion.so/your-page-1" },
      { title: "환경 설정", description: "개발 환경 구성 가이드", url: "https://notion.so/your-page-2" },
      { title: "퀵 스타트", description: "빠른 시작을 위한 튜토리얼", url: "https://notion.so/your-page-3" },
    ],
  },
  {
    id: 2,
    title: "아키텍처",
    icon: Code,
    docs: [
      { title: "시스템 구조", description: "전체 시스템 아키텍처 설명", url: "https://notion.so/your-page-4" },
      { title: "데이터 흐름", description: "데이터 파이프라인 구조", url: "https://notion.so/your-page-5" },
      { title: "보안 설계", description: "보안 고려사항 및 구현", url: "https://notion.so/your-page-6" },
    ],
  },
  {
    id: 3,
    title: "구현 가이드",
    icon: Wrench,
    docs: [
      { title: "웹 스크래핑 모듈", description: "데이터 수집 모듈 상세 설명", url: "https://notion.so/your-page-7" },
      { title: "문서 자동화", description: "문서 생성 및 처리 가이드", url: "https://notion.so/your-page-8" },
      { title: "API 연동", description: "외부 서비스 연동 방법", url: "https://notion.so/your-page-9" },
    ],
  },
  {
    id: 4,
    title: "모범 사례",
    icon: Lightbulb,
    docs: [
      { title: "에러 처리 전략", description: "안정적인 자동화를 위한 예외 처리", url: "https://notion.so/your-page-10" },
      { title: "성능 최적화", description: "효율적인 자동화 구현 팁", url: "https://notion.so/your-page-11" },
      { title: "유지보수 가이드", description: "장기 운영을 위한 관리 방법", url: "https://notion.so/your-page-12" },
    ],
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

          <div className="max-w-4xl mx-auto space-y-8">
            {notionLinks.map((category, categoryIndex) => (
              <div
                key={category.id}
                className="animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-surface-elevated">
                    <category.icon className="w-5 h-5 text-silver" />
                  </div>
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </div>

                {/* Documents List */}
                <div className="card-glass rounded-xl overflow-hidden">
                  {category.docs.map((doc, docIndex) => (
                    <a
                      key={doc.title}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center justify-between p-5 hover:bg-surface-elevated/50 transition-colors ${
                        docIndex !== category.docs.length - 1 ? "border-b border-border/50" : ""
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-surface-glass">
                          <FileText className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1 group-hover:text-gradient transition-all">
                            {doc.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {doc.description}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:scale-110 transition-all" />
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {/* Notion Info */}
            <div className="card-glass rounded-xl p-6 text-center animate-fade-in">
              <p className="text-muted-foreground">
                모든 문서는 Notion에서 관리됩니다. 클릭하면 해당 Notion 페이지로 이동합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
