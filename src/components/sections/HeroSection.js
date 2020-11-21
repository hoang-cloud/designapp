import React from "react"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import PurchaseButton from "../Buttons/PurchaseButton"
import MockupSection from "../Mockups/MockupSection"
function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design <br />
            and code Reacts app
          </Title>
          <Description>
            Đừng bỏ qua bạn ơi, học ngay thôi bằng cách xây dựng 1 app thực tế
            với React và Swift
          </Description>
          <PurchaseButton
            title="Start learning"
            subtitle="120+ hours of video"
          />
        </TextWrapper>
        <MockupSection />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`
const Title = styled(H1)`
  color: ${themes.light.text1};
`
const Description = styled(MediumText)``
