import { useState } from "react";

import Plate from "../plate/Plate";
import cn from "classnames";
import styles from "./plates.module.scss";

function Plates({ data }) {
  const [total, setTotal] = useState(0);

  const setTotalHandler = (value) => {
    setTotal(total + value);
  };

  const generateCards = () => {
    return data.map((card) => {
      return (
        <div className={cn(styles.plates__plate)} key={card.id}>
          <Plate plateData={card} setTotalHandler={setTotalHandler}></Plate>
        </div>
      );
    });
  };

  return (
    <div className={cn(styles.plates)}>
      <span className={cn(styles.plates__total)}>Total: {total}</span>
      <div className={cn(styles.plates__list)}>{generateCards()}</div>
    </div>
  );
}

export default Plates;
