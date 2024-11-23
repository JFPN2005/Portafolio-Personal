"use client";
// Importaciones
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

// Proyectos
const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "GuitarLA",
    description: "The online store dedicated to guitar enthusiasts. Here you can explore a selection of high-quality guitars, essential accessories and equipment for musicians of all levels. Enjoy a user-friendly interface, with intuitive navigation and an attractive design, specially programmed for a fluid and modern user experience.",
    stack: [
      { name: "Tailwind" },
      { name: "React" }
    ],
    image: "/assets/work/imageGuitarLA.png",
    live: "https://capable-marigold-6de1a7.netlify.app/",
    github: ""
  },
  {
    num: "02",
    category: "Frontend",
    title: "VetManagerPro",
    description: "The ideal app to manage and organize dog care in your veterinary clinic. With VetAdminPro, you can easily view, record and update information for each dog, including health data, visit history, vaccinations and treatments.",
    stack: [
      { name: "Tailwind" },
      { name: "React" }
    ],
    image: "/assets/work/imageVetManagerPro.png",
    live: "https://voluble-granita-d87d8a.netlify.app/",
    github: ""
  },
  {
    num: "03",
    category: "FullStack",
    title: "BlockVault",
    description: "The perfect tool to track and quote your favorite cryptocurrencies in real-time. BlockVault allows users to check up-to-date prices for major cryptocurrencies, view trend charts, and make comparisons between coins quickly and easily.",
    stack: [
      { name: "Tailwind" },
      { name: "React" },
      { name: "REST-API" }
    ],
    image: "/assets/work/imageBlockVault.png",
    live: "https://cool-chaja-b9c7e5.netlify.app/",
    github: ""
  },
  {
    num: "04",
    category: "FullStack",
    title: "Delicious Drinks",
    description: "Discover your next favorite drink effortlessly. Delicious Drinks is the ultimate tool for exploring and discovering beverages. Our platform lets you browse an extensive library of drinks, check detailed recipes, and find trending cocktails with ease. Whether you're hosting a party or just trying something new, Delicious Drinks makes it simple and enjoyable.",
    stack: [
      { name: "Tailwind" },
      { name: "React" },
      { name: "REST-API" }
    ],
    image: "/assets/work/imageDeliciousDrinks.png",
    live: "https://friendly-tarsier-52f700.netlify.app/",
    github: ""
  },
  {
    num: "05",
    category: "Frontend",
    title: "BudgetBuddy",
    description: "Manage your finances like a pro. BudgetBuddy is the ideal tool to track your expenses, plan your budget and achieve your financial goals. With our app, you can record your income and expenses, analyze your spending habits and keep track of your money in a simple and effective way. Make every penny count with BudgetBuddy!",
    stack: [
      { name: "Tailwind" },
      { name: "React" },
      { name: "REST-API" }
    ],
    image: "/assets/work/imageBudgetBuddy.png",
    live: "https://dapper-zuccutto-287a43.netlify.app/",
    github: ""
  },
  {
    num: "06",
    category: "FullStack",
    title: "WeatherNow",
    description: "Get the weather in any city instantly. WeatherNow is the perfect app to check the weather anywhere in the world. Get accurate and up-to-date information on temperatures, weather conditions and forecasts, all quickly and easily. Plan your day with WeatherNow!",
    stack: [
      { name: "Tailwind" },
      { name: "React" },
      { name: "REST-API" }
    ],
    image: "/assets/work/imageWeatherNow.png",
    live: "https://remarkable-eclair-e118e9.netlify.app/",
    github: ""
  },
  {
    num: "07",
    category: "Front-End",
    title: "Lily Studio",
    description: "Lily Studio captures your most special moments. We offer professional wedding, portrait and event photography, transforming your memories into unique art. Book your session today!",
    stack: [
      { name: "Tailwind" },
      { name: "React" },
      { name: "REST-API" }
    ],
    image: "/assets/work/imageLilyStudio.png",
    live: "https://lilystudio.netlify.app/",
    github: ""
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    // Get current slide index
    const currentIndex = swiper.activeIndex;
    // Update Project state based on current slide index
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none text-black group-[hover]:text-accent transition-all duration-500 capitalize">{project.category} Project</h2>
              {/* Project description */}
              <p className="text-black/70 pt-2">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return <li key={index} className="text-xl text-accent">{item.name}
                    {/* Removemos la ultima "," */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                })}
              </ul>
              {/* Border */}
              <div className="border border-black/40"></div>

              {/* Buttons */}
              <div className="pt-2 flex items-center gap-4">
                {/* Live Project Button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip className="flex">
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/15 flex justify-center items-center group">
                        <BsArrowUpRight className="text-black text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* GitHub Project Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip className="flex">
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/15 flex justify-center items-center group">
                        <BsGithub className="text-black text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[230px] lg:h-[460px] relative group flex justify-center items-center bg-black/20 ">
                      {/* Overlay */}
                      <div className=" absolute top-0 bottom-0 w-full h-full bg-black/5 z-10"></div>
                      {/* Imagen */}
                      <div className="relative w-full h-full shadow-lg">
                        <Image src={project.image} fill className="lg:object-cover sm:object-contain" quality={75} loading="lazy" alt="Image from Project" />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}

              {/* Slider Buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work