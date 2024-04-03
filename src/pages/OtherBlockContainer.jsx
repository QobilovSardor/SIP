import { Link } from "react-router-dom";
import { DefaultHeader } from "../layouts";
import { Text } from "@consta/uikit/Text";
import { Button } from "@consta/uikit/Button";
import { cnMixSpace } from "@consta/uikit/MixSpace";
import { Resizable } from "re-resizable";

export const OtherBlockContainer = () => {
  return (
    <div className="max-h-full">
      <DefaultHeader />
      <div className="other-block__container">
        <div className="top-content">
          {/* <Resizable className="resizer-left content-box"> */}
          <div className="top-content__left content-box">
            <Text view="secondary" size="s">
              Область для контента
            </Text>
          </div>
          {/* </Resizable> */}
          <Resizable
            defaultSize={{
              width: "1575px",
            }}
            className="resizer-right content-box"
          >
            <div className="top-content__right">
              <Text view="secondary" size="s">
                Область для контента
              </Text>
            </div>
          </Resizable>
        </div>
        {/* <Resizable
          className="resizer-bottom"
          defaultSize={{ height: 200 }}
          enable={{ top: true, bottom: true }}
        > */}
          <div className="bottom-content content-box">
            <div>
              <Text view="secondary" size="s">
                Область для контента
              </Text>
              <Link to="/" className="main-link">
                <Button
                  label="Вернуться назад"
                  size="xs"
                  view="secondary"
                  className={cnMixSpace({
                    mT: "s",
                  })}
                />
              </Link>
            </div>
          </div>
        {/* </Resizable> */}
      </div>
    </div>
  );
};
