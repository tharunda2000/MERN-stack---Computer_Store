import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { catagories } from '../assets/assets'

const ProductCatagory = () => {

const {products}=useAppContext()
const {catagory} = useParams()

const searchCatagory = catagories.find((item)=>item.path.toLowerCase() === catagory)

const filteredProducts = products.filter((product)=>product.catagory.toLowerCase() === catagory)

  return (
    <div>

        {searchCatagory && (

            <div>
                <p>{searchCatagory.text.toUpperCase()}</p>
            </div>
        )

        }
      
    </div>
  )
}

export default ProductCatagory
