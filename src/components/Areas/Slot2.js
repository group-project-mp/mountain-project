import React from 'react';

export default function Slot2(props) {
    let slot_2;
    props ? slot_2 = props.options.map((x, i) => {
        return (
            <div key={i}>
                <span>{x.slot_2}</span>
                <span>{x.count}</span>
            </div>
        )
    })
    : null
    return (
        props ? slot_2 : null
    )
}