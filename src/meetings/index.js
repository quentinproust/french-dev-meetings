import * as meetings from './files';

const all = Object
  .keys(meetings)
  .map(k => meetings[k])
  .reduce((acc, val) => acc.concat(val), []);

export default all;
