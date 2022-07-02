import { url } from '../util/http/base.url'

const useBackgroundImage = () => {
  const n = (Math.random() * 14 + 1) | 0
  return `${url}/static/image/background/${n}.jpg`
}

export default useBackgroundImage
