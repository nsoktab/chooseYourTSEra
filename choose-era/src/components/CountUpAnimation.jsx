import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function CountUpAnimation(props) {
  const [clicks, setCLicks] = useState({});
  useEffect(() => {
    async function getCLicks() {
      const url = `https://taylorswiftera-default-rtdb.europe-west1.firebasedatabase.app/buttons/${props.btnId}.json`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setCLicks(data);
    }
    getCLicks();
  }, [props]);
  return (
    <CountUp start={0} end={clicks.clicks + 1} duration={2}>
      {({ countUpRef }) => <span ref={countUpRef} />}
    </CountUp>
  );
}
