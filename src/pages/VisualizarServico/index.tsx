import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import Footer from "../../components/Footer";
import "./style.css";

interface Servico {
    nome: string,
    valor: string,
    descricao: string,
}

function VisualizarServico() {
    const { idServico } = useParams();
    const [infoServico, setInfoServico] = useState<Servico>(Object)
    const [listaTechs, setListaTechs] = useState<[]>([])

    function buscarServicoPorID() {
        api.get("servicos/" + idServico)
            .then((response: any) => {
                setInfoServico({
                    nome: response.data.nome,
                    valor: response.data.valor,
                    descricao: response.data.descricao
            })

            setListaTechs(response.data.techs)

            })
            .catch((error: any) => console.log(error));

    }

    useEffect(() => {
        buscarServicoPorID();
    }, [])

    return (
        <>
            <main id="main_visualizarservico">
                <div className="container">
                    <h1>Serviço</h1>
                    <div className="servico">
                        <div className="topo_servico">
                            <h2>{infoServico.nome}</h2>
                            <span>R$ {infoServico.valor}</span>
                        </div>
                        <p>{infoServico.descricao}</p>

                        <div className="techs">
                        {listaTechs.map((tech: string, index: number) => (
                            <span key={index}>{tech}</span>
                        ))}
                    </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
}

export default VisualizarServico;