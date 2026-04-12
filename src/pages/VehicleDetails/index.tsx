import styles from "./VehicleDetails.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useFrota } from "../../contexts/FrotaContext";

export default function VehicleDetails() {
  const { id } = useParams();
  const { frota } = useFrota();
  const navigate = useNavigate();

  const veiculo = frota.find((veiculo) => veiculo.placa === id);

  if (!veiculo) {
    return (
      <div className={styles.card}>
        <p>Veículo não encontrado.</p>;
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2>Visualizando dados do veículo placa/ID: {veiculo.placa}</h2>
      <div className={styles.card}>
        <p>Marca: {veiculo.marca}</p>
      </div>
      <div className={styles.card}>
        <p>Modelo: {veiculo.modelo}</p>
      </div>
      {veiculo.ano && (
        <div className={styles.card}>
          <p>Ano: {veiculo.ano}</p>
        </div>
      )}
      {veiculo.preco && (
        <div className={styles.card}>
          <p>Preço: R${veiculo.preco},00</p>
        </div>
      )}
      {veiculo.status && (
        <div className={styles.card}>
          <p>Status: {veiculo.status}</p>
        </div>
      )}
      <button className={styles.botaoDetalhes} onClick={() => navigate(-1)}>
        Voltar para Lista
      </button>
    </div>
  );
}
