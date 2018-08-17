import React from 'react';

const List = ({list, onRemoveList, editingList = f => f}) =>
    <div className="single-list" key={list.id}>
        <h4>{list.title}</h4>
        <button className="button" onClick={() => editingList(list.id)}><i class="fas fa-edit"></i></button>
        <button className="success button" onClick={() => onRemoveList(list.id)}><i class="fas fa-check"></i></button>
    </div>
export default List;