      // console.log("Hello from inside");
      const panels = document.querySelectorAll(".panel");

      function toggleOpen() {
        // console.log("Hello");
        this.classList.toggle("open");
      }

      function toggleText(event) {
        // console.log("It is working");
        // console.log(event.propertyName);
        if (event.propertyName.includes("flex")) {
          this.classList.toggle("open-active");
        }
      }

      panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
      panels.forEach((panel) => {
        panel.addEventListener("transitionend", toggleText);
      });
