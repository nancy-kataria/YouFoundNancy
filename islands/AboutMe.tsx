import { useState } from "https://esm.sh/v128/preact@10.22.0/hooks";
import Fact from "./Fact.tsx";

function AboutMe() {
  const [openFact, setOpenFact] = useState<boolean>(false);

  return (
    <div>
      <p onClick={() => setOpenFact(true)}>[Interesting fact]</p>
      {openFact && <Fact openFact={openFact} />}
    </div>
  );
}

export default AboutMe;
