import Image from 'next/image'
import { FaCartPlus } from 'react-icons/fa'
import { IProduct } from 'types/IProduct'

import * as S from './styles'

interface ICardProductProps {
  product: IProduct
  onClick: (product: IProduct) => void
}

export const CardProduct = ({ product, onClick }: ICardProductProps) => {
  return (
    <>
      <S.Wrapper onClick={() => onClick(product)}>
        {product?.promo && product?.percent && (
          <div className="percentPromo">{`${product.percent}% OFF`}</div>
        )}
        <Image
          width={672}
          height={672}
          objectFit="contain"
          src={product.image}
          alt={product.name}
        />
        <p>{product.name}</p>
        <footer>
          {product?.promo && product?.oldPrice ? (
            <div className="promo">
              <div className="oldPrice">
                <span>De</span> <p>R$ {product.oldPrice}</p>
              </div>

              <div className="price">
                <div>
                  <span>Por</span>
                  <p>R$ {product.price}</p>
                </div>
                <FaCartPlus />
              </div>
            </div>
          ) : (
            <div className="price">
              <p>R$ {product.price}</p>
              <FaCartPlus />
            </div>
          )}
        </footer>
      </S.Wrapper>
    </>
  )
}
