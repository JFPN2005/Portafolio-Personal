"use client"

// Importaciones de iconos
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiMysql, SiPhp, SiTypescript } from "react-icons/si"

// Información de sobre mi
const about = {
  title: "About me",
  description: "I'm a full stack developer with a passion for creating innovative solutions. I have experience with HTML, CSS, JavaScript, React, Node.js, and MongoDB. I'm also familiar with Next.js, Tailwind CSS, and Figma. I'm always looking for new challenges and opportunities to learn and grow.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Javier Pineda"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 849-440-9055"
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Dominican"
    },
    {
      fieldName: "Email",
      fieldValue: "jfpn0.0@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English A2, Spanish Native"
    }
  ]
}

// Información de experiencia
const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My Experience",
  description: "I have been studying web development since I was in school, it's been 3 years since I started, and in that time I've learned a lot of things. I've done over 20 complete projects (Task Manager, Real Estate Manager, Online Reservations, Food Kiosk with Product Management, etc.). Programming is something I love and I always make time to learn new things.",
  items: [
    {
      company: "Freelancer",
      position: "Full Stack Developer",
      duration: "2024 - Present",
    },
    {
      company: "Independent learning",
      position: "Advanced creation of complete projects",
      duration: "2022 - 2024",
    },
    {
      company: "INTRANT",
      position: "ICT Services",
      duration: "2022 - 2023",
    },
    {
      company: "Inst. Prof. Juan Bosh",
      position: "Web Development - DB Admin",
      duration: "2021 - 2023"
    }
  ]
}

// Información de educación
const education = {
  icon: '/assets/resume/cap.svg',
  title: "My Education",
  description: "I'm always looking for new challenges and opportunities to learn and grow. I've studied a lot of things and I'm always looking for new things to learn.",
  items: [
    {
      institution: "Udemy",
      degree: "React and TypeScript - The Complete Guide Creating +10 Projects",
      duration: "2024",
    },
    {
      institution: "Udemy",
      degree: "Full Web Development with HTML5, CSS3, JS AJAX PHP and MySQL",
      duration: "2023-2024",
    },
    {
      institution: "FreeCodeCamp",
      degree: "JavaScript Algorithms and Data Structures",
      duration: "2023-2024",
    },
    {
      institution: "FreeCodeCamp",
      degree: "Responsive Web Design",
      duration: "2023-2024",
    },
    {
      institution: "Fundacion Carlos Slim",
      degree: "Introduction to programming",
      duration: "2023",
    },
    {
      institution: "Fundacion Carlos Slim",
      degree: "Data Curator",
      duration: "2022-2023",
    },
    {
      institution: "Inst. Prof. Juan Bosh",
      degree: "Graduate in Development of Computer Applications and Systems",
      duration: "2018-2023",
    }
  ]
}

// Skills
const skills = {
  title: "My Skills",
  description: "I have a lot of skills and I'm always looking for new ones to learn.",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiExpress />,
      name: "Express",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiPhp />,
      name: "Php",
    }
  ]
}

// Importaciones para estilos
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const Resume = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] mt-5"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Experience */}
          <div className="min-h-[80vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-black/70 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[50px]">
                    {experience.items.map((item, index) => {
                      return(
                        <li 
                          key={index}
                          className="bg-[#b4a1f3]/60 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent font-black">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* Datos */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-black/70">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

          {/* Education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-black/70 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[50px]">
                    {education.items.map((item, index) => {
                      return(
                        <li 
                          key={index}
                          className="bg-[#b4a1f3]/30 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent font-black">{item.duration}</span>
                          <h3 className="text-[18px] leading-[20px] max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* Datos */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-black/70">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

          {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px]0 text-black/70 mx-auto xl:mx-0">{skills.description}</p>
                </div>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4 mt-10">
                {skills.skillsList.map((skill, index) => {
                  return <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#dcdcdc]/60 rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                })}
              </ul>
            </TabsContent>

          {/* About */}
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-black/70 mx-auto xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 ">
                {about.info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-black/70">{item.fieldName}:</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume