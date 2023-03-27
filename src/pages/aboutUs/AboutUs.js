import React from "react";
import Layouts from "../../components/layouts/Layout";
import styled from "styled-components";
import tw from "twin.macro";
// import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive/Screens";
import TopImage from "../../assets/AboutUsTopImage.png";
import TopBackgroundImage from "../../assets/TopRightImg.png";
import ColorSplash from "../../assets/colot splash transition.png";

import HaveAQuestion from "../../components/about-us-components/HaveAQuestion";

const Container = styled.div`
  ${tw`
  flex
  flex-col
  items-center
  // justify-center
  w-full
  h-full
  bg-white
  pt-4
  pb-4
  lg:pt-8
  lg:pb-8
  `}
`;

const TopItems = styled.div`
  ${tw`
  flex
  flex-col
  items-center
  m-auto
  gap-6
  mb-10
  md:mb-14
  `}
`;

const FlexTop = styled.div`
  ${tw`
  flex
  flex-col
  justify-center
  items-center
  m-auto
  p-4
  lg:pt-16
  pt-8
  pb-8



  `}

  @media (max-width: ${SCREENS.sm}) {
    ${tw`
  gap-4
  `}

  @media (max-width: ${SCREENS.md}) {
    background-image: url(${TopBackgroundImage});
    ${tw`
    bg-contain
    bg-center
    bg-no-repeat
    -z-10
    `}
`;

