/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    };
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        });
    }

    function handleChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value,
          );
    }

    useEffect(() => {
        const URL = window.location.hostname.includes('localhost')
         ? 'http://localhost:8080/Categorias'
         : 'https://romeroflix.herokuapp.com/Categorias';
        fetch(URL)
         .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
         });
    }, []);

    return (
      <PageDefault>
        <h1>
          Cadastro de Categoria:
          {values.nome}
        </h1>
        <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                        ...categorias,
                        values,
                ]);

                setValues(valoresIniciais);
            }}
        >

          <FormField
            label="Nome"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          <Button>
            Cadastrar
          </Button>
        </form>
        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.id}`}>
              {categoria.titulo}
            </li>
                    ))}
        </ul>

        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    );
  }

export default CadastroCategoria;
