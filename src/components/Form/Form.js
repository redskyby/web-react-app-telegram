import React, {useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";


const Form = () => {
    const [counter, setCounter] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text : 'Отправить данные'
        })
    },[]);

    useEffect(()=>{
        if(!street || !counter){
            tg.MainButton.hide();
        }else{
            tg.MainButton.show();
        }
    },[counter , street])

    const onChangeCountry = (e) => {
        setCounter(e.target.value);
    }
    const onChangeStreet= (e) => {
        setStreet(e.target.value);
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    }


    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input
                type="text"
                className={"input"}
                placeholder={'Страна'}
                value={counter}
                onChange={onChangeCountry}
            />
            <input
                type="text"
                className={"input"}
                placeholder={'Улица'}
                value={street}
                onChange={onChangeStreet}
            />
            <select
                className={'select'}
                value={subject}
                onChange={onChangeSubject}
            >
                <option value="physical">Физ.лица</option>
                <option value="legal">Юр.лица</option>
            </select>
        </div>
    );
};

export default Form;