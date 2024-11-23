"use client"

// Importacion
import CountUp from "react-countup"

const stats = [
  {
    num: 2,
    text: "Years of Experience"
  },
  {
    num: 20,
    text: "Projects Completed"
  },
  {
    num: 8,
    text: "Technologies Mastered"
  },
  {
    num: 100,
    text: "Code Commits"
  },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 lg:pt-0 lg:pb-0 lg:mt-[-50px]">
      <div className="container mx-auto">

        <div className="flex flex-wrap gap-6 mx-w-[80vw] mx-auto lg:max-w-none">
          {stats.map((item, index) => {
            return <div 
              key={index}
              className="flex flex-1 gap-4 items-center justify-center lg:justify-start"
            >
              <p className="text-4xl lg:text-6xl text-accent font-extrabold -mr-4">+</p>              <CountUp 
                end={item.num} 
                duration={5} 
                delay={3} 
                className="text-4xl lg:text-6xl text-accent font-extrabold"
              />
              <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-black/80`}>{item.text}</p>
            </div>
          })}

        </div>
      </div>
    </section>
  )
}

export default Stats