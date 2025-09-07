import "./App.css";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeExpense from "./Components/IncomeExpense";
import TransactionList from "./Components/TransactionList";
import AddTransaction from "./Components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <GlobalProvider>
        <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
      <Footer />
    </>
  );
}

export default App;
