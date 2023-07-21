import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publishers";

export default interface Game {
  id: number;
  name: string;
  publishers: Publisher[];
  genres: Genre[];
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  slug: string;
  description_raw: string;
}
