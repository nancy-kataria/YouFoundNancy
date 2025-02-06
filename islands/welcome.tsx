import { useEffect, useState } from "preact/hooks";
import Loading from "./Loading.tsx";
import AboutMe from "./AboutMe.tsx";

export default function Welcome() {
  const [openLoading, setOpenLoading] = useState<boolean>(true);

  useEffect(() => {
    // After 2 seconds the loading block will disappear
    setTimeout(() => {
      setOpenLoading(false);
    }, 2200);
  }, []);

  return (
    <div class="main-block">
      {!openLoading && <AboutMe />}
      {openLoading && <Loading />}
    </div>
  );
}
