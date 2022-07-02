import HeadStyle from "./Head.style"
import Nav from "./nav/Nav.component"
import SlideShow from "./slideShow/SlideShow.component"

function Head() {
  return (
    <HeadStyle>
      <Nav></Nav>
      <SlideShow></SlideShow>
    </HeadStyle>
  )   
}

export default Head