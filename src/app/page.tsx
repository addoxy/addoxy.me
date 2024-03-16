import { GithubIcon, LinkedinIcon, MailIcon } from '@/components/Icons';
import StatusBadge from '@/components/StatusBadge';

const page = () => {
  return (
    <main className="flex flex-col">
      <div className="relative flex flex-col">
        <h1 className="mb-5 text-5xl font-semibold text-zinc-50">
          Hi. I&apos;m Addoxy.
        </h1>
        <h3 className="absolute -left-32 text-sm font-medium text-zinc-400">
          About
        </h3>
        <p className="mb-5 text-2xl font-medium text-zinc-300">
          Front-end developer
        </p>
        <p className="mb-7 text-xl leading-8 text-zinc-400">
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
      </div>
    </main>
  );
};

export default page;
