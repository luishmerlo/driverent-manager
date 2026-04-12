import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import styles from "./RootLayout.module.css";
import { RootLayoutProps } from "./types";
import { ToastContainer } from "react-toastify";

// Header com position sticky conforme feedback do TP3

export default function RootLayout({ isLogged, setIsLogged }: RootLayoutProps) {
  return (
    <>
      <header className={styles.header}>
        <NavBar isLogged={isLogged} setIsLogged={setIsLogged} />
        <ToastContainer />
        <h1 className={styles.titulo}>Sistema de Gestão de Frota DriveRent</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
