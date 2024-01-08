import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container + " bordered-b"}>
        <h2 className="title bordered-r">Footer</h2>
      </div>
    </footer>
  );
}
