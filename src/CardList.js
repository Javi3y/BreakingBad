import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({characters}) =>{
    const cardComponent = characters.map((user,i) => {
        return<Card key={user.char_id} name={user.name} birthday={user.birthday} img={user.img} status={user.status} nickname={user.nickname} portrayed={user.portrayed} />
        }
    );
    return(
    <div className = 'CardList'>
        {cardComponent}
    </div>
    )
}
export default CardList