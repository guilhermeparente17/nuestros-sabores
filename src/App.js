import GlobalStyle from "./GlobalStyles";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import System from "./pages/System/System";
import Header from "./components/Header/Header";
import NewRevenue from "./pages/NewRevenue/NewRevenue";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
    />
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/system" element={<System />} />
        <Route path="/system/nova-receita" element={<NewRevenue />} />
      </Routes>

    </div>
  );
}

export default App;
