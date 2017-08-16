// CLI ARGS
const state = process.argv.indexOf(`-s`) > -1 ? process.argv[process.argv.indexOf(`-s`) + 1].toUpperCase() : false;
const dl = process.argv.indexOf(`-n`) > -1 ? process.argv[process.argv.indexOf(`-n`) + 1].toUpperCase() : false;

if (!state) return console.log(`Invalid State`);
if (!dl) return console.log(`Invalid License Number`);

// PROJECT FILES
const usdl = require(`./regex`);

// APP LOGIC
function validateDriversLicense(state, dl) {
  const failedTests = usdl[state].test.filter(format => !format.regex.test(dl));

  // if dl fails all tests
  if (failedTests.length === usdl[state].test.length) {
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

const output = validateDriversLicense(state, dl);

console.log(output)
