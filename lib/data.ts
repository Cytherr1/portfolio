import React from "react";
import tisse from "@/public/tisse-ss.png";
import hayaltepe from "@/public/hayaltepe-ss.png";
import awsproject from "@/public/aws-ss.png";
import loop from "@/public/loop-ss.png";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Contact",
		hash: "#contact",
	}
] as const;

export const projectsData = [
	{
		title: "Tisse Website",
		description: "It was my first real React project. I designed a brochure website using React and Chakra UI. Created api calls for contact form. Hosted with AWS Cloudfront distribution.",
		tags: ["React", "Chakra", "AWS"],
		githubUrl: "https://github.com/Cytherr1/tisse",
		image: tisse,
	},
	{
		title: "Hayaltepe Website",
		description: "It was my first full-stack project, we were two developers. Admins can add products with external links and manage users. Hosted on a Nginx Linux server.",
		tags: ["React", "Chakra", "MySql", "Express.js", "Node.js"],
		githubUrl: "https://github.com/Cytherr1/hayaltepe",
		image: hayaltepe,
	},
	{
		title: "AWS CI/CD Project",
		description: "This project's purpose was to understand the CI/CD process. I created a workflow from my repository to S3 bucket. In the end, served all my static content using a Cloudfront Distribution.",
		tags: ["AWS", "Git", "HTML", "CSS"],
		githubUrl: "https://github.com/Cytherr1/aws-project-1",
		image: awsproject,
	},
	{
		title: "Loop",
		description: "A puzzle platformer game created just in 3 days by me and a friend to compete in MagaraJam23. It ranked in the top 50 among 400+ games.",
		tags: ["C#", "Unity"],
		githubUrl: "https://github.com/Cytherr1/Loop",
		image: loop,
	},
] as const;

export const skillsData = [
	"Python",
	"Java",
	"C#",
	"JavaScript",
	"TypeScript",
	"HTML",
	"CSS",
	"Tailwind",
	"React",
	"Chakra",
	"Next.js",
	"Node.js",
	"Express",
	"Django",
	"Flask",
	"Git",
	"MySql",
	"SqLite",
	"SQL",
	"Linux",
	"AWS",
	"Unity"
] as const;