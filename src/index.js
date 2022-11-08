import './index.css'
import React from 'react'
import ReactDOM  from 'react-dom'

import App from './App'


//método .render ele recebe o elemento que você quer renderizar;
ReactDOM.render(
    <App></App>,
    
    //pegando o elemento e jogando dentro da página
    document.getElementById('root')
) 