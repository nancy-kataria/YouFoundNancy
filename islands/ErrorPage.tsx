import { useEffect } from "https://esm.sh/v128/preact@10.22.0/hooks";

function ErrorPage() {
  useEffect(() => {
    const typingEffect = () => {
      let index = 0;
      const speed = 40;
      const text = "404 - Page not found";

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
    <div class="flex-center error-page">
      <p class="typing"></p>
      <p>404 - Page not found</p>
    </div>
  );
}

export default ErrorPage;
