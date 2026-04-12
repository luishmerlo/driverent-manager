import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Bem-vindo ao DriveRent!</h2>
      <p>
        Gerencie sua frota de aluguel de veículos de forma simples e eficiente -
        cadastre veículos, acompanhe disponibilidade e visualize detalhes em um
        só lugar.
      </p>
      <img
        src="https://images.pexels.com/photos/4070869/pexels-photo-4070869.jpeg"
        title="Frota de veículos"
        alt="Frota de veículos"
      />
    </div>
  );
}
