import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { VeiculoContextType, FrotaContextType } from "./types";

const FrotaContext = createContext<FrotaContextType | undefined>(undefined);

export function FrotaProvider({ children }: { children: ReactNode }) {
  const [frota, setFrota] = useState<VeiculoContextType[]>(() => {
    const salvo = localStorage.getItem("frota");
    return salvo ? JSON.parse(salvo) : [];
  });

  useEffect(() => {
    const salvo = localStorage.getItem("frota");
    if (!salvo) {
      fetch("/api-veiculos.json")
        .then((response) => response.json())
        .then((data) => setFrota(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("frota", JSON.stringify(frota));
  }, [frota]);

  function adicionarCarro(novoVeiculo: VeiculoContextType) {
    setFrota((estadoAnterior) => [...estadoAnterior, novoVeiculo]);
  }

  function removerCarro(placa: string) {
    setFrota((estadoAnterior) =>
      estadoAnterior.filter((veiculo) => veiculo.placa !== placa)
    );
  }

  const contextValue: FrotaContextType = {
    frota,
    adicionarCarro,
    removerCarro,
  };

  return (
    <FrotaContext.Provider value={contextValue}>
      {children}
    </FrotaContext.Provider>
  );
}

export function useFrota() {
  const context = useContext(FrotaContext);

  if (!context) {
    throw new Error("useFrota deve ser usado dentro de um FrotaProvider");
  }

  return context;
}
