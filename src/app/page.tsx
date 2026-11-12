import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-10 sm:px-8 sm:py-14">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      {/* 원형 프로필 사진 · 이름 · 한 줄 소개 */}
      <div className="mt-8">
        <ProfileHeader {...profile} />
      </div>

      {/* 링크 카드 목록 (세로 배치) */}
      <LinkList links={links} />
    </main>
  );
}
