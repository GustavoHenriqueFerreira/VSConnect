import "../ListaDevs/style.css"
import Footer from "../../components/Footer";
import CardDev from "../../components/CardDev";
import { useEffect, useState } from "react";
import api from "../../utils/api";

function ListaDevs() {
    const [devs, setDevs] = useState<any[]>([]);

    const [techDigitada, setTechDigitada] = useState<string>("");

    function verificarCampoTech(event: any) {
        if (event.target.value === "") {
            listarDesenvolvedores();
        }
        setTechDigitada(event.target.value);
    }

    function buscarDevPorTech(event: any) {
        event.preventDefault();

        const devsFiltrados = devs.filter((dev: any) => dev.hardSkills.includes(techDigitada.toLocaleUpperCase()));

        if (devsFiltrados.length === 0) {
            alert("Nenhum desenvolvedor(a) com essa skill :(")
        } else {
            setDevs(devsFiltrados);
        }
    }

    function listarDesenvolvedores() {
        api.get("users")
        .then(response => {
            setDevs(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(() => { 
        listarDesenvolvedores();
      }, [])

    return (
        <>
            <main className="main_login">
                <div className="container container_lista_devs">
                    <div className="lista_devs_conteudo">
                        <h1>Lista de Devs</h1>
                        <hr />
                        <form method="post" onSubmit={buscarDevPorTech}>
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar desenvolvedores</label>
                                <div className="campo-label">
                                    <input onChange={verificarCampoTech} type="search" name="campo-busca" id="busca" placeholder="Buscar desenvolvedores por tecnologias..." />
                                    <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            {devs.map((dev, index) => (
                                <CardDev
                                    key={index}
                                    foto={`https://dark-ruby-scallop-robe.cyclic.app/static/${dev.user_img}`}
                                    nome={dev.nome}
                                    email={dev.email}
                                    techs={dev.hardSkills}
                                    id={dev.id}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default ListaDevs;