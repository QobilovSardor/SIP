// import { Button } from "@consta/uikit/Button";
// import { cnMixSpace } from "@consta/uikit/MixSpace";
// import { Text } from "@consta/uikit/Text";
// import { useMemo } from "react";
// import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
// import { Link, useNavigate } from "react-router-dom";

// export const ResirerComp = () => {
//   // const navigate = useNavigate();
//   // const urlStorage = useMemo(
//   //   () => ({
//   //     getItem(name) {
//   //       try {
//   //         const parsed = JSON.parse(
//   //           decodeURI(window.location.hash.substring(1))
//   //         );
//   //         return parsed[name] || "";
//   //       } catch (error) {
//   //         console.error(error);
//   //         return "";
//   //       }
//   //     },
//   //     setItem(name, value) {
//   //       const encoded = encodeURI(
//   //         JSON.stringify({
//   //           [name]: value,
//   //         })
//   //       );

//   //       // Update the hash without interfering with the browser's Back button.
//   //       navigate("#" + encoded, { replace: true });
//   //     },
//   //   }),
//   //   [navigate]
//   // );
//   return (
//     // <PanelGroup direction="horizontal">
//     //   <Panel
//     //     className="bottom-content content-box"
//     //     defaultSize={30}
//     //     minSize={20}
//     //   >
//     //     <div className="">
//     //       <div>
//     //         <Text view="secondary" size="s">
//     //           Область для контента
//     //         </Text>
//     //         <Link to="/" className="main-link">
//     //           <Button
//     //             label="Вернуться назад"
//     //             size="xs"
//     //             view="secondary"
//     //             className={cnMixSpace({
//     //               mT: "s",
//     //             })}
//     //           />
//     //         </Link>
//     //       </div>
//     //     </div>
//     //   </Panel>
//     //   <PanelResizeHandle />

//     <>
//       <PanelGroup direction="horizontal">
//         <Panel className="white-box" defaultSize={30} minSize={20}>
//           left
//         </Panel>
//         <PanelResizeHandle />
//         <Panel minSize={30}>middle</Panel>
//         <PanelResizeHandle />
//         <Panel className="white-box" defaultSize={30} minSize={20}>
//           right
//         </Panel>
//       </PanelGroup>

//       <PanelGroup direction="vertical">
//         <Panel className="white-box" maxSize={75}>
//           top
//         </Panel>
//         <PanelResizeHandle className="border-line" />
//         <Panel className="white-box" maxSize={75}>
//           bottom
//         </Panel>
//       </PanelGroup>
//     </>
//     // </PanelGroup>
//     // <PanelGroup
//     //   autoSaveId="example"
//     //   direction="horizontal"
//     //   storage={urlStorage}
//     // >
//     //   <Panel>left</Panel>
//     //   <PanelResizeHandle />
//     //   <Panel>middle</Panel>
//     //   <PanelResizeHandle />
//     //   <Panel>right</Panel>
//     // </PanelGroup>
//   );
// };
