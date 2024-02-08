import './index.scss';
import LogoS from '../../Assets/images/letter-k.png'
const Logo = () => {
    return (
        <div className="logo-container">
            <img src={LogoS} alt="" className="solid-logo" />
        </div>
    )
}

export default Logo