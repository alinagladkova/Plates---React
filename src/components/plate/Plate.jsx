import { useState } from "react";

import Button from "../button/Button";
import cn from "classnames";
import styles from "./plate.module.scss";

function Plate({ plateData, total }) {
  const [value, setValue] = useState(plateData.initialAmount);

  // const [disabled, setDisable] = useState(false);
  const [desc, setDesc] = useState(false);

  //надо value всех карточек сложить и отправить в тотал
  const countTotal = () => {};

  const limitDescription = () => {
    if (plateData.description.length > 51 && desc === false) {
      return `${plateData.description.slice(0, 51)}...`;
    }
    return plateData.description;
  };

  const setStateDesc = () => {
    setDesc((desc) => !desc);
  };

  const showHandler = () => {
    setStateDesc();
  };

  const valueHandler = () => {
    // let valueArray = [];
    // console.log(valueArray);

    setValue(value + 1);
    // total+ 1;
  };

  return (
    <div className={cn(styles.plate)}>
      <div className={cn(styles.plate__info)}>
        <span className={cn(styles.plate__value)}>{value}</span>
        <span className={cn(styles.plate__title)}>{plateData.progress}</span>
        <span className={cn(styles.plate__description)}>{limitDescription()}</span>
      </div>
      <div className={cn(styles.plate__control)}>
        <Button use="add" text="add" handler={valueHandler}></Button>
        <Button use="showToggle" text={desc === true ? "hide" : "show"} handler={showHandler}></Button>
      </div>
    </div>
  );
}
export default Plate;
