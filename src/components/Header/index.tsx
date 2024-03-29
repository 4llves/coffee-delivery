import { Link, NavLink } from 'react-router-dom'

import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import logo from '../../assets/pud.svg'
import { ButtonHeader, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>

        <div>
          <ButtonHeader>
            <MapPin size={32} weight="fill" />
            <p>Goianésia do Pará, PA</p>
          </ButtonHeader>

          <Link to="/checkout">
            <ButtonHeader>
              <ShoppingCartSimple size={32} weight="fill" />
            </ButtonHeader>
          </Link>
        </div>
      </nav>
    </HeaderContainer>
  )
}
