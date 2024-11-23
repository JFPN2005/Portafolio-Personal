"use client"
// Importaciones
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";


// Servicios
const services = [
  {
    num: "01",
    title: "Wev Development",
    description: "Boost your brand with a professional website that attracts and converts. Custom solutions with exceptional design and performance. Inspire trust and achieve results.",
    href: "/contact"
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: " Connect with your users through intuitive and attractive design. Interfaces that guide and captivate, turning ideas into impactful visual experiences.",
    href: "/contact"
  },
  {
    num: "03",
    title: "Business Intelligence",
    description: "Optimize your management with data analysis and handling systems. Make strategic decisions with in-depth analysis that turns data into opportunities.",
    href: "/contact"
  },
  {
    num: "04",
    title: "SEO",
    description: "Stand out in top results and attract qualified traffic. Strategies that optimize your visibility and position you ahead of the competition.",
    href: "/contact"
  }
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto ">
        <motion.div 
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0, transition: {delay: 1.8, duration: 0.4, ease: "easeIn"}}}
          className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div 
                key={index} 
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link 
                    href={service.href}
                    className="w-[60px] h-[60px] rounded-full bg-black group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-3xl text-primary"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-black group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-black/80">{service.description}</p>
                <div className="border-b border-gray-500 w-full mt-auto"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services