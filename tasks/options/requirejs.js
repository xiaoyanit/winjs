// Copyright (c) Microsoft Open Technologies, Inc.  All Rights Reserved. Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
(function () {
    "use strict";

    var config = require("../../config.js");

    module.exports = {
        base: {
            options: { 
                baseUrl: './src/js/',
                optimize: 'none', // uglify2
                useStrict: true,
                name: '../../node_modules/almond/almond',
                include: ['base'],
                out: config.desktopOutput + "js/base-amd.js",
                wrap: {
                    startFile: 'src/js/build/amd.start.base.js',
                    endFile: 'src/js/build/amd.end.base.js'
                }
            }
        }
    };
})();