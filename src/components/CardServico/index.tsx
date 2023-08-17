import "./style.css";

function CardServico(props: any) {
    return (
        <li>
            <div className="servico">
                <div className="topo_servico">
                    <h3>{props.titulo}</h3>
                    <span>R$ {props.proposta}</span>
                </div>
                <p>{props.descricao}</p>
                <div className="techs">
                    {props.techs.map((tech: string, index: number) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>
            </div>
        </li>
    )
}

export default CardServico;