import { AdDto } from "../../../services/api/openapi";
import { Advertisement } from "../../organisms/advertisement";

type AdvertisementsProps = {
  data: AdDto[];
};

export function Advertisements({ data: ads }: AdvertisementsProps) {
  return (
    <>
      {ads.map(ad => (
        <Advertisement key={ad.id} data={ad}/>
      ))}
    </>
  );
}