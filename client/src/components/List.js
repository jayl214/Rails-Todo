import React from 'react';

const List = ({list, onRemoveList, editingList = f => f}) =>
    <div className="single-list" key={list.id}>
        <h4>{list.title}</h4>
        <button onClick={() => onRemoveList(list.id)}>Erase</button>
        <button onClick={() => editingList(list.id)}>Edit</button>
    </div>
export default List;