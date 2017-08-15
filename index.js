// CLI ARGS
const state = process.argv.indexOf(`-s`) > -1 ? process.argv[process.argv.indexOf(`-s`) + 1].toUpperCase() : false;
const dl = process.argv.indexOf(`-n`) > -1 ? process.argv[process.argv.indexOf(`-n`) + 1].toUpperCase() : false;

if (!state) return console.log(`Invalid State`);
if (!dl) return console.log(`Invalid License Number`);

// PROJECT FILES
const usdl = require(`./regex`);

// APP LOGIC
const status = usdl[state].regex.test(dl);
const payload = status ? `License Number is Valid` : `Invalid Format: ${state} requires ${usdl[state].description}`;

const output = {
  status,
  payload,
};

console.log(output);
