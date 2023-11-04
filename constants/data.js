import { AiOutlineHome, AiOutlineUser, AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsClipboardData, BsCodeSlash, BsDatabase, BsGear, BsPen, BsPeople, BsPersonGear } from 'react-icons/bs';
import {FaWhatsapp, FaTwitter} from 'react-icons/fa'
import {PiGraduationCap} from 'react-icons/pi'

const myEmail = process.env.MY_EMAIL;
const myPhone = process.env.MY_PHONE;

export const navList = [
    {
        path: '/',
        name: 'Home',
        icon: <AiOutlineHome />
    },
    {
        path: '/about',
        name: 'About',
        icon: <AiOutlineUser />
    },
    {
        path: '/projects',
        name: 'Projects',
        icon: <BsGear />
    },
    {
        path: '/blog',
        name: 'Blogs',
        icon: <BsPen />
    },
    {
        path: '/contact',
        name: 'Contact',
        icon: <AiOutlineMail />
    },
]

export const socialData = [
    {
        name: 'Github',
        icon: <AiOutlineGithub />,
        link: 'https://github.com/wyasyn'
    },
    {
        name: 'X',
        icon: <FaTwitter />,
        link: 'https://twitter.com/wyasyn'
    },
    {
        name: 'LinkedIn',
        icon: <AiFillLinkedin />,
        link: 'https://www.linkedin.com/in/yasin-walum-01b18295/'
    },
    {
        name: 'WhatsApp',
        icon: <FaWhatsapp />,
        link: `https://wa.me/${myPhone}`,
    },
]

export const servicesData = [
    {
        name: 'Web Development',
        icon: <BsCodeSlash />,
        description: "Design, develop, and maintain web applications and systems",
    },
    {
        name: 'Data Analysis & Machine Learning',
        icon: <BsClipboardData />,
        description: "Extract meaningful insights from large datasets, make predictions",
    },
    {
        name: 'System Administration',
        icon: <BsPersonGear />,
        description: "Manage and maintain computer systems, networks, and servers",
    },
    {
        name: 'Database Management',
        icon: <BsDatabase />,
        description: "Design, implement, and maintain databases for storing and retrieving data efficiently",
    },
    {
        name: 'Consultation',
        icon: <BsPeople />,
        description: "Providing expert advice on technology-related projects, strategy, and problem-solving.",
    },
    {
        name: 'Education and Training',
        icon: <PiGraduationCap />,
        description: " Teaching, mentoring, and training at workshops to industry professionals.",
    },
]