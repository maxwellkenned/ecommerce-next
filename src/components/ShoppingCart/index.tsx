import { useShopping } from 'contexts/Shopping'
import { FaShoppingCart } from 'react-icons/fa'

import * as S from './styles'

export const ShoppingCart = () => {
  const { totalQuantity, totalPrice } = useShopping()

  return (
    <S.Wrapper>
      <FaShoppingCart />
      <S.CartInfo>
        <p>{totalQuantity} Produtos no Carrinho</p>
        <span>R$ {totalPrice.toString().replace('.', ',')}</span>
      </S.CartInfo>
    </S.Wrapper>
  )
}
