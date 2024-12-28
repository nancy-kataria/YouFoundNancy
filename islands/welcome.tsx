import { useEffect, useState } from "https://esm.sh/v128/preact@10.22.0/hooks";
import Loading from "./Loading.tsx";
import AboutMe from "./AboutMe.tsx";

export default function Welcome() {
  const [openLoading, setOpenLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setOpenLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {!openLoading && <AboutMe />}
      {openLoading && <Loading />}
    </div>
  );
}
