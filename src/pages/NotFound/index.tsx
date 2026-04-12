import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2>404 - Página não encontrada</h2>
      <p>Veículo ou página não encontrados.</p>
      <button className={styles.botaoDetalhes} onClick={() => navigate("/")}>
        Voltar ao Início
      </button>
    </div>
  );
}
