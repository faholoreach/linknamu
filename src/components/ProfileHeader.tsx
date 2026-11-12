import type { Profile } from "@/data/profile";

export default function ProfileHeader({ name, bio, image }: Profile) {
  return (
    <header className="flex flex-col items-center text-center">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={`${name} 프로필 사진`}
          className="h-40 w-40 rounded-full object-cover ring-2 ring-neutral-300 dark:ring-neutral-700"
        />
      ) : (
        <div
          aria-label={`${name} 프로필 사진`}
          className="flex h-40 w-40 items-center justify-center rounded-full bg-neutral-200 text-5xl font-bold text-neutral-600 ring-2 ring-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 dark:ring-neutral-700"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-4 text-xl font-bold">{name}</h1>
      <p className="mt-1 text-neutral-600 dark:text-neutral-400">{bio}</p>
    </header>
  );
}
