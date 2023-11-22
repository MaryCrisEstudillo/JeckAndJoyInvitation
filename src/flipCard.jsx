import "./flipCard.css"; // Import your CSS file

import { useState } from "react";

import jeck from "./assets/jeckAndJoy.png";

const FlipCard = () => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''} desktop:w-[550px] desktop:h-[650px] tablet:w-[450px] tablet:h-[600px] laptop:w-[550px] laptop:h-[650px] w-[300px] h-[300px]`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front bg-[white] px-5 flex flex-col">
          {/* <p>Front Content</p> */}
          <img src={jeck} alt="front card"/>
          <button className="w-[150px] text-[#0d5d82] h-[30px] border-2 rounded-full border-solid border-[#0d5d82]">Click to Open</button>
        </div>
        <div className="flip-card-back">
          <p>Back Content</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;