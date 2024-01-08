import styles from "./style.module.css";
import Link from "next/link";
export default function SideBar({ title="Topics" }) {
  return (
    <aside className={styles.aside}>
      <h2 className={"title bordered-r"}>{title}</h2>
      <nav className="bordered-r">
        <ul className={styles["nav-bar__menu"] + " border-g"}>
          <li className={styles.menu__item + " bordered-r"}>
            <a className="menu__link" href="Pages/FlexBox/index.html">
              FlexBox
            </a>
            <span className={styles["link-arrow"] + " material-symbols-outlined"}>
              arrow_forward
            </span>
          </li>
          <li className={styles.menu__item + " bordered-r"}>
            <a className="menu__link thrilling" href="Pages/Grid/index.html">
              Grid
            </a>
            <span className={styles["link-arrow"] + " material-symbols-outlined"}>
              arrow_forward
            </span>
          </li>
          <li className={styles.menu__item + " bordered-r"}>
            <a className="menu__link thrilling" href="Pages/Sandbox/index.html">
              Sandbox
            </a>
            <span className={styles["link-arrow"] + " material-symbols-outlined"}>
              arrow_forward
            </span>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
