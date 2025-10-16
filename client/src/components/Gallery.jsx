
export default function Gallery() {
  const list = images.length ? images : [
    "/client/public/assets/gallery/works1.jpg",
    "/client/public/assets/gallery/works2.jpg",
    "/client/public/assets/gallery/works3.jpg",
    "/client/public/assets/gallery/works4.jpg",
    "/client/public/assets/gallery/works5.jpg",
    "/client/public/assets/gallery/works6.jpg"
  ];
  return (
    <div className="grid">
      {list.map(src => <img key={src} src={src} alt="Nail design" loading="lazy" />)}
    </div>
  )
}
