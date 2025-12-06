import { BsCloudRain, BsCloudSnow } from "react-icons/bs";
import { AiOutlineThunderbolt, AiOutlineSun } from "react-icons/ai";
import { RiDrizzleLine } from "react-icons/ri";
import { CiCloud } from "react-icons/ci";

export const getWeatherIcon = (condition: string) => {
  const code = condition?.toLowerCase() || "";
  if (code.includes("rain")) return <BsCloudRain size={26} />;
  if (code.includes("snow")) return <BsCloudSnow size={26} />;
  if (code.includes("drizzle")) return <RiDrizzleLine size={26} />;
  if (code.includes("thunder")) return <AiOutlineThunderbolt size={26} />;
  if (code.includes("partlycloudy")) return <CiCloud size={26} />;
  return <AiOutlineSun size={46} />;
};
