import { useEffect } from "https://esm.sh/v128/preact@10.22.0/hooks";

function Loading() {
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

  const renderLoadingBar = () => {
    const character = "🁢";
    let count = 0;
    // Maximum 20 bars
    const maxCount = 20;
    let percent = 0;

    const lineElement = document.getElementById(`loading-bar`);
    const lineText = document.getElementById(`loading-text`);
    const percentElement = document.getElementById(`percentage`);

    if (lineElement && lineText) {
      lineText.textContent += "Loading: ";

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
      }, 40);
    }
  };

  useEffect(() => {
    typingEffect(textArray[0], 0);

    // Rendering the loading bars
    setTimeout(() => {
      renderLoadingBar();
    }, 1000);
  }, []);

  return (
    <div class="modal">
      <h2 id="typing-0"></h2>
      <p id="typing-1"></p>
      <div class="loading-block">
        <p id="loading-text"></p>
        <p id="loading-bar"></p>
        <div>
          <p id="percentage"></p>
        </div>
      </div>
    </div>
  );
}

export default Loading;
