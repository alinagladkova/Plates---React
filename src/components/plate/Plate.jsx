import { useState } from "react";

import Button from "../button/Button";
import cn from "classnames";
import styles from "./plate.module.scss";

function Plate({ plateData }) {
  const [value, setValue] = useState(0);

  //надо value всех карточек сложить и отправить в тотал

  const limitDescription = () => {
    if (plateData.description.length > 51) {
      return `${plateData.description.slice(0, 51)}...`;
    }
    return plateData.description;
  };

  const showHandler = () => {
    if (plateData.description.length < 51) {
      //кнопка disable
      console.log("disabled");
    }
    if (plateData.description.length > 51) {
      return plateData.description;
    }
    //нажали - надпись поменялась на хайд, а текст открылся - нажали - надпись поменялась на шоу, а текст скрылся
  };

  const valueHandler = () => {
    setValue(value + 1);
  };
  //

  return (
    <div className={cn(styles.plate)}>
      <div className={cn(styles.plate__info)}>
        <span className={cn(styles.plate__value)}>{value}</span>
        <span className={cn(styles.plate__title)}>{plateData.progress}</span>
        <span className={cn(styles.plate__description)}>{limitDescription()}</span>
      </div>
      <div className={cn(styles.plate__control)}>
        <Button use="add" text="add"></Button>
        <Button use="showToggle" text="show"></Button>
      </div>
    </div>
  );
}
export default Plate;
