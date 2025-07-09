import { createContext, useContext, useState } from "react";

export const Router = createContext();
export function RouterProvider({children}) {
  const [url, setUrl] = useState(["games"]);

  return <>
    <Router.Provider value={{url, setUrl}}>
      {children}
    </Router.Provider>
  </>;
}

export function Link({children, href, ...props}) {
  const { setUrl } = useContext(Router);

  return <div {...props} onClick={(e) => {
    setUrl(href);
  }}>
    {children}
  </div>
}

