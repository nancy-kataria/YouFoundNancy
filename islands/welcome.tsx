import { useEffect } from "https://esm.sh/v128/preact@10.22.0/hooks";

export default function Welcome() {
  useEffect(() => {
    const typingEffect = () => {
      let index = 0;
      const speed = 40;
      const text = "Hello World!";

      const element = document.getElementById("typing");
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

    typingEffect();
  }, []);

  return (
    <div>
      <p id="typing"></p>
    </div>
  );
}
