"use client";

import Image from 'next/image'
import React from 'react'
import foto from '@/public/ugur.png'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiArrowDownTray } from 'react-icons/hi2';

export default function Hero() {
	return (
		<section id='home'>
			<div className="hero min-h-[100vh] sm:min-h-[80vh] bg-base-200">
				<div className="hero-content flex-col gap-5 lg:flex-row-reverse sm:gap-14">
					<motion.div
						initial={{ opacity: 0, scale: 0}}
						animate={{ opacity: 1, scale: 1}}
						transition={{
							type: "tween",
							duration: 0.2,
						}}
					>
						<Image src={foto} className="max-w-sm rounded-full shadow-2xl" alt='A photo of me' width={300} height={300} quality={95} priority={true}/>
					</motion.div>
					<div className='w-10/12 sm:w-7/12 '>
						<motion.h1 className="text-5xl font-bold"
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ type:"spring" ,duration: 0.4 }}
						>Hello, I am Uğur</motion.h1>
						<motion.p className="py-6"
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ type:"spring" ,duration: 0.4, delay: 0.2 }}
						>
							I am a final year Software Engineering student at Bahcesehir University. Currently focusing on becoming a Web Developer and honing my skills in Full-Stack development. I enjoy working on my own projects to further enhance my knowledge in this field.</motion.p>
						<motion.div className='flex gap-2 sm:gap-4'
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ type:"spring" ,duration: 0.4, delay: 0.3 }}
						>
							<Link href="#contact" className="btn btn-neutral rounded-full">Contact me</Link>
							<a className="btn bg-base-100 rounded-full" href='/Ugur Oguzhan Obuz.pdf' download>Download CV <HiArrowDownTray size={17}/></a>
							<Link href="https://github.com/Cytherr1" className="btn bg-base-100 rounded-full"><BsGithub size={17}/></Link>
							<Link href="https://www.linkedin.com/in/ugobuz/" className="btn bg-base-100 rounded-full"><BsLinkedin  size={17}/></Link>
						</motion.div>
					</div>
				</div>
			</div>
			<div className='flex align-center justify-center bg-base-200'><div className="divider divider-horizontal h-20 "></div></div>
		</section>
	)
}
