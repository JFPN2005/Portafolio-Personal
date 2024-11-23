"use client";

// Importaciones
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 849-440-9055",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "jfpn0.0@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Santo Domingo Este, Brisa Oriental",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Confirma que el componente está en el cliente
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    if (!isClient) return;
  
    emailjs
      .send(
        "service_xd4etic",
        "template_fnnjxt8",
        formData,
        "psy1x2HedPKqg7Pcz"
      )
      .then( 
        (result) => {
          console.log("Email sent successfully:", result.text);
          // Restablecer el formulario
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#dcdcdc]/60 rounded-xl"
              onSubmit={sendEmail}
            >
              <h3 className="text-4xl text-accent font-bold">
                Let&apos;s work together
              </h3>
              <p className="text-black/60">
                Do you have an idea or project in mind? I&apos;m here to help
                you turn your ideas into reality. Whether you need a modern
                website, a custom system, or just want to explore how I can
                contribute to your business, don&apos;t hesitate to write to
                me. Let&apos;s work together to create something amazing!
              </p>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="Firstname"
                />
                <Input
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Lastname"
                />
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                />
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
              </div>

              {/* Select */}
              <Select onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="ui/ux design">UI/UX Design</SelectItem>
                    <SelectItem value="business intelligence">
                      Business Intelligence
                    </SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Textarea */}
              <Textarea
                className="h-[200px]"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here"
              />

              {/* Button */}
              <Button size="md" className="max-w-40 mx-auto" type="submit">
                Send Message
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#dcdcdc]/60 text-accent rounded-[4px] flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-black/70">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;