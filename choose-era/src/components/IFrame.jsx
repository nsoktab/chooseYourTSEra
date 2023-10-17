export default function IFrame(props) {
  return (
    <div>
      <iframe
        className="iframeSpotify"
        src={props.src}
        width="100%"
        height="352"
        allowfullscreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
