import HeroLogo from "@/components/HeroLogo";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="mt-32">
        <MaxWidthWrapper className="flex justify-between gap-32">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <h1 className="text-primary text-5xl font-bold mb-8">
                Web Developer, Designer & Notion Expert
              </h1>
              <p className="text-foreground text-xl font-medium">
                I build{" "}
                <span className="text-primary">
                  beautiful, interactive and accessible
                </span>{" "}
                websites with a focus on seamless user experiences. I can also
                help you leverage the power of{" "}
                <span className="text-primary">Notion</span> to boost your
                <span className="text-primary">productivity</span>.
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                asChild
                className="text-background bg-primary text-xl font-bold rounded-md h-12 px-4 w-fit"
              >
                <Link href="#contact-me">Contact me</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-cta border-cta bg-background text-xl font-bold rounded-md h-12 px-4 w-fit gap-3 hover:bg-cta hover:text-background"
              >
                <Link href="#contact-me" className="flex items-center gap-3">
                  View Projects
                  <ArrowRight className="size-6" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-7 shrink-0">
            <HeroLogo icon="react" />
            <HeroLogo icon="next" />
            <HeroLogo icon="tailwind" />
            <HeroLogo icon="notion" />
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
