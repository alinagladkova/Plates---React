import Plate from "../plate/Plate";
import cn from "classnames";
import styles from "./plates.module.scss";

function Plates({ data }) {
  //в тотал мы считаем сколько всего тасков, а таски добавляем кнопками
  const generateCards = () => {
    return data.map((card) => {
      return <Plate key={card.id} plateData={card}></Plate>;
    });
  };

  return (
    <div className={cn(styles.plates)}>
      <span className={cn(styles.plates__total)}>Total:0</span>
      <div className={cn(styles.plates__list)}>
        {generateCards()}
        {/* <div className={cn(styles.plates__plate)}>{generateCards()}</div> */}
      </div>
    </div>
  );
}

export default Plates;
