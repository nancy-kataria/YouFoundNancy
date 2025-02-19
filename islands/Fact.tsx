import { useEffect } from "https://esm.sh/v128/preact@10.22.0/hooks";

interface islandProps {
  openFact: boolean;
}

function Fact({ openFact }: islandProps) {
  useEffect(() => {
    const typingEffect = () => {
      let index = 0;
      const speed = 40;
      const text = "How to center a div?";

      const element = document.getElementById("typing-fact");
      if (!element) return;

      const typeCharacter = () => {
        if (index < text.length) {
          element.textContent += text.charAt(index);
          index += 1;
          setTimeout(typeCharacter, speed);
        }
      };

      typeCharacter();
    };

    if (openFact) {
      typingEffect();
      let element = document.getElementsByClassName("main-body");
      element[0].classList.add("bg-blur");
      console.log(element)
    }
  }, []);

  return (
    <div class="modal">
      <h4 id="modal-heading">My most googled question</h4>
      <p id="typing-fact"></p>
    </div>
  );
}

export default Fact;
