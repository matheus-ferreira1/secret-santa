import Features from "./_components/features";
import Footer from "./_components/footer";
import Header from "./_components/header";
import Hero from "./_components/hero";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
