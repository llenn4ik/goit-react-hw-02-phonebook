import React from 'react';

export default function Filter({value, onChangeFilter}){
    return (
        <div>
            <input type="text" value={value} onChange={onChangeFilter}>
            </input>
        </div>
    )
}