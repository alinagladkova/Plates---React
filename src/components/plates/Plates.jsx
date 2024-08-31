import { useState } from "react";

import Plate from "../plate/Plate";
import cn from "classnames";
import styles from "./plates.module.scss";

function Plates({ data }) {
  const [total, setTotal] = useState(0);

  const setStateTotal = () => {
    let valueArray = [];
    data.map((card) => {
      valueArray.push(card.initialAmount);
    });
    valueArray.push(card.initialAmount);
    const initialTotal = valueArray.reduce((acc, el) => acc + el, 0);
    setTotal(initialTotal);
  };

  //в тотал мы считаем сколько всего тасков, а таски добавляем кнопками
  const generateCards = () => {
    return data.map((card) => {
      return <Plate key={card.id} plateData={card} totalCounter={0}></Plate>;
    });
  };

  return (
    <div className={cn(styles.plates)}>
      <span className={cn(styles.plates__total)}>Total: {setStateTotal()}</span>
      <div className={cn(styles.plates__list)}>
        {generateCards()}
        {/* <div className={cn(styles.plates__plate)}>{generateCards()}</div> */}
      </div>
    </div>
  );
}

export default Plates;
