import Sidebar from "../../components/sidebar/sidebar";
import Map from "../../components/Map/Map";
import styles from "./AppLayout.module.css";
import User from "../../components/User/User";

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
};

export default AppLayout;
