import React from 'react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hooks'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100
	},
	animate: (i : number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * i,
		}
	})
}

export default function Skills() {

	const { ref } = useSectionInView("Skills")

	return (
		<section id='skills' ref={ref} className='flex justify-center items-center bg-base-200 min-h-[60vh] scroll-mt-32 relative'>
			<div className='flex flex-col gap-8 mb-28 max-w-[53rem] text-center sm:mb-40 mt-32'>
				<SectionHeading>My Skills</SectionHeading>
				<ul className='flex flex-wrap justify-center gap-2 text-lg'>
					{
						skillsData.map((skill, i) => (
							<motion.li key={i} className='badge p-4 rounded-lg shadow-md'
								variants={fadeInAnimationVariants}
								initial="initial"
								whileInView="animate"
								viewport={{ once: true }}
								custom={i}
							>
								{skill}
							</motion.li>
						))
					}
				</ul>
			</div>
		</section>
	)
}
