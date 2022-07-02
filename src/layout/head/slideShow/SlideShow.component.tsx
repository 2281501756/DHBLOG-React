import SlideShowStyle from "./SlideShow.style";
import SlideTitle from "./SlideTitle.component";
import useBackgroundImage from "../../../hooks/useBackgroundImage";
import { useEffect, useRef, useState } from "react";

interface Props {
  SlideShowTime?: number
}

const SlideShow = ({ SlideShowTime = 8000 }: Props) => { 
  let [url1, setUrl1] = useState(useBackgroundImage())
  let [url2, setUrl2] = useState(useBackgroundImage())
  let activeImage = url1;
  let image1 = useRef<HTMLImageElement>(null)
  let image2 = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const id = setInterval(() => {
      image1.current?.classList.toggle("active")
      image2.current?.classList.toggle("active")
      setTimeout(() => { 
        let newURl = useBackgroundImage()
        while(url1 === newURl || url2 === newURl) newURl = useBackgroundImage()
        if (activeImage === url1) {
          setUrl1(newURl)
          activeImage = url2
        } else {
          setUrl2(newURl)
          activeImage = url1
        }
       }, 1500)
    }, SlideShowTime)
   return () => clearInterval(id)
    }, [])
  return (
    <SlideShowStyle>
      <div className="image-container">
      <img ref={image1} className="active" src={ url1 } alt="背景图片" />
      <img ref={image2} src={ url2 } alt="背景图片" />
      </div>
      <SlideTitle title="欢迎来到董浩个人博客"></SlideTitle>
    </SlideShowStyle>
  )
}

export default SlideShow