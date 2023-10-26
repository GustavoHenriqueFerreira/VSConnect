import "./style.css"
import Logo from "../../assets/img/logo.svg";
import Dev from "../../assets/img/dev.png";
import Facebook from "../../assets/img/facebook.svg";
import Instagram from "../../assets/img/instagram.svg";
import Linkedin from "../../assets/img/linkedin.svg";
import { Link } from "react-router-dom";

function FooterHome() {
    return (
        <footer>
                <div className="container rodape">
                    <div className="span_dicas">
                        <img src={Dev} alt="" />
                        <div className="span_dicas_texto">
                            <p>Temos algumas dicas para o seu serviço ou freela ser um sucesso, acesse nossa página de
                                recomendações para saber mais.</p>
                            <Link to={"/"} className="botao botao_dicas">mais dicas</Link>
                        </div>
                    </div>
                    <div className="rodape_conteudo">
                        <div className="rodape_conteudo_paginas">
                            <h2>Páginas</h2>
                            <ul>
                                <li><Link to={'/login'}>Login</Link></li>
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/lista/servicos'}>Listar Serviços</Link></li>
                                <li><Link to={'/cadastro/servicos'}>Cadastrar Serviços</Link></li>
                                <li><Link to={'/cadastro/usuario'}>Cadastrar Desenvolvedor</Link></li>
                                <li><Link to={'/lista/devs'}>Lista de Devs</Link></li>
                            </ul>
                        </div>
                        <img src={Logo} alt="" />
                        <div className="rodape_conteudo_contatos">
                            <h2>Contatos</h2>
                            <div>
                                <Link to={"/"}><img src={Facebook} alt="" /></Link>
                                <Link to={"/"}><img src={Instagram} alt="" /></Link>
                                <Link to={"/"}><img src={Linkedin} alt="" /></Link>
                            </div>
                            <Link to={"/"}>contato@vsconnect.com</Link>
                        </div>
                    </div>
                    <p>todos os direitos reservados ©.</p>
                </div>
            </footer>
    )
}

export default FooterHome;