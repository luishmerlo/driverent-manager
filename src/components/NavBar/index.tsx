import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { NavBarProps } from "./types";

export default function NavBar({ isLogged, setIsLogged }: NavBarProps) {
  function toggleLogin() {
    setIsLogged((prev) => !prev);
  }

  return (
    <div className={styles.container}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${styles.menuLink} ${styles.active}` : styles.menuLink
        }
        to="/"
      >
        Início
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${styles.menuLink} ${styles.active}` : styles.menuLink
        }
        to="/cadastrar"
      >
        Novo Veículo
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${styles.menuLink} ${styles.active}` : styles.menuLink
        }
        to="/frota"
      >
        Frota
      </NavLink>
      <button
        type="button"
        className={styles.botao}
        onClick={toggleLogin}
        style={isLogged ? undefined : { backgroundColor: "#3b82f6" }}
      >
        {isLogged ? "Sair" : "Entrar"}
      </button>
    </div>
  );
}
