import { Serve } from "../../lobot.js";

/**
 * @type {TheEventLoop}
 * @param options {string} [options] - A optional config object which can be passed into the template giving contextual data.
 * @returns {Promise<string>}
 * @constructor
 */

async function TheEventLoop(options) {
  return `
    <div class="container">
        <div class="row">
            <div class="col-6">
            </div>
            <div class="col-6 text-end content-close">
                X
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="the-stack">
                    <h2>The Stack</h2>

                    Given two functions, <code><code>f1</code></code> and <code><code>f2</code></code>,

                    When calling <code>f2</code>, a first "frame" is created containing references to <code>f2's</code> various arguments and local variables.
                    When <code>f2</code> calls <code>f1</code>, a second "frame" is created and pushed on top of the first one, containing references to <code>f1</code>'s arguments and local variables.
                    When <code>f1</code> returns, the top frame element is popped out of the stack (leaving only <code>f2's</code> call frame).
                    When <code>f2</code> returns, the stack is now empty.

                    <h2>The Heap</h2>

                    <h2>Message Queue</h2>

                    <h2>The Event Loop</h2>
                </div>
            </div>
        </div>
    </div>
  `;
}

export { TheEventLoop };
