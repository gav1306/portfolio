import Link from "next/link";

import Social from "../social/social";
import Navigation from "../navigation/navigation";
import { MainHeading } from "../ui/heading";

const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <MainHeading>
          <Link href="/">Gayatri Patil</Link>
        </MainHeading>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Curious Frontend Developer 🚀
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          Frontend developer building complex and high-performance web
          applications.
        </p>
        <Navigation />
      </div>
      <Social className="ml-1 mt-8 flex items-center" />
    </header>
  );
};

export default Header;
