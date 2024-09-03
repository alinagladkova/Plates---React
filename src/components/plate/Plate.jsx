import { useState } from "react";

import Button from "../button/Button";
import cn from "classnames";
import styles from "./plate.module.scss";

function Plate({ plateData, setTotalHandler }) {
  const [desc, setDesc] = useState(false);

  const limitDescription = () => {
    if (plateData.description.length > 51 && desc === false) {
      return `${plateData.description.slice(0, 51)}...`;
    }
    return plateData.description;
  };

  return (
    <div className={cn(styles.plate)}>
      <div className={cn(styles.plate__info)}>
        <span className={cn(styles.plate__value)}>{plateData.initialAmount}</span>
        <span className={cn(styles.plate__title)}>{plateData.progress}</span>
        <span className={cn(styles.plate__description)}>{limitDescription()}</span>
      </div>
      <div className={cn(styles.plate__control)}>
        <Button use="add" text="add" handler={() => setTotalHandler(plateData.initialAmount)}></Button>
        <Button use="showToggle" text={desc ? "hide" : "show"} handler={() => setDesc(!desc)}></Button>
      </div>
    </div>
  );
}
export default Plate;
