import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Wrap, Flex } from "../styles/Companies";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div style={{display: "none"}}></div>;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div style={{display: "none"}}></div>;
}

class Companies extends React.Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container">
        <Wrap>
          <Slider {...settings}>
            <Flex>
              <Image src="/01.svg" width={180} height={120} />
            </Flex>
            <Flex>
              <Image src="/02.svg" width={150} height={80} />
            </Flex>
            <Flex>
              <Image src="/03.svg" width={180} height={120} />
            </Flex>
            <Flex>
              <Image src="/04.svg" width={180} height={120} />
            </Flex>
            <Flex>
              <Image src="/05.svg" width={140} height={80} />
            </Flex>
            <Flex>
              <Image src="/06.svg" width={120} height={60} />
            </Flex>
            <Flex>
              <Image src="/07.svg" width={180} height={120} />
            </Flex>
            <Flex>
              <Image src="/08.svg" width={120} height={60} />
            </Flex>
          </Slider>
        </Wrap>
      </div>
    );
  }
}

export default Companies;
