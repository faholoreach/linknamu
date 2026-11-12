import type { LinkItem } from "@/data/profile";

type Props = LinkItem & {
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ title, url, count, onClick }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative block w-full rounded-3xl border border-white/60 bg-white/40 px-6 py-4 text-center text-base shadow-[0_8px_30px_rgba(120,90,150,0.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-[0_12px_36px_rgba(120,90,150,0.16)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] dark:hover:bg-white/10"
    >
      {title}
      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs tabular-nums text-[var(--muted)]">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
