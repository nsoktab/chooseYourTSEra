import EraSection from "../components/EraSection";
import img1 from "../assets/reputation_1.jpg";
import img2 from "../assets/reputation_2.jpg";
import img3 from "../assets/reputation_3.webp";

export default function Reputation() {
  return (
    <EraSection
      color="white"
      title="Reputation"
      headline="black"
      src1={img1}
      src2={img2}
      src3={img3}
    />
  );
}
