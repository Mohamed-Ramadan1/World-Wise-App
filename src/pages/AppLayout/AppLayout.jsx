import Sidebar from "../../components/sidebar/sidebar";
import Map from "../../components/Map/Map";
import styles from "./AppLayout.module.css";

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
};

export default AppLayout;
