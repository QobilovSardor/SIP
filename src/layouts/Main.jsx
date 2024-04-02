import { Text } from "@consta/uikit/Text";
import { Button } from "@consta/uikit/Button";
import { Link } from "react-router-dom";
import { cnMixSpace } from "@consta/uikit/MixSpace";

// eslint-disable-next-line react/prop-types
export const Main = ({ button }) => {
  return (
    <main className="main">
      <Text view="secondary" size="s">
        Область для контента
      </Text>
      {button ? (
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
      ) : null}
    </main>
  );
};
