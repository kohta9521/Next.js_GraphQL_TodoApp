// scss
import styles from "./page.module.css";

// components
import Title from "@/components/TItle";

export default function Home() {
  return (
    <div className={styles.page}>
      <Title id="title" text="Todo App / Next.js + GraphQL" />
    </div>
  );
}
