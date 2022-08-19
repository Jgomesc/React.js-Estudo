import '../Efeito/index.scss'
import { useEffect, useState } from "react"

export default function MediaAluno()  {

    const [media, setVerificarMedia] = useState();
    const [situacao, setSituacaoAluno] = useState();

    const [N1, setN1] = useState();
    const [N2, setN2] = useState();
    const [N3, setN3] = useState();



    function verificarMedia() {
        if(media < 0 || media > 10)
        setSituacaoAluno('Média Inválida =|')

        else if(media >= 5)
        setSituacaoAluno('Aluno Passou =)')

        else if(media >= 3 && media <= 5)
        setSituacaoAluno('Aluno está de Recuperação =(')

        else if(media = 0)
        setSituacaoAluno('Aluno JÁ ERA =(|')
    }

        function calcularMedia() {
            let m =(N1 + N2 + N3) / 3
            verificarMedia(m)
        }

        useEffect(() => 
            setSituacaoAluno
        , [media] )

    return (

        <section className="Media-Aluno" >
            <h1> Média do Aluno </h1>

            <div className='notas'>
                Nota 1: <input type='number' value={media} onChange={e => setN1(Number(e.target.value))}></input>
            </div>

            <div className='notas'>
                Nota 2: <input type="number" value={media} onChange={e => setN2(Number(e.target.value))}></input>
            </div>

            <div className='notas'>
                Nota 3: <input type="number" value={media} onChange={e => setN3(Number(e.target.value))}></input>
            </div>
            
            <div>
                {situacao}
            </div>

            <div>
                <button onClick={setVerificarMedia} className='btn'> Calcular Média </button>
            </div>
        
        
        
        </section>




    )

}

