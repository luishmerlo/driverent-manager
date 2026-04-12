import "./styles.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { FrotaProvider } from "./contexts/FrotaContext";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import VehicleRegister from "./pages/VehicleRegister";
import FleetDashboard from "./pages/FleetDashboard";
import VehicleDetails from "./pages/VehicleDetails";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import FleetList from "./pages/FleetList";

// Usei localStorage no FrotaContext porque fazia mais sentido

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <FrotaProvider>
      <div className="App">
        <Routes>
          <Route
            element={
              <RootLayout isLogged={isLogged} setIsLogged={setIsLogged} />
            }
          >
            <Route path="/" element={<Home />} />
            <Route
              element={
                <ProtectedRoute isLogged={isLogged} setIsLogged={setIsLogged} />
              }
            >
              <Route path="/cadastrar" element={<VehicleRegister />} />
              <Route path="/frota" element={<FleetDashboard />}>
                <Route
                  path="disponiveis"
                  element={<FleetList status="Disponível" />}
                />
                <Route
                  path="alugados"
                  element={<FleetList status="Alugado" />}
                />
              </Route>
              <Route path="/veiculo/:id" element={<VehicleDetails />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </FrotaProvider>
  );
}
