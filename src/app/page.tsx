import { GithubIcon, LinkedinIcon, MailIcon } from '@/components/Icons';
import Project from '@/components/Project';
import StatusBadge from '@/components/StatusBadge';

const PROJECTS = [
  {
    href: 'https://lumosent.addoxy.me/',
    title: 'Lumosent',
    description:
      'A habit tracker that offers effortless habit tracking, detailed statistics to figure out your strong and weak points, and starter kits to help you get started.',
    stack: ['NextJS', 'TailwindCSS', 'Typescript', 'Prisma', 'NextAuth'],
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
      'NextAuth',
      'DND Kit',
    ],
  },
];

const page = () => {
  return (
    <main className="flex flex-col">
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
      <section className="relative flex flex-col gap-y-32">
        <h3 className="absolute -left-32 text-sm font-medium text-zinc-400">
          Projects
        </h3>
        {PROJECTS.map((project) => (
          <Project key={project.href} {...project} />
        ))}
      </section>
    </main>
  );
};

export default page;
