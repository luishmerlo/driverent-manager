export interface VeiculoContextType {
  marca: string;
  modelo: string;
  placa: string;
  ano?: number;
  preco?: number;
  status?: "Disponível" | "Alugado";
}

export interface FrotaContextType {
  frota: VeiculoContextType[];
  adicionarCarro: (veiculo: VeiculoContextType) => void;
  removerCarro: (place: string) => void;
}
