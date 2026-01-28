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
          subtitle="RPA 개발자를 꿈꾸는 홍길동입니다"
        />

        <div className="max-w-4xl mx-auto space-y-12">
          {/* 자기소개 섹션 */}
          <section className="card-glass rounded-2xl p-6 md:p-8 animate-fade-in">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">
              자기소개
            </h2>
            <p className="text-lg md:text-xl font-semibold text-foreground mb-6">
              안녕하세요. RPA 개발자에 지원하는 <span className="text-gradient">홍길동</span>입니다.
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                저는 적극적인 자세와 도전정신으로 삶을 개척하며 성장해왔습니다. 진로를 결정할 때 저의 적성과 성향을 고려하여 전공을 선택하고, 그 분야에서 지식을 강화했습니다. 이후 웹퍼블리셔에 대한 관심이 생기자, 망설이지 않고 해당 분야로 진출하여 다양한 경험을 쌓았습니다. 이러한 과정들을 통해 효율적으로 시간을 보내며 자신의 길을 찾아갔고, 앞으로도 적극적으로 성과를 내며 성장할 것입니다.
              </p>
              <p>
                또한, 저는 세밀한 관찰력과 상대방을 이해하려는 성격을 가지고 있습니다. 사소한 부분까지 놓치지 않으며, 대학과 업무에서 디테일을 통해 차별화된 성과를 이뤄냈습니다. 포용력과 유연한 사고로 사람들과 원만한 관계를 유지하며 갈등을 최소화했습니다.
              </p>
              <p>
                다만, 자신에게 엄격한 성격으로 예민해질 때가 있어 이를 극복하기 위해 스스로를 격려하고 긍정적인 면에 집중하려 노력하고 있습니다. 저는 기업의 가치와 목표에 공감하며 의미 있는 일을 하고자 합니다. 웹퍼블리셔로서 능력을 인정받아 회사 성장에 기여하고, 입사 후에는 팀원들과 협력하여 유기적으로 성과를 창출하며 빠르게 핵심 인재로 자리잡겠습니다.
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
                  <p className="text-foreground font-medium">010-0000-0000</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-surface-elevated rounded-xl">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">abcd@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-surface-elevated rounded-xl">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">주소</p>
                  <p className="text-foreground font-medium">서울시 중구 항동</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certificationData.map((cert, index) => (
                <div 
                  key={index}
                  className="flex flex-col gap-1 p-4 bg-surface-elevated rounded-xl"
                >
                  <span className="text-sm text-muted-foreground font-mono">
                    {cert.date}
                  </span>
                  <p className="text-foreground font-medium">{cert.title}</p>
                  <p className="text-sm text-muted-foreground">{cert.institution}</p>
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
