import '../../../style/button.scss';

const ButtonZero = (props) => {
    return (
        <button onClick={() => {props.getZero('0')}} className="button bgNumber mg">0</button>
    )
}

export default ButtonZero;