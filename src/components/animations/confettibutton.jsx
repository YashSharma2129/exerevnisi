// import { ConfettiButton } from "@/components/magicui/confetti";
 
// export function ConfettiButtonDemo() {
//   return (
//     <div className="relative">
//       <ConfettiButton
//         options={{
//           get angle() {
//             return Math.random() * 360;
//           },
//         }}
//       >
//         Random Confetti 🎉
//       </ConfettiButton>
//     </div>
//   );
// }


import { ConfettiButton } from "@/components/magicui/confetti";
import React from "react";

export function ConfettiButtonDemo({ children, className }) {
  return (
    <div className="relative">
      <ConfettiButton
        options={{
          get angle() {
            return Math.random() * 360;
          },
        }}
        className={className}
      >
        {children}
      </ConfettiButton>
    </div>
  );
}

