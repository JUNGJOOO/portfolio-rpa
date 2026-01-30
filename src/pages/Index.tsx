import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SplineViewer } from "@/components/SplineViewer";
import { ArrowRight, Cpu, FileText, Play } from "lucide-react";

const Index = () => {
  return (
    <div className="h-screen overflow-hidden bg-background flex flex-col">
      <Navigation />
      
      {/* Full Height Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center pt-16 pb-4 md:pb-6 px-4 md:px-6 overflow-hidden">
        {/* Hero Text - Top */}
        <div className="text-center animate-fade-in mt-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient mb-1 md:mb-2">
            내일의 업무 방식을 설계합니다
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground">이정주 포트폴리오</p>
        </div>

        {/* Spline 3D Viewer - Center */}
        <div className="flex-1 flex items-center justify-center w-full max-h-[35vh] sm:max-h-[40vh] md:max-h-[45vh] lg:max-h-[60vh] animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <SplineViewer />
        </div>

        {/* Featured Projects - Bottom */}
        <div className="w-full max-w-5xl animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            <NavCard
              to="/projects/1"
              icon={<Cpu className="w-4 h-4 md:w-5 md:h-5" />}
              title="블루리본"
              description="교차분석을 통한 신뢰도 점수 산출/사이트 구축"
            />
            <NavCard
              to="/projects/2"
              icon={<FileText className="w-4 h-4 md:w-5 md:h-5" />}
              title="티켓랭킹"
              description="웹 스크래핑 기반 자동화 엑셀/메일 자동생성"
            />
            <NavCard
              to="/projects/3"
              icon={<Play className="w-4 h-4 md:w-5 md:h-5" />}
              title="서울문화포털"
              description="기간·조건 필터 기반 검색 대시보드 구축"
              className="sm:col-span-2 lg:col-span-1"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface NavCardProps {
  to: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

function NavCard({ to, icon, title, description, className }: NavCardProps) {
  return (
    <Link
      to={to}
      className={`group card-glass hover-glow rounded-xl p-4 md:p-5 flex flex-col items-start transition-all duration-300 ${className || ""}`}
    >
      <h3 className="text-sm md:text-base font-semibold mb-1 group-hover:text-gradient transition-all">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">{description}</p>
      <div className="flex items-center text-xs md:text-sm text-silver-dim group-hover:text-silver transition-colors">
        자세히 보기
        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}

export default Index;
