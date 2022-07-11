(async function ContentGrid() {
  const contentCards = document.querySelectorAll(`.content-grid .card`);
  contentCards.forEach((element) => {
    element.addEventListener("click", async function (event) {
      event.preventDefault();
      const urlFragments = event.currentTarget.closest("a").href.split("/");
      const contentId = urlFragments[4];
      const requestPath = `${urlFragments[4]}`;
      const response = fetch(requestPath, {
        method: "GET",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        response.json().then((body) => {
          const content = JSON.parse(body);
          const contentGrid = document.querySelector(`.content-grid`);
          const contentContainer = document.querySelector(`.content-container`);
          contentGrid.style.display = "none";
          contentContainer.innerHTML = content.body;
        });
      });
    });
  });

  const contentContainer = document.querySelector(`.content-container`);
  const contentGrid = document.querySelector(`.content-grid`);
  const contentClose = document.querySelector(`.content-close`);
  const contentObserver = new MutationObserver(function (mutations) {
    if (mutations[0].addedNodes.length > 0) {
      let mutationEvent = new Event("content-loaded");
      mutationEvent.data = mutations;
      console.log(`content-loaded`);
      window.dispatchEvent(mutationEvent);
    }
  });

  contentObserver.observe(contentContainer, {
    childList: true,
    characterDataOldValue: true,
  });

  window.addEventListener("content-loaded", function (event) {
    const eventData = event.data[0] || null;
    const contentClose = eventData.target.querySelector(".content-close");
    console.log(eventData);
    contentClose.addEventListener("click", function (event) {
      event.preventDefault();
      contentGrid.style.display = "block";
      contentContainer.innerHTML = "";
    });
  });
})();
