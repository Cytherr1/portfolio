import React from 'react'
import { useFormStatus } from 'react-dom';

export default function SubmitBtn() {

	const { pending } = useFormStatus();

	return (
		<button className="btn btn-neutral rounded-full w-[5.5rem] hover:scale-105 hover:bg-black" type='submit' disabled={pending}>
			{
				pending ? <span className="loading loading-spinner loading-md"></span> : "Submit" 
			}
		</button>
	)
}
