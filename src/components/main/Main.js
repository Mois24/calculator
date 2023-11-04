import {useState} from 'react';

import Screen from '../screen/Screen';
import ToggleSwitch from '../toggleSwitch/ToggleSwitch';
import ButtonOnOff from '../buttons/on-off/ButtonOnOff';
import ButtonExponentiation from '../buttons/exponentiation/ButtonExponentiation';
import ButtonLeftBracket from '../buttons/left-bracket/ButtonLeftBracket';
import ButtonRightBracket from '../buttons/right-bracket/ButtonRightBracket';
import ButtonBack from '../buttons/back/ButtonBack';
import ButtonDelete from '../buttons/delete/ButtonDelete';
import ButtonSeven from '../buttons/7/ButtonSeven';
import ButtonEight from '../buttons/8/ButtonEight';
import ButtonNine from '../buttons/9/ButtonNine';
import ButtonDivision from '../buttons/division/ButtonDivision';
import ButtonSquareRoot from '../buttons/squareRoot/ButtonSquareRoot';
import ButtonFour from '../buttons/4/ButtonFour';
import ButtonFive from '../buttons/5/ButtonFive';
import ButtonSix from '../buttons/6/ButtonSix';
import ButtonMultiply from '../buttons/multiply/ButtonMultiply';
import ButtonPercent from '../buttons/percent/ButtonPercent';
import ButtonOne from '../buttons/1/ButtonOne';
import ButtonTwo from '../buttons/2/ButtonTwo';
import ButtonThree from '../buttons/3/ButtonThree';
import ButtonMinus from '../buttons/minus/ButtonMinus';
import ButtonFromTheNumber from '../buttons/oneFromTheNumber/ButtonFromTheNumber';
import ButtonZero from '../buttons/0/ButtonZero';
import ButtonDoubleZero from '../buttons/00/ButtonDoubleZero';
import ButtonDot from '../buttons/dot/ButtonDot';
import ButtonPlus from '../buttons/plus/ButtonPlus';
import ButtonEquals from '../buttons/equals/ButtonEquals';

import './Main.scss';
import '../../style/button.scss';
import '../../style/style.scss';
import img from '../resources/img/OM.png';

const Main = () => {
    let count;
    const [number, setNumber] = useState();
    const [screen, setScreen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [inclusion, setInclusion] = useState('ON');

    const toggleScreen = () => {
        setScreen(screen => !screen);
    }

    const toggleVisible = (value) => {
        setVisible(visible => !visible);
        setInclusion(visible ? 'ON' : 'OFF');
        setNumber(visible ? value : '0');
    }

    const getZero = (value) => {
        count = number + value
        setNumber(count);
    }

    const getOne = (value) => {
        count = number + value;
        setNumber(count);
    }

    const getPlus = (value) => {
        count = number + value;
        setNumber(count);
        console.log(count);
    }


    return (
        <div className='wrapper'>
            <Screen visible={visible} number={number} screen={screen}/>
            <div className='second'>
                <div className='toggle'>
                    <ToggleSwitch toggleScreen={toggleScreen}/>
                </div>
                <div>
                    <img src={img} className='img'/>
                </div>
                <div className='text'>Calculator from<br/> OM Company</div>
                <ButtonOnOff toggleVisible={toggleVisible} inclusion={inclusion}/>
            </div>
            <div className='buttons'>
                <ButtonExponentiation />
                <ButtonLeftBracket />
                <ButtonRightBracket />
                <ButtonBack />
                <ButtonDelete />
                <ButtonSeven />
                <ButtonEight />
                <ButtonNine />
                <ButtonDivision />
                <ButtonSquareRoot />
                <ButtonFour />
                <ButtonFive />
                <ButtonSix />
                <ButtonMultiply />
                <ButtonPercent />
                <ButtonOne getOne={getOne}/>
                <ButtonTwo />
                <ButtonThree />
                <ButtonMinus />
                <ButtonFromTheNumber />
                <ButtonZero getZero={getZero}/>
                <ButtonDoubleZero />
                <ButtonDot />
                <ButtonPlus getPlus={getPlus}/>
                <ButtonEquals />
            </div>
        </div>
    )
}

export default Main;