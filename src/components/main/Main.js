import {useState} from 'react';

import Screen from '../screen/Screen';
import ToggleSwitch from '../toggleSwitch/ToggleSwitch';
import ButtonOnOff from '../buttons/on-off/ButtonOnOff';
import Button from '../buttons/Button';
import ButtonZero from '../buttons/0/ButtonZero';
import ButtonDoubleZero from '../buttons/00/ButtonDoubleZero';
import ButtonOne from '../buttons/1/ButtonOne';
import ButtonTwo from '../buttons/2/ButtonTwo';
import ButtonThree from '../buttons/3/ButtonThree';
import ButtonFour from '../buttons/4/ButtonFour';
import ButtonFive from '../buttons/5/ButtonFive';
import ButtonSix from '../buttons/6/ButtonSix';
import ButtonSeven from '../buttons/7/ButtonSeven';
import ButtonEight from '../buttons/8/ButtonEight';
import ButtonNine from '../buttons/9/ButtonNine';
import ButtonMinus from '../buttons/minus/ButtonMinus';
import ButtonDot from '../buttons/dot/ButtonDot';
import ButtonPlus from '../buttons/plus/ButtonPlus';
import ButtonEquals from '../buttons/equals/ButtonEquals';
import ButtonMultiply from '../buttons/multiply/ButtonMultiply';
import ButtonFromTheNumber from '../buttons/oneFromTheNumber/ButtonFromTheNumber';
import ButtonPercent from '../buttons/percent/ButtonPercent';
import ButtonDivision from '../buttons/division/ButtonDivision';
import ButtonSquareRoot from '../buttons/squareRoot/ButtonSquareRoot';
import ButtonDelete from '../buttons/delete/ButtonDelete';
import ButtonExponentiation from '../buttons/exponentiation/ButtonExponentiation';
import ButtonBack from '../buttons/back/ButtonBack';
import ButtonLeftBracket from '../buttons/left-bracket/ButtonLeftBracket';
import ButtonRightBracket from '../buttons/right-bracket/ButtonRightBracket';

import './Main.scss';
import '../../style/button.scss';
import './Main.scss';
import '../../style/style.scss';
import img from '../resources/img/OM.png';

const Main = () => {
    const [screen, setScreen] = useState(false);

    const toggleScreen = () => {
        setScreen(screen => !screen);
    }

    return (
        <div className='wrapper'>
            <Screen screen={screen}/>
            <div className='second'>
                <div className='toggle'>
                    <ToggleSwitch toggleScreen={toggleScreen}/>
                </div>
                <div>
                    <img src={img} className='img'/>
                </div>
                <div className='text'>Calculator from<br/> OM Company</div>
                <ButtonOnOff/>
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
                <ButtonOne />
                <ButtonTwo />
                <ButtonThree />
                <ButtonMinus />
                <ButtonFromTheNumber />
                <ButtonZero />
                <ButtonDoubleZero />
                <ButtonDot />
                <ButtonPlus />
                <ButtonEquals />
            </div>
        </div>
    )
}

export default Main;