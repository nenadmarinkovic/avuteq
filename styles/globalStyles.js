import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Sofia Pro";
    src: url("fonts/SofiaPro-Black.woff2") format("woff2"),
      url("fonts/SofiaPro-Black.woff") format("woff");
    font-weight: 900;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: "Sofia Pro";
    src: url("fonts/SofiaPro-Bold.woff2") format("woff2"),
      url("fonts/SofiaPro-Bold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: "Sofia Pro";
    src: url("fonts/SofiaPro-SemiBold.woff2") format("woff2"),
      url("fonts/SofiaPro-SemiBold.woff") format("woff");
    font-weight: 600;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: "Rubik";
    src: url("fonts/Rubik-Regular.woff2") format("woff2"),
      url("fonts/Rubik-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: "Rubik";
    src: url("fonts/Rubik-Light.woff2") format("woff2"),
      url("fonts/Rubik-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: "Rubik";
    src: url("fonts/Rubik-Medium.woff2") format("woff2"),
      url("fonts/Rubik-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: block;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }

  h1, h3, h6 {
    margin: 0
  }

  .wrapper {
    overflow-x: hidden;
  }

  .container {
    width: 1140px;
    max-width: 100%;
    margin: 0px auto;

    @media (max-width: 1240px) {
      padding-right: 20px;
      padding-left: 20px;
    }
    
  }

  .no-margins {
    margin: 0 !important;
  }

  .container-slider {
    width: 840px;
    max-width: 100%;
    margin: 0px auto;

    @media (max-width: 960px) {
       width: 100%;
       padding-right: 20px;
       padding-left: 20px;
     }
    
  }

  .padding-top-100 {
    padding-top: 100px;

    @media (max-width: 960px) {
      padding-top: 20px;
     }
  }

  .margin-left-85 {
    margin-left: 85px;

    @media (max-width: 1240px) {
      margin-left: 0;
     }
  }

  .Count {
    padding: 2rem;
    margin: 1rem;
    border-radius: 2em;
    box-shadow: 1px 2px 2px #0D3B66;
    background-color: #FAF0CA;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0D3B66;
}

.slick-slider {
  display: flex;
  align-items: center;
  margin-top: 30px;
}

.slick-track {
  display: flex;
  align-items: center;
}


`;

export default GlobalStyle;
