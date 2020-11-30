import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import MenuButton from "../Buttons/MenuButton"
import MenuTooltip from "../tooltips/MenuTooltip"
import { useState } from "react"
const menuData = [
  { title: "Khoá học", icon: "/images/icons/courses.svg", link: "/courses" },
  {
    title: "Hướng dẫn",
    icon: "/images/icons/tutorials.svg",
    link: "/tutorials",
  },
  { title: "Giá", icon: "/images/icons/pricing.svg", link: "/pricing" },
  { title: "", icon: "/images/icons/search.svg", link: "/search" },
  { title: "", icon: "/images/icons/account.svg", link: "/account" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Wrapper>
      <img src="/images/logos/logo.svg" />
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) =>
          item.link === "/account" ? (
            <MenuButton
              key={index}
              item={item}
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <MenuButton key={index} item={item} />
          )
        )}
      </MenuWrapper>
      <MenuTooltip isOpen={isOpen} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 30px;
`
const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.count}, auto);
  gap: 30px;
`
