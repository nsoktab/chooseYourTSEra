import arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";
import IFrame from "./IFrame";

export default function EraSection(props) {
  return (
    <section className="subpageBody" style={{ backgroundColor: props.color }}>
      <div>
        <Link to="/">
          <img src={arrow} alt="" className="arrowHome" />
        </Link>
      </div>
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
            <h3>Listen to {props.title} on Spotify</h3>
            <IFrame src={props.Spotify}/>
          </div>
        </div>
      </div>
    </section>
  );
}
