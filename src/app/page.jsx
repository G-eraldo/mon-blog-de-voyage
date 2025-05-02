"use client";

import Link from "next/link";

export default function Home() {
  const photos = [
    {
      id: 1,
      src: "/image/amsterdam2.jpg",
      alt: "Amsterdam",
      normalize: "amsterdam",
    },
    { id: 2, src: "/image/edim.jpg", alt: "Edimbourg", normalize: "edimbourg" },
    {
      id: 3,
      src: "/image/newyork.jpg",
      alt: "New York",
      normalize: "new-york",
    },
    { id: 4, src: "/image/grece.jpg", alt: "Grèce", normalize: "grece" },
    {
      id: 5,
      src: "/image/lanzotte.jpg",
      alt: "Lanzarotte",
      normalize: "lanzarotte",
    },
    { id: 6, src: "/image/milan.jpg", alt: "Milan", normalize: "milan" },
    {
      id: 7,
      src: "/image/reuniom.jpg",
      alt: "La Réunion",
      normalize: "la-reunion",
    },
    { id: 8, src: "/image/rome.jpg", alt: "Rome", normalize: "rome" },
    {
      id: 9,
      src: "/image/seychelles.jpg",
      alt: "Seychelles",
      normalize: "seychelles",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center place-items: center gap-10 mb-20">
      {photos.map((photo) => (
        <div
          className="border-2 border-amber-50 rounded-xl w-60 text-center mb-7 hover:bg-amber-100/50 hover:border-2xl cursor-pointer "
          key={photo.id}
        >
          <Link
            href={`/article/${encodeURIComponent(photo.normalize)}`}
            className="text-amber-50 text-2xl rounded-xl font-playfair"
          >
            <img
              className="h-80 object-cover rounded-xl"
              src={photo.src}
              alt={photo.alt}
            />

            {photo.alt}
          </Link>
        </div>
      ))}
    </div>
  );
}
