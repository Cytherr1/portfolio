"use client";

import Image from 'next/image'
import React from 'react'
import foto from '@/public/ugur.png'
import { motion } from 'framer-motion'

export default function Hero() {
	return (
		<section>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col gap-10 lg:flex-row-reverse sm:gap-5">
					<motion.div
						initial={{ opacity: 0, scale: 0}}
						animate={{ opacity: 1, scale: 1}}
					>
						<Image src={foto} className="max-w-sm rounded-full shadow-2xl" alt='A photo of me' width={300} height={300} quality={95} priority={true}/>
					</motion.div>
					<div className='w-10/12 sm:w-7/12 '>
						<h1 className="text-5xl font-bold">Box Office News!</h1>
						<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
						<button className="btn btn-neutral">Get Started</button>
					</div>
				</div>
			</div>
		</section>
	)
}
