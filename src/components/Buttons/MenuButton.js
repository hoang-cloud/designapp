import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default function MenuButton(props) {
  const { item } = props
  return (
    <Link to={item.link}>
      <MenuItem hasTitle={item.title}>
        <img src={item.icon} alt={item.title} />
        {item.title}
      </MenuItem>
    </Link>
  )
}

const MenuItem = styled.div`
  display: grid;
  grid-template-columns: 24px auto;
  align-items: center;
  gap: ${props => (props.hasTitle ? "10px" : "0px")};
  padding: 10px;
  border-radius: 10px;
  transition: 0.5s ease-out;
  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`
