import './App.css'
import React from 'react'
import Card from './components/layouts/Card'
// import ComFilhos from './components/ComFilhos'
import Primeiro from './components/Primeiro'
// import ComParametro from './components/ComParametro'

export default (props) =>(
<div className='App'>
        <Card titulo="Primeiro Componente">
            <Primeiro/>
        </Card>
        <Card titulo="Exercicio"> Conteudo </Card>


        {/* <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li> 
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos> */}

        {/*<Primeiro></Primeiro>
        <ComParametro titulo="Esse é titulo" 
        subtitulo="Esse é o subtitulo" />*/}
          
    </div>
);

