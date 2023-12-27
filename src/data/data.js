import linkedin from "../assets/web-icon/linkedin-logo.png";
import github from "../assets/web-icon/github-logo.png";
import twitter from "../assets/web-icon/twitter-logo.png";

export const MAIN_LINKS = [
	{
		href: "https://linkedin.com/in/surendra-manjhi",
		src: linkedin,
	},
	{
		href: "https://github.com/surendra-manjhi",
		src: github,
	},
];

export const OPTIONAL_LINKS = [
	{
		href: "https://twitter.com/manjhss",
		src: twitter,
	},
	{
		href: "https://www.hackerrank.com/profile/manjhisurendra08",
		src: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
	},
];

export const STACK_FILTERS = [
	"All",
	"Frontend",
	"Backend",
	"Database",
	"Tools",
];

import html from "../assets/tech-stack-icon/html.png";
import css from "../assets/tech-stack-icon/css.png";
import javascript from "../assets/tech-stack-icon/javascript.png";
import bootstrap from "../assets/tech-stack-icon/bootstrap.png";
import tailwind from "../assets/tech-stack-icon/tailwind-css.png";
import react from "../assets/tech-stack-icon/react-js.png";
import mongodb from "../assets/tech-stack-icon/mongodb.png";
import node from "../assets/tech-stack-icon/node-js.png";
import git from "../assets/tech-stack-icon/git.png";
import cpp from "../assets/tech-stack-icon/cpp.png";
import figma from "../assets/tech-stack-icon/figma.png";
import express from "../assets/tech-stack-icon/express-js.png";

export const STACK_ICONS = [
	{ type: "frontend", icon: html },
	{ type: "frontend", icon: css },
	{ type: "frontend", icon: javascript },
	{ type: "frontend", icon: bootstrap },
	{ type: "frontend", icon: tailwind },
	{ type: "frontend", icon: react },
	{ type: "database", icon: mongodb },
	{ type: "backend", icon: node },
	{ type: "tools", icon: git },
	{ type: "programming", icon: cpp },
	{ type: "tools", icon: figma },
	{ type: "backend", icon: express },
];

export const PROJECT_FILTERS = [
	"All",
	"SaaS",
	"APIs",
	"MERN",
	"Portfolio",
	"App",
	"Tools",
];

export const PROJECTS = [
	{
		type: "tools",
		codeUrl: "https://github.com/surendra-manjhi/StickyNotes",
		previewUrl: "https://surendra-manjhi.github.io/StickyNotes/",
		imgUrl: "https://i.pinimg.com/564x/d8/bb/80/d8bb8022deb4fb607c95236fc7d4c70a.jpg",
		title: "Sticky Notes",
		desc: "With Sticky Notes, you can perform CRUD operations like Create, Read, Update, Delete Notes, Search Notes and Save Notes Data in browser's local storage.",
		tags: ["html", "css", "javascript", "APIs"],
	},
	{
		type: "portfolio",
		codeUrl: "https://github.com/surendra-manjhi/CountDown-Timer",
		previewUrl: "https://surendra-manjhi.github.io/CountDown-Timer/",
		imgUrl: "https://website-assets.commoninja.com/distribution/1686558596514_image5-3.png",
		title: "Countdown Timer",
		desc: "CountDown Timer counts down from a certain number (minutes or seconds) to indicate the beginning or end of an event or offer.",
		tags: ["html", "css", "javascript"],
	},
	{
		type: "apis",
		codeUrl: "https://github.com/surendra-manjhi/Dogpedia",
		previewUrl: "https://dogpedia-bay.vercel.app/",
		imgUrl: "https://savoryprimepet.com/wp-content/uploads/2018/03/A-happy-dog-on-a-computer.jpg",
		title: "Dogpedia",
		desc: "Dogpedia is a platform where numerous varieties of dog's infomation are displayed and also can be filtered. ",
		tags: ["react", "APIs"],
	},
];
