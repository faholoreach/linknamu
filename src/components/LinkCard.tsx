import type { LinkItem } from "@/data/profile";

export default function LinkCard({ title, url }: LinkItem) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-neutral-300 px-5 py-4 text-center font-medium transition hover:-translate-y-0.5 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
    >
      {title}
    </a>
  );
}
