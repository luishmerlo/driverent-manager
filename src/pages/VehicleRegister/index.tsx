import styles from "./VehicleRegister.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFrota } from "../../contexts/FrotaContext";
import { toast } from "react-toastify";

export default function VehicleRegister() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [placa, setPlaca] = useState("");
  const [ano, setAno] = useState("");
  const [preco, setPreco] = useState("");
  const { adicionarCarro } = useFrota();
  const navigate = useNavigate();

  function cadastrarVeiculo() {
    if (!marca || !modelo || !placa) {
      return toast.warning("Preencha os três campos obrigatórios");
    }

    setIsProcessing(true);

    setTimeout(() => {
      adicionarCarro({
        marca,
        modelo,
        placa,
        ano: ano ? Number(ano) : undefined,
        preco: preco ? Number(preco) : undefined,
        status: "Disponível",
      });

      setIsProcessing(false);
      toast.success("Novo veículo adicionado");
      navigate("/frota");

      setMarca("");
      setModelo("");
      setPlaca("");
      setAno("");
      setPreco("");
    }, 2000);
  }

  return (
    <div className={styles.container}>
      <label htmlFor="marca">Marca:</label>
      <input
        className={styles.input}
        onChange={(event) => setMarca(event.target.value)}
        value={marca}
        id="marca"
        placeholder="Digite a marca do veículo"
        type="text"
      />
      <label htmlFor="modelo">Modelo:</label>
      <input
        className={styles.input}
        onChange={(event) => setModelo(event.target.value)}
        value={modelo}
        id="modelo"
        placeholder="Digite o modelo do veículo"
        type="text"
      />
      <label htmlFor="placa">Placa:</label>
      <input
        className={styles.input}
        onChange={(event) => setPlaca(event.target.value)}
        value={placa}
        id="placa"
        placeholder="Digite a placa do veículo"
        type="text"
      />
      <label htmlFor="ano">Ano:</label>
      <input
        className={styles.input}
        onChange={(event) => setAno(event.target.value)}
        value={ano}
        id="ano"
        placeholder="Campo opcional"
        type="text"
      />
      <label htmlFor="preco">Preço:</label>
      <input
        className={styles.input}
        onChange={(event) => setPreco(event.target.value)}
        value={preco}
        id="preco"
        placeholder="Campo opcional"
        type="text"
      />
      <button
        disabled={isProcessing}
        className={styles.botao}
        type="button"
        onClick={cadastrarVeiculo}
      >
        {isProcessing ? "Processando..." : "Cadastrar Veículo"}
      </button>
    </div>
  );
}
