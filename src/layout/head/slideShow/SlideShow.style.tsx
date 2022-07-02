import styled from "styled-components";
import SlideTitleStyle from "./SlideTitle.style";
const SlideShowStyle = styled.div`
 .image-container {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.image-container img {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  opacity: 0;
  transition: opacity 1s ease-in-out;

 }
 .image-container img.active {
  opacity: 1;
  z-index: 1;
 }
 ${SlideTitleStyle} {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: #fff;
  letter-spacing: 0.2em;
 }
`
  

export default  SlideShowStyle