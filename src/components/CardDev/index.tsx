import { Link } from "react-router-dom";
import "./style.css";

function CardDev(props: any) {
    return (
        <ul>
            <li>
                <div className="dev">
                    <div className="grupo_contato">
                        <Link to={"/perfil/" + props.id} style={{ textDecoration: 'none', color: 'white' }}> <img src={props.foto} alt="" /></Link>
                        <div className="contato_dev">
                            <Link to={"/perfil/" + props.id} style={{ textDecoration: 'none', color: 'white' }}><h3>{props.nome}</h3></Link>
                            <Link to={"/perfil/" + props.id} style={{ textDecoration: 'none', color: 'white' }}><p>{props.email}</p></Link>
                        </div>
                    </div>
                    <div className="techs">
                        {props.techs.map((tech: string, index: number) => (
                            <span key={index}>{tech}</span>
                        ))}
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default CardDev;