import Logo from "../Logo/Logo";
import styles from "./Sidebar.module.css";
import AppNav from "../AppNav/AppNav";
import Footer from "../Footer/Footer";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>Lists of cities</p>
      <Footer />
    </div>
  );
};

export default Sidebar;
