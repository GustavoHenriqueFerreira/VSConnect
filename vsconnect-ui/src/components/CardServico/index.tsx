import { Link } from "react-router-dom";
import "./style.css";

function CardServico(props: any) {
    function verificarListaTechs() {
        if (typeof props.techs === "string") {
            return JSON.parse(props.techs);
        } else {
            return props.techs;
        }
    }

    return (
        <li>
            <Link to={"/servico/" + props.id} style={{ textDecoration: 'none', color: 'white' }}>
                <div className="servico">
                    <div className="topo_servico">
                        <h3>{props.titulo}</h3>
                        <span>R$ {props.valor}</span>
                    </div>
                    <p>{props.descricao}</p>
                    <div className="techs">
                        {verificarListaTechs().map((tech: string, index: number) => (
                            <span key={index}>{tech}</span>
                        ))}
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default CardServico;