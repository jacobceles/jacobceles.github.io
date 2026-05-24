const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

test('wow-init.js initialization', async (t) => {
  const eventListeners = {};

  // Mock window
  global.window = {
    addEventListener: (event, callback) => {
      if (!eventListeners[event]) {
        eventListeners[event] = [];
      }
      eventListeners[event].push(callback);
    }
  };

  // Mock WOW as a constructor
  const wowInitMock = {
    init: t.mock.fn()
  };

  function WOWMock() {
    return wowInitMock;
  }
  WOWMock.prototype.init = wowInitMock.init;

  global.WOW = WOWMock;

  // Mock jQuery
  const tooltipMock = t.mock.fn();
  const jqueryMock = t.mock.fn((selector) => {
    return {
      tooltip: tooltipMock
    };
  });
  global.$ = jqueryMock;

  // Load the script
  const scriptContent = fs.readFileSync(path.join(__dirname, 'wow-init.js'), 'utf8');
  eval(scriptContent);

  await t.test('registers DOMContentLoaded listeners', () => {
    assert.strictEqual(eventListeners['DOMContentLoaded'].length, 1);
  });

  await t.test('initializes WOW and tooltips on DOMContentLoaded', () => {
    // Execute the callback
    eventListeners['DOMContentLoaded'][0]();

    assert.strictEqual(wowInitMock.init.mock.callCount(), 1);
    assert.strictEqual(global.$.mock.calls[0].arguments[0], '[data-toggle="tooltip"]');
    assert.strictEqual(tooltipMock.mock.callCount(), 1);
  });
});
