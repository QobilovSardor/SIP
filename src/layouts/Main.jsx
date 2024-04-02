import { Text } from "@consta/uikit/Text";
import { Button } from "@consta/uikit/Button";
import { Link } from "react-router-dom";
import { cnMixSpace } from "@consta/uikit/MixSpace";

export const Main = () => {
  return (
    <main className="main">
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
    </main>
  );
};
