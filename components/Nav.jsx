"use client";
// Importaciones
import Link from "next/link";
import { usePathname } from "next/navigation";

// Links de cada pagina
const links = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Services",
    path: "/services"
  },
  {
    name: "Resume",
    path: "/resume"
  },
  {
    name: "Work",
    path: "/work"
  },
  {
    name: "Contact",
    path: "/contact"
  }
]

const Nav = () => {

  const pathName = usePathname()
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return <Link 
                key={index} 
                href={link.path} 
                className={`${link.path === pathName && "text-accent border-b-2 border-accent"} 
                            capitalize font-medium hover:text-accent transition-all`}
                >{link.name}</Link>
      })}
    </nav>
  )
}

export default Nav