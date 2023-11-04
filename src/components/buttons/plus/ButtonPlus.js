import '../../../style/button.scss';

const ButtonPlus = (props) => {
    return (
        <button onClick={() => {props.getPlus('+')}} className="button bgGreenButton mg">+</button>
    )
}

export default ButtonPlus;