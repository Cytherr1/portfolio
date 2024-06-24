"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
	title,
	description,
	tags,
	githubUrl,
	image,
}: ProjectProps ) {

	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"]
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return(
		<motion.div
			ref={ref} 
			style={{
				scale: scaleProgress,
				opacity: opacityProgress
			}}
			className="group"
		>
			<section className="card bg-base-100 shadow-xl sm:max-w-[42rem] sm:h-[21rem] overflow-hidden flex-wrap relative pt-5 transition hover:bg-base-300 rounded-none sm:rounded-2xl">
				<div className="flex flex-col max-w-[50%] h-full justify-center items-start gap-3 py-6 px-5 sm:pr-2 sm:pl-10 group-even:ml-[13rem] sm:group-even:ml-[19rem]">
					<h3 className="card-title">{title}</h3>
					<p>{description}</p>
					<div className="card-actions group-even:justify-end group-even:self-end">
					{
						tags.map((tag, i) => (
							<div key={i} className="badge badge-primary">{tag}</div>
						))
					}	
					</div>
					<Link href={githubUrl} className="btn btn-neutral min-w-[8rem] min-h-[2.5rem] h-[2.5rem] rounded-full mt-auto group-even:self-end"><BsGithub/> See repo</Link>
				</div>
				<Image className="rounded-2xl absolute top-20 -right-72 max-w-[30rem] sm:max-w-[36rem] shadow-2xl sm:group-even:right-[initial] transition 
				group-even:-left-72 
				
				group-hover:scale-[1.04]
				group-hover:-translate-x-3 
				group-hover:translate-y-3 
				group-hover:-rotate-2 

				group-even:group-hover:translate-x-3 
				group-even:group-hover:-translate-y-3 
				group-even:group-hover:rotate-2"
				src={image} alt={`${title} project screenshot`} quality={95}/>
			</section>
		</motion.div>
	);
}