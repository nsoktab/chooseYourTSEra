export default function IFrame(props) {
  return (
    <div>
      <iframe
        className="iframeSpotify"
        src={props.src}
        allowfullscreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
