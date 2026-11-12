export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  image?: string; // 없으면 이름 첫 글자로 대체
};

export const profile: Profile = {
  name: "정개발",
  bio: "풀 스택 개발자 | AI 개발은 필수죠.",
  image: "/profile.jpg",
};

export const links: LinkItem[] = [
  { id: "github", title: "Github", url: "https://example.com/github" },
  { id: "linkedin", title: "LinkedIn", url: "https://example.com/linkedin" },
  { id: "blog", title: "Blog", url: "https://example.com/blog" },
];
