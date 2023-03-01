import React from "react";
import Layouts from "../../components/layouts/Layout";
import styled from "styled-components";
import tw from "twin.macro";
// import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive/Screens";
import TopImage from "../../assets/AboutUsTopImage.png";
import TopBackgroundImage from "../../assets/TopRightImg.png";
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
  flex-wrap
  justify-between
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
 text-5xl
 leading-[130%]
 capitalize
 tracking-[-0.01em]
 text-[#000000]
 w-full
 lg:w-[664px]
 z-10
 
  `}
  @media (max-width: ${SCREENS.sm}) {
    ${tw`
    text-start
    text-4xl
  `}
`;

const Paragraph = styled.h2`
  ${tw`
 font-inter
 font-normal
 text-[20px]
 leading-[24px]
text-right
 text-[#000000]
 w-full
 lg:w-[510px]
 z-10
  `}

  @media (width: ${SCREENS.sm}) {
    ${tw`
  text-center
  `}
  }
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
  max-w-screen-2xl
  `}
`;

const HeadingBottom = styled.h2`
  ${tw`
 font-Montserrat
 font-bold
 text-5xl
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
  py-4
  items-center
  gap-4
  `}
`;

const TestimonialFlexBottom = styled.div`
  ${tw`
  flex
  flex-col-reverse
  lg:flex-row
  justify-between
  py-4
  items-center
  gap-4
  `}
`;

const TestimonialImageAndName = styled.div`
  ${tw`
flex
flex-row
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
function AboutUs() {
  return (
    <Layouts>
      <section>
        <Container>
          <TopItems>
            <div>
              <div>
                <div className="hidden lg:block lg:absolute lg:left-[45%] ">
                  <img src={TopBackgroundImage} alt="color splash transition" />
                </div>

                <FlexTop>
                  <div>
                    <Heading>
                      We create bridges between{" "}
                      <span className="text-slate-400">
                        Creative Design & Fashion week
                      </span>
                    </Heading>
                  </div>
                  <RightItems>
                    <div className="w-full h-full "></div>
                    <Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                    </Paragraph>
                  </RightItems>
                </FlexTop>
              </div>
            </div>
            <Image>
              <img src={TopImage} alt="About-Us" className="w-full" />
            </Image>
          </TopItems>

          <BottomItems>
            <div className="w-full flex flex-col gap-4 px-4 md:px-20">
              <hr className="w-full border border-solid border-[#3F3F3F]  h-0 " />
              <FlexBottom>
                <div className="flex flex-col gap-14 mb-10">
                  <HeadingBottom>
                    We create bridges between Creative Design & Fashion week
                  </HeadingBottom>
                  <div className="w-full h-full ">
                    <img
                      src={TopBackgroundImage}
                      alt="color splash transition"
                    />
                  </div>
                </div>

                <div className="w-full max-w-[510px] gap-6 flex flex-col md:mt-24  ">
                  <p className="font-inter font-medium text-[24px] leading-[29px] text-[#000000]  ">
                    Our team is always getting bigger, but we all work towards
                    one goal; to make sales success not only possible but
                    inevitable for teams everywhere
                  </p>
                  <p className="font-inter font-light text-[20px] leading-[24px] text-[#000000]  ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud ut
                    perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minim
                  </p>
                </div>
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
                        <div className="pl-4 ">
                          <p class="mb-1 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                            Anna Smith
                          </p>
                          <p class="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                            Product manager
                          </p>
                        </div>
                      </TextTestimonial>
                    </TestimonialImageAndName>
                  </div>
                </div>
                <div className="mb-4">
                  <h2 className=" font-inter  font-light text-[20px] leading-[24px] text-[#000000] w-full max-w-[510px]  ">
                    <span className="font-bold">“Our goal is to build</span> m
                    rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut
                  </h2>
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
