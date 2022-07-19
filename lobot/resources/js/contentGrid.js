(function ContentGrid() {
    const contentCards = document.querySelectorAll(`.content-grid .card`);
    const contentContainer = document.querySelector(
        `.content-container`,
    );
    contentCards.forEach((element) => {
        element.addEventListener('click', async function (event) {
            event.preventDefault();
            const gridCard = event.currentTarget;
            const urlFragments = gridCard.closest('a').href.split('/');
            const resourceType = urlFragments[4];
            const contentId = urlFragments[5];
            const requestPath = `${resourceType}/${contentId}`;
            if (!gridCard.getAttribute(`inline-cache`)) {
                const response = fetch(`${requestPath}`, {
                    method: 'GET',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((response) => {
                    response.json().then((response) => {
                        const responseJson = JSON.parse(response);
                        const contentGrid = document.querySelector(
                            `.content-grid`,
                        );
                        contentGrid.style.display = 'none';
                        gridCard.setAttribute(`inline-cache`, true);
                        gridCard.setAttribute(
                            `inline-cache-content`,
                            responseJson.body,
                        );
                        contentContainer.innerHTML = responseJson.body;
                    });
                });
            } else {
                const cardCachedData = gridCard.getAttribute(
                    `inline-cache-content`,
                );

                if (!cardCachedData) return;
                contentGrid.style.display = 'none';
                contentContainer.innerHTML = cardCachedData;
            }
        });
    });

    const contentGrid = document.querySelector(`.content-grid`);
    const contentClose = document.querySelector(`.content-close`);
    const contentObserver = new MutationObserver(function (mutations) {
        if (mutations[0].addedNodes.length > 0) {
            let mutationEvent = new Event('content-loaded');
            mutationEvent.data = mutations;
            console.log(`content-loaded`);
            window.dispatchEvent(mutationEvent);
        }
    });

    contentObserver.observe(contentContainer, {
        childList: true,
        characterDataOldValue: true,
    });

    window.addEventListener('content-loaded', function (event) {
        const eventData = event.data[0] || null;
        const htmlNode = eventData.target;
        const contentClose = htmlNode.querySelector('.content-close');
        contentClose.addEventListener('click', function (event) {
            event.preventDefault();
            contentGrid.style.display = 'block';
            contentContainer.innerHTML = '';
        });
    });
})();
