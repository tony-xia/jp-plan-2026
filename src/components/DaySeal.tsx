export function DaySeal({ n }: { n: number }) {
  return (
    <span className="hanko text-lg" aria-label={`Day ${n}`}>
      {n}
    </span>
  );
}
