import styles from "./FleetDashboard.module.css";
import { Outlet, Link } from "react-router-dom";

export default function FleetDashboard() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link className={styles.botaoDisponiveis} to="/frota/disponiveis">
          Disponíveis
        </Link>
        <Link className={styles.botaoAlugados} to="/frota/alugados">
          Alugados
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
