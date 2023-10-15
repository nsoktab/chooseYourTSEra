export default function EraSection(props) {
  return (
    <section style={{ color: props.color }}>
      <div>
        <h1>
          There are other ${props.count} Swifties loving ${props.title}
        </h1>

        <div className="images"></div>
        <div className="songs">
          Top Streamed songs from ${props.title} on Spotify
        </div>
      </div>
    </section>
  );
}
