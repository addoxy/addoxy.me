import Badge from './Badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/vendor/carousel';
import Image, { StaticImageData } from 'next/image';

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
      <p className="mb-6 text-lg text-zinc-400">{description}</p>
      <div className="mb-9 flex flex-wrap gap-2.5">
        {stack.map((tool) => (
          <Badge key={tool} text={tool} />
        ))}
      </div>
      <Image
        src={images[0]}
        alt={title + ' image'}
        className="rounded-xl border border-zinc-800"
      />
    </section>
  );
};

export default Project;
