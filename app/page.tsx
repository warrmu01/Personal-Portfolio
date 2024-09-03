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

const projects = [
	{
		href: "https://github.com/warrmu01/ARC-fantasy-League",
		label: "ARC Soccer Fantasy League",
		handle: "Flask | Python | HTML | CSS | Javascript | SQL | Tailwind",
		Infopoint1 : "Designed a web application to manage and display player data for a fantasy soccer league.",
	},
	{
		href: "https://magician.luther.edu",
		label: "Technology Help Desk Magician",
		handle: "Flask | Python | HTML | CSS | Javascript",
		Infopoint1 : "Created a tool to manage help desk requests and enhance security compliance.",

	},
	{
		href: "https://github.com/warrmu01",
		label: "Meeting Scheduler for Trainers ",
		handle: "Next.js | Typescript | Twilio | appwrite",
		Infopoint1 : "Built a scheduling platform for fitness trainers with automated notifications.",

	},
	{
		href: "https://github.com/warrmu01/VM252-Debugger",
		label: "Assembly Language Debugger ",
		handle: "Java | Java Swing",
		Infopoint1 : "Developed a GUI-based debugger for assembly language programs.",

	},
	{
		href: "https://sufyanpackages.com/",
		label: "Sufyan Packages",
		handle: "HTML | Javascript | CSS",
		Infopoint1 : "Created a webiste for Sufyan Packages",

	},
	{
		href: "https://github.com/warrmu01/Credit-Card-Fraud-Detection-Final-Project",
		label: "Credit Card Fraud Detection Project",
		handle: "Scikit-Learn | XGBoost | Deep Neural Networks | Python",
		Infopoint1 : "Developed a system to detect fraudulent credit card transactions with high accuracy.",

	},
	{
		href: "https://github.com/warrmu01/Hours-Analysis",
		label: "Budget Allocation Analysis Project",
		handle: "Scikit-Learn | Pandas | Matplotlob | Seaborn",
		Infopoint1 : "Analyzed budget allocations to optimize costs and improve financial planning.",

	},
	{
		href: "https://github.com/warrmu01/London-bike-ride-analysis",
		label: "London Bike Rides Analysis",
		handle: "Python | Pandas | Seaborn | Tableau",
		Infopoint1 : "Analyzed bike ride data to uncover usage trends and visualize ride density for city planning.",

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
      <div className="grid w-3/4 grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
        
      
    </div>
    
  );

}
