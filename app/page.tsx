import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Navigation } from "./components/nav";
import { Card } from "./components/card";
import { Cardx } from "./components/projectsmaincard";


const socials = [
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/mughees-warraich/",
		label: "LinkedIn",
		handle: "Mughees",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:Mugheeswarraich11@gmail.com",
		label: "Email",
		handle: "@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/warrmu01",
		label: "Github",
		handle: "warrmu01",
	},
];

const navigation = [
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">

          <nav className="my-16 animate-fade-in">
            <ul className="flex items-center justify-center gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </nav>
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          <Particles
            className="absolute inset-0 -z-10 animate-fade-in"
            quantity={700}
          />
          <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-green-700 cursor-default text-edge-outline animate-title font-sansirf sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
            Mughees
          </h1>

          <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          <div className="my-16 text-center animate-fade-in">
            <h2 className="text-m text-zinc-500 mb-20 ">
              I'm a person who loves to build things & solve problems!
            </h2>
          </div>
        </div>
      
    </div>
    
  );

}
