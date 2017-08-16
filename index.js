// PROJECT FILES
const tests = require(`./regex`);

module.exports = validateDriversLicense;

function validateDriversLicense(state, dl) {
  if (!state || !dl) throw new Error('State and DL params are required for license verification');
  state = state.toUpperCase();
  dl = dl.toUpperCase();

  const failedTests = tests[state].filter(format => !format.regex.test(dl));

  // if dl fails all tests
  if (failedTests.length === tests[state].length) {
    // send back err status and useful message
    const whyItFailed = failedTests.map(reason => reason.description).join(' OR ');
    return {
      status: 0,
      message: `Required for ${state}: ${whyItFailed}`,
    };
  }
  // else send back success status
  return {
    status: 1,
    message: `License is Valid`,
  }
}

// IF RUN FROM CLI
if (!module.parent) {
  // CLI ARGS
  const state = process.argv.indexOf(`-s`) > -1 ? process.argv[process.argv.indexOf(`-s`) + 1] : false;
  const dl = process.argv.indexOf(`-n`) > -1 ? process.argv[process.argv.indexOf(`-n`) + 1] : false;

  // SANITIZE INPUT
  if (!state) return console.log(`Invalid State`);
  if (!dl) return console.log(`Invalid License Number`);

  const output = validateDriversLicense(state, dl);
  console.log(output);
}
