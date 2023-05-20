import React, {useCallback, useEffect, useState} from 'react';
import './styles/form.scss'
import {useTelegram} from "../../assets/hooks/useTelegram";
const Form = () => {
    const [street, setStreet] = useState('')
    const [house, setHouse] = useState('')
    const [legal, setLegal] = useState('')
    const {tg} = useTelegram()

    const sendData = useCallback(() => {
        const data = {street,house, legal};
        tg.sendData(JSON.stringify(data));
    }, [street, house, legal])
    useEffect(() => {
        tg.onEvent('mainButtonClicked', sendData);
        return () => {
            tg.offEvent('mainButtonClicked', sendData);
        }
    }, [street, house, legal])
    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить'
        })
    }, [])
    useEffect(() =>
    {
        if(!house || !street) {
            tg.MainButton.hide()
        }else  {
            tg.MainButton.show()
        }
    }, [house, street])



    const changeHouse= (e) => {
    setHouse(e.target.value)
   }
   const changeStreet = (e) => {
    setStreet(e.target.value)
   }
   const changeLegal = (e) => {
    setLegal(e.target.value)
   }

    return (
        <div className="form">
            <h1>введите свои данные</h1>
            <input type="text" className="input" placeholder={'введите улицу'} value={house} onChange={changeHouse}/>
            <input type="text" className="input" placeholder={'введите дом'} value={street} onChange={changeStreet}/>
            <select className="select" placeholder={'Кем вы являетесь?'} value={legal} onChange={changeLegal}>
                <option value={'physic'} >физ.лицо</option>
                <option value={'legal'} >юр.лицо</option>
            </select>
        </div>
    );
};

export default Form;
