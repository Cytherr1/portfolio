"use client";

import { useSectionInView } from '@/lib/hooks'
import React from 'react'
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion'
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './SubmitBtn';
import toast from 'react-hot-toast';

export default function Contact() {

	const { ref } = useSectionInView("Contact");

	return (
		<section id='contact' ref={ref} className='flex justify-center items-center bg-base-200 min-h-[100vh]'>
			<motion.div 
				className="w-[min(90%,45rem)] flex flex-col justify-center items-center text-center"
				initial={{
					opacity: 0
				}}
				whileInView={{
					opacity: 1
				}}
				transition={{
					duration: 1
				}}
				viewport={{
					once: true
				}}
			>
				<SectionHeading>Contact Me</SectionHeading>
				<p className='mt-8'>Reach me out directly by sending an email to <a className="underline" href="mailto:ugurobuz@gmail.com">ugurobuz@gmail.com</a> or using the form below.</p>

				<form className='mt-10 flex flex-col w-[min(90%,45rem)]' 
					action={ async (formData) => {
						const { data, error} = await sendEmail(formData);

						if (error) {
							toast.error(error);
							return;
						}

						if (data && data.error) {
							toast.error(data.error.message);
							return;
						}

						toast.success("Email sent successfully.");
					}}
				>
					<label className='input input-bordered flex items-center gap-2'>
						<input name='email' type="email" placeholder='Email'required maxLength={320}/>
					</label>
					<textarea name="message" className="textarea textarea-bordered my-4 min-h-[20rem]" placeholder='Your Message' required maxLength={500}/>
					<SubmitBtn/>
				</form>
			</motion.div>
		</section>
	)
}
