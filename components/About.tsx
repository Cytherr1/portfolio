"use client";

import React from 'react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hooks';

export default function About() {

	const { ref } = useSectionInView("About");

	return (
		<section id='about' ref={ref}>
			<div className="hero min-h-screen sm:min-h-[80vh] bg-base-200">
				<div className="hero-content text-center">
					<div className="w-10/12 sm:w-7/12">
						<SectionHeading>About Me</SectionHeading>
						<p className="py-6">
							As a {" "}<span className='font-bold'>Software Engineering</span> student, 
							I tried to experience every part of this field offers. 
							I learned {" "}<span className='font-bold'>Java</span> to understand OOP, practiced with {" "}<span className='font-bold'>Python</span> to create algorithms and basic apps, 
							made games with {" "}<span className='font-bold'>C# and Unity</span> for fun. Nowadays, I work with {" "}<span className='font-bold'>JavaScript</span> and focusing on web development, 
							practicing on new projects using various frameworks and tools such as {" "}<span className='font-bold'>React.js, Next.js, Node.js</span>. 
							Even learned vps architectures and hosted web apps using {" "}<span className='font-bold'>AWS</span> tools or on {" "}<span className='font-bold'>Nginx</span> Linux servers.
						</p>
						<p className="py-6">
							Experiencing every field may look indecisive but it&apos;s {" "}<span className='font-bold'>not</span>. 
							It means I put a lot to learn something new everyday and it also {" "}<span className='font-bold'>proves</span> that I can do whatever I am {" "}<span className='font-bold'>determined</span> to do.
						</p>
						<p>
							In my free time, I like to hang out with friends, play video games, watch shows or try new cooking recipes. I am also into {" "}<span className='font-bold'>Entomology</span>,
							as a hobby I create habitats for various bugs and insects. 
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
