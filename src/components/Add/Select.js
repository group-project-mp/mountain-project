import React from 'react';

export default function Select(props) {
    let options = props.options.map(x => {
        return <option key={x.state} value={x.state}>{x.state}</option>
    })
    return (
        <select onChange={(e) => props.action(e.target.value)}>
            {options}
        </select>
    )
}