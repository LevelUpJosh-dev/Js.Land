(function Compare() {
    document.getElementById('compare-button').addEventListener('click', async () => {
        let alpha = document.getElementById('compare-text-alpha').value;
        let beta = document.getElementById('compare-text-beta').value;
        let response = await fetch(`/tools/compare`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "alpha": alpha,
                "beta": beta
            })
        });
        let data = await response.json();
        console.log(data);
        //if the response is successful, display the result in the compare-text-result text area
        if (data) {
            const compareContainer = document.getElementById('compare-text-result');
            const compareContent = compareContainer.querySelector('.panel-body');
            compareContent.innerHTML = JSON.stringify(data);
        }
    });
})();
