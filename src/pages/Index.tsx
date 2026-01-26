import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import heroImage from "@/assets/hero-robot.png";
import { ArrowRight, Cpu, FileText, Play } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-r from-transparent via-surface-glass to-transparent blur-3xl opacity-20" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Hero Image with embedded text */}
            <div className="relative w-full max-w-5xl animate-fade-in">
              <img
                src={heroImage}
                alt="AUTO RPA Robot"
                className="w-full h-auto"
              />
            </div>

            {/* Navigation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-4xl animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <NavCard
                to="/projects"
                icon={<Cpu className="w-6 h-6" />}
                title="프로젝트"
                description="자동화 프로젝트 살펴보기"
              />
              <NavCard
                to="/demos"
                icon={<Play className="w-6 h-6" />}
                title="시연영상"
                description="실제 작동 영상 확인"
              />
              <NavCard
                to="/docs"
                icon={<FileText className="w-6 h-6" />}
                title="기술문서"
                description="상세 기술 문서 보기"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
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
      className="group card-glass hover-glow rounded-xl p-6 flex flex-col items-start transition-all duration-300"
    >
      <div className="p-3 rounded-lg bg-surface-elevated mb-4 text-silver group-hover:text-foreground transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-gradient transition-all">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <div className="flex items-center text-sm text-silver-dim group-hover:text-silver transition-colors">
        자세히 보기
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}

export default Index;
