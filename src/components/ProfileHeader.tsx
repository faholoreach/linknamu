import type { Profile } from "@/data/profile";

export default function ProfileHeader({ name, bio, image }: Profile) {
  return (
    <header className="flex flex-col items-center text-center">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={`${name} 프로필 사진`}
          className="h-[150px] w-[150px] rounded-full object-cover ring-4 ring-white/80 shadow-[0_18px_40px_rgba(120,90,150,0.28)] dark:ring-white/15 dark:shadow-[0_18px_40px_rgba(0,0,0,0.5)]"
        />
      ) : (
        <div
          aria-label={`${name} 프로필 사진`}
          className="flex h-40 w-40 items-center justify-center rounded-full bg-neutral-200 text-5xl font-bold text-neutral-600 ring-2 ring-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 dark:ring-neutral-700"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 text-balance text-sm leading-relaxed text-[var(--muted)]">
        {bio}
      </p>
    </header>
  );
}
