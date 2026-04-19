import Image from "next/image";

type BannerProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export function Banner({ src, alt, priority = false }: BannerProps) {
  return (
    <div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--background))",
        }}
      />
    </div>
  );
}
