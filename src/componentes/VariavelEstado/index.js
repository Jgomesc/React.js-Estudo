import './index.scss'

import Contador from '../contador'


export default function VariavelEstado() {

    return(
        <section className='page-var-estado'> 
            <h1>Variável de Estado</h1>
            <hr/>

            <div> 
                <Contador> </Contador>
               
            </div>
        
        
        </section>

    )
}