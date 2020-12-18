import { useState } from "react";

const COLOR = ["black","white","gray","red","yellow","green","blue","indigo","purple","pink"];
const GRADIENT = ["50","100","200","300","400","500","600","700","800","900"];

export interface OuterColorType {
  from: string;
  via: string;
  to: string;
}

export const useChangeColor = (): [
  () => void,
  () => void,
  {
    innerColor: string;
    outerColor: OuterColorType;
  }
] => {
  const [innerColor, setInnerColor] = useState("black");
  const [outerColor, setOuterColor] = useState({
    from: "purple-400",
    via: "pink-500",
    to: "red-500",
  });

  const randomNumber = (): number => Math.floor(Math.random() * 10);
  const getColorData = (data: Array<string>): string => data[randomNumber()];

  const joinColorData = (): string => {
    const gColor = getColorData(COLOR);
    if (gColor === "black" || gColor === "white") {
      return gColor;
    } else {
      return gColor + "-" + getColorData(GRADIENT);
    }
  };
  const changeOuterColor = () => {
    setOuterColor({
      from: joinColorData(),
      via: joinColorData(),
      to: joinColorData(),
    });
  };
  const changeInnerColor = () => {
    setInnerColor(joinColorData());
  };

  return [changeInnerColor, changeOuterColor, { innerColor, outerColor }];
};
