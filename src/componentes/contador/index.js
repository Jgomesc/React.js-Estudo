import { useState } from "react"    
import '../contador/index.scss'


export default function Contador() {
    const [cont , setCont] = useState(0)
    

    function add() {
        setCont (cont +1);
    }

    function red() {
        setCont (cont -1);
    }

    function rei() {
        setCont(0);
    }

   
   
    return (
        <section className="pg-contador">
            <h1> Contador </h1>

            <div> {cont} </div>
          
            <button onClick={add} className="btn-adicionar"> Adicionar Nº </button>
            <button onClick={red} className="btn-reduzir"> Reduzir Nº </button>
            
            <br/>
            <br/>
            
            <button onClick={rei} className="btn-reiniciar"> Reiniciar do 0 </button>


             <hr/>
        </section>

       

    )
}