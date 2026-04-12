import { useFrota } from "../../contexts/FrotaContext";
import { useNavigate } from "react-router-dom";
import styles from "./FleetList.module.css";
import { FleetListProps } from "./types";
import { toast } from "react-toastify";

export default function FleetList({ status }: FleetListProps) {
  const { frota, removerCarro } = useFrota();
  const navigate = useNavigate();

  const filtrados = frota.filter((veiculo) => veiculo.status === status);

  return (
    <div className={styles.container}>
      <table className={styles.tabela}>
        <thead>
          <tr>
            <th className={styles.tabelaHeader}>Marca</th>
            <th className={styles.tabelaHeader}>Modelo</th>
            <th className={styles.tabelaHeader}>Placa</th>
            <th className={styles.tabelaHeader}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filtrados.map((veiculo) => (
            <tr key={veiculo.placa}>
              <td className={styles.tabelaDados}>{veiculo.marca}</td>
              <td className={styles.tabelaDados}>{veiculo.modelo}</td>
              <td className={styles.tabelaDados}>{veiculo.placa}</td>
              <td className={styles.tabelaDados}>
                <button
                  className={styles.botaoDetalhes}
                  onClick={() => navigate(`/veiculo/${veiculo.placa}`)}
                >
                  Ver Detalhes
                </button>
                <button
                  className={styles.botaoRemover}
                  onClick={() => {
                    removerCarro(veiculo.placa);
                    toast.success("O veículo foi removido");
                  }}
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
