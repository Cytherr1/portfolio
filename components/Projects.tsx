import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Project from './Project'

export default function Projects() {
	return (
		<section className="flex min-h-screen bg-base-200 items-center justify-center flex-col gap-12">
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


