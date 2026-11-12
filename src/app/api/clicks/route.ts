import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

// 모든 링크의 클릭 수를 한 번에 반환: { [linkId]: count }
export async function GET() {
  try {
    const col = await getClicksCollection();
    const docs = await col.find({}).toArray();
    const counts: Record<string, number> = Object.fromEntries(
      links.map((l) => [l.id, 0]),
    );
    for (const d of docs) {
      if (d._id in counts) counts[d._id] = d.count;
    }
    return NextResponse.json(counts);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
