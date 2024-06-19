"use client";

import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
	return (
		<motion.div className="navbar bg-base-300 fixed"
			initial={{ y: -100, opacity: 0}}
			animate={{ y: 0, opacity: 1}}
		>
			<div className="navbar-start">
				<ul className="menu menu-horizontal px-1">
					<li><a>Link</a></li>
				</ul>
			</div>
			<div className="navbar-center">
				<ul className="menu menu-horizontal px-1">
					<li><a>Link</a></li>
				</ul>
			</div>
			<div className="navbar-end">
				<ul className="menu menu-horizontal px-1">
					<li><a>Link</a></li>
				</ul>
			</div>
		</motion.div>
	)
}
