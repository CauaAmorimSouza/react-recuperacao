import React from 'react'

function Livro(){
    return(
        <div className="Livro">
            <img src="Sangue.jpg" alt="" />
            <section className='Descricao'>
            <p>TÍTULO: "Sangue Azul"</p>
            <p>AUTOR: Ana Carolina Delmas</p>
            <p>Publicado em: 2016</p>
            </section>
            <p className='Sinopse'>Sinopse: Os irmãos Zolah e Raquel foram separados pela mãe quando crianças. Anos depois, o circo em que Zolah trabalha arma a lona na paradisíaca Fernando de Noronha, colocando os dois frente a frente e trazendo o passado à tona.</p>
        </div>
    )
}

export default Livro