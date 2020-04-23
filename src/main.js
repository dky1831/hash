'use strict';

import hash from './hash.js';
import './usage.js';
import './run.js';
import './switch_.js';
import './readall.js';
import './readfile.js';
import './error.js';

hash.main = argv => {
    function usageAndExit() {
        hash.usage();
        process.exit(1);
    }
    
    const argc = argv.length;
    if (argc) {
        const command = argv[0];
        switch (command) {
            case 'run': {
                hash.run(hash.util.switch_(argc, {
                    1: () => hash.util.readAll(process.stdin),
                    2: () => hash.util.readFile(argv[1]),
                    [hash.util.switch_.default]: () => {
                        hash.util.error('too many arguments');
                        usageAndExit();
                    }
                }));
                break;
            }
            default:
                hash.util.error(`${command}: unknown command`);
                usageAndExit();
        }
    } else {
        usageAndExit();
    }
};
