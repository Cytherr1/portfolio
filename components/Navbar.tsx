"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/ActiveSectionContextProvider';

export default function Navbar() {

	const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

	return (
		<header className='relative z-[999]'>
			<motion.div className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-base-100 bg-opacity-80 shadow-lg backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[28.25rem] sm:rounded-full"
				initial={{ y: -100, x: "-50%", opacity: 0}}
				animate={{ y: 0, x: "-50%", opacity: 1}}
			></motion.div>
			<nav className="flex fixed top-[0.85rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
				<ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5'>
					{ 
						links.map(link => (
							<motion.li className='h-full sm:h-3/4 flex items-center justify-center relative'
							key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
							>
								<Link 
									href={link.hash} 
									className={clsx('flex w-full items-center justify-center px-3 py-3 hover:text-neutral transition', {
										"text-primary": activeSection === link.name
									})}
									onClick={() => {
										setActiveSection(link.name);
										setTimeOfLastClick(Date.now());
									}}
								>
									{link.name}
									{link.name === activeSection && (
										<motion.span className='bg-gray-200 rounded-full absolute inset-0 -z-10'
											layoutId='activeSection'
											transition={{
												type: "spring",
												stiffness: 380,
												damping: 30
											}}
										></motion.span>
									)}
								</Link>
							</motion.li>
						))
					}
				</ul>
			</nav>
		</header>
	)
}
