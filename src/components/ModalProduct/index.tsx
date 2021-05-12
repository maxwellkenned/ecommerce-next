import { useShopping } from 'contexts/Shopping'
import Image from 'next/image'
import { useCallback, useRef } from 'react'
import { CgClose } from 'react-icons/cg'
import { FiShoppingBag } from 'react-icons/fi'
import { IProduct } from 'types/IProduct'

import * as S from './styles'

interface IModalProductProps {
  product: IProduct
  isOpen: boolean
  toggle: () => void
}

export const ModalProduct = ({
  product,
  isOpen,
  toggle
}: IModalProductProps) => {
  const { addProduct } = useShopping()
  const quantityRef = useRef<HTMLInputElement>(null)

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()

      const quantity = Number(quantityRef.current?.value)

      console.log(quantity)

      if (!isNaN(quantity) && quantity > 0) {
        addProduct({ ...product, quantity })
        toggle()
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [product, quantityRef.current, addProduct, toggle]
  )

  if (!product.id || !isOpen) {
    return <></>
  }

  return (
    <S.Wrapper>
      <S.Content>
        <S.Modal>
          <button type="button" onClick={toggle}>
            <CgClose />
          </button>
          <Image
            width={1500}
            height={1500}
            objectFit="contain"
            src={product.image}
            alt={product.name}
          />
          <div>
            <h1>{product.name}</h1>
            <div>
              {product?.promo && product?.oldPrice ? (
                <div className="promo">
                  <div className="oldPrice">
                    <span>De</span> <p>R$ {product.oldPrice}</p>
                    {product?.promo && product?.percent && (
                      <div className="percentPromo">{`${product.percent}% OFF`}</div>
                    )}
                  </div>

                  <div className="price">
                    <div>
                      <span>Por</span>
                      <p>R$ {product.price}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="price">
                  <p>R$ {product.price}</p>
                </div>
              )}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="formGroup">
                <label htmlFor="quantity">Quantidade</label>
                <input
                  ref={quantityRef}
                  type="number"
                  name="quantity"
                  id="quantity"
                  min={1}
                  defaultValue={1}
                />
              </div>
              <button type="submit">
                <FiShoppingBag /> Comprar
              </button>
            </form>
          </div>
        </S.Modal>
      </S.Content>
    </S.Wrapper>
  )
}
