import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Play, Clock, Eye, PlayCircle } from "lucide-react";
import * as images from '@/assets';

const demos = [
  {
    id: 1,
    title: "블루리본 전문가·대중 평가 교차 분석",
    description: "블루리본의 전문가 평가, 대중 평가, 감성 분석을 통합하여 객관적 신뢰도 점수를 자동 산출하는 시스템 구축했습니다.",
    duration: "1:56",
    views: "23",
    thumbnail: images.blue_thumbnail,
    youtubeUrl: "https://youtu.be/G2S5LTyEDE0",
  },
  {
    id: 2,
    title: "티켓랭킹",
    description: "티켓랭킹 데이터 자동 수집 및 가공 업무 자동화 시스템 구축했습니다.",
    duration: "1:02",
    views: "20",
    thumbnail: images.ticket_thumbnail,
    youtubeUrl: "https://youtube.com/shorts/3pogLgrxgjI?feature=share",
    imagePosition: 'object-top',  // ← 위쪽 정렬
  },
  {
    id: 3,
    title: "의약품 안전나라",
    description: "의약품 행정처분 정보 모니터링 자동화를 통한 업무 효율화 및 신속하게 대응합니다.",
    duration: "1:04",
    views: "15",
    thumbnail: images.medicine_thumbnail,
    youtubeUrl: "https://youtube.com/shorts/ou7SnBa3R6I?feature=share",
    imagePosition: 'object-top',  // ← 위쪽 정렬
  },
  {
    id: 4,
    title: "서울문화행사",
    description: "웹 스크래핑 기반 서울문화행사의 기간·조건 필터 기반 검색 대시보드 구축했습니다.",
    duration: "2:05",
    views: "16",
    thumbnail: images.seoul_thumbnail,
    youtubeUrl: "https://youtu.be/ZjqxeK2xXGk",
  },
  {
    id: 5,
    title: "날씨 브리핑",
    description: "[실제사용] 오전 7시에 자동 발송되는 구로구 1시간 단위 날씨 브리핑 자동화 시스템을 구축했습니다.",
    duration: "0:53",
    views: "2",
    thumbnail: images.weather_thumbnail,
    youtubeUrl: "https://youtu.be/sD3GvHjxJS4",
  },
];

export default function Demos() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <PageHeader title="요약영상" subtitle="자동화 프로젝트의 실제 실행 흐름을 담은 요약영상을 확인하세요"/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {demos.map((demo, index) => (
              <a key={demo.id} href={demo.youtubeUrl} target="_blank" rel="noopener noreferrer" className="card-glass hover-glow rounded-xl overflow-hidden animate-slide-up cursor-pointer block" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Thumbnail */}
                <div className="relative aspect-video bg-surface-elevated overflow-hidden">
                  {/* 썸네일 이미지 추가 */}
                  <img src={demo.thumbnail} alt={demo.title}className={`w-full h-full object-cover ${demo.imagePosition || ''}`}/>
                  <div className="absolute inset-0 flex items-center justify-center">
                      <img src={images.icon_play} alt="로고" className="h-10" />
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-background/80 backdrop-blur-sm text-xs font-medium">
                    {demo.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 border-t">
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
              </a>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
}
