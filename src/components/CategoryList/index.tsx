import { useProduct } from 'contexts/Products'
import { useCallback } from 'react'
import { getAllProducts, getProductsByCategory } from 'services/products'
import * as S from './styles'

interface ICategoryListProps {
  categories: string[]
}

const categoryDefault = 'Sugestão do Vendedor'

export const CategoryList = ({ categories }: ICategoryListProps) => {
  const { setProducts, category, setCategory } = useProduct()

  const arr = [categoryDefault, ...categories]

  const handleCategory = useCallback(
    async (category: string) => {
      const products =
        category === categoryDefault
          ? await getAllProducts()
          : await getProductsByCategory(category)

      setCategory(category)
      setProducts(products)
    },
    [setProducts, setCategory]
  )

  return (
    <S.Wrapper>
      <ul>
        {arr.map((item, index) => (
          <li
            key={index}
            className={item === category ? 'active' : ''}
            onClick={() => handleCategory(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </S.Wrapper>
  )
}
