// Importaciones
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
        
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1, 
                transition: { delay: 1.2, duration: 0.4, ease: "easeIn" } 
            }}
        >

            {/* Foto */}
            <motion.div 
                className="w-[290px] h-[290px] xl:w-[498px] xl:h-[498px] mt-4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: 1.4, duration: 1, ease: "easeInOut" } 
                }}
            >
                
                <Image 
                    src="/assets/perfil.jpeg" 
                    alt="Foto de perfil" 
                    priority 
                    quality={100} 
                    fill 
                    className="object-contain" 
                />

            </motion.div>

        </motion.div>
    </div>
  )
}

export default Photo