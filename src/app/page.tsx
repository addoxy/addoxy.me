import Badge from '@/components/Badge';
import { GithubIcon, LinkedinIcon, MailIcon } from '@/components/Icons';
import Project from '@/components/Project';
import StatusBadge from '@/components/StatusBadge';
import { PROJECTS, SKILLS } from '@/data/data';

const page = () => {
  return (
    <main className="flex flex-col">
      {/* about section */}
      <section className="relative mb-44 flex flex-col">
        <h3 className="mb-6 text-sm font-medium text-zinc-400">About</h3>
        <h1 className="mb-5 text-5xl font-semibold text-zinc-50">
          Hi. I&apos;m Aditya.
        </h1>
        <p className="mb-5 text-2xl font-medium text-zinc-400">
          Front-end & UI/UX developer
        </p>
        <p className="mb-7 text-lg leading-8 text-zinc-300">
          I build <span className="text-sky-500">beautiful, interactive</span>{' '}
          and <span className="text-sky-500">accessible</span> websites with a
          focus on seamless user experiences
        </p>
        <StatusBadge available={Boolean(parseInt(process.env.AVAILABLE!))} />
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
      <section className="relative mb-32 flex flex-col sm:mb-44">
        <h3 className="mb-6 text-sm font-medium text-zinc-400">Projects</h3>
        <div className="flex flex-col gap-y-20 sm:gap-y-32">
          {PROJECTS.map((project) => (
            <Project key={project.href} {...project} />
          ))}
        </div>
      </section>

      {/* skills section */}
      <section className="relative mb-32 flex flex-col sm:mb-44">
        <h3 className="mb-6 text-sm font-medium text-zinc-400">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <Badge key={skill.tool} text={skill.tool} Logo={skill.logo} />
          ))}
        </div>
      </section>

      {/* contact section */}
      <section className="relative flex flex-col">
        <h3 className="mb-6 text-sm font-medium text-zinc-400">Connect</h3>
        <div className="flex flex-col gap-2 text-zinc-400 underline">
          <a href="mailto:adityakumar13043@gmail.com">
            adityakumar13043@gmail.com
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/aditya-kumar-25605b238/"
          >
            Linkedin
          </a>
          <a target="_blank" href="https://github.com/addoxy">
            Github
          </a>
        </div>
      </section>
    </main>
  );
};

export default page;
