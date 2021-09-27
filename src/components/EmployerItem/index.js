import React, {useEffect, useState} from 'react';

const EmployerItem = ({item, isCheckedAll, handleCheck}) => {
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        setIsChecked(isCheckedAll)
    },[isCheckedAll])

    return (
        <tbody>
        <tr className='table-info'>
            <td>
                <input type="checkbox"
                       checked={isChecked}  //checked возьми из state (если true или false)
                       onChange={(e) => {
                           setIsChecked(e.target.checked)
                           handleCheck(item.id, e.target.checked)
                       }}
                />
            </td>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.age}</td>
        </tr>
        </tbody>
    );
};

export default EmployerItem;