import { Text } from "@consta/uikit/Text";
import { Button } from "@consta/uikit/Button";
import { Link } from "react-router-dom";
import { cnMixSpace } from "@consta/uikit/MixSpace";
import { NotFoundData } from "../components";

export const Main = ({ button, className, noFull, notFound }) => {
  return (
    <div
      className={`flex ${noFull ? "no-full" : ""}`}
      style={{ width: "100%" }}
    >
      <main className={`main ${className}`}>
        {notFound && (
          <>
            <NotFoundData />
           
          </>
        )}

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
    </div>
  );
};
