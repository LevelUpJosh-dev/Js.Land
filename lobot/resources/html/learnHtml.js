import { Serve } from "../../lobot.js";

async function LearnHtml(options) {
  return `
    ${await window.Head()}
    ${await window.Navigation()}
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
                          If web page was the human body; then HTML would be the webpages skelton. It creates the overarching structure for your website.
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
                              if HTML is the skeleton in our body example; then JavaScript 
                              <div class="spacer mb-3"></div>
                              <strong>What does it do?</strong>
                              <div class="spacer mb-1"></div>
                              If web page was the human body; then HTML would be the webpages skelton. It creates the overarching structure for your website.
                          </p>
                  </div>
              </div>
          </div>
        ${await window.Footer()}
    </div>
    ${await Serve(`learnHtml:js`)}
  `;
}

export { LearnHtml };
