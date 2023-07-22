
import { useUser } from '../utils/contexts/userContext';


const { dispatch } = useUser();

function handleLike(){
  dispatch({type: 'ADD_TO_LIKED_PRODUCTS'})
}

 

function handleAddToCart(){
  dispatch({ type: 'ADD_TO_CART'})
}


  
      

export const like = () => {
  return (
    <div className="flex flex-row gap-4 w-20 items-center">
      <button onClick={() => handleLike(product.id)}>
        {likedProducts.includes(product.id) ? 'Liked' :  <img
    src="https://file.rendit.io/n/cn6pwerXjC0vINwvuDGx.svg"
    className="min-h-0 min-w-0 w-8 shrink-0"
  />}
      </button>
     
    </div>
  )
}


export const add = () => {
  return (
    <div className="flex flex-row gap-4 w-20 items-center">
<button onClick={() => handleAddToCart(product)}> <img
    src="https://file.rendit.io/n/ohBsmSavyWRTbWrj4nIV.svg"
    className="min-h-0 min-w-0 w-8 shrink-0"
  /></button>

    </div>
  )
}
