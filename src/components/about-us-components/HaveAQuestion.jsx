import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import BottomAboutUs from "../../assets/BottomAboutUs.png";
import BottomContactImage from "../../assets/Rectangle 4349.png";
import BottomRight1 from "../../assets/Rectangle 4347.png";
import BottomRight2 from "../../assets/Rectangle 4348.png";

const Container = styled.div`
  ${tw`
  relative
  bg-[#05171C]
  w-full
  h-full
  max-w-screen-2xl
  items-center
  m-auto
  `}
`;

const InnerContainer = styled.div`
  ${tw`
  flex
  flex-wrap
  items-center
  justify-center
  lg:items-start
  lg:justify-between
  p-8
  lg:p-28
  w-full
  gap-8
  h-full
  relative
  z-50
  `}
`;

const Left = styled.div`
  ${tw`
  flex
  flex-col
  gap-8


  `}
`;

const Right = styled.div`
  ${tw`
  w-full
  max-w-[430px]
  h-full
  max-h-[508.36px]

  `}
`;

const Title = styled.h2`
  ${tw`
  text-white
  font-inter
  font-semibold
  text-[40px]
  leading-[48px]
  w-full
  max-w-[379px]

  `}
`;

const Description = styled.h2`
  ${tw`
  text-white
  font-normal
  font-inter
  text-[15px]
  leading-[141.02%]
  w-full
  max-w-[372px]
  
  `}
`;

const Hr = styled.div`
  ${tw`
   w-full
   lg:w-[584.5px]
   h-0
   border
   border-solid
   border-[#FFFFFF]

  `}
`;

const LeftFlexRow = styled.div`
  ${tw`
    flex
    flex-wrap
    w-full
    max-w-[380px]
    items-center
    justify-between

  `}
`;

const Button = styled.div`
  ${tw`
    px-8 
    py-4 
    w-[183px]
    items-center
    text-[#000000]
    bg-white
    rounded-[5px]
    text-center
    


  `}
`;

function HaveAQuestion() {
  return (
    <Container>
      <div className="hidden lg:block lg:absolute lg:top-[450px] lg:left-[20px] ">
        <img src={BottomAboutUs} alt="color splash transition" />
      </div>
      <div className="items-center justify-center flex m-auto relative">
       

        <div className="absolute right-0 lg:top-14 top-[25rem] w-full max-w-[367px] h-full max-h-[358px] ">
          <img src={BottomRight2} alt="..." />
        </div>
        <div className="absolute right-0 bottom-0 w-full max-w-[367px] h-full max-h-[358px] ">
          <img src={BottomRight1} alt="..." />
        </div>
        <InnerContainer>
          <Left>
            <Title>Have a question? Our team is happy to assist you</Title>
            <Description>
              Ask about CDFW, EXPO, implementations or anything else. Our highly
              trained reps are standing by , ready to help.
            </Description>
            <Hr />
            <LeftFlexRow>
              <Button>Contact Us</Button>
              <p className="font-inter py-4 text-[#FFFFFF] text-[16px] font-normal ">
                Or call +12 **** *****
              </p>
            </LeftFlexRow>
          </Left>
          <Right>
            <img src={BottomContactImage} alt="Have a question? " />
          </Right>
        </InnerContainer>
      </div>
    </Container>
  );
}

export default HaveAQuestion;
