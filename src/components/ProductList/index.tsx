import { CardProduct } from 'components/CardProduct'
import { ModalProduct } from 'components/ModalProduct'
import { useProduct } from 'contexts/Products'
import { useCallback, useState } from 'react'
import { IProduct } from 'types/IProduct'

import * as S from './styles'

export const ProductList = () => {
  const { products, category } = useProduct()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [productCurrent, setProductCurrent] = useState({} as IProduct)

  const toggleModal = useCallback(() => {
    setIsOpenModal(state => !state)
  }, [])

  const handleModal = useCallback(
    product => {
      setProductCurrent(product)
      toggleModal()
    },
    [toggleModal]
  )

  return (
    <S.Wrapper>
      <h2>{category}</h2>
      <div>
        {products.map(product => (
          <CardProduct
            key={product.id}
            product={product}
            onClick={() => handleModal(product)}
          />
        ))}
      </div>
      <ModalProduct
        product={productCurrent}
        isOpen={isOpenModal}
        toggle={toggleModal}
      />
    </S.Wrapper>
  )
}
