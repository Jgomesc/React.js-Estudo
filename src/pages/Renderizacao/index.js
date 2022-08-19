import { useState } from 'react'
import './index.scss'




export default function Renderizacao(){

    const [mostrar, setMostrar] = useState(false);

    const [respQuiz, setRespQuiz] = useState('');
    
    
    function exibir() {
        setMostrar(true)
    }



    function ross() {
        setRespQuiz('Você Errou, ele só fala de Dinossauros')
    
    }


    
    function joey() {
        setRespQuiz('Você Acertou, How you doing men ?')
    
    }

    function chandler() {
        setRespQuiz('Você Errou, Ele só quer voltar a Fumar')
    
    }

    function phoebes() {
        setRespQuiz('Você Você Errou, Ela compõe suas músicas')
    
    }

    function monica() {
        setRespQuiz('Você Você Errou, ela só cozinha')
    
    }

    function reachel() {
        setRespQuiz('Você Você Errou, ela só pensa em roupas')
    
    }

    return (

        <section>
            <h1 className='pagina-renderizacao'> Renderização Condicional</h1>
            
            <hr></hr>

            <div  className='btn-renderizacao'>
                    <button onClick={exibir}>Oi, Tenho uma Pergunta para VC</button> 
                
                  {mostrar === true && 
                    <h3>NAMORA COMIGO BB?</h3>}

            </div>
        
              <hr/> 

              <div className='Quiz-Pergunta'>
               <h3> Qual é o Personagem de FRIENDS Fala "HOW YOU DOING" ? </h3> 
              </div>
              
              <div className='Quiz-Alternativa'>   
                
                <input type='radio' name='Quiz' onClick={ross}/> Ross
                <br/>
                <input type='radio' name='Quiz' onClick={reachel}/> Reachel
                <br/>
                <input type='radio' name='Quiz' onClick={monica}/> Monica
                <br/>
                <input type='radio' name='Quiz' onClick={phoebes}/> Phoebes
                <br/>
                <input type='radio' name='Quiz' onClick={chandler}/> Chandler
                <br/>
                <input type='radio' name='Quiz' onClick={joey} /> Joey

                <br/>
                <b>{respQuiz}</b>

              </div>

                <hr/>
              
           

        </section>
    )
}