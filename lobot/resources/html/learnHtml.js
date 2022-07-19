import { Serve } from '../../lobot.js';

/**
 * @type {LearnHtml}
 * @param {object} [options] - A optional config object which can be passed into the template giving contextual data.
 * @param options
 * @returns {Promise<string>}
 * @constructor
 */

async function LearnHtml(options) {
    return `
    ${await window.Head()}
    ${await Serve(`learnHtml:css`)}
    <div id="learn-html" class="container-fluid mt-5">
        <div class="row">
                    <div class="col-6">
              <div class="card">
                  <div class="card-body">
                      <h5 class="card-title"><strong>HTML</strong></h5>
                      <p class="card-text">
                          <div class="spacer"></div>
                          <strong>What is it?</strong>
                          <div class="spacer mb-1"></div>
                          the standard language for creating web pages since its Invention in 1993. 
                          It provides a number of premade tags that can be used to create a web page.
                          Each tag creates a different element within the DOM 
                          <div class="spacer"></div>
                          <hr>
                          <div class="mt-3">
                              <h5><strong>HTML Element</strong></h5>
                              <span>An <strong>Element</strong> is generally made up of three parts. An open tag some form of content and a close tag. 
                              The content of the elment will be dependent on a number of different factors which we'll review As we go through the content.</span> 
                          </div>
                          <div class="img-container mx-auto">
                              <div class="img-container mx-auto">
                                <img src="/assets/img/learnHtml/html_example_an_element.png" alt="html element example" class="img-fluid" />
                              </div>
                          </div>
                          <div class="spacer"></div>
                          <div class="img-container mx-auto mt-2">
                            <img src="/assets/img/learnHtml/html_example_basic.png" alt="basic example of html usage, div tag, p tag, h1 tag" class="img-fluid" />
                          </div>
                          <div class="spacer mb-3"></div>
                          <strong>What does it do?</strong>
                          <div class="spacer mb-1"></div>
                          If a web page was the human body; then HTML would be the skelton. 
                          It creates the overarching structure for your website however without some help it's a farily static page.
                      </p>
                </div>
            </div>
          </div>
          <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"><strong>JavaScript</strong></h5>
                        <p class="card-text">
                            <div class="spacer"></div>
                            <strong>What is it?</strong>
                            <div class="spacer mb-1"></div>
                            If the HTML is the skeleton of the web page, then JavaScript is the nervous system and portions of the brain. It helps create events and interactions within the webpage
                            which allows for dynamic affects and interactivity on the page.
                            <hr>
                            <h5><strong>JavaScript Is Not Java</strong></h5>
                            
                            <span>
                              <strong>JavaScript</strong> should not be confused with the <strong>Java</strong> programming language. 
                              The name is purely a ploy to make it recognizable as a language during its inception.
                              A <strong>JavaScript</strong> file can be used for many things. Let's look at a few examples.
                              <ul class="list-group mt-3">
                                  <li class="list-group-item list-group-item-danger">
                                      You could throw some JavaScript into your html page within some <strong>script</strong> tags like this:
                                      <img src="/assets/img/learnHtml/generic_script_tag.svg" alt="basic example of html usage, div tag, p tag, h1 tag" class="img-fluid" />
                                  </li>
                                  <li class="list-group-item list-group-item-warning">
                                      You could create a JavaScript file using the file extension <strong>YourFileName.js</strong> and then link it to your html page 
                                      using a script tag and src attribute like this:
                                      <img src="/assets/img/learnHtml/script_include_file.svg" alt="basic example of html usage, div tag, p tag, h1 tag" class="img-fluid" />
                                  </li>
                              </ul>
                            </span>
                            <div class="spacer mb-1"></div>
                            If HTML is the skeleton of our human body webpage, then JavaScript would have to be the nervous system and portions of the brain. It helps create events and interactions within the webpage
                            which allows for dynamic affects and interactivity on the page.
                            <div class="spacer mb-3"></div>
                            <strong>What does it do?</strong>
                            <div class="spacer mb-1"></div>
                            A web page is made of elements these elments are made up html tags that are rendered by the browser.
                            Javascript is used to create everything from a simple carousel to a complex web application. It allows you
                            to manipulate elements on the page and create events that can be used to create dynamic effects and interactivity.
                            On the flip side JavaScript could also have no visual impact on the page itself. However behind the scenes it's completing in some cases
                            thousands of operations.
                        </p>
                </div>
            </div>
        </div>
        ${await window.Footer()}
    </div>
  `;
}

export { LearnHtml };
