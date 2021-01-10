import { ReactComponent as Youtube } from './Youtube.svg';
import { ReactComponent as Linkedin } from './Linkedin.svg';
import { ReactComponent as Instagram } from './Instagram.svg';
import './styles.css'
function Footer(){
    return(

        <footer className="main-footer">

            App desenvolvido durante a 2º ed. do evente Semanda DevSuperior

            
            <div className="footer-icons">
                <a href="https://www.youtube.com/" target="_new">
                    <Youtube/>
                </a>

                <a href="https://www.linkedin.com/feed/" target="_new">
                    <Linkedin/>
                </a>

                <a href="https://www.instagram.com/" target="_new">
                    <Instagram/>
                </a>
            </div>
        </footer>
        
    )

}

export default Footer;