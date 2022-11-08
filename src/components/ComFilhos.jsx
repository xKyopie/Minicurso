import React from 'react'

export default props =>
    <div>
        <h2>Os Filhos:</h2>
        {/* Elementos filhos dentro de uma div*/}
        <div>
            {props.children}
        </div>
    </div>