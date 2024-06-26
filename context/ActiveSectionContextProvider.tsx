"use client";

import React, { SetStateAction, createContext, useContext, useState } from 'react'
import type { SectionName } from '@/lib/types';

type ActiveSectionContentType = {
	activeSection: SectionName,
	setActiveSection: React.Dispatch<SetStateAction<SectionName>>,
	timeOfLastClick: number, 
	setTimeOfLastClick: React.Dispatch<SetStateAction<number>>,
};

export const ActiveSectionContext = createContext<ActiveSectionContentType | null>(null);

export default function ActiveSectionContextProvider({ 
	children, 
	} : { children : React.ReactNode }) {

	const [activeSection, setActiveSection] = useState<SectionName>("Home");
	const [timeOfLastClick, setTimeOfLastClick] = useState(0);

	return (
		<ActiveSectionContext.Provider
			value={{
				activeSection,
				setActiveSection,
				timeOfLastClick, 
				setTimeOfLastClick,
			}}
		>
			{children}
		</ActiveSectionContext.Provider>
	)
}

export function useActiveSectionContext() {

	const context = useContext(ActiveSectionContext);

	if (context === null) {
		throw new Error(
			"useActiveSection must be used within an ActiveSectionContextProvider"
		);
	}

	return context;
}