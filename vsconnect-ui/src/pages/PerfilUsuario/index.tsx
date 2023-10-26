import { Link, /* useNavigate, */ useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import Footer from "../../components/Footer";
import "./style.css";

interface Usuario {
    nome: string,
    foto: string,
    email: string,
    uf: string,
    cidade: string
}

function PerfilUsuario() {
    //const navigate = useNavigate();
    const { idUsuario } = useParams();
    const [infoUsuario, setInfoUsuario] = useState<Usuario>(Object);
    const [listaTechs, setListaTechs] = useState<[]>([])

    function buscarUsuarioPorID() {
        api.get("users/" + idUsuario)
            .then((response: any) => {
                setInfoUsuario({
                    nome: response.data.nome,
                    foto: response.data.user_img,
                    email: response.data.email,
                    cidade: response.data.cidade,
                    uf: response.data.uf,
                })

                if (typeof response.data.hardSkills === "string") {
                    return setListaTechs(JSON.parse(response.data.hardSkills));
                } else {
                    return setListaTechs(response.data.hardSkills);;
                }
            })
            .catch((error: any) => console.log(error));
    }

    /* function deslogar() {
        localStorage.removeItem("user");
        navigate("/login");
        navigate(0);
    } */

    useEffect(() => {
        buscarUsuarioPorID();
    }, [])

    return (
        <main id="main_perfilusuario_dev">
            <div className="container container_perfil_dev">
                <div className="perfil_dev_conteudo">
                    <h1>Página de Perfil - {infoUsuario.nome}</h1>

                    <div className="topo_dev">
                        <img src={"https://dark-ruby-scallop-robe.cyclic.app/static/" + infoUsuario.foto} alt={"Foto de perfil de " + infoUsuario.nome} />
                        <h2>{infoUsuario.nome}</h2>
                    </div>

                    <div className="contato_local">
                        <div className="contato">
                            <p>Email para contato: </p>
                            <Link to={"mailto:c" + infoUsuario.email}>{infoUsuario.email}</Link>
                        </div>
                        <div className="local">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path
                                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                                />
                            </svg>
                            <p>De: {infoUsuario.cidade} - {infoUsuario.uf}</p>
                        </div>
                    </div>

                    <div className="techs">
                        <p>Tecnologias principais: </p>
                        <div className="lista_skills">
                            {
                                listaTechs.map((tech: string, index: number) => {
                                    return <span key={index}>{tech}</span>
                                })
                            }
                        </div>
                        {/* <footer>
                            <Link to={"/login"} onClick={deslogar}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512">
                                    <path
                                        d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                                </svg>
                            </Link>
                        </footer> */}
                    </div>

                </div>
            </div>
            <Footer />
        </main>);
}

export default PerfilUsuario;