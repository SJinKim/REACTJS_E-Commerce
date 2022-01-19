import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'

import useStyles from './ProductsStyles'

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'running shoes',
    price: '$5',
    image:
      'https://www.runtastic.com/blog/wp-content/uploads/2021/06/thumbnail_1200x800.jpg',
  },
  {
    id: 2,
    name: 'MacBook',
    description: 'Apple Macbook',
    price: '$15',
    image:
      'https://www.apple.com/v/macbook-pro-14-and-16/a/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png',
  },
  {
    id: 3,
    name: 'Pen',
    description: 'Morning Glory Pen',
    price: '$3',
    image:
      'https://file.mk.co.kr/meet/neds/2020/07/image_readtop_2020_753575_15954697494290264.jpg',
  },
]

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent='center' spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products
