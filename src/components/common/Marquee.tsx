type MarqueeProps = {
  text: string;
  reverse?: boolean;
  className?: string;
};

export function Marquee({ text, reverse = false, className }: MarqueeProps) {
  const repeated = Array.from({ length: 8 }, (_, index) => `${text} / ${index + 1}`);

  return (
    <div
      className={`overflow-hidden border-y border-ink/20 py-3 ${className ?? ""}`}
      aria-hidden="true"
    >
      <div
        className={`flex w-max gap-8 whitespace-nowrap text-[clamp(1.1rem,2.4vw,2.25rem)] font-black uppercase leading-none tracking-poster ${
          reverse ? "animate-[marqueeReverse_24s_linear_infinite]" : "animate-[marquee_24s_linear_infinite]"
        }`}
      >
        {[...repeated, ...repeated].map((item, index) => (
          <span key={`${item}-${index}`} className="font-display">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
