import {
  ArrowRight,
  BookOpen,
  Heart,
  Stethoscope,
  Globe,
  GraduationCap,
  Microscope,
  Users,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";



type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  link?: string; // Optional external link
};

const PROJECTS: Project[] = [
  {
    id: "publications",
    icon: BookOpen,
    iconLabel: "Research",
    title: "Research Portfolio & Publications",
    description: "Track his scientific output — 6 peer-reviewed publications covering psychiatric mental health, maternal and child health, adolescent SRH, and infection prevention — on his ResearchGate profile.",
    meta: "2023-2026 • ResearchGate",
    imageRatio: 1 / 1,
    image: "https://images.unsplash.com/photo-1518082462598-2e71183941a9?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Research publications and academic writing on a desk",
    link: "https://www.researchgate.net/profile/John-Ndikubwimana",
  },
  {
    id: "ghc-fellowship",
    icon: Globe,
    iconLabel: "Fellowship",
    title: "Global Health Corps Fellowship",
    description: "Alumnus (2023-2024) contributing to health systems strengthening initiatives across Rwanda's healthcare ecosystem.",
    meta: "2023-2024 • Rwanda",
    imageRatio: 4 / 3,
    image: "https://images.unsplash.com/photo-1642009071428-119813340e22?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Map with pins marking locations — health systems strengthening across regions",
    link: "#"
  },
  {
    id: "psycho-oncology",
    icon: Heart,
    iconLabel: "Research",
    title: "Psycho-Oncology Research",
    description: "Research Fellow at Rubagumya Lab exploring the intersection of cancer care and psychosocial health in Rwandan healthcare settings.",
    meta: "2025-2026 • Rubagumya Lab",
    imageRatio: 4 / 3,
    image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Hands offering comfort and psychosocial support",
    link: "#"
  },
  {
    id: "ughe-data-collection",
    icon: Microscope,
    iconLabel: "Consultancy",
    title: "UGHE Data Collection Consultant",
    description: "Seasonal Data Collector supporting MGDH and Global Surgery students with qualitative data collection, ethical consent, and participant psychosocial support.",
    meta: "2025-2026 • UGHE",
    imageRatio: 4 / 3,
    image: "https://images.unsplash.com/photo-1517120026326-d87759a7b63b?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Hospital corridor where qualitative data collection takes place",
    link: "#"
  },
  {
    id: "quality-improvement",
    icon: Stethoscope,
    iconLabel: "Healthcare",
    title: "Quality Improvement Initiatives",
    description: "Accreditation & Quality Improvement Officer supporting health standards compliance across Kirege, Winkwavu, and Butaro Level Teaching Hospitals.",
    meta: "2023-2024 • PIH/Inshuti Mu Buzima",
    imageRatio: 4 / 3,
    image: "https://images.unsplash.com/photo-1629410484397-a4dcd74088a0?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Bright hospital hallway representing facility standards and compliance",
    link: "#"
  },
  {
    id: "thesis-direction",
    icon: GraduationCap,
    iconLabel: "Education",
    title: "Thesis Director & Academic Mentorship",
    description: "Supervising Bachelor of Science in Nursing and Midwifery students in research methodology, proposal development, and academic writing.",
    meta: "2025 • RHIH",
    imageRatio: 4 / 3,
    image: "https://images.unsplash.com/photo-1769905226600-1d447fe7d020?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Graduates in caps and gowns at a university ceremony",
    link: "#"
  },
  {
    id: "cataract-outreach",
    icon: Users,
    iconLabel: "Programs",
    title: "National Cataract Surgery Outreach",
    description: "Coordinated national cataract surgery outreaches across public hospitals with The Fred Hollows Foundation & Rwanda Ophthalmology Society.",
    meta: "2026 • Rwanda",
    imageRatio: 4 / 3,
    image: "https://images.unsplash.com/photo-1534990806788-cd4dd131f626?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Close-up of a human eye representing vision care outreach",
    link: "#"
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              Research, healthcare initiatives, and academic contributions
              advancing health equity in Rwanda.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible && PROJECTS.length > 4 ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;

  const CardContent = (
    <article className="project-card flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 transition-shadow hover:shadow-lg sm:p-3.5">
      <header className="flex items-center gap-2.5 px-1 pt-2">
        <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
          <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
        </span>
        <span className="text-sm font-medium tracking-tight text-foreground">
          {project.iconLabel}
        </span>
      </header>

      <div
        className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
        style={{ aspectRatio: project.imageRatio }}
      >
        <div className="project-card__image-inner">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
            className="object-cover"
            priority={index < 2}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2.5 px-1 pb-1">
        <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
          {project.title}
        </h3>
        <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
          {project.description}
        </p>
      </div>

      <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">
        {project.meta}
      </p>
    </article>
  );

  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      {project.link ? (
        <Link href={project.link} target="_blank" rel="noopener noreferrer">
          {CardContent}
        </Link>
      ) : (
        CardContent
      )}
    </FadeIn>
  );
}