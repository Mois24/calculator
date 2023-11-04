import '../../../style/button.scss';

const ButtonOnOff = (props) => {
    return (
        <button className="button bgGreenButton size-text mg">
            <span onClick={props.toggleVisible}>{props.inclusion}</span>
        </button>
    )
}

export default ButtonOnOff;