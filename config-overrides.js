const { override, useBabelRc } = require("customize-cra");

//=> just quick fix and disable react hooks rule for this line
// eslint-disable-next-line react-hooks/rules-of-hooks
module.exports = override(useBabelRc());
