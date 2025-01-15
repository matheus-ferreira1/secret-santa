import { CallToAction } from "./_components/call-to-action";
import Features from "./_components/features";
import Footer from "./_components/footer";
import Header from "./_components/header";
import Hero from "./_components/hero";
import { HowItWorks } from "./_components/how-it-works";
import { Testimonials } from "./_components/testimonials";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/90 via-slate-900 to-emerald-900/90">
      <Header />
      <main className="flex-1 pt-16">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};
