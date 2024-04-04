// import { useEffect, useState } from "react";

// export const useNavbarState = (openNav) => {
//   const [isActive, setIsActive] = useState(openNav);
//   const [isOpen, setOpen] = useState({});
//   useEffect(() => {
//     setIsActive(openNav);
//     console.log(openNav);
//   }, [openNav]);

//   const handleChangeActive = () => {
//     setIsActive(!isActive);
//     setOpen({});
//     console.log('ishladi setOpen');
//   };

//   const handleCollapseToggle = (key) => {
//     if (isActive) {
//       setOpen((prevState) => ({
//         ...prevState,
//         [key]: !prevState[key],
//       }));
//     }
//   };

//   return { isActive, isOpen, handleChangeActive, handleCollapseToggle };
// };
