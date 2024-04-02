import { DefaultHeader, Main } from "../layouts";
export const OtherOverlayContent = () => {
  return (
    <div className="other-overaly__content">
      <DefaultHeader />
      <div className="flex">
        <Main />
        <Main button={true} />
      </div>
    </div>
  );
};
