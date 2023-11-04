import "./Screen.scss";

const Screen = (props) => {
    return (
        <div className={props.screen ? 'light-screen' : 'screen'}>
            <span>
                {props.visible ? props.number : null}
            </span>
        </div>
    )
}

export default Screen;