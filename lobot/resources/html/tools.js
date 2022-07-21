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
        ${await Serve('tools:css')}
        <body id="page-top" class="home">
            ${await window.Navigation(options)}
            <div class="container">
                <div class="row mb-3">
                    <div class="col-md-3 col-xl-3">
                        <div class="card bg-c-blue order-card">
                            <div class="card-block text-center">
                                <h5 class="m-b-20">This CLI command allows you to view a list of org?</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card bg-c-blue order-card">
                            <div class="card-block text-center">
                                <h5 class="m-b-20">This CLI command allows you to view a list of org?</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card bg-c-blue order-card">
                            <div class="card-block text-center">
                                <h5 class="m-b-20">This CLI command allows you to view a list of org?</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card bg-c-blue order-card">
                            <div class="card-block text-center">
                                <h5 class="m-b-20">This CLI command allows you to view a list of org?</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-4 col-xl-3">
                        <div class="card bg-c-blue order-card">
                            <div class="card-block text-center">
                                <h5 class="m-b-20">This CLI command allows you to view a list of org?</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-xl-3">
                        <div class="card bg-c-blue order-card">
                            <div class="card-block text-center">
                                <h5 class="m-b-20">To add a custom object type you would navigate to this section of your org?</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-xl-3">
                        <div class="card bg-c-blue order-card">
                            <div class="card-block text-center">
                                <h5 class="m-b-20">This CLI command allows you to view a list of orginizations?</h5>
                            </div>
                        </div>
                    </div>
                     <div class="col-md-4 col-xl-3">
                        <div class="card bg-c-blue order-card">
                            <div class="card-block text-center">
                                <h5 class="m-b-20">This CLI command allows you to view a list of org?</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 col-xl-3">
                        <div class="card bg-c-blue order-card">
                            <div class="card-block text-center">
                                <h5 class="m-b-20">This CLI command allows you to view a list of org?</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-xl-3">
                        <div class="card bg-c-blue order-card">
                            <div class="card-block text-center">
                                <h5 class="m-b-20">To add a custom object type you would navigate to this section of your org?</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-xl-3">
                        <div class="card bg-c-blue order-card">
                            <div class="card-block text-center">
                                <h5 class="m-b-20">This CLI command allows you to view a list of orginizations?</h5>
                            </div>
                        </div>
                    </div>
                     <div class="col-md-4 col-xl-3">
                        <div class="card bg-c-blue order-card">
                            <div class="card-block text-center">
                                <h5 class="m-b-20">This CLI command allows you to view a list of org?</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ${await window.Footer()}
        </body>
    </html>
    `;
}

export { Tools };
