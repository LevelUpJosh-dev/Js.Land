import { Serve } from '../../lobot.js';

/**
 * @type {Tools}
 * @param {Object} [options] - The options object can be used to pass in context data.
 * @returns {Promise<string>} - This function returns a promise that resolves to the HTML string of the template.
 * @constructor
 */

async function Tools(options) {
    return `
        ${await window.Head()}
        <body id="page-top" class="home">
            ${await window.Navigation(options)}

            </section>
            ${await window.Footer()}
        </body>
    </html>
    `;
}

export { Tools };
