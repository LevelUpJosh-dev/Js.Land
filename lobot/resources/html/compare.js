import { Serve } from '../../lobot.js';

/**
 * @type {Compare}
 * @param {object} [options] - A optional config object which can be passed into the template giving contextual data.
 * @param options
 * @returns {Promise<string>}
 * @constructor
 */

async function Compare(options) {
    return `
    ${await window.Head()}
    ${await Serve(`Compare:css`)}
    <body>
        <div class="container mt-5">
            <div class="row mt-5">
                <div class="col-6 text-center">
                    <h2>Origin Object</h2>
                    <textarea id="compare-text-alpha" class="compare-text form-control" rows="16"></textarea>
                </div>
                <div class="col-6 text-center">
                    <h2>Modified Object</h2>
                    <textarea id="compare-text-beta" class="compare-text form-control" rows="16"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-center mt-3">
                    <button id="compare-button" class="btn btn-primary align">Compare</button>
                </div>
            </div>
        </div>
        <div id="compare-text-result" class="container text-center mt-5">
            <h2>Result</h2>
            <div class="panel-group">
                <div class="panel panel-default">
                    <div class="panel-body"></div>
                </div>
            </div>
        </div>
        ${await Serve(`Compare:js`)}
        ${await window.Footer()}
    </body>
  `;
}

export { Compare };
