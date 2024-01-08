import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className="header bordered-g">
      <div className= {styles.container + " bordered-b"}>
        <div className="header__logo logo bordered-r">
          <span className="logo__text bordered-g">Web Lessons</span>
        </div>
      </div>
    </header>
  );
}
