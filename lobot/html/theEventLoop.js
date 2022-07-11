import { Serve } from "../lobot.js";

async function TheEventLoop() {
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
                <h1>The Event Loop</h1>
                <p>
                    The event loop is the main loop of the JavaScript engine.
                    It is responsible for executing all the events that have been scheduled.
                    It is also responsible for executing all the callbacks that have been scheduled.
                    It is also responsible for executing all the timers that have been scheduled.
                    It is also responsible for executing all the microtasks that have been scheduled.
                    It is also responsible for executing all the jobs that have been scheduled.
                    It is also responsible for executing all the idle tasks that have been scheduled.
                    It is also responsible for executing all the tasks that have been scheduled.
                </p>
            </div>
        </div>
    </div>
  `;
}

export { TheEventLoop };
