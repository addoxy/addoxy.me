import Badge from './Badge';

type ProjectProps = {
  href: string;
  title: string;
  description: string;
  stack: string[];
};

const Project = (props: ProjectProps) => {
  const { href, title, description, stack } = props;

  return (
    <section className="flex flex-col">
      <a href={href} className="mb-5">
        <h2 className="text-3xl font-semibold text-zinc-50">{title}</h2>
      </a>
      <p className="mb-6 text-lg leading-8 text-zinc-400">{description}</p>
      <div className="flex flex-wrap gap-x-2.5">
        {stack.map((tool) => (
          <Badge key={tool} text={tool} />
        ))}
      </div>
    </section>
  );
};

export default Project;
