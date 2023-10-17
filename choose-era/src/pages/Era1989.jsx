import EraSection from "../components/EraSection";
import img1 from "../assets/1989_1.png";
import img2 from "../assets/1989_2.jpg";
import img3 from "../assets/1989_3.jpg";

export default function Era1989() {
  return (
    <EraSection
      color="#00A2E7"
      title="1989"
      headline="white"
      src1={img1}
      src2={img2}
      src3={img3}
      Spotify="https://open.spotify.com/embed/album/1yGbNOtRIgdIiGHOEBaZWf?utm_source=generator"
    />
  );
}
