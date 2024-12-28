import { useEffect, useState } from "https://esm.sh/v128/preact@10.22.0/hooks";

function Loading() {
  const [percentage, setPercentage] = useState<number>(0)
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

    setTimeout(() => {
      const character = "🁢"
      let count = 0;
      const maxCount = 20;
      let percent = 0;

      const lineElement = document.getElementById(`loading-bar`);
      
      if (lineElement) {
        lineElement.textContent += "Loading: ";
        const interval = setInterval(() => {
          if (count >= maxCount) {
            clearInterval(interval);
          } else {
            lineElement.textContent += character;
            percent+=5
            setPercentage(percent)
            count++;
          }
        }, 20);
      }
    }, 2000);
  }, []);

  return (
    <div class="modal">
      <p id="typing-0"></p>
      <p id="typing-1"></p>
      <p id="loading-bar"></p>
      <p>{percentage} %</p>
    </div>
  );
}

export default Loading;
