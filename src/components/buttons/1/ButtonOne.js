import '../../../style/button.scss';

const ButtonOne = (props) => {
    return (
        <button onClick={() => {props.getOne('1')}} className="button bgNumber mg">1</button>
    )
}

export default ButtonOne;