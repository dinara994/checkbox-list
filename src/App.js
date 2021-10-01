import React, {useEffect, useState} from "react";
import axios from "axios"
import EmployerItem from "./components/EmployerItem";

const App = () => {
    const [employers,setEmployers] = useState([])
    const [isCheckedAll, setIsCheckedAll] = useState(false)
    const [selected, setSelected] = useState([])

    const handleCheck = (id,status) => {
        setSelected([...selected, employers.find(item => item.id === id)])
    }

    useEffect(() => {
        axios(`https://614dcadde3cf1f001712d359.mockapi.io/api/employers`)
            .then(({data}) => setEmployers(data))
    },[employers])
    return (
        <div className='col-6 p-5 offset-3'>
            <table className="table">
                <thead className='table-success'>
                <tr>
                    <th scope="col">
                        <input type="checkbox"
                               onChange={(e)=> setIsCheckedAll(e.target.checked)}/>
                    </th>
                    <th scope="col">Имя</th>
                    <th scope="col">Фамилия</th>
                    <th scope="col">Возраст</th>
                </tr>
                </thead>
                <tbody>
                {
                    employers.map(item =>
                        <EmployerItem key={item.id} item={item}
                                  isCheckedAll={isCheckedAll}
                                  handleCheck={handleCheck}
                        />
                    )
                }
                </tbody>
            </table>
            <p>Пользователи:{
                selected.map(el =>
                    <span>{el.name }, </span>
                )}</p>
        </div>
    );
}

export default App;