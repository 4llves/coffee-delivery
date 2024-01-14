import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { ShoppingCart } from '@phosphor-icons/react'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>

        <div>
          <div>Goianésia do Pará - PA</div>
          <ShoppingCart size={32} />
        </div>
      </nav>
    </HeaderContainer>
  )
}
