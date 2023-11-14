import { Link, useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import "./Cabecalho.scss";


export default function Cabecalho() {

  const rotaAtual = useLocation();

    const userLogado = JSON.parse(sessionStorage.getItem("user-obj"));
    const [usuario] = useState(userLogado);

    const handleLogout = ()=>{
      sessionStorage.removeItem("user-obj");
      sessionStorage.removeItem("token-user");
      window.location = "/";
    }
    
if(sessionStorage.getItem("token-user")){
  return (
    <>
        <header className="cabecalho">
          
          <div>
            <p>Olá {usuario.name}</p>
            <p>{usuario.email}</p>
          </div>

          <img src="/img/produtos.png" alt="Mãos segurando caixas." /> 

          {/* Crie uma lista com 5 links para as nossas rotas:
          Obs: Utilize o componente Link do router-dom */}

          <nav>
            <ul>
              <li><Link to="/" className={rotaAtual.pathname == "/" ? "active" : ""}>HOME</Link></li>
              <li><Link to="/produtos" className={rotaAtual.pathname == "/produtos" ? "active" : ""}>PRODUTOS</Link> </li>
              <li><Link to="/login" className={rotaAtual.pathname == "/login" ? "active" : ""} onClick={handleLogout}>LOGOUT</Link> </li>
            </ul>
          </nav>

        </header> 
    </>
  )
  } else{
    return (
      <>
          <header className="cabecalho">
            
            <img src="/img/produtos.png" alt="Mãos segurando caixas." /> 
  
            {/* Crie uma lista com 5 links para as nossas rotas:
            Obs: Utilize o componente Link do router-dom */}
  
            <nav>
              <ul>
                <li><Link to="/" className={rotaAtual.pathname == "/" ? "active" : ""}>HOME</Link></li>
                <li><Link to="/login" className={rotaAtual.pathname == "/login" ? "active" : ""}>LOGIN</Link> </li>
              </ul>
            </nav>
  
          </header> 
      </>
    )
  }

  
}

