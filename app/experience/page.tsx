"use client";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/experiencecard";

const socials = [
	{
		href: "https://www.linkedin.com/in/mughees-warraich/",
		label: "Kingland",
		handle: "Data Research Analyst Intern",
		Infopoint1 : "Review and provide constructive feedback on colleagues' research, which assisted them in improving the quality and accuracy of their work.",
		Infopoint2 : "Conducted comprehensive research, sourced, and meticulously cleaned and organized data records pertaining to corporations and investment vehicles, ensuring data integrity and reliability.",
		Infopoint3 : "Enhanced automation, efficiency, and decision-making processes for clients by continuously refining and expanding both new and existing datasets, leading to improved operational effectiveness.",
	},
	{
		href: "mailto:Mugheeswarraich11@gmail.com",
		label: "Sodexo",
		handle: "Office Administrative Student Assistant",
		Infopoint1 : "Reviewed and provided constructive feedback on colleagues' research, which assisted them in improving the quality and accuracy of their work.",
		Infopoint2 : "Conducted comprehensive research, sourced, and meticulously cleaned and organized data records pertaining to corporations and investment vehicles, ensuring data integrity and reliability.",
		Infopoint3 : "Enhanced automation, efficiency, and decision-making processes for clients by continuously refining and expanding both new and existing datasets, leading to improved operational effectiveness.",
	},
	{
		href: "https://github.com/warrmu01",
		label: "Luther College",
		handle: "Information Technology Technician",
		Infopoint1 : "Review and provide constructive feedback on colleagues' research, which assisted them in improving the quality and accuracy of their work.",
		Infopoint2 : "Conducted comprehensive research, sourced, and meticulously cleaned and organized data records pertaining to corporations and investment vehicles, ensuring data integrity and reliability.",
		Infopoint3 : "Enhanced automation, efficiency, and decision-making processes for clients by continuously refining and expanding both new and existing datasets, leading to improved operational effectiveness.",
	},
];

export default function Example() {
	return (
		<div className="bg-gradient-to-tl from-green-900/0 via-green-900 to-green-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="flex flex-col w-full gap-8 mx-auto mt-32 sm:mt-35 mb-20 lg:gap-16">
					{socials.map((s) => (
						<Card key={s.handle}>
							<span
								className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
								aria-hidden="true"
							/>
							<div className="z-10 flex flex-col items-center">
								<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
									{s.handle}
								</span>
								<span className="mt-4 text-l text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
									{s.label}
								</span>
								<ul className="mt-8 ml-5 text-sm md:text-base text-zinc-400 group-hover:text-zinc-200 list-disc list-inside">
									<li className="mb-2">{s.Infopoint1}</li>
									<li className="mb-2">{s.Infopoint2}</li>
									<li className="mb-2">{s.Infopoint3}</li>
								</ul>

							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}

