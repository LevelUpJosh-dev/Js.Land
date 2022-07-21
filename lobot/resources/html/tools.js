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
                                <h5 class="m-b-20">CLI command used to list all orgs attached to the currently authenticated account?</h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20"><code>sfdx force:org:list</code></h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card flash-card flip flip-with-rotate order-card">
                            <div class="card-block card-face front text-center my-auto">
                                <h5 class="m-b-20">CLI command used to push all local changes to your currently connected org?</h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20"><code>sfdx force:source:push</code></h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card flash-card flip flip-with-rotate order-card">
                            <div class="card-block card-face front text-center my-auto">
                                <h5 class="m-b-20">This is the pimrary language used within Salesforce Lightning platform?</h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20">Apex <br> which is a strongly typed, object-oriented programming language that allows for executing flow and transaction control statements on Salesforce servers in conjunction with calls to the API.</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card flash-card flip flip-with-rotate order-card">
                            <div class="card-block card-face front text-center my-auto">
                                <h5 class="m-b-20">Prerforming custom actions before or after changes to Salesforce records, such as insertions, updates, or deletions can be accomplished with?</h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20">Apex Triggers <br> are Apex code that executes before or after the following types of operations: insertions, updates, and deletions.</h5></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-3 col-xl-3">
                        <div class="card flash-card flip flip-with-rotate order-card">
                            <div class="card-block card-face front text-center my-auto">
                                <h5 class="m-b-20">Salesforce supports two primary query languages for searching org records and fields?</h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20"> SOQL <small>Salesforce Object Query Language</small> <br>  SOSL <small>Salesforce Object Search Language</small></h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card flash-card flip flip-with-rotate order-card">
                            <div class="card-block card-face front text-center my-auto">
                                <h5 class="m-b-20">This type of query is the equivalent of a SELECT SQL statement and searches the org database?</h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20"><a href="https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql.htm" target="_blank">SOQL</a> <br> when you don’t know which object or field the data resides in.</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card flash-card flip flip-with-rotate order-card">
                            <div class="card-block card-face front text-center my-auto">
                                <h5 class="m-b-20">This query is a programmatic way of performing a text-based search against the search index.</h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20"><a href="https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl.htm"target="_blank" >SOSL</a> <br> when you know which objects the data resides in.</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card flash-card flip flip-with-rotate order-card">
                            <div class="card-block card-face front text-center my-auto">
                                <h5 class="m-b-20">Lightning Web Components allow special attributes that allow you to add dynamic behavior to an HTML template which are caled?</h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20">Template Directives <br> Some examples of this are <code>for:each={array}</code> <code>if:true|false={expression}</code> <code>lwc:render-mode='light'</code></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-3 col-xl-3">
                        <div class="card flash-card flip flip-with-rotate order-card">
                            <div class="card-block card-face front text-center my-auto">
                                <h5 class="m-b-20">This represents a standard or custom objects that stores record data in the force.com database?</h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20">SObject <br> There is also SObject datatype in apex that is the programmatic representation of these SObjects.</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card flash-card flip flip-with-rotate order-card">
                            <div class="card-block card-face front text-center my-auto">
                                <h5 class="m-b-20">What type of SObject would the following code reference <br> <code>Storage__c</code></h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20">The __c indicates a custom SObject type or field.</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card flash-card flip flip-with-rotate order-card">
                            <div class="card-block card-face front text-center my-auto">
                                <h5 class="m-b-20">Lightning uses this langugage to insert, update, merge, delete, and restore data in Salesforce?</h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20">Data Manipulation Language (DML) <br> DML statements can work in cojunction with Apex triggers to affect dynamic processes based on record alterations.</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card flash-card flip flip-with-rotate order-card">
                            <div class="card-block card-face front text-center my-auto">
                                <h5 class="m-b-20">A lightning web component that renders UI must conatisn which files?</h5>
                            </div>
                            <div class="card-block card-face back text-center d-none my-auto">
                                <h5 class="m-b-20">HTML file, a JavaScript file, and a metadata configuration file.</h5>
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
