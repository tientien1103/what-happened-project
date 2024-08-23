import clsx from "clsx";
import { ReactNode } from "react";

export default function Container({ children, className }) {
  return (
    <div
      className={clsx("container max-w-screen-2xl", {
        [`${className}`]: className,
      })}
    >
      {children}
    </div>
  );
}
