
export default function Gallery() {
  const list = images.length ? images : [
    "/client/public/asset/gallery/works1.jpg"
  ];
  return (
    <div className="grid">
      {list.map(src => <img key={src} src={src} alt="Nail design" loading="lazy" />)}
    </div>
  )
}
