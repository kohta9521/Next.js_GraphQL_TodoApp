import React from "react";

// scss
import styles from "./styles/Title.module.scss";

// props
export type TitleProps = {
  id: string;
  text: string;
};

const Title = ({ id, text }: TitleProps) => {
  return (
    <h1 className={styles.title} key={id}>
      {text}
    </h1>
  );
};

export default Title;
