import { ReactComponent as Youtube } from './Youtube.svg';
import { ReactComponent as Linkedin } from './Linkedin.svg';
import { ReactComponent as Instagram } from './Instagram.svg';
import './styles.css'
function Footer(){
    return(

        <footer className="main-footer">

            App desenvolvido durante a 2º edição do evento "Semana DevSuperio"<br/>
        
            
            

            
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UCIKwDZPlSfK6FxWyWXNGXDg" target="_new">
                    <Youtube/>
                </a>

                <a href="https://www.linkedin.com/in/ruan-cruz-909365197/" target="_new">
                    <Linkedin/>
                </a>

                <a href="https://www.instagram.com/ruan.soares_/" target="_new">
                    <Instagram/>
                </a>
            </div>
        </footer>
        
    )

}

export default Footer;