export default function StaticImage({ src, alt, ...props }) {
  return (
    <div {...props}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full"
        style={{
          imageRendering: 'pixelated',
        }}
      />
    </div>
  )
}
