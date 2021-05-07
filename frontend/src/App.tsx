import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import Navbar from "components/Navbar";



function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <h1 className="text-primary py 3">Dashboard</h1>

      <div className="row px-3">
      <div className="col sm 6">
      <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
          <BarChart/>
      </div>
      
      <div className="col sm 6">
      <h5 className="text-center text-secondary">Todas as Vendas</h5>
      <DonutChart/>
      </div>
      </div>
      <div className="py-3">
        <h2>Todas as vendas</h2>
        </div>
     <DataTable/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
