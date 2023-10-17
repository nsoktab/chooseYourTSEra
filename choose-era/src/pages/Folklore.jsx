import EraSection from "../components/EraSection";
import img1 from "../assets/folklore_1.webp";
import img2 from "../assets/folklore_2.jpg";
import img3 from "../assets/folklore_3.jpg";

export default function Folklore() {
  return (
    <EraSection
      color="#85796D"
      title="foklore"
      src1={img1}
      src2={img2}
      src3={img3}
      Spotify="https://open.spotify.com/embed/album/1pzvBxYgT6OVwJLtHkrdQK?utm_source=generator"
    />
  );
}
