// import images

import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import mysql from "./assets/images/Skills/mysql.png";
import cpp from "./assets/images/Skills/cpp.png";
import rust from "./assets/images/Skills/rust.png";
import linux from "./assets/images/Skills/linux.png";
import git from "./assets/images/Skills/git.png";
import datastructure from "./assets/images/Skills/datastructure.png";
import postman from "./assets/images/Skills/postman.png";
import java from "./assets/images/Skills/java.png";
import uml from "./assets/images/Skills/uml.png";
import typescript from "./assets/images/Skills/typescript.png";
import teamwork from "./assets/images/Skills/teamwork.png";
import python from "./assets/images/Skills/python.png";
import php from "./assets/images/Skills/php.png";
import spring from "./assets/images/Skills/spring.png";
import graphql from "./assets/images/Skills/graphql.png";
import laravel from "./assets/images/Skills/laravel.png";
import flask from "./assets/images/Skills/flask.png";
import azure from "./assets/images/Skills/azure.png";
import docker from "./assets/images/Skills/docker.png";
import redis from "./assets/images/Skills/redis.png";
import oracle from "./assets/images/Skills/oracle.png";


import coredesigner from "./assets/images/Certifications/coredesigner.png";
import advancedesigner from "./assets/images/Certifications/advancedesigner.png";
import mlpractitioner from "./assets/images/Certifications/mlpractitioner.png";


import infobar from "./assets/images/Projects/infobar.png";
import hand from "./assets/images/Projects/hand.png";
import infobarweb from "./assets/images/Projects/infobarweb.png";
import sphere from "./assets/images/Projects/sphere.png";
import ytvideo from "./assets/images/Projects/ytvid.png";




import {GrMail} from "react-icons/gr";
import {GiSkills} from "react-icons/gi";
import {MdOutlinePermContactCalendar} from "react-icons/md";
import {TbCertificate, TbSmartHome} from "react-icons/tb";
import {BiUser} from "react-icons/bi";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {SiUpwork} from "react-icons/si";
import {TbBrandFiverr} from "react-icons/tb";
import {RiProjectorLine, RiServiceLine} from "react-icons/ri";

const Nav = [
    {
        link: "#home",
        icon: TbSmartHome,
    },
    {
        link: "#aboutme",
        icon: BiUser,
    },
    {
        link: "#skills",
        icon: GiSkills,
    },
    {
        link: "#certifications",
        icon: TbCertificate,
    },
    {
        link: "#projects",
        icon: RiProjectorLine,
    },
    {
        link: "#contact",
        icon: MdOutlinePermContactCalendar,
    },
];

const social_media = [
    {
        text: "shubhampandeysp01@gmail.com",
        icon: GrMail,
        link: "mailto:shubhampandeysp01@gmail.com",
    },
    {
        text: "Shubham Pandey",
        icon: AiFillLinkedin,
        link: "https://www.linkedin.com/in/shubham-pandey-92aa46168/",
    },
    {
        text: "Shubhampandeysp01",
        icon: AiFillGithub,
        link: "https://github.com/Shubhampandeysp01",
    },
];
const cert_content = [
    {
        title: "ML Practitioner",
        link: "https://verify.skilljar.com/c/vghopzb9bb9r",
        image: mlpractitioner,
    },
    {
        title: "Core Designer",
        link:'https://verify.skilljar.com/c/2697urxvzzqg',
        image: coredesigner
    },
    {
        title: "Advanced Designer",
        image: advancedesigner,
        link: "https://verify.skilljar.com/c/beaedpd64mqy",
    },
];

export const content = {
    en: {
        Nav,
        hero: {
            title: "Full Stack Developer",
            firstName: "SHUBHAM",
            LastName: "PANDEY",
            btnText: "View resume",
            btnLink: "https://www.canva.com/design/DAGLwkQO6ZA/RSKtAcqi7BsbNJz4aOHdWQ/edit?utm_content=DAGLwkQO6ZA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        
            hero_content: [
                {
                    count: `+${new Date(new Date() - new Date("2022-01-01")).getFullYear() - 1970}`,
                    text: "Years of Experience in Web development And software development",
                },
                // {
                //     count: "10+",
                //     text: "Projects Worked in my career",
                // },
            ],
        },
        skills: {
            title: "Skills",
            subtitle: "MY TOP SKILLS",
            skills_content: [
                {
                    name: "Java",
                    para: "Worked on Java ",
                    logo: java,
                },
                {
                    name: "Python",
                    para: "With ML",
                    logo: python,
                },
                {
                    name: "Node js | Express.js ",
                    para: "with  Rest Api ",
                    logo: nodejs,
                },
                {
                    name: "React js ",
                    para: "with Redux - Hooks- Material UI",
                    logo: reactjs,
                },
                {
                    name: "Data Structure | Problem Solving",
                    para: "java & python",
                    logo: datastructure,
                },
                {
                    name: "Spring",
                    para: "J2EE , spring boot",
                    logo: spring,
                },
                {
                    name: "Postman",
                    para: "Automated API testing",
                    logo: postman,
                },
                {
                    name: "Docker",
                    para: "with kubernetes ",
                    logo: docker,
                },
                {
                    name: "Git | GitHub",
                    para: "Familiar with git and github",
                    logo: git,
                },
                
                {
                    name: "MySql | PostgresSql",
                    para: "and relational data modeling ",
                    logo: mysql,
                },
                {
                    name: "Scrum & Agile | UML | Data Modeling(Sql & NoSql)",
                    para: "Project management and Software Design",
                    logo: uml,
                },
            ],
        },
        Projects: {
            title: "Projects",
            subtitle: "MY CREATION",
            project_content: [
                {
                    title: "Infobar app similar to inshorts with additional features",
                    image: infobar,
                    githubLink: "https://github.com/Shubhampandeysp01/InfoBar",
                },
                {
                    title: "Auto Shorts creation with virtual AI and news scraper",
                    link: "https://www.youtube.com/@ByteScriptHindi",
                    image: ytvideo,
                    githubLink: "https://github.com/Shubhampandeysp01/video",
                }, {
                    title: "Hand gesture based control interface for smartphones",
                    image: hand,
                    githubLink: "https://github.com/Shubhampandeysp01/handgesture",
                },
                {
                    title: "Three js sphere rotation",
                    image: sphere,
                    githubLink: "https://github.com/Shubhampandeysp01/threejssphere",
                },
                {
                    title: "Real estate API site ",
                    link: "https://infobar-web.vercel.app/",
                    image: infobarweb,
                    githubLink: "https://github.com/Shubhampandeysp01/infobarWeb",
                },

            ],
        },
        Aboutme: {
            title: "About Me",
            subtitle: "Brief introduction",
            para: "I am a software developer with robust problem-solving skills and proven experience in creating and designing software in a test-driven environment.",
            btnText: "More about me",
        },
        Contact: {
            title: "Contact Me",
            // subtitle: "LET'S GET IN TOUCH"
            social_media,
        },
        Certifications: {
            title: "Certifications",
            subtitle: "My Certifications",
            cert_content,
        },
    },
};
