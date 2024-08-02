import Header from "@/components/header/header";
import About from "@/components/about/about";
import Projects from "@/components/projects/projects";
import Footer from "@/components/footer/footer";

const Home = () => {
  return (
    <>
      <Header />
      <main className="pt-24 lg:w-1/2 lg:py-24">
        <About />
        <Projects />
        <Footer />
      </main>
    </>
  );
};

export default Home;
