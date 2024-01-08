import styles from "./styles.module.css";
import SideBar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Footer/Footer";

const allowed = false;
export default function Home() {
  return (
    <>
      <main className={styles.main + " bordered-g"}>
        <div className={styles.container + " bordered-b"}>
          <SideBar />
          <div className={styles["main-content"] + " bordered-b"}>
            <h2 className="title bordered-g">Main</h2>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
