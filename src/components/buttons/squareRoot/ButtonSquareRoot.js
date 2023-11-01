import '../../../style/button.scss';
import img from '../../resources/img/square-root.png';

const ButtonSquareRoot = () => {
    return (
        <button className="button bgOperation mg">
            <img style={{'width': '25px'}} src={img}/>
        </button>
    )
}

export default ButtonSquareRoot;