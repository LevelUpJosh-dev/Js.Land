import { Serve } from '../../lobot.js';

/**
 * @type {PlatformDeveloperOne}
 * @param {Object} [options] - Options object can be used to pass in context data to affect the template based on where the call is occurring.
 * @returns {Promise<string>} - Returns a promise that resolves to the HTML string.
 * @constructor
 */

async function PlatformDeveloperOne(options) {
  return `
    <div>
      The Salesforce Certified Platform Developer I exam has the following characteristics:
           Content: 60 multiple-choice/multiple-select questions
       Time allotted to complete the exam: 110 minutes
       Passing Score: 65%
       Registration fee: USD 200, plus applicable taxes as required per local law
       Retake fee: USD 100, plus applicable taxes as required per local law
       Delivery options: Proctored exam delivered onsite at a testing center or in an online
      proctored environment. Click here for information on scheduling an exam.
       References: No hard-copy or online materials may be referenced during the exam.
       Prerequisite: None required; course attendance highly recommended.
    </div>
  `;
}

export { PlatformDeveloperOne };
