import { useEffect, useState } from "react";

export function Lag({children, style, ...props}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, Math.random() * 250);

    return () => {
      clearTimeout(timeout);
    }
  })
  return <div style={{...style, ...(show ? {} : {display: "none"})}} {...props}>{children}</div>
}