import { Text } from "@consta/uikit/Text"
import assets from "../assets"
import { cnMixSpace } from "@consta/uikit/MixSpace"

export const NotFoundData = () => {
  return (
    <div className="null-content">
      <img src={assets.notFoundImg} alt="" />
      <Text view="primary" size="lg" weight="semibold" className={cnMixSpace({
        mB: 'xs',
      })}>
        Выберите обьект
      </Text>
      <Text view="secondary" size="s">
        Пока тут пусто
      </Text>
    </div>
  )
}
