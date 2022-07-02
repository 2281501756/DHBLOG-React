import { useEffect, useState } from "react";
import SlideTitleStyle from "./SlideTitle.style";

interface Props {
  title: string
}

const SlideTitle = ({ title }: Props) => {
  const [headline, setHeadline] = useState<string>('')
  const titleValue = title.split('')
  useEffect(() => {
    let id = setInterval(() => {
      for (let i = 0; i < titleValue.length; i++) {
          setTimeout(() => {
          console.log(headline)
          setHeadline(headline + titleValue[i])
        }, i * 400)
      }
      // setTimeout(() => {
      //   for (let i = 0; i < titleValue.length; i++) {
      //     setTimeout(() => {
      //       setHeadline(headline.split('').pop()?.toString() || '')
      //     }, i * 100)
      //   }
      // }, 4000)
    }, 5000) 
    return () => clearInterval(id)
  }, [])
  return (
    <SlideTitleStyle>
      <div className="title">{ headline }</div>
    </SlideTitleStyle>
  )
}

export default SlideTitle
