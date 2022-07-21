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
            <div class="container-fluid">
                <div class="row mb-3">
                    <div class="col-md-3 col-xl-3">
                        <div class="card flash-card flip flip-with-rotate order-card">
                            <div class="card-block card-face front text-center my-auto">
                                <h5 class="m-b-20">This Salesforce DX CLI command allows you to view a list of orgs?</h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20">sfdx force:org:list</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card flash-card flip flip-with-rotate order-card">
                            <div class="card-block card-face front text-center my-auto">
                                <h5 class="m-b-20">This DX CLI command pushes all local code and metadata to your connected org? </h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20">sfdx force:source:push</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card flash-card flip flip-with-rotate order-card">
                            <div class="card-block card-face front text-center my-auto">
                                <h5 class="m-b-20">What is the primary language for creating and working within the Salesforce Lightning Platform?</h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20">Apex</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card flash-card flip flip-with-rotate order-card">
                            <div class="card-block card-face front text-center my-auto">
                                <h5 class="m-b-20">Which method would you use to write a function that handles actions before/after a given DML action.</h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20">Apex Triggers</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-3 col-xl-3">
                        <div class="card flash-card flip flip-with-rotate order-card">
                            <div class="card-block card-face front text-center my-auto">
                                <h5 class="m-b-20">Salesforce supports two primary query languages for working with data what are they?</h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20"> SOQL <small>Salesforce Object Query Language</small> & SOSL <small>Salesforce Object Search Language</small></h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card flash-card flip flip-with-rotate order-card">
                            <div class="card-block card-face front text-center my-auto">
                                <h5 class="m-b-20">SOQL?</h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20">SOQL can search your organization’s Salesforce data for specific information.</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card flash-card flip flip-with-rotate order-card">
                            <div class="card-block card-face front text-center my-auto">
                                <h5 class="m-b-20">Apex DML Statements?</h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20">DML statements to insert, update, merge, delete, and restore data in Salesforce.</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card flash-card flip flip-with-rotate order-card">
                            <div class="card-block card-face front text-center my-auto">
                                <h5 class="m-b-20">This CLI command allows you to view a list of org?</h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20">sfdx force:org:list</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-3 col-xl-3">
                        <div class="card flash-card flip flip-with-rotate order-card">
                            <div class="card-block card-face front text-center my-auto">
                                <h5 class="m-b-20">This CLI command allows you to view a list of org?</h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20">sfdx force:org:list</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card flash-card flip flip-with-rotate order-card">
                            <div class="card-block card-face front text-center my-auto">
                                <h5 class="m-b-20">This CLI command allows you to view a list of org?</h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20">sfdx force:org:list</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card flash-card flip flip-with-rotate order-card">
                            <div class="card-block card-face front text-center my-auto">
                                <h5 class="m-b-20">This CLI command allows you to view a list of org?</h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20">sfdx force:org:list</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card flash-card flip flip-with-rotate order-card">
                            <div class="card-block card-face front text-center my-auto">
                                <h5 class="m-b-20">This CLI command allows you to view a list of org?</h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20">sfdx force:org:list</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        ${await Serve('tools:js')}
        ${await window.Footer()}
    `;
}

export { Tools };
