import { Serve } from '../../lobot.js';

/**
 * @type {ContentGrid}
 * @param {Object} [options] - A optional config object which can be passed into the template giving contextual data.
 * @returns {Promise<string>}
 * @constructor
 */

async function ContentGrid(options) {
    return `
    ${await window.Head()}
    ${await Serve(`contentGrid:css`)}
    <body id="page-top">
        <section  class="content-grid">
            <div class="container">
                <div class="row">
                  <div class="col-md-4">
                   <a href="json/TheModernBrowser">
                    <div id="the-modern-browser" class="card profile-card">
                       <div class="background-block">
                            <img src="assets/img/home/webp/bg-masthead.webp" alt="profile-sample1" class="background"/>
                        </div>
                        <div class="profile-thumb-block">
                            <img src="assets/img/home/webp/logo-solid.webp" alt="profile-image" class="profile"/>
                        </div>
                        <div class="card-content">
                           <h2>The Browser<small>How a digital square box, became the center of the world.</small></h2>
                          </div>
                      </div>
                    </a>
                </div>
                  
                  <div class="col-md-4">
                    <a href="json/LearnWebFundamentals">
                     <div id="learn-web-fundamentals" class="card profile-card">
                         <div class="background-block">
                              <img src="assets/img/home/webp/bg-masthead.webp" alt="profile-sample1" class="background"/>
                          </div>
                          <div class="profile-thumb-block">
                              <img src="assets/img/home/webp/logo-solid.webp" alt="profile-image" class="profile"/>
                          </div>
                          <div class="card-content">
                             <h2>Learn Web Fundamentals<small>Html, Css, Js</small></h2>
                          </div>
                        </div>
                    </a>
                  </div>
                  <div class="col-md-4">
                     <a href="json/BeAnAdvocate">
                      <div id="be-an-advocate" class="card profile-card">
                         <div class="background-block">
                              <img src="assets/img/home/webp/bg-masthead.webp" alt="profile-sample1" class="background"/>
                          </div>
                          <div class="profile-thumb-block">
                              <img src="assets/img/home/webp/logo-solid.webp" alt="profile-image" class="profile"/>
                          </div>
                          <div class="card-content">
                             <h2>Be an Advocate<small>For yourself and others</small></h2>
                            </div>
                        </div>
                      </a>
                  </div>
                <div class="col-md-4">
                 <a href="json/TheEventLoop">
                   <div id="the-event-loop" class="card profile-card">
                       <div class="background-block">
                            <img src="assets/img/home/webp/bg-masthead.webp" alt="profile-sample1" class="background"/>
                        </div>
                        <div class="profile-thumb-block">
                            <img src="assets/img/home/webp/logo-solid.webp" alt="profile-image" class="profile"/>
                        </div>
                        <div class="card-content">
                           <h2>The Event Loop<small>V8? stack? heap? runtime? wtf?</small></h2>
                        </div>
                  </div>
                </a>
              </div>
                <div class="col-md-4">
                   <a href="json/WebComponents">
                    <div id="web-components" class="card profile-card">
                       <div class="background-block">
                            <img src="assets/img/home/webp/bg-masthead.webp" alt="profile-sample1" class="background"/>
                        </div>
                        <div class="profile-thumb-block">
                            <img src="assets/img/home/webp/logo-solid.webp" alt="profile-image" class="profile"/>
                        </div>
                        <div class="card-content">
                           <h2>Web Components<small>The building blocks of the modern website.</small></h2>
                          </div>
                      </div>
                    </a>
                </div>
            </div>
        </section>
        <section class="content-container"></section>
        ${await Serve(`contentGrid:js`)}
    </div>
    ${await window.Footer()}
  `;
}

export { ContentGrid };
