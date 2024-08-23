"use client";

import { Navigation } from "../components/nav";
import { Card } from "../components/projectsmaincard";
import Link from "next/link";

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

export default function Example() {
	return (
	  <div className="bg-gradient-to-tl from-green-900/0 via-green-900 to-green-900/0">
		<Navigation />
		<div className="container flex items-start justify-center min-h-screen px-4 mx-auto">
		  <div className="flex flex-col w-full gap-8 mx-auto mt-32 sm:mt-15 mb-20 lg:gap-16">
			{projects.map((s) => (
			  <Link key={s.handle} href={s.href} passHref>
				<div className="block cursor-pointer">
				  <Card>
					<span
					  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
					  aria-hidden="true"
					/>
					<div className="z-10 flex flex-col items-center">
					  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
						{s.label}
					  </span>
					  <span className="mt-4 text-l text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
						{s.handle}
					  </span>
					  <span className="mt-8 ml-5 text-sm md:text-base text-zinc-400 group-hover:text-zinc-200 list-disc list-inside">
						{s.Infopoint1}
					  </span>
					</div>
					{/* <div className="flex justify-center items-center mt-4">
					  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
						Check Live Site
					  </p>
					  <svg
						className="ml-3 w-4 h-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					  >
						<path
						  strokeLinecap="round"
						  strokeLinejoin="round"
						  strokeWidth="2"
						  d="M5 12h14M12 5l7 7-7 7"
						/>
					  </svg>
					</div> */}
				  </Card>
				</div>
			  </Link>
			))}
		  </div>
		</div>
	  </div>
	);
  }


