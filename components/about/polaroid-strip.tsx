"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useSyncExternalStore, type ReactNode } from "react";

type Polaroid = {
  id: string;
  rotate: number;
  src: string;
  alt: string;
};

// Faceless, thematic HD photos (Unsplash License — free to use, no attribution
// required, no real identifiable people depicted). Swap any of these for
// John Peter's own photos later by changing `src`/`alt` — no other code
// needs to change.
const PHOTOS: Polaroid[] = [
  {
    id: "a",
    rotate: -8,
    src: "https://images.unsplash.com/photo-1482059470115-0aadd6bf6834?fm=jpg&q=80&w=800&auto=format&fit=crop",
    alt: "World globe — global health",
  },
  {
    id: "b",
    rotate: 6,
    src: "https://images.unsplash.com/photo-1674702703321-b44990d8b6ba?fm=jpg&q=80&w=800&auto=format&fit=crop",
    alt: "Doctor's coat with a stethoscope — health systems",
  },
  {
    id: "c",
    rotate: -4,
    src: "https://images.unsplash.com/photo-1674702693637-330943cdf0a1?fm=jpg&q=80&w=800&auto=format&fit=crop",
    alt: "Notebook sketch of a face — psychology",
  },
  {
    id: "d",
    rotate: 7,
    src: "https://images.unsplash.com/photo-1674702685239-b4ab4f44f944?fm=jpg&q=80&w=800&auto=format&fit=crop",
    alt: "Open book on a desk — academic research",
  },
  {
    id: "e",
    rotate: -6,
    src: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?fm=jpg&q=80&w=800&auto=format&fit=crop",
    alt: "Microscope on a lab bench — research",
  },
  {
    id: "f",
    rotate: 5,
    src: "https://images.unsplash.com/photo-1670641318256-63785b325f4d?fm=jpg&q=80&w=800&auto=format&fit=crop",
    alt: "Coastal community, Sierra Leone — community health",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function PolaroidCard({
  photo,
  index,
}: {
  photo: Polaroid;
  index: number;
}): ReactNode {
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 220, damping: 18, mass: 0.6 });
  const tx = useTransform(sx, (v) => `${v}px`);
  const ty = useTransform(sy, (v) => `${v}px`);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>): void => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const max = 18;
    const k = 0.25;
    mx.set(Math.max(-max, Math.min(max, dx * k)));
    my.set(Math.max(-max, Math.min(max, dy * k)));
  };

  const handleLeave = (): void => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      initial={{ opacity: 0, y: -120, filter: "blur(18px)", rotate: photo.rotate }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", rotate: photo.rotate }}
      transition={{
        duration: 0.9,
        delay: 0.05 + index * 0.08,
        ease: EASE,
      }}
      style={{
        x: tx,
        y: ty,
        rotate: photo.rotate,
      }}
      className="relative aspect-[3/4] w-[clamp(6rem,11vw,9rem)] shrink-0 overflow-hidden rounded-2xl border-6 border-neutral-300/40 bg-white p-1.5 dark:border-white/15 dark:bg-neutral-900"
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 640px) 9rem, 6rem"
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}

export function PolaroidStrip(): ReactNode {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return <div aria-hidden="true" className="h-[clamp(8rem,15vw,12rem)] w-full" />;
  }

  return (
    <div className="flex flex-wrap w-full items-start justify-center gap-1 px-4 sm:gap-1.5 sm:px-8">
      {PHOTOS.map((photo, i) => (
        <PolaroidCard key={photo.id} photo={photo} index={i} />
      ))}
    </div>
  );
}