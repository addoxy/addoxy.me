import { Button } from "./ui/button";
import Tablet from "./ui/tablet";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  imagePath: string;
  href: string;
};

const ProjectCard = (props: ProjectCardProps) => {
  const { title, description, imagePath, href } = props;

  return (
    <div className="bg-card flex w-full flex-col gap-10 rounded-xl border border-border px-8 py-6 sm:rounded-2xl sm:px-10 sm:py-8 md:rounded-3xl md:px-14 md:py-12 lg:flex-row">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-primary sm:text-3xl">
            {title}
          </h3>
          <p className="mt-6 text-lg font-medium text-foreground sm:mt-11">
            {description}
          </p>
        </div>
        <Button
          asChild
          className="mt-6 h-12 w-fit rounded-md bg-primary px-4 text-xl font-bold text-background lg:mt-0"
        >
          <a href={href} target="_blank" className="flex items-center gap-3">
            Visit Project
            <ArrowRight className="size-6" />
          </a>
        </Button>
      </div>
      <Tablet imagePath={imagePath} />
    </div>
  );
};

export default ProjectCard;
