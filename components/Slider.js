import React from "react";
import Slider from "react-slick";
import { Wrap, Comment, SliderText, DownText, SVGLeft, SVGRight } from "../styles/Slider";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <SVGRight
        width="30px"
        height="30px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 476.213 476.213"
        style={{
          enableBackground: "new 0 0 476.213 476.213",
       
          cursor: "pointer",
        }}
      >
        <polygon
          points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 
345.606,368.713 476.213,238.106 "
        />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </SVGRight>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <SVGLeft
        width="30px"
        height="30px"
        viewBox="0 0 477 477"
        style={{
          enableBackground: "new 0 0 476.213 476.213",
         
          cursor: "pointer",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path d="M130.607 107.5L151.819 128.713L57.426 223.107H476.213V253.107H57.426L151.819 347.5L130.607 368.713L0 238.106L130.607 107.5Z" />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="476.213"
              height="476.213"
              transform="matrix(-1 0 0 1 476.213 0)"
            />
          </clipPath>
        </defs>
      </SVGLeft>
    </div>
  );
}

export default function SimpleSlider() {
  var settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Wrap>
      <Slider {...settings}>
        <Comment>
          <div>
            <svg
              id="Capa_1"
              enableBackground="new 0 0 409.294 409.294"
              height="30px"
              viewBox="0 0 409.294 409.294"
              width="30px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m0 204.647v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941v-58.471c-96.728 0-175.412 78.684-175.412 175.412z" />
              <path d="m409.294 87.706v-58.471c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941z" />
            </svg>
          </div>
          <SliderText>
            Jamie found and helped us hire several world-class software
            engineers who have since become key parts of the DealDash team. We
            have worked with dozens of software engineering focused recruiters
            and Jamie has produced the best results. By far. Plan to work with
            Jamie going forwards too.
          </SliderText>
          <DownText>⏤ William Wolfram CEO , Dealdash</DownText>
        </Comment>

        <Comment>
          <div>
            <svg
              id="Capa_1"
              enableBackground="new 0 0 409.294 409.294"
              height="30px"
              viewBox="0 0 409.294 409.294"
              width="30px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m0 204.647v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941v-58.471c-96.728 0-175.412 78.684-175.412 175.412z" />
              <path d="m409.294 87.706v-58.471c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941z" />
            </svg>
          </div>
          <SliderText>
            Malin is both a very professional recruiter and an awesome person.
            She contacted me some months ago for an open position in the company
            I currently work for and supported me not only during the whole
            hiring process but also after I had started my job (which I'm really
            happy with). Without her, I would have missed this opportunity!
          </SliderText>
          <DownText>⏤ Nicolò Pignatelli VP of Engineering, Careship</DownText>
        </Comment>

        <Comment>
          <div>
            <svg
              id="Capa_1"
              enableBackground="new 0 0 409.294 409.294"
              height="30px"
              viewBox="0 0 409.294 409.294"
              width="30px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m0 204.647v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941v-58.471c-96.728 0-175.412 78.684-175.412 175.412z" />
              <path d="m409.294 87.706v-58.471c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941z" />
            </svg>
          </div>
          <SliderText>
            Jamie stepped in to help with a couple of key exec searches with us
            at Booking. He very quickly grasped the business problem we were
            solving for & identified the type of profile that we'd need to
            target. With his strong business acumen and storytelling skills he
            engaged a strong, global diverse slate of candidates from pedigreed
            product led companies. Jamie has a unique ability to engage the
            right talent & his strong relationship building on the candidate and
            stakeholder side skills allowed him to be successful with us. Would
            strongly recommend working with him and I look forward to the next
            time we work together.
          </SliderText>
          <DownText>⏤ Ross Inman, Booking.com</DownText>
        </Comment>

        <Comment>
          <div>
            <svg
              id="Capa_1"
              enableBackground="new 0 0 409.294 409.294"
              height="30px"
              viewBox="0 0 409.294 409.294"
              width="30px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m0 204.647v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941v-58.471c-96.728 0-175.412 78.684-175.412 175.412z" />
              <path d="m409.294 87.706v-58.471c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941z" />
            </svg>
          </div>
          <SliderText>
            I've invited Avuteq and Jamie to help OLX Brazil find talented
            product executives across the globe. Traditionally we’ve been
            focusing our search locally and he helped us establish a new global
            process and better candidate experience. Jamie is very knowledgeable
            and has the right instincts when it comes to passionate product
            leaders. We’ve worked on several profiles - Product Directors,
            Product Data Analytics and Senior Design Heads, always impressed
            with the quality, attention and speed that Jamie and Avuteq
            approached the challenge.
          </SliderText>
          <DownText>⏤ Janet Baireva, CPO, OLX Brazil</DownText>
        </Comment>
      </Slider>
    </Wrap>
  );
}
