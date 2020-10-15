import React from 'react';

export default function Filter({value, onChangeFilter}){
    return (
        <div>  Find contacts by name or number
            <input type="text" value={value} onChange={e =>onChangeFilter(e.target.value)}>
            </input>
        </div>
    )
}