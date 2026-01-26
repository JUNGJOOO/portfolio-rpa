import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Play, Clock, Eye } from "lucide-react";

const demos = [
  {
    id: 1,
    title: "데이터 수집 자동화 시연",
    description: "웹사이트에서 데이터를 자동으로 수집하는 과정을 보여줍니다",
    duration: "3:42",
    views: "1.2K",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 2,
    title: "문서 생성 자동화",
    description: "템플릿 기반 보고서 자동 생성 및 배포 프로세스",
    duration: "5:15",
    views: "892",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 3,
    title: "이메일 자동 분류 시스템",
    description: "AI를 활용한 이메일 자동 분류 및 응답 시스템",
    duration: "4:28",
    views: "756",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 4,
    title: "실시간 모니터링 대시보드",
    description: "자동화 프로세스 모니터링 화면 데모",
    duration: "2:55",
    views: "1.5K",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 5,
    title: "에러 핸들링 및 복구",
    description: "자동화 중 발생하는 예외 상황 처리 방법",
    duration: "6:10",
    views: "623",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 6,
    title: "스케줄링 및 트리거 설정",
    description: "자동화 작업 스케줄 설정 및 이벤트 트리거 구성",
    duration: "4:45",
    views: "512",
    thumbnail: "/placeholder.svg",
  },
];

export default function Demos() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <PageHeader
            title="시연영상"
            subtitle="자동화 프로젝트의 실제 작동 과정을 확인하세요"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {demos.map((demo, index) => (
              <div
                key={demo.id}
                className="group card-glass hover-glow rounded-xl overflow-hidden animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-surface-elevated overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-foreground/20 group-hover:scale-110 transition-all duration-300">
                      <Play className="w-6 h-6 text-foreground ml-1" />
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-background/80 backdrop-blur-sm text-xs font-medium">
                    {demo.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-gradient transition-all line-clamp-1">
                    {demo.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {demo.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-silver-dim">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{demo.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{demo.views} views</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
