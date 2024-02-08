import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles '
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? colors.green : colors.white)};
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.green : 'transparent'};
  border-radius: 8px;
  color: ${colors.white};
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  padding: 8px 16px;
  font-size: 16px;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid ${colors.white};
  border-radius: 8px;
  color: ${colors.white};
  background-color: transparent;
`
