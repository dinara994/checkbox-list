import React, {useEffect, useState} from 'react';

const EmployerItem = ({item, isCheckedAll, handleCheck}) => {

    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        setIsChecked(isCheckedAll)
    },[isCheckedAll])

    return (
        <tr className='table-info'>
            <td>
                <input type="checkbox"
                       checked={isChecked}  //checked возьми из state (если true или false)
                       onChange={(e) => {
                           setIsChecked(e.target.checked)
                           handleCheck(item.id, e.target.checked)
                       }}/>
            </td>
            <td><p>{item.name}</p></td>
            <td><p>{item.surname}</p></td>
            <td><p>{item.age}</p></td>
        </tr>
    );
};

export default EmployerItem;