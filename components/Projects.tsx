"use client";

import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Project from './Project'
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {

	const { ref } = useSectionInView("Projects", 0.5);

	return (
		<section ref={ref} className="flex bg-base-200 items-center justify-center flex-col gap-12 min-h-[200vh] sm:min-h-[190vh] scroll-mt-32 sm:scroll-m-0 relative" id='projects'>
			<SectionHeading>My Projects</SectionHeading>
			<div className='flex justify-center items-center flex-col gap-10'>
				{
					projectsData.map((project, i) => (
						<React.Fragment key={i}>
							<Project {...project}/>
						</React.Fragment>
					))
				}
			</div>
		</section>
	)
}


