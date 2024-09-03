import cn from "classnames";
import styles from "./button.module.scss";

function Button({ use, text, handler }) {
  return (
    <button className={cn(styles.btn, styles[`btn--${use}`])} onClick={handler}>
      {text}
    </button>
  );
}

export default Button;
