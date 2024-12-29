import { useEffect } from "https://esm.sh/v128/preact@10.22.0/hooks";

function Loading() {
  useEffect(() => {
    // Calculating Weekday
    // const weekday = [
    //   "Sunday",
    //   "Monday",
    //   "Tuesday",
    //   "Wednesday",
    //   "Thursday",
    //   "Friday",
    //   "Saturday",
    // ];
    // const d = new Date();
    // let day = weekday[d.getDay()];

    const textArray = ["Hello, World!" // `Happy ${day}`
    ];

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
    // setTimeout(() => {
    //   typingEffect(textArray[1], 1);
    // }, 1000);

    // Rendering the loading bars
    setTimeout(() => {
      const character = "🁢";
      let count = 0;
      // Maximum 20 bars
      const maxCount = 20;
      let percent = 0;

      const lineElement = document.getElementById(`loading-bar`);
      const percentElement = document.getElementById(`percentage`);

      if (lineElement) {
        lineElement.textContent += "Loading: ";

        // In interval of 0.02 seconds, every loading bar is rendered
        const interval = setInterval(() => {
          if (count >= maxCount) {
            // clear the interval when count goes above 20
            clearInterval(interval);
          } else {
            lineElement.textContent += character;

            // Incrementing the percent by 5 to complete the loading in 20 bars
            percent += 5;
            if (percentElement) {
              percentElement.textContent = `${percent} %`;
            }
            count++;
          }
        }, 20);
      }
    }, 1000);
  }, []);

  return (
    <div class="modal">
      <h2 id="typing-0"></h2>
      <p id="typing-1"></p>
      <div class="loading-block">
        <p id="loading-bar"></p>
        <p id="percentage"></p>
      </div>
    </div>
  );
}

export default Loading;
