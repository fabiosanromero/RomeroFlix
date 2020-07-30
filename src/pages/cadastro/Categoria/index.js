import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {

    const [categorias, setCategorias]= useState(['Teste'])
    const valoresIniciais = {
        nome:'',
        descricao:'',
        cor:'#000',
    }
    const [nomeDaCategoria, setnomeDaCategoria] = useState('Valor Inicial');
    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>
            <form onSubmit={function handleSubmit(infosDoEvento){
                infosDoEvento.preventDefault();
                setCategorias([
                        ...categorias,
                        nomeDaCategoria
                ])
            } }>

                <label>
                    Nome da Categoria:
                    <input
                        type="text"
                        value={nomeDaCategoria}
                        onChange={ function funcaoHandlerQueoErroPediu(infosDoEvento){
                            setnomeDaCategoria(infosDoEvento.target.value);
                        }}
                    />
                </label>

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria,indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
  }

export default CadastroCategoria;