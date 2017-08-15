module.exports = {
  AL: {
    test: [
      {
        regex: /^\d{7}$/,
        description: `7 Numeric Characters`,
      }
    ],
  },
  AK: {
    regex: /^\d{7}$/,
    description: `7 Numeric Characters Only`,
  },
  AZ: {
    test: [
      {
        regex: /(^[A-Z]{1}[0-9]{1,8}$)/,
        description: `1 letter followed by 1-8 numbers`,
      },
      {
        regex: /(^[A-Z]{2}[0-9]{2,5}$)/,
        description: `2 letters followed by 2-5 numbers`,
      },
      {
        regex: /(^[0-9]{9}$)/,
        description: `9 numbers`,
      },
    ]
  },
  AR: {
    regex: /^[0-9]{4,9}$/,
    description: `Description for AR`,
  },
  CA: {
    regex: /^[A-Z]{1}[0-9]{7}$/,
    description: `Description for CA`,
  },
  CO: {
    regex: /(^[0-9]{9}$)|(^[A-Z]{1}[0-9]{3,6}$)|(^[A-Z]{2}[0-9]{2,5}$)/,
    description: `CO`,
  },
  CT: {
    regex: /^[0-9]{9}$/,
    description: `CT`,
  },
  DE: {
    regex: /^\d{7}$/,
    description: `DE`,
  },
  DC: {
    regex: /(^[0-9]{7}$)|(^[0-9]{9}$)/,
    description: `DC`,
  },
  FL: {
    regex: /^[A-Z]{1}[0-9]{12}$/,
    description: `FL`,
  },
  GA: {
    regex: /^[0-9]{7,9}$/,
    description: `GA`,
  },
  HI: {
    regex: /(^[A-Z]{1}[0-9]{8}$)|(^[0-9]{9}$)/,
    description: `HI`,
  },
  ID: {
    regex: /(^[A-Z]{2}[0-9]{6}[A-Z]{1}$)|(^[0-9]{9}$)/,
    description: `ID`,
  },
  IL: {
    regex: /^[A-Z]{1}[0-9]{11,12}$/,
    description: `IL`,
  },
  IN: {
    regex: /(^[A-Z]{1}[0-9]{9}$)|(^[0-9]{9,10}$)/,
    description: `IN`,
  },
  IA: {
    regex: /^([0-9]{9}|([0-9]{3}[A-Z]{2}[0-9]{4}))$/,
    description: `IA`,
  },
  KS: {
    regex: /(^([A-Z]{1}[0-9]{1}){2}[A-Z]{1}$)|(^[A-Z]{1}[0-9]{8}$)|(^[0-9]{9}$)/,
    description: `KS`,
  },
  KY: {
    regex: /(^[A_Z]{1}[0-9]{8,9}$)|(^[0-9]{9}$)/,
    description: `KY`,
  },
  LA: {
    regex: /^[0-9]{1,9}$/,
    description: `LA`,
  },
  ME: {
    regex: /(^[0-9]{7,8}$)|(^[0-9]{7}[A-Z]{1}$)/,
    description: `ME`,
  },
  MD: {
    regex: /^[A-Z]{1}[0-9]{12}$/,
    description: `MD`,
  },
  MA: {
    regex: /(^[A-Z]{1}[0-9]{8}$)|(^[0-9]{9}$)/,
    description: `MA`,
  },
  MI: {
    regex: /(^[A-Z]{1}[0-9]{10}$)|(^[A-Z]{1}[0-9]{12}$)/,
    description: `MI`,
  },
  MN: {
    regex: /^[A-Z]{1}[0-9]{12}$/,
    description: `MN`,
  },
  MS: {
    regex: /^[0-9]{9}$/,
    description: `MS`,
  },
  MO: {
    regex: /(^[A-Z]{1}[0-9]{5,9}$)|(^[A-Z]{1}[0-9]{6}[R]{1}$)|(^[0-9]{8}[A-Z]{2}$)|(^[0-9]{9}[A-Z]{1}$)|(^[0-9]{9}$)/,
    description: `MO`,
  },
  MT: {
    regex: /(^[A-Z]{1}[0-9]{8}$)|(^[0-9]{13}$)|(^[0-9]{9}$)|(^[0-9]{14}$)/,
    description: `MT`,
  },
  NE: {
    regex: /^\d{7}$/,
    description: `NE`,
  },
  NV: {
    regex: /(^[0-9]{9,10}$)|(^[0-9]{12}$)|(^[X]{1}[0-9]{8}$)/,
    description: `NV`,
  },
  NH: {
    regex: /^[0-9]{2}[A-Z]{3}[0-9]{5}$/,
    description: `NH`,
  },
  NJ: {
    regex: /^[A-Z]{1}[0-9]{14}$/,
    description: `NJ`,
  },
  NM: {
    regex: /^[0-9]{8,9}$/,
    description: `NM`,
  },
  NY: {
    regex: /(^[A-Z]{1}[0-9]{7}$)|(^[A-Z]{1}[0-9]{18}$)|(^[0-9]{8}$)|(^[0-9]{9}$)|(^[0-9]{16}$)|(^[A-Z]{8}$)/,
    description: `NY`,
  },
  NC: {
    regex: /^[0-9]{1,12}$/,
    description: `NC`,
  },
  ND: {
    regex: /(^[A-Z]{3}[0-9]{6}$)|(^[0-9]{9}$)/,
    description: `ND`,
  },
  OH: {
    regex: /(^[A-Z]{1}[0-9]{4,8}$)|(^[A-Z]{2}[0-9]{3,7}$)|(^[0-9]{8}$)/,
    description: `OH`,
  },
  OK: {
    regex: /(^[A-Z]{1}[0-9]{9}$)|(^[0-9]{9}$)/,
    description: `OK`,
  },
  OR: {
    regex: /^[0-9]{1,9}$/,
    description: `OR`,
  },
  PA: {
    regex: /^[0-9]{8}$/,
    description: `PA`,
  },
  RI: {
    regex: /^([0-9]{7}$)|(^[A-Z]{1}[0-9]{6}$)/,
    description: `RI`,
  },
  SC: {
    regex: /^[0-9]{5,11}$/,
    description: `SC`,
  },
  SD: {
    regex: /(^[0-9]{6,10}$)|(^[0-9]{12}$)/,
    description: `SD`,
  },
  TN: {
    regex: /^[0-9]{7,9}$/,
    description: `TN`,
  },
  TX: {
    regex: /^[0-9]{7,8}$/,
    description: `TX`,
  },
  UT: {
    regex: /^[0-9]{4,10}$/,
    description: `UT`,
  },
  VT: {
    regex: /(^[0-9]{8}$)|(^[0-9]{7}[A]$)/,
    description: `VT`,
  },
  VA: {
    regex: /(^[A-Z]{1}[0-9]{8,11}$)|(^[0-9]{9}$)/,
    description: `VA`,
  },
  WA: {
    regex: /^(?=.{12}$)[A-Z]{1,7}[A-Z0-9\\*]{4,11}$/,
    description: `WA`,
  },
  WV: {
    regex: /(^[0-9]{7}$)|(^[A-Z]{1,2}[0-9]{5,6}$)/,
    description: `WV`,
  },
  WI: {
    regex: /^[A-Z]{1}[0-9]{13}$/,
    description: `WI`,
  },
  WY: {
    regex: /^[0-9]{9,10}$/,
    description: `WY`,
  },
};