const Heading = styled.h2`
  ${tw`
 font-Montserrat
 font-bold
 text-[40px]
 leading-[130%]
 capitalize
 text-center
 tracking-[-0.01em]
 text-[#000000]
 w-full
max-w-[460px]
 z-10
 mb-10
  `}

`;

const Paragraph = styled.h2`
  ${tw`
 font-inter
 font-normal
 text-[20px]
 leading-[24px]
 text-[#000000]
 w-full
 text-center
 lg:w-[560px]
 z-50
  `}


 
`;

const Image = styled.div`
  ${tw`
w-auto
h-auto
items-center
`}
`;

const RightItems = styled.div`
  ${tw`
flex
flex-col
lg:h-[250px]
`}
`;

const BottomItems = styled.div`
  ${tw`
  flex
  flex-col
  items-center
  m-auto
  w-full
  lg:mt-4
  relative
  z-50
  max-w-screen-2xl
  `}
`;

const HeadingBottom = styled.h2`
  ${tw`
 font-Montserrat
 font-bold
 text-[40px]
 leading-[130%]
 capitalize
 tracking-[-0.01em]
 text-[#000000]
 w-full
 max-w-[508px]
 z-10
 
  `}
  @media (max-width: ${SCREENS.sm}) {
    ${tw`
    text-start
    text-4xl
  `}
`;

const FlexBottom = styled.div`
  ${tw`
  flex
  flex-col
  lg:flex-row
  justify-between
  // py-4
  // items-center
  gap-4
  `}
`;

const TestimonialFlexBottom = styled.div`
  ${tw`
  flex
  flex-col
  justify-center
  items-center 
  m-auto
  py-4
  items-center
  gap-4
  mt-6
  `}
`;

const TestimonialImageAndName = styled.div`
  ${tw`
flex
flex-col
gap-2
items-center
w-full
h-full
`}
`;

const TextTestimonial = styled.div`
  ${tw`
flex
flex-col
items-start
h-full


`}
`;

const BottomDiv = styled.div`
  ${tw`
mt-10
mb-10
pt-4

`}
`;

const BottomRightWrapper = styled.div`
  ${tw`
w-full
max-w-[510px]
gap-6
flex
flex-col 
pt-10
pb-20
  `}
`;

const RightTitle = styled.h2`
  ${tw`
font-inter font-medium text-[24px] text-right leading-[29px] text-[#000000]
`}
`;

const RightDescription = styled.p`
  ${tw`
font-inter font-light text-right text-[20px] leading-[24px] text-[#000000]
`}
`;

function AboutUs() {
  return (
    <Layouts>
      <section>
        <Container>
          <TopItems>
            <div >
              <div >
                <div className="absolute right-4 lg:top-32 z-10 ">
                  <img src={ColorSplash} alt="color splash transition" />
                </div>
                <div className="absolute left-4 lg:top-[15rem] md:top-[10rem] top-[32rem] z-0 ">
                  <img src={ColorSplash} alt="color splash transition" />
                </div>
                <FlexTop>
                  <div>
                    <Heading>Don’t be a Spectator Be part of it.</Heading>
                  </div>

                  <Paragraph>
                    Imagine being able to experience fashion from designers all
                    over the world. Goodbye to watching models walking down
                    runways. Hello to engaging with the collections,
                    understanding the vision and using the pieces for both
                    physical and virtual reality.
                  </Paragraph>
                </FlexTop>
              </div>
            </div>
            <Image>
              <img src={TopImage} alt="About-Us" className="w-full" />
            </Image>
          </TopItems>

          <BottomItems>
            <div className="w-full flex flex-col gap-4 px-4 md:px-20 relative z-50 ">
              <hr className="w-full border border-solid border-[#3F3F3F]  h-0 " />
              <div className=" absolute top-[26rem]  -z-10 ">
                <img src={TopBackgroundImage} alt="color splash transition" />
              </div>
              <div className=" absolute top-[55rem] left-[470px] -z-10 ">
                <img src={TopBackgroundImage} alt="color splash transition" />
              </div>
              <FlexBottom>
                <div className="flex flex-col gap-14 mb-10">
                  <HeadingBottom>
                    pushing the boundaries of traditional runway shows
                  </HeadingBottom>
                </div>

                <BottomRightWrapper>
                  <RightTitle>
                    At CDFW, we believe that luxury fashion is more than just
                    clothing - it is a form of art to be experienced in a
                    dynamic and immersive way.
                  </RightTitle>
                  <RightDescription>
                    We do not create unrelatable runway shows. Instead, we
                    provide each designer with a unique showroom space they can
                    use to showcase their collection in a creative and
                    interactive way.
                  </RightDescription>
                </BottomRightWrapper>
              </FlexBottom>

              <FlexBottom>
                <div className="flex flex-col gap-14 mb-10">
                  <HeadingBottom>
                    Be Transported into the Designers World.
                  </HeadingBottom>
                </div>

                <BottomRightWrapper>
                  <RightTitle>
                    The showrooms are supported by state-of-the-art virtual
                    reality components such as projection mapping and immersive
                    displays.
                  </RightTitle>
                  <RightDescription>
                    Our goal is to create a more personalised and engaging
                    experience for both visitors and designers. By moving away
                    from the traditional runway show format, we give designers
                    the freedom to showcase their collections in a way that is
                    true to their vision.
                  </RightDescription>
                </BottomRightWrapper>
              </FlexBottom>

              <FlexBottom>
                <div className="flex flex-col gap-14 mb-10">
                  <HeadingBottom>Inspire, Challenge, Transform.</HeadingBottom>
                </div>

                <BottomRightWrapper>
                  <RightDescription>
                    Join us at CDFW and experience the future of fashion.
                    Explore our showrooms, connect with designers, and discover
                    the art of fashion in a whole new way.
                  </RightDescription>
                </BottomRightWrapper>
              </FlexBottom>
              <TestimonialFlexBottom>
                <div>
                  <div>
                    <TestimonialImageAndName>
                      <img
                        src=""
                        class="rounded-full h-28 w-28 bg-[#D9D9D9] shadow-md dark:shadow-black/30"
                        alt="CEO"
                      />
                      <TextTestimonial>
                        <div className="pl-4 text-center ">
                          <p class="mb-1 text-[24px] font-medium text-[#000000] ">
                            Ruth Isabella Peters
                          </p>
                          <p class="mb-0 font-light leading-[24px] text-[20px] text-[#000000] ">
                            Founder & CEO
                          </p>
                        </div>
                      </TextTestimonial>
                    </TestimonialImageAndName>
                  </div>
                </div>
                <div className="mb-4 flex flex-col gap-2 w-full max-w-[774px] ">
                  <p className=" font-inter font-light text-[24px] eading-[29px] text-center  ">
                    Meet Ruth Isabella Peters
                  </p>
                  <p className=" font-inter font-light text-[24px] eading-[29px] text-center  ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in
                  </p>
                </div>
              </TestimonialFlexBottom>
            </div>
          </BottomItems>
        </Container>

        <BottomDiv>
          <HaveAQuestion />
        </BottomDiv>
      </section>
    </Layouts>
  );
}

export default AboutUs;
