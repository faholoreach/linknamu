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

// TODO: 아래는 모두 더미 값이에요. 실제 내용으로 교체하세요.
export const profile: Profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  image: "https://i.pravatar.cc/400?img=12", // 더미 사진 (외부 샘플 이미지)
};

export const links: LinkItem[] = [
  { id: "github", title: "Github", url: "https://example.com/github" },
  { id: "linkedin", title: "LinkedIn", url: "https://example.com/linkedin" },
  { id: "blog", title: "Blog", url: "https://example.com/blog" },
];
