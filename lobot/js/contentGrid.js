(async function ContentGrid() {
  const contentCards = document.querySelectorAll(`.content-grid .card`);
  contentCards.forEach((element) => {
    element.addEventListener('click', async function (event) {
      const response = await fetch(`/content/${event.currentTarget.id}`);
      response.body.getReader().read().then(function (result) {
        consosle.log(result);
      });
      console.log(response);
    });
  });
})();
