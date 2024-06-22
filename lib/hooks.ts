import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView( name : SectionName, thValue = 0.75 ) {
	const { ref, inView } = useInView({
		threshold: thValue,
	});
	const { setActiveSection, timeOfLastClick, setTimeOfLastClick } = useActiveSectionContext();

	useEffect(() => {
		if(inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection(name);
		}
	}, [inView, setActiveSection, timeOfLastClick]);

	return { ref, setTimeOfLastClick}
}