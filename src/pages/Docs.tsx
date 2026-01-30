import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { ExternalLink, BookOpen, Code, Wrench, Lightbulb } from "lucide-react";
import * as images from '@/assets';

const notionLinks = [
  {
    id: 1,
    title: "[Notion] 블루리본",
    description: "블루리본의 전문가 평가, 대중 평가, 감성 분석을 통합하여 객관적 신뢰도 점수를 자동 산출하는 시스템 구축했습니다.",
    icon: images.icon_notion,
    url: "https://www.notion.so/RPA-2e2f82deb2118005bd18ee2fc3e920e1?source=copy_link",
  },
  {
    id: 2,
    title: "[Notion] 티켓랭킹",
    description: "티켓랭킹 데이터 자동 수집 및 가공 업무 자동화 시스템 구축했습니다.",
    icon: images.icon_notion,
    url: "https://www.notion.so/RPA-2ccf82deb21180618cacc8d93e8ad4e7?source=copy_link",
  },
  {
    id: 3,
    title: "[Notion] 의약품 안전나라",
    description: "의약품 행정처분 정보 모니터링 자동화를 통한 업무 효율화 및 신속하게 대응합니다.",
    icon: images.icon_notion,
    url: "https://www.notion.so/RPA-2d8f82deb21180a8b8d4d8f909d5b4cd?source=copy_link",
  },
];

export default function Docs() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <PageHeader
            title="기술문서"
            subtitle="Notion에서 상세히 정리된 문서를 확인해보세요."
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
                    {typeof doc.icon === 'string' ? (
                      <img src={doc.icon} alt="icon" className="w-8 h-8" />
                    ) : (
                      <doc.icon className="w-7 h-7 text-silver" />
                    )}
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
