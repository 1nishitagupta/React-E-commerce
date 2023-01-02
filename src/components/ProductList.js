import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
    const {filter_products , grid_view} = useFilterContext()
    if(grid_view === true){
        return(<GridView products={filter_products}></GridView>)
    }else{
        return(<ListView products={filter_products}></ListView>)
    }
}

export default ProductList