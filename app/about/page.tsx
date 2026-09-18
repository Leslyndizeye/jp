import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { PolaroidStrip } from "@/components/about/polaroid-strip";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "A little about John Peter, his background, work, and passion for improving healthcare.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-312 pt-40 sm:pt-56">
        <PolaroidStrip />
      </section>

      <section className="mx-auto w-full max-w-160 px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        <FadeIn delay={0.5}>
          <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
            <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
              Hello! I&rsquo;m{" "}
              <span className="border-b border-foreground/30 pb-0.5">
                John Peter
              </span>
              .
            </h1>

            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
              <p>
                I&rsquo;m a{" "}
                <strong className="font-semibold text-foreground">
                  public health researcher and quality improvement specialist
                </strong>{" "}
                who cares deeply about making healthcare better, more
                accessible, and more meaningful for the people who rely on it.
                My background in{" "}
                <strong className="font-semibold text-foreground">
                  clinical psychology
                </strong>{" "}
                and{" "}
                <strong className="font-semibold text-foreground">
                  global health delivery
                </strong>{" "}
                has shaped the way I approach my work — combining research,
                empathy, and practical solutions to help strengthen healthcare
                systems in Rwanda and beyond.
              </p>

              <p>
                Over time, I&rsquo;ve learned that having good research is only
                part of the journey. What matters just as much is making sure
                that knowledge actually reaches the people who can use it.
                That realization has shaped my approach to{" "}
                <strong className="font-semibold text-foreground">
                  evidence-based, human-centered healthcare
                </strong>{" "}
                — work that is grounded in research but never loses sight of
                the people behind the data.
              </p>

              <p>
                Today, my work brings together{" "}
                <strong className="font-semibold text-foreground">
                  psycho-oncology research, health data collection, and
                  academic mentorship
                </strong>
                . I enjoy learning, asking better questions, working with
                people from different backgrounds, and turning ideas into
                practical improvements. At the heart of it all is a simple
                goal: to{" "}
                <strong className="font-semibold text-foreground">
                  help build healthier communities, promote health equity, and
                  support the people who will shape the future of healthcare
                </strong>
                .
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Education />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
