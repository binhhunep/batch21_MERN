import React from "react";
import styles from "./styles.module.scss";
import { FaHome, FaHotjar, FaStar } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";
import { MdTheaterComedy } from "react-icons/md";
import {
  GiNinjaHeroicStance,
  GiRomanToga,
  GiGhost,
  GiBandageRoll,
} from "react-icons/gi";

import Icon from "./components/Icon";

function Menu() {
  return (
    <div className={styles.container}>
      <Icon
        IconName={SiNetflix}
        title={"NetFlix"}
        color="#FF1C0B"
        target={"netFlix"}
      />
      <Icon
        IconName={FaHotjar}
        title={"Trending Movies"}
        color="#FFC20A"
        target={"trending"}
      />
      <Icon
        IconName={FaStar}
        title={"Top Rated Movies"}
        color="#DA26CB"
        target={"topRated"}
      />
      <Icon
        IconName={GiNinjaHeroicStance}
        title={"Action Moviese"}
        color="#E9BC67"
        target={"action"}
      />
      <Icon
        IconName={MdTheaterComedy}
        title={"Commedy Movies"}
        target={"comedy"}
        color="#C562BC"
      />

      <Icon
        IconName={GiRomanToga}
        title={"Romance Movies"}
        color="#FF6C37"
        target={"romance"}
      />

      <Icon
        IconName={GiGhost}
        title={"Horror Movies"}
        color="#3FC6FF"
        target={"horror"}
      />

      <Icon
        IconName={GiBandageRoll}
        title={"War Movies"}
        color="#CE352E"
        target={"documentaries"}
      />
    </div>
  );
}

export default Menu;
