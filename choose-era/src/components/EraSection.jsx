export default function EraSection(props) {
  return (
    <section className="subpageBody" style={{ backgroundColor: props.color }}>
      <div className="subpageMain">
        <h1 style={{ color: props.headline }}>
          There are XXX {props.count} Swifties loving {props.title}
        </h1>
        <div className="subpageContent">
          <div className="images">
            <img src={props.src1} alt="Image 1" className="albumCover" />
            <img src={props.src3} alt="Image 3" className="horizontalImg" />
            <img src={props.src2} alt="Image 2" className="verticalImg" />
          </div>
          <div className="songs">
            Top Streamed songs from {props.title} on Spotify
            <Spotify link="https://open.spotify.com/playlist/5pBirqJyoe0j8KZDrUCJUx?si=b691cebb8fad4d51" />
          </div>
        </div>
      </div>
    </section>
  );
}
