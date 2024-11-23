// Importaciones
import Link from "next/link";
import { Button } from "./ui/button";

// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
  <header className="py-8 xl:p-12 text-black">
    <div className="container mx-auto flex justify-between items-center">

      {/* Logo */}
      <Link href="/">
        <h1 className="text-4xl font-semibold">
          Javier<span className="text-accent">.</span>
        </h1>
      </Link>

      {/* Dekstop Nav && hire me button*/}
      <div className="hidden lg:flex items-center gap-8">
        <Nav />
        <Link href='/contact'>
          <Button>
            Hire me
          </Button>
        </Link>
      </div>

      {/* Mobile Nav */}
      <div className="lg:hidden">
        <MobileNav />
      </div>
      
    </div>
  </header>)
}

export default Header