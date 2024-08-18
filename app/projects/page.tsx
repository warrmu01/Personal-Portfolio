"use client";
// import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/projectsmaincard";
import Link from "next/link";

import Image from 'next/image';
import Particles from "../components/particles";



const projects = [
	{
		href: "https://www.linkedin.com/in/mughees-warraich/",
		label: "ARC Soccer Fantasy League",
		handle: "Flask | Python | Html | CSS",
	},
	{
		href: "https://www.linkedin.com/in/mughees-warraich/",
		label: "ARC Soccer Fantasy League",
		handle: "Flask | Python | Html | CSS",
	},
	{
		href: "https://www.linkedin.com/in/mughees-warraich/",
		label: "ARC Soccer Fantasy League",
		handle: "Flask | Python | Html | CSS",
	},
];


export default function Home() {
	return (
	  <div className="flex flex-col items-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
		<Navigation />
		<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
		<Particles
		  className="absolute inset-0 -z-10 animate-fade-in"
		  quantity={500}
		/>
		<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
		<div className="mt-32 animate-fade-in">
			{projects.map((s, index) => (
				<div key={index} className="mb-4 flex flex-col md:flex items-start">
					<Link
					href={s.href}
					target="_blank"
					></Link>
					<h1 className="mt-10 text-2xl md:text-3xl lg:text-4xl text-zinc-500 items-baseline">
						{s.label}
					</h1>
					<h2 className="mt-1 text-sm md:text-base lg:text-xl text-zinc-500">
						{s.handle}
					</h2>
				</div>
			))}
			</div>
		</div>
	);
  }
  
  


