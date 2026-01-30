import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Phone, Mail, MapPin, GraduationCap, Award } from "lucide-react";

const educationData = [
  {
    period: "2025. 08 ~ 2025. 11",
    title: "AI자동화:RPA 솔루션 개발자 양성과정",
    institution: "강서여성인력개발센터",
  },
  {
    period: "2018. 03 ~ 2018. 07",
    title: "웹 퍼블리셔 교육",
    institution: "봄 디자인 학원",
  },
  {
    period: "2017. 10 ~ 2018. 03",
    title: "UI/UX 모바일 웹 디자이너 교육",
    institution: "봄 디자인 학원",
  },
];

const certificationData = [
  {
    date: "2025. 12",
    title: "AICE Basic",
    institution: "KT 및 한국경제신문",
  },
  {
    date: "2025. 06",
    title: "웹디자인개발기능사",
    institution: "한국산업인력공단",
  },
  {
    date: "2016. 12",
    title: "GTQ 1급",
    institution: "한국생산성본부",
  },
  {
    date: "2012. 11",
    title: "1종보통운전면허",
    institution: "경찰청(운전면허시험관리단)",
  },
];

export default function Profile() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16">
        <PageHeader 
          title="프로필" 
          subtitle=""
        />

        <div className="max-w-4xl mx-auto space-y-12">
          {/* 자기소개 섹션 */}
          <section className="card-glass rounded-2xl p-6 md:p-8 animate-fade-in">
            <h2 className="text-lg md:text-xl font-semibold text-foreground mb-6">
              안녕하세요. RPA 개발자에 지원하는 이정주입니다.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                웹 퍼블리셔 경력을 쌓으며 수백 페이지의 반복적인 코드 수정 작업을 하면서 자연스럽게 '자동화'에 대한 필요성을 느꼈습니다. 그러던 중 RPA라는 분야를 알게 되었고, 이 기술이 단순 반복 업무를 넘어 API 연동, 데이터 처리, 프로세스 최적화까지 가능하다는 점에서 큰 매력을 느꼈습니다.
              </p>
              <p>
                RPA 교육을 수료하며 UiPath & Power Automate를 기반으로 다양한 자동화 프로젝트를 진행했습니다. 외부 API를 연동한 블루리본 평가 분석 시스템, REFramework 기반의 티켓랭킹 데이터 수집 자동화 등 가상 시나리오 기반 프로젝트 솔루션들을 구현했습니다. 또한 Google Sheets를 활용한 대시보드 사이트 구축을 통해 자동화 데이터를 효과적으로 시각화하는 경험도 쌓았습니다.
              </p>
              <p>
                웹 퍼블리싱 경력을 통해 기획자, 디자이너, 개발자 사이에서 요구사항을 정확히 이해하고 조율하는 능력을 길렀으며, 300여 개 사이트를 단독으로 관리하며 책임감과 문제 해결 능력을 키웠습니다. 이러한 경험은 RPA 개발자로서 업무 프로세스를 이해하고 최적의 자동화 솔루션을 제안하는 데 강점이 될 것입니다.
              </p>
              <p>
                새로운 분야에 대한 도전이지만, 다년간의 실무 경험에서 쌓은 적응력과 문제 해결 능력을 바탕으로 빠르게 성장하며 팀에 기여하는 실무형 RPA 개발자가 되겠습니다.
              </p>
            </div>
          </section>

          {/* 연락처 섹션 */}
          <section className="card-glass rounded-2xl p-6 md:p-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">
              연락처
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-surface-elevated rounded-xl">
                <Phone className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">휴대폰</p>
                  <p className="text-foreground font-medium">010-2736-6771</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-surface-elevated rounded-xl">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">jjeeell48@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-surface-elevated rounded-xl">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">주소</p>
                  <p className="text-foreground font-medium">서울시 구로구 항동</p>
                </div>
              </div>
            </div>
          </section>

          {/* 교육 섹션 */}
          <section className="card-glass rounded-2xl p-6 md:p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6" />
              교육
            </h2>
            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <div 
                  key={index}
                  className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 p-4 bg-surface-elevated rounded-xl"
                >
                  <span className="text-sm text-muted-foreground font-mono min-w-[140px]">
                    {edu.period}
                  </span>
                  <div className="flex-1">
                    <p className="text-foreground font-medium">{edu.title}</p>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 자격증 섹션 */}
          <section className="card-glass rounded-2xl p-6 md:p-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
              <Award className="w-6 h-6" />
              자격증
            </h2>
            <div className="space-y-4">
              {certificationData.map((cert, index) => (
                <div 
                  key={index}
                  className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 p-4 bg-surface-elevated rounded-xl"
                >
                  <span className="text-sm text-muted-foreground font-mono min-w-[140px]">
                    {cert.date}
                  </span>
                  <div className="flex-1">
                    <p className="text-foreground font-medium">{cert.title}</p>
                    <p className="text-sm text-muted-foreground">{cert.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
