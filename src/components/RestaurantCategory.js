import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import ItemList from './itemList';
import { useState } from 'react';


const RestaurantCategory = ({data,showItems,setShowIndex}) =>{

  const handleClick = () => {
    setShowIndex()
  }
  
  // Accordian UI
    return (
     <div>

       <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 select-none">
        <div className='flex justify-between cursor-pointer' onClick={handleClick}>
        <span className='font-bold text-sm'>{data.title} ({data.itemCards.length})</span>
        <span><FontAwesomeIcon icon={faArrowDown} /></span> 
        </div>

       {showItems &&  <ItemList items={data.itemCards}/>}

       </div> 
    </div>
)}

export default RestaurantCategory   