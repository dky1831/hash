'use strict';

import hash from './hash.js';
import './main.js';
import './argv.js';

hash.main(process.argv.slice(hash.argv.PROGRAM_ARGUMENTS_HEAD));
