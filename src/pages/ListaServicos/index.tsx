import "./style.css";
import Footer from "../../components/Footer";
import CardServico from "../../components/CardServico";
import { useEffect, useState } from "react";
import api from "../../utils/api";

function ListaServicos() {
    const [servicos, setServicos] = useState<any[]>([]);

    const [techDigitada, setTechDigitada] = useState<string>("");

    function verificarCampoTech(event: any) {
        if (event.target.value === "") {
            listarServicos();
        }
        setTechDigitada(event.target.value);
    }

    function buscarServicoPorTech(event: any) {
        event.preventDefault();

        const servicosFiltrados = servicos.filter((servico: any) => servico.techs.includes(techDigitada.toLocaleUpperCase()));

        if (servicosFiltrados.length === 0) {
            alert("Nenhum desenvolvedor(a) com essa skill :(")
        } else {
            setServicos(servicosFiltrados);
        }
    }

    function listarServicos() {
        api.get("servicos")
        .then(response => {
            setServicos(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(() => { 
        listarServicos();
      }, [])

    return (
        <>
            <main className="main_lista_servicos">
                <div className="container container_lista_servicos">
                    <div className="lista_servicos_conteudo">
                        <h1 className="titulo">Lista de Serviços</h1>
                        <hr />
                        <form method="post" onSubmit={buscarServicoPorTech}>
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar serviços</label>
                                <div className="campo-label">
                                    <input type="search" onChange={verificarCampoTech} name="campo-busca" id="busca" placeholder="Buscar serviços por tecnologias..." />
                                    <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                                {servicos.map((servico, index) => (
                                    <CardServico
                                        key={index}
                                        titulo={servico.nome}
                                        proposta={servico.valor}
                                        descricao={servico.descricao}
                                        techs={servico.techs}
                                        id={servico.id}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default ListaServicos