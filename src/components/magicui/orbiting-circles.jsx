import { cn } from "@/lib/utils";
import React from "react";

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}) {
  const calculatedDuration = duration / speed;
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full">
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none" />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            style={
              {
                "--duration": calculatedDuration,
                "--radius": radius,
                "--angle": angle,
                "--icon-size": `${iconSize}px`
              }
            }
            className={cn(
              `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full`,
              { "[animation-direction:reverse]": reverse },
              className
            )}
            {...props}>
            {child}
          </div>
        );
      })}
    </>
  );
}



// import { cn } from "@/lib/utils";
// import React from "react";

// export function OrbitingCircles({
//   className,
//   children,
//   reverse = false,
//   duration = 20,
//   radius = 160,
//   path = true,
//   iconSize = 30,
//   speed = 1,
//   ...props
// }) {
//   const calculatedDuration = duration / speed;
//   const childCount = React.Children.count(children);

//   return (
//     <div 
//       className={cn(
//         "relative flex items-center justify-center",
//         className
//       )}
//       {...props}
//     >
//       {path && (
//         <div 
//           className="absolute rounded-full border border-gray-200 dark:border-gray-800"
//           style={{
//             width: radius * 2,
//             height: radius * 2,
//           }}
//         />
//       )}
//       {React.Children.map(children, (child, index) => {
//         const angle = (360 / childCount) * index;
//         return (
//           <div
//             key={index}
//             className="absolute"
//             style={{
//               width: iconSize,
//               height: iconSize,
//               transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
//               animationDuration: `${calculatedDuration}s`,
//               animationName: reverse ? 'orbit-reverse' : 'orbit',
//               animationTimingFunction: 'linear',
//               animationIterationCount: 'infinite',
//             }}
//           >
//             {child}
//           </div>
//         );
//       })}
//       <style jsx global>{`
//         @keyframes orbit {
//           from { transform: rotate(0deg) translate(${radius}px) rotate(0deg); }
//           to { transform: rotate(360deg) translate(${radius}px) rotate(-360deg); }
//         }
//         @keyframes orbit-reverse {
//           from { transform: rotate(360deg) translate(${radius}px) rotate(-360deg); }
//           to { transform: rotate(0deg) translate(${radius}px) rotate(0deg); }
//         }
//       `}</style>
//     </div>
//   );
// }



// import { cn } from "@/lib/utils";
// import React from "react";

// export function OrbitingCircles({
//   className,
//   children,
//   reverse = false,
//   duration = 20,
//   radius = 300,
//   path = true,
//   iconSize = 50,
//   speed = 1,
//   ...props
// }) {
//   const calculatedDuration = duration / speed;
//   const childCount = React.Children.count(children);

//   // Adjust radius to prevent overlap
//   const safeRadius = radius - (iconSize / 2);

//   return (
//     <div 
//       className={cn(
//         "relative flex items-center justify-center",
//         className
//       )}
//       {...props}
//     >
//       {path && (
//         <div 
//           className="absolute rounded-full border border-gray-200 dark:border-gray-800"
//           style={{
//             width: radius * 2,
//             height: radius * 2,
//           }}
//         />
//       )}
//       {React.Children.map(children, (child, index) => {
//         const angle = (360 / childCount) * index;
//         return (
//           <div
//             key={index}
//             className="absolute"
//             style={{
//               width: iconSize,
//               height: iconSize,
//               transform: `rotate(${angle}deg) translate(${safeRadius}px) rotate(-${angle}deg)`,
//               animationDuration: `${calculatedDuration}s`,
//               animationName: reverse ? 'orbit-reverse' : 'orbit',
//               animationTimingFunction: 'linear',
//               animationIterationCount: 'infinite',
//               position: 'absolute',
//             }}
//           >
//             <div className="flex items-center justify-center">
//               {child}
//             </div>
//           </div>
//         );
//       })}
//       <style jsx global>{`
//         @keyframes orbit {
//           from { transform: rotate(0deg) translate(${safeRadius}px) rotate(0deg); }
//           to { transform: rotate(360deg) translate(${safeRadius}px) rotate(-360deg); }
//         }
//         @keyframes orbit-reverse {
//           from { transform: rotate(360deg) translate(${safeRadius}px) rotate(-360deg); }
//           to { transform: rotate(0deg) translate(${safeRadius}px) rotate(0deg); }
//         }
//       `}</style>
//     </div>
//   );
// }