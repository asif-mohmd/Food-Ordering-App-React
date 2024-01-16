import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import ItemList from './itemList';

const RestaurantCategory = ({data}) =>{
  
    return (
     <div>

       <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className='flex justify-between'>
        <span className='font-bold text-sm'>{data.title} ({data.itemCards.length})</span>
        <span><FontAwesomeIcon icon={faArrowDown} /></span> 
        </div>
        

        <ItemList items={data.itemCards}/>

       </div>

       

    </div>
)}

export default RestaurantCategory  