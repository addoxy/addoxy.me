import kanvaboard from '@/../public/Kanvaboard.png';
import lumosent from '@/../public/Lumosent.png';
import zustandLogo from '@/../public/zustand.png';
import {
  CSSLogo,
  DrizzleLogo,
  HTMLLogo,
  JavascriptLogo,
  NextAuthLogo,
  NextjsLogo,
  PrismaLogo,
  ReactLogo,
  ReactQueryLogo,
  TailwindLogo,
  TypescriptLogo,
} from '@/components/Icons';
import Image from 'next/image';

export const PROJECTS = [
  {
    href: 'https://lumosent.addoxy.me/',
    title: 'Lumosent',
    description:
      'A habit tracker that offers effortless habit tracking, detailed statistics to figure out your strong and weak points, and starter kits to help you get started.',
    stack: [
      'NextJS',
      'ReactJS',
      'TailwindCSS',
      'Typescript',
      'Prisma',
      'NextAuth',
    ],
    image: lumosent,
  },
  {
    href: 'https://kanvaboard.addoxy.me/',
    title: 'KanvaBoard',
    description:
      'A minimal project management app that lets you keep track of and sort your tasks using a drag and drop interface.',
    stack: [
      'NextJS',
      'ReactJS',
      'TailwindCSS',
      'Typescript',
      'Prisma',
      'React Query',
      'NextAuth',
    ],
    image: kanvaboard,
  },
];

export const SKILLS = [
  {
    tool: 'NextJS',
    logo: <NextjsLogo className="size-6 text-zinc-100" />,
  },
  {
    tool: 'ReactJS',
    logo: <ReactLogo className="size-6" />,
  },
  {
    tool: 'Typescript',
    logo: <TypescriptLogo className="size-6" />,
  },
  {
    tool: 'Javascript',
    logo: <JavascriptLogo className="size-6" />,
  },
  {
    tool: 'TailwindCSS',
    logo: <TailwindLogo className="size-6" />,
  },
  {
    tool: 'React Query',
    logo: <ReactQueryLogo className="size-6" />,
  },
  {
    tool: 'Zustand',
    logo: <Image src={zustandLogo} alt="logo" className="size-6" />,
  },
  {
    tool: 'Prisma',
    logo: <PrismaLogo className="size-6" />,
  },
  {
    tool: 'Drizzle',
    logo: <DrizzleLogo className="size-6 text-lime-400" />,
  },
  {
    tool: 'NextAuth',
    logo: <NextAuthLogo className="size-6" />,
  },
  {
    tool: 'HTML',
    logo: <HTMLLogo className="size-6" />,
  },
  {
    tool: 'CSS',
    logo: <CSSLogo className="size-6" />,
  },
];
