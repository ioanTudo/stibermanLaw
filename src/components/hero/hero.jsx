import { HeroDisplay } from "./heroDisplay";
import { HeroData } from "../../content/listContent";

export const Hero = () => {
  return (
    <div>
      {HeroData.map((item) => (
        <HeroDisplay key={item.idHero} pageHero={item.pageHero} />
      ))}
    </div>
  );
};
