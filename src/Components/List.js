import React from "react";

export default function List ({list, item, setItem}) {

    const activePofile = (id) => {
        try {
            setItem(list.filter(listItem => {
                console.log(listItem, id, listItem.id == id);
                return listItem.id == id
            })[0])
        } catch (e) {
            alert('Профиль отсутствует в списке')
        }
    }

    return <ul className="list">
        {list.map(profile => {
            return <li 
                key={profile.id}
                className={`list-item ${!!item && item.id === profile.id ? 'active' : ''}`}
                onClick={e => activePofile(profile.id)}
            >{profile.name}</li>
        })}
    </ul>
}