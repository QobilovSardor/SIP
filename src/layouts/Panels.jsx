import { Main } from "./Main";
import { Text } from "@consta/uikit/Text";

export const Panels = () => {
  return (
    <div className="panels">
      <div className="left-sidebar sidebar">
        <Text view="secondary" size="s">
          Область для контента левой панели
        </Text>
      </div>
      <Main button={false} />
      <div className="right-sidebar sidebar">
        <Text view="secondary" size="s">
          Область для контента правой панели
        </Text>
      </div>
    </div>
  );
};
