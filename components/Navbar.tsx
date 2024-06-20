"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data';
import Link from 'next/link';

export default function Navbar() {
	return (
		<header className='relative z-[99]'>
			<motion.div className="fixed navbar bg-base-100 left-1/2 min-h-[3.75rem] rounded-none shadow-xl sm:top-6 sm:h-[2.5rem] sm:w-[27.75rem] sm:rounded-full"
				initial={{ y: -100, x: "-50%", opacity: 0}}
				animate={{ y: 0, x: "-50%", opacity: 1}}
			>
				<div className="flex-1 items-center justify-center">
					<ul className='menu menu-horizontal px-2 gap-2 items-center justify-center'>
						{ 
							links.map(link => (
								<li key={link.hash}>
									<Link href={link.hash} className='rounded-full'>{link.name}</Link>
								</li>
							))
						}
					</ul>
				</div>
			</motion.div>
		</header>
	)
}
