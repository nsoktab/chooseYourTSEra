import EraSection from "../components/EraSection";
import img1 from "../assets/lover_1.jpg";
import img2 from "../assets/lover_2.webp";
import img3 from "../assets/lover_3.png";

export default function Lover() {
  return (
    <EraSection
      color="pink"
      title="Lover"
      src1={img1}
      src2={img2}
      src3={img3}
      Spotify="https://open.spotify.com/embed/album/1NAmidJlEaVgA3MpcPFYGq?utm_source=generator"
    />
  );
}
