"use client";
// import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/projectsmaincard";
import Link from "next/link";

import Image from 'next/image';
import Particles from "../components/particles";
import { Info } from "lucide-react";



const projects = [
	{
		href: "https://www.linkedin.com/in/mughees-warraich/",
		label: "ARC Soccer Fantasy League",
		handle: "Flask | Python | HTML | CSS | Javascript | SQL | Tailwind",
		Infopoint1 : "Review and provide constructive feedback on colleagues' research, which assisted them in improving the quality and accuracy of their work.",
	},
	{
		href: "https://www.linkedin.com/in/mughees-warraich/",
		label: "Technology Help Desk Magician",
		handle: "Flask | Python | HTML | CSS | Javascript",
		Infopoint1 : "Review and provide constructive feedback on colleagues' research, which assisted them in improving the quality and accuracy of their work.",

	},
	{
		href: "https://www.linkedin.com/in/mughees-warraich/",
		label: "Meeting Scheduler for Fitness Trainers ",
		handle: "Next.js | Typescript | Twilio | appwrite",
		Infopoint1 : "Review and provide constructive feedback on colleagues' research, which assisted them in improving the quality and accuracy of their work.",

	},
	{
		href: "https://www.linkedin.com/in/mughees-warraich/",
		label: "Assembly Language Debugger ",
		handle: "Java | Java Swing",
		Infopoint1 : "Review and provide constructive feedback on colleagues' research, which assisted them in improving the quality and accuracy of their work.",

	},
	{
		href: "https://www.linkedin.com/in/mughees-warraich/",
		label: "Credit Card Fraud Detection Project",
		handle: "Scikit-Learn | XGBoost | Deep Neural Networks | Python",
		Infopoint1 : "Review and provide constructive feedback on colleagues' research, which assisted them in improving the quality and accuracy of their work.",

	},
	{
		href: "https://www.linkedin.com/in/mughees-warraich/",
		label: "Budget Allocation Analysis Project",
		handle: "Scikit-Learn | Pandas | Matplotlob | Seaborn",
		Infopoint1 : "Review and provide constructive feedback on colleagues' research, which assisted them in improving the quality and accuracy of their work.",

	},
	{
		href: "https://www.linkedin.com/in/mughees-warraich/",
		label: "London Bike Rides Analysis",
		handle: "Python | Pandas | Seaborn | Tableau",
		Infopoint1 : "Review and provide constructive feedback on colleagues' research, which assisted them in improving the quality and accuracy of their work.",

	},
];

// export default function Example() {
// 	return (
// 		<div className="bg-gradient-to-tl from-green-900/0 via-green-900 to-green-900/0">
// 			<Navigation />
// 			<div className="container flex flex-col items-start min-h-screen px-4 mx-auto">
// 				<div className="mt-32">	
// 					{projects.map((project, index) => (
// 						<a
// 							key={index}
// 							href={project.href}
// 							target="_blank"
// 							rel="noopener noreferrer"
// 							className="mb-6"
// 						>
// 							<h1 className="text-3xl mt-12 mb-1 md:text-4xl lg:text-5xl font-bold text-zinc-300 font-serif">
// 								{project.label}
// 							</h1>
// 							<h3 className="text-l md:text-xl lg:text-2xl text-gray-300 font-serif">
// 								{project.handle}
// 							</h3>
// 						</a>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// const experiences = [
// 	{
// 		href: "https://www.linkedin.com/in/mughees-warraich/",
// 		label: "Kingland",
// 		handle: "Data Research Analyst Intern",
// 		Infopoint1 : "Review and provide constructive feedback on colleagues' research, which assisted them in improving the quality and accuracy of their work.",
// 		Infopoint2 : "Conducted comprehensive research, sourced, and meticulously cleaned and organized data records pertaining to corporations and investment vehicles, ensuring data integrity and reliability.",
// 		Infopoint3 : "Enhanced automation, efficiency, and decision-making processes for clients by continuously refining and expanding both new and existing datasets, leading to improved operational effectiveness.",
// 	},
// 	{
// 		href: "mailto:Mugheeswarraich11@gmail.com",
// 		label: "Sodexo",
// 		handle: "Office Student Assistant",
// 		Infopoint1 : "Reviewed and provided constructive feedback on colleagues' research, which assisted them in improving the quality and accuracy of their work.",
// 		Infopoint2 : "Conducted comprehensive research, sourced, and meticulously cleaned and organized data records pertaining to corporations and investment vehicles, ensuring data integrity and reliability.",
// 		Infopoint3 : "Enhanced automation, efficiency, and decision-making processes for clients by continuously refining and expanding both new and existing datasets, leading to improved operational effectiveness.",
// 	},
// 	{
// 		href: "https://github.com/warrmu01",
// 		label: "Luther College",
// 		handle: "IT Technician",
// 		Infopoint1 : "Review and provide constructive feedback on colleagues' research, which assisted them in improving the quality and accuracy of their work.",
// 		Infopoint2 : "Conducted comprehensive research, sourced, and meticulously cleaned and organized data records pertaining to corporations and investment vehicles, ensuring data integrity and reliability.",
// 		Infopoint3 : "Enhanced automation, efficiency, and decision-making processes for clients by continuously refining and expanding both new and existing datasets, leading to improved operational effectiveness.",
// 	},
// ];

export default function Example() {
	return (
		<div className="bg-gradient-to-tl from-green-900/0 via-green-900 to-green-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="flex flex-col w-full gap-8 mx-auto mt-32 sm:mt-35 mb-20 lg:gap-16">
					{projects.map((s) => (
						<Card key={s.handle}>
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
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
  


