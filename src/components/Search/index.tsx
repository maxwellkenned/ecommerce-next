import { useProduct } from 'contexts/Products'
import { useCallback, useRef } from 'react'
import { FiSearch } from 'react-icons/fi'
import { getProductsByName } from 'services/products'

import * as S from './styles'

export const Search = () => {
  const { setProducts } = useProduct()
  const searchRef = useRef<HTMLInputElement>(null)

  const handleSearch = useCallback(
    async e => {
      e.preventDefault()

      const searchValue = searchRef.current?.value

      console.log('chamou', searchValue)
      if (searchValue) {
        const products = await getProductsByName(searchValue)

        setProducts(products)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchRef.current, setProducts]
  )

  return (
    <S.Wrapper>
      <form onSubmit={handleSearch}>
        <input
          ref={searchRef}
          type="text"
          name="product"
          id="product"
          placeholder="O que você procura?"
        />
        <button type="submit">
          <FiSearch />
        </button>
      </form>
    </S.Wrapper>
  )
}
