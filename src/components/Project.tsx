import Badge from './Badge';
import ImageSlider from './ImageSlider';
import { StaticImageData } from 'next/image';

type ProjectProps = {
  href: string;
  title: string;
  description: string;
  stack: string[];
  images: StaticImageData[];
};

const Project = (props: ProjectProps) => {
  const { href, title, description, stack, images } = props;

  return (
    <section className="flex flex-col">
      <a target="_blank" href={href} className="group mb-5 flex">
        <h2 className="text-3xl font-semibold text-zinc-50 underline-offset-4 group-hover:underline">
          {title}
        </h2>
        <span className="ml-2 -rotate-45">-{'>'}</span>
      </a>
      <p className="mb-6 text-lg leading-8 text-zinc-400">{description}</p>
      <div className="mb-7 flex flex-wrap gap-2.5">
        {stack.map((tool) => (
          <Badge key={tool} text={tool} />
        ))}
      </div>
      <ImageSlider images={images} />
    </section>
  );
};

export default Project;
