import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/5479e4d4-2003-4e27-af33-880b101edefa-n9yhbx.svg",
  "https://utfs.io/f/192116fb-f10d-49a4-b5f9-0f1c3423a1d8-22oq.webp",
];

const mockImgs = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url,
}));

export default function HomePage() {
  console.log(mockImgs);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImgs.map((img) => (
          <div key={img.id} className="w-96">
            <img src={img.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
