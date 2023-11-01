import '../../../style/button.scss';
import img from '../../resources/img/arrow.png';

const ButtonBack = () => {
    return (
        <button className="button bgOperation size-text mg">
            <img style={{'width': '30px'}} src={img}/>
        </button>
    )
}

export default ButtonBack;