import React from "react";
import './styles.css'

export default function ItemListContainer ({saludo}){
    return (
      <div className="bienvenida">
      <h2 className="texto" >{saludo}</h2>
      </div>  
    )

}