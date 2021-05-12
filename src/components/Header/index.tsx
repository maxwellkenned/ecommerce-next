import Image from 'next/image'
import { FiClock } from 'react-icons/fi'
import { FaMotorcycle } from 'react-icons/fa'

import * as S from './styles'
import { ShoppingCart } from 'components/ShoppingCart'

export const Header = () => (
  <S.Wrapper>
    <S.HeaderContent>
      <S.Logo>
        <Image src="/img/logo.png" width={426} height={426} objectFit="cover" />
      </S.Logo>
      <S.ContentInfo>
        <S.ContentTitle>
          <S.Title>Pet Friends Acessories</S.Title>
          <S.OpenLabel>
            <FiClock />
            ABERTO AGORA
          </S.OpenLabel>
        </S.ContentTitle>
        <S.Adress>
          Avenida Rio Grande do Sul, 1520, Estados | 58030-021 | João Pessoa -
          PB
        </S.Adress>
        <S.ContentDelivery>
          <S.DeliveryInfo>
            <p>
              <FaMotorcycle /> Delivery:
              <span>35m - 1h:40m</span>
            </p>
          </S.DeliveryInfo>
          <S.DeliveryInfo>
            <p>
              Entrega:
              <span>À partir de R$ 3,00</span>
            </p>
          </S.DeliveryInfo>
        </S.ContentDelivery>
      </S.ContentInfo>
    </S.HeaderContent>
    <ShoppingCart />
  </S.Wrapper>
)
