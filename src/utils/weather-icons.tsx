import { IoIosSunny } from "react-icons/io";
import { BsCloudSun, BsCloud, BsFillCloudRainFill, BsSnow } from "react-icons/bs"; 

export const weatherIconMap: { [key: number]: JSX.Element } = {
  0: <IoIosSunny />,                          
  1: <BsCloudSun />,                           
  2: <BsCloud />,                        
  3: <BsFillCloudRainFill />,                 
  4: <BsSnow />,                           
};
