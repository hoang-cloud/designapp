import React from "react"
import styled from "styled-components"
import { Caption2, SmallText } from "../styles/TextStyles"
import { Link } from "gatsby"

export default function PurchaseButton(props) {
  const { title, subtitle } = props
  return (
    <Link to="/page-2">
      <Wrapper>
        <IconWrap>
          <Icon src="/images/icons/gift.svg" />
          <Ring src="/images/icons/icon-ring.svg" />
        </IconWrap>
        <TextWrap>
          <Title>{title || "Get Pro Access"}</Title>
          <Subtitle>{subtitle || "$19 per month"}</Subtitle>
        </TextWrap>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  max-width: 280px;
  height: 77px;
  border: solid 1px;
  border-radius: 20px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2);
  display: grid;
  grid-template-columns: 70px auto;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
`

const Title = styled(Caption2)`
  color: black;
`

const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`

const Icon = styled.img`
  width: 29px;
  height: 29px;
`

const TextWrap = styled.div`
  justify-self: center;
  display: grid;
  grid-template-rows: auto auto;
  gap: 5px;
`

const IconWrap = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
  position: relative;
`
const Ring = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  top: -40px;
  left: -32px;
`
