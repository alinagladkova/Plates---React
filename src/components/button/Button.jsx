import cn from "classnames";
import styles from "./button.module.scss";

function Button({ use, text, valueHandler }) {
  //нажали - надпись поменялась на хайд, а текст открылся - нажали - надпись поменялась на шоу, а текст скрылся
  return (
    <button className={cn(styles.btn, styles[`btn--${use}`])} onClick={valueHandler}>
      {text}
    </button>
  );
}

export default Button;

/* 

ДЗ:

написать стили для кнопок +++
при клике на кнопку адд, добавлять в тотал цисло которое есть на карточке

изначально подрезать описание (...) показывать 15 символов + ...   +++
при клике на кнопку show полный показ desc. 

создать массив с объектами (данные) и отрисовать все плитки по данным (использовать метод map)


*/
