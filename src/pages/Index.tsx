import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import heroImage from "@/assets/hero-robot.png";
import { ArrowRight, Cpu, FileText, Play, User, Mail, Github, Linkedin } from "lucide-react";

const techStacks = [
  { category: "자동화", items: ["Python", "Selenium", "Playwright", "UiPath"] },
  { category: "데이터", items: ["Pandas", "SQL", "MongoDB", "Redis"] },
  { category: "백엔드", items: ["FastAPI", "Node.js", "Docker", "AWS"] },
  { category: "협업", items: ["Git", "Jira", "Notion", "Slack"] },
];

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

      {/* Profile Section */}
      <section className="py-20 border-t border-border/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Profile Info */}
              <div className="animate-slide-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-surface-elevated">
                    <User className="w-6 h-6 text-silver" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-gradient">About Me</h2>
                </div>
                
                <div className="card-glass rounded-xl p-8">
                  <h3 className="text-2xl font-semibold mb-2">홍길동</h3>
                  <p className="text-silver mb-4">RPA Developer & Automation Engineer</p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    5년차 RPA 개발자로서 업무 자동화 솔루션을 설계하고 구현합니다. 
                    반복적인 업무를 자동화하여 생산성을 높이고, 인적 오류를 줄이는 것을 목표로 합니다.
                    Python과 다양한 자동화 도구를 활용하여 웹 스크래핑, 문서 자동화, 
                    데이터 파이프라인 구축 등의 프로젝트를 수행해왔습니다.
                  </p>

                  {/* Contact Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href="mailto:example@email.com"
                      className="p-3 rounded-lg bg-surface-elevated hover:bg-accent transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5 text-silver hover:text-foreground transition-colors" />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-surface-elevated hover:bg-accent transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5 text-silver hover:text-foreground transition-colors" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-surface-elevated hover:bg-accent transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-silver hover:text-foreground transition-colors" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-surface-elevated">
                    <Cpu className="w-6 h-6 text-silver" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-gradient">Tech Stack</h2>
                </div>

                <div className="space-y-4">
                  {techStacks.map((stack) => (
                    <div key={stack.category} className="card-glass rounded-xl p-5">
                      <h4 className="text-sm font-medium text-silver mb-3">{stack.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {stack.items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1.5 text-sm rounded-lg bg-surface-elevated border border-border/50 text-foreground hover:border-silver/50 transition-colors"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
