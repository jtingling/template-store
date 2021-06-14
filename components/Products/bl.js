import fetchProducts from '../../adapters/Products/products'
import { useEffect, useState } from 'react'

module.export = async function getAllProducts() {
    const products = await fetchProducts;
    return products;
}
