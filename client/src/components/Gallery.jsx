
export default function Gallery() {
  const list = images.length ? images : [
    "/assets/gallery/works1.webp",
    "/assets/gallery/works2.webp",
    "/assets/gallery/works3.webp",
    "/assets/gallery/works4.webp",
    "/assets/gallery/works5.webp",
    "/assets/gallery/works6.webp"
  ];
  return (
    <div className="grid">
      {list.map(src => <img key={src} src={src} alt="Nail design" loading="lazy" />)}
    </div>
  )
}
