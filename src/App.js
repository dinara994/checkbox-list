import React, {useEffect, useState} from 'react';
import axios from "axios";
import EmployerItem from "./components/EmployerItem";

const App = ({isChecked}) => {
    const [employers, setEmployers] = useState([])
    const [isCheckedAll, setIsCheckedAll] = useState(false)
    const [selected, setSelected] = useState([])

    const handleCheck = (id) => {
        setSelected([...selected, employers.find(item => item.id === id)])
    }

    useEffect(() => {
        axios('https://614dcadde3cf1f001712d359.mockapi.io/api/employers')
            .then(({data}) => setEmployers(data))
    }, [employers])
    return (
        <div className='col-6 p-5 offset-3'>
            <table className="table">
                <thead className='table-success'>
                <tr>
                    <th scope="col">
                        <input type="checkbox"
                               onChange={(e) => setIsCheckedAll(e.target.checked)}/>
                    </th>
                    <th scope="col">Имя</th>
                    <th scope="col">Фамилия</th>
                    <th scope="col">Возраст</th>
                </tr>
                </thead>
                {
                    employers.map(item =>
                        <EmployerItem key={item.id} item={item}
                                      isCheckedAll={isCheckedAll}
                                      handleCheck={handleCheck}
                        />
                    )
                }
            </table>
            <p>Пользователи:{
                selected.map(el =>
                <span>{el.name }, </span>
                )}</p>
        </div>
    );
};
//react оптимизирует рендеринга компонта за счет виртуал дома колличество обращений
// страница сокращается. React библиотека которая позволяет весь интерфейс разделять на компоненты.
// Приемуществом является наличие Virtual DOM дерево которое позволяет оптимизировать  дом дерево

//при рендере пояляется DOM
//virtual.dom -  вир дом оптимизирует страницу за счет сокращение количество обращений  к реальному дому
//DOM нужен для взаимодейст с  HTML производить манипулировать
//V8 движок позволяющий понимать js код
//NODE.js - нужен для запустка кода на  js
//useState() - переменное состояние стейста нужно для того чтоб хранить данные и при изменение этих данных изменяеся содержимое нашей странице
//didmount,  - useEffect
//axios - дает нам promiss
//запрос на сервер - fench() и axios
//promiss обещаение  - 3 состояние  1-resoulf(решено) 2-reject(откланить) -3 - panding(axios ждет промисс)
export default App;