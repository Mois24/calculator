import "./Screen.scss";

const Screen = (props) => {
    return (
        <div className={props.screen ? 'light-screen' : 'screen'}>0</div>
    )
}

export default Screen;