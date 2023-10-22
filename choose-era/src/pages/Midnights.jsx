import EraSection from "../components/EraSection";
import img1 from "../assets/midnights_1.jpg";
import img2 from "../assets/midnights_2.webp";
import img3 from "../assets/midnights_3.webp";

export default function Midnights() {
  return (
    <EraSection
      btn="midnightsBtn"
      color="#9d7bb0"
      title="Midnights"
      headline="white"
      src1={img1}
      src2={img2}
      src3={img3}
      spotifyColor="white"
      Spotify="https://open.spotify.com/embed/album/1fnJ7k0bllNfL1kVdNVW1A?utm_source=generator&theme=0"
    />
  );
}
