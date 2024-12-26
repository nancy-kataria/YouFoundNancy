import { useEffect } from "https://esm.sh/v128/preact@10.22.0/hooks";

function Loading() {
  useEffect(() => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const d = new Date();
    let day = weekday[d.getDay()];

    const textArray = ["Hello World!", `Happy ${day}`];
    const typingEffect = (text: string, position: number) => {
      let index = 0;
      const speed = 40;

      const element = document.getElementById(`typing-${position}`);
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

    typingEffect(textArray[0], 0);
    setTimeout(() => {
      typingEffect(textArray[1], 1);
    }, 1000);
  }, []);

  return (
    <div class="modal">
      <p id="typing-0"></p>
      <p id="typing-1"></p>
    </div>
  );
}

export default Loading;
