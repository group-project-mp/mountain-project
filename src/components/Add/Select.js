import React from 'react';

export default function Select(props) {
    let options = props.options.map(x => {
        return <option key={x.area} value={x.area}>{x.area}</option>
    })
    return (
        <select onChange={(e) => props.action(e.target.value)}>
            <option>----- select -----</option>
            {options}
        </select>
    )
}