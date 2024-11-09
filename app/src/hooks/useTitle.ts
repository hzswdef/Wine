import { useEffect, useState } from "react";

const websiteName: string = import.meta.env.VITE_WEBSITE_NAME;

const useTitle = () => {
  const [title, setTitle] = useState(websiteName);

  const updateTitle = (title: string | null = null) => {
    if (title) {
      setTitle(`${websiteName} | ${title}`);
    } else {
      setTitle(websiteName);
    }
  };

  useEffect(() => {
    document.title = title;
  }, [title]);

  return updateTitle;
};

export default useTitle;
