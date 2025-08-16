   // Generate random hex color
    function randomColor() {
      const hex = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    const startBtn = document.querySelector(".Start");
    const stopBtn = document.querySelector(".Stop");
    const body = document.querySelector("body");

    let intervalId = null;

    // Start button
    startBtn.addEventListener("click", () => {
      if (!intervalId) {
        intervalId = setInterval(() => {
          body.style.backgroundColor = randomColor();
          console.log("Color:", body.style.backgroundColor); // debug
        }, 300);
      }
    });

    // Stop button
    stopBtn.addEventListener("click", () => {
      clearInterval(intervalId);
      intervalId = null;
    });
