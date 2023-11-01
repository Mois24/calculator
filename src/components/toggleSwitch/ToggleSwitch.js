import './ToggleSwitch.scss';

const ToggleSwitch = (props) => {
    return (
        <div>
            <input onClick={props.toggleScreen} type="checkbox" id="switch" /><label for="switch"></label>
        </div>
    )
}

export default ToggleSwitch;