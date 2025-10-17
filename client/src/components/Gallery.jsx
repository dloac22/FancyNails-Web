
export default function Gallery() {
  const list = images.length ? images : [
    "/assets/gallery/works1.jpg",
    "/assets/gallery/works2.jpg",
    "/assets/gallery/works3.jpg",
    "/assets/gallery/works4.jpg",
    "/assets/gallery/works5.jpg",
    "/assets/gallery/works6.jpg"
  ];
  return (
    <div className="grid">
      {list.map(src => <img key={src} src={src} alt="Nail design" loading="lazy" />)}
    </div>
  )
}
