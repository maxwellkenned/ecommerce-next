import { useEffect } from 'react'

import { CategoryList } from 'components/CategoryList'
import { Header } from 'components/Header'
import { ProductList } from 'components/ProductList'
import { Search } from 'components/Search'
import { useProduct } from 'contexts/Products'
import { GetStaticProps } from 'next'
import { IProduct } from 'types/IProduct'

import api from 'api'

import * as S from '../styles/home.styles'
import { getAllProducts } from 'services/products'

interface IHomeProps {
  products: IProduct[]
  categories: string[]
}

export default function Home({ products, categories }: IHomeProps) {
  const { setProducts } = useProduct()

  useEffect(() => {
    setProducts(products)
  }, [products, setProducts])

  return (
    <S.Wrapper>
      <Header />
      <CategoryList categories={categories} />
      <S.Content>
        <Search />
        <ProductList />
      </S.Content>
    </S.Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProducts()
  const { data: categories } = await api.get('categories')

  return {
    props: {
      products,
      categories
    }
  }
}
