"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";

type Entry = {
  company: string;
  role: string;
  period: string;
  description?: string;
  slug?: string;
  logoUrl?: string;
  brand: string;
};

const ENTRIES: Entry[] = [
  {
    company: "The Fred Hollows Foundation / Rwanda Ophthalmology Society",
    role: "Programs Assistant",
    period: "2026",
    description:
      "Coordinated national cataract surgery outreaches across public hospitals, provided general secretariat support.",
    brand: "#00A9CE",
  },
  {
    company: "University of Global Health Equity (UGHE)",
    role: "Seasonal Data Collector Consultant",
    period: "2025 – 2026",
    description:
      "Supported MGDH and Global Surgery students through qualitative data collection, ethical consent, transcription, and participant psychosocial support.",
    brand: "#00543C",
  },
  {
    company: "Rubagumya Lab",
    role: "Psycho-Oncology Research Fellow",
    period: "2025 – 2026",
    description:
      "Contributed to research at the intersection of cancer care and psychosocial health.",
    brand: "#7C3AED",
  },
  {
    company: "Ruli Higher Institute of Health (RHIH)",
    role: "Part-time Thesis Director",
    period: "2025",
    description:
      "Supervised Bachelor of Science in Nursing and Midwifery students in research methodology, proposal development, academic writing, and thesis development.",
    brand: "#1E3A8A",
  },
  {
    company: "Partners In Health / Inshuti Mu Buzima",
    role: "Accreditation & Quality Improvement Officer",
    period: "2023 – 2024",
    description:
      "Supported quality improvement initiatives and health standards compliance across Kirege, Winkwavu, and Butaro Level Teaching Hospitals.",
    brand: "#0072BC",
  },
  {
    company: "Rise Next Mentorship Program",
    role: "Admissions Support",
    period: "2023 – 2024",
    description:
      "Contributed to student admissions and mentorship program activities.",
    brand: "#F59E0B",
  },
];

const COLLAPSED_COUNT = 2.5;
const ROW_HEIGHT = 92;
const ROW_GAP = 8;

export function Experience(): ReactNode {
  const [open, setOpen] = useState(false);
  const collapsedHeight =
    Math.floor(COLLAPSED_COUNT) * ROW_HEIGHT +
    Math.floor(COLLAPSED_COUNT) * ROW_GAP +
    (COLLAPSED_COUNT % 1) * ROW_HEIGHT;
  const hiddenCount = ENTRIES.length - Math.floor(COLLAPSED_COUNT);

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Experience
      </h3>
      <div
        className={`border-foreground/5 bg-foreground/2 dark:bg-foreground/5 relative overflow-hidden rounded-4xl border px-2 pt-2 sm:px-4 sm:pt-4 ${
          open ? "pb-2 sm:pb-4" : "pb-0"
        }`}
      >
        <motion.div
          className="relative"
          initial={false}
          animate={{
            height: open ? "auto" : collapsedHeight,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ overflow: "hidden" }}
        >
          <ul className="flex flex-col gap-2">
            {ENTRIES.map((entry) => (
              <li
                key={`${entry.company}-${entry.period}`}
                className="bg-background border-foreground/5 flex items-start gap-4 rounded-3xl border p-3"
                style={{ minHeight: ROW_HEIGHT }}
              >
                <CompanyLogo entry={entry} />
                <div className="flex min-w-0 flex-col gap-0.5">
                  <span className="text-foreground text-[17px] font-semibold tracking-tight sm:text-[18px]">
                    {entry.company}
                  </span>
                  <span className="text-foreground/65 text-[14px] tracking-tight sm:text-[15px]">
                    {entry.role}
                    <span className="text-foreground/30 mx-2">•</span>
                    <span className="text-foreground/55">{entry.period}</span>
                  </span>
                  {entry.description ? (
                    <p className="text-foreground/50 mt-1 text-[13px] leading-snug tracking-tight sm:text-[14px]">
                      {entry.description}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <AnimatePresence>
          {!open && (
            <motion.div
              key="fade"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0"
              style={{
                height: ROW_HEIGHT,
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 80%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 80%)",
              }}
            />
          )}
        </AnimatePresence>

        {hiddenCount > 0 && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className={`focus-ring text-foreground flex w-full cursor-pointer items-center justify-center gap-1.5 bg-transparent text-[15px] font-medium tracking-tight ${
              open
                ? "relative mt-4"
                : "absolute inset-x-0 bottom-0 z-10 py-3 sm:py-4"
            }`}
          >
            {open ? "Show less" : `Show ${hiddenCount} more`}
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="inline-flex"
            >
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </motion.span>
          </button>
        )}
      </div>
    </div>
  );
}

function CompanyLogo({ entry }: { entry: Entry }): ReactNode {
  const [imgFailed, setImgFailed] = useState(false);
  const initials = entry.company.charAt(0);
  const hasImage = Boolean((entry.logoUrl || entry.slug) && !imgFailed);

  return (
    <span
      className="ring-foreground/8 inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden bg-white ring-1 dark:ring-white/10"
      aria-hidden="true"
      style={{
        borderRadius: 14,
        ...(hasImage ? {} : { backgroundColor: entry.brand }),
      }}
    >
      {entry.logoUrl && !imgFailed ? (
        <img
          src={entry.logoUrl}
          alt=""
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
          draggable={false}
          onError={() => setImgFailed(true)}
        />
      ) : entry.slug && !imgFailed ? (
        <img
          src={`https://cdn.simpleicons.org/${entry.slug}`}
          alt=""
          width={24}
          height={24}
          className="h-6 w-6"
          draggable={false}
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span className="text-[18px] font-semibold tracking-tight text-white">
          {initials}
        </span>
      )}
    </span>
  );
}