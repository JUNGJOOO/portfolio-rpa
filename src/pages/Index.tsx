import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SplineViewer } from "@/components/SplineViewer";
import { ArrowRight, Cpu, FileText, Play } from "lucide-react";

const Index = () => {
  return (
    <div className="h-screen overflow-hidden bg-background flex flex-col">
      <Navigation />
      
      {/* Full Height Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-between pt-16 pb-6 px-6 overflow-hidden">
        {/* Hero Text - Top */}
        <div className="text-center pt-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient mb-2">
            내일의 업무 방식을 설계합니다
          </h1>
          <p className="text-lg text-muted-foreground">이정주 포트폴리오</p>
        </div>

        {/* Spline 3D Viewer - Center */}
        <div className="flex-1 flex items-center justify-center w-full max-h-[50vh] animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <SplineViewer />
        </div>

        {/* Featured Projects - Bottom */}
        <div className="w-full max-w-5xl animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <NavCard
              to="/projects/1"
              icon={<Cpu className="w-5 h-5" />}
              title="자동 데이터 수집 시스템"
              description="웹 스크래핑 기반 자동화 파이프라인"
            />
            <NavCard
              to="/projects/2"
              icon={<FileText className="w-5 h-5" />}
              title="문서 자동화 봇"
              description="엑셀/PDF 문서 자동 생성 솔루션"
            />
            <NavCard
              to="/projects/3"
              icon={<Play className="w-5 h-5" />}
              title="실시간 모니터링 대시보드"
              description="프로세스 상태 모니터링 시스템"
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
}

function NavCard({ to, icon, title, description }: NavCardProps) {
  return (
    <Link
      to={to}
      className="group card-glass hover-glow rounded-xl p-5 flex flex-col items-start transition-all duration-300"
    >
      <h3 className="text-base font-semibold mb-1 group-hover:text-gradient transition-all">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <div className="flex items-center text-sm text-silver-dim group-hover:text-silver transition-colors">
        자세히 보기
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}

export default Index;
