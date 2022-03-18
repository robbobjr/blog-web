import { AiFillPicture } from "react-icons/ai";
import { Icon } from "..";

export function PickImageIcon({  }) {
  return (
    <label htmlFor="image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}> 
      <input type="file" id="image" style={{ display: 'none' }} />
      <Icon as={AiFillPicture} fontSize={22} color="purple.400" />
    </label>
  );
}