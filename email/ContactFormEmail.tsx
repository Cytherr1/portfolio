import React from 'react'
import { Tailwind } from '@react-email/tailwind'
import {
	Html,
	Body,
	Head,
	Heading,
	Hr,
	Container,
	Preview,
	Section,
	Text
} from '@react-email/components'

type EmailProps = {
	message: string,
	senderEmail: string
}

export default function ContactFormEmail({ 
	message,
	senderEmail
 }: EmailProps) {
	return (
		<Html>
			<Head />
			<Preview>New message from your portfolio site</Preview>
			<Tailwind>
				<Body className='bg-gray-100 text-black'>
					<Container>
						<Section className='bg-white my-10 px-10 py-4 rounded-md'>
							<Heading className='leading-tight'>You received following message from the contact form</Heading>
							<Text>{message}</Text>
							<Hr/>
							<Text>from {senderEmail}</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	)
}
