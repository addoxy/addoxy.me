import kanvaboard1 from '@/../public/Kanvaboard_1.png';
import kanvaboard2 from '@/../public/Kanvaboard_2.png';
import kanvaboard3 from '@/../public/Kanvaboard_3.png';
import kanvaboard4 from '@/../public/Kanvaboard_4.png';
import kanvaboard5 from '@/../public/Kanvaboard_5.png';
import lumosent1 from '@/../public/Lumosent_1.png';
import lumosent2 from '@/../public/Lumosent_2.png';
import lumosent3 from '@/../public/Lumosent_3.png';
import lumosent4 from '@/../public/Lumosent_4.png';
import lumosent5 from '@/../public/Lumosent_5.png';
import zustandLogo from '@/../public/zustand.png';
import Badge from '@/components/Badge';
import {
  CSSLogo,
  DrizzleLogo,
  GithubIcon,
  HTMLLogo,
  JavascriptLogo,
  LinkedinIcon,
  MailIcon,
  NextAuthLogo,
  NextjsLogo,
  PrismaLogo,
  ReactLogo,
  ReactQueryLogo,
  TailwindLogo,
  TypescriptLogo,
} from '@/components/Icons';
import Project from '@/components/Project';
import StatusBadge from '@/components/StatusBadge';
import Image from 'next/image';

const PROJECTS = [
  {
    href: 'https://lumosent.addoxy.me/',
    title: 'Lumosent',
    description:
      'A habit tracker that offers effortless habit tracking, detailed statistics to figure out your strong and weak points, and starter kits to help you get started.',
    stack: ['NextJS', 'TailwindCSS', 'Typescript', 'Prisma', 'NextAuth'],
    images: [lumosent1, lumosent2, lumosent3, lumosent4, lumosent5],
  },
  {
    href: 'https://kanvaboard.addoxy.me/',
    title: 'KanvaBoard',
    description:
      'A minimal project management app that lets you keep track of and sort your tasks using a drag and drop interface.',
    stack: [
      'NextJS',
      'TailwindCSS',
      'Typescript',
      'Prisma',
      'React Query',
      'NextAuth',
      'DND Kit',
    ],
    images: [kanvaboard1, kanvaboard2, kanvaboard3, kanvaboard4, kanvaboard5],
  },
];

const SKILLS = [
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

const page = () => {
  return (
    <main className="flex flex-col">
      {/* about section */}
      <section className="relative mb-44 flex flex-col">
        <h1 className="mb-5 text-5xl font-semibold text-zinc-50">
          Hi. I&apos;m Addoxy.
        </h1>
        <h3 className="absolute -left-32 text-sm font-medium text-zinc-400">
          About
        </h3>
        <p className="mb-5 text-2xl font-medium text-zinc-300">
          Front-end developer
        </p>
        <p className="mb-7 text-lg leading-8 text-zinc-400">
          I build <span className="text-sky-500">beautiful, interactive</span>{' '}
          and <span className="text-sky-500">accessible</span> websites with a
          focus on seamless user experiences
        </p>
        <StatusBadge available={true} />
        <div className="mt-8 flex gap-x-5">
          <a href="mailto:addoxy.dev@gmail.com" className="group">
            <MailIcon className="size-5 text-zinc-500 group-hover:text-sky-500" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/aditya-kumar-25605b238/"
            className="group"
          >
            <LinkedinIcon className="size-5 text-zinc-500 group-hover:text-sky-500" />
          </a>
          <a target="_blank" href="https://github.com/addoxy" className="group">
            <GithubIcon className="size-5 text-zinc-500 group-hover:text-sky-500" />
          </a>
        </div>
      </section>

      {/* projects section */}
      <section className="relative mb-44 flex flex-col gap-y-32">
        <h3 className="absolute -left-32 text-sm font-medium text-zinc-400">
          Projects
        </h3>
        {PROJECTS.map((project) => (
          <Project key={project.href} {...project} />
        ))}
      </section>

      {/* skills section */}
      <section className="relative flex flex-col">
        <h3 className="absolute -left-32 text-sm font-medium text-zinc-400">
          Skills
        </h3>
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <Badge key={skill.tool} text={skill.tool} Logo={skill.logo} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
