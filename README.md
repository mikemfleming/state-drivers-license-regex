# state-drivers-license-regex
State drivers license validation using Node and regular expressions

Validates US driver's licenses with regex and returns an object with a success status and message.

Example usage:
```
node index.js -s tx -n 1
=> { status: 0, message: 'Required for TX: 7-8 numbers' }

node index.js -s tx -n 45129637
=> { status: 1, message: 'License is Valid' }
```

Built according to NTSI information current as of 8/17. Credit where credit is due, Adam Bullmer had already written a lot of the regex on his repo here: https://github.com/adambullmer/USDLRegex

