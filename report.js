const newman = require('newman');
 
newman.run({
    //collection: require('./collection/dmoney.json'),
    collection:'https://api.postman.com/collections/29168446-e69451dc-4bb7-4176-bb26-8f4c315ee94e?access_key=PMAT-01H8YZF36JJFQGPYFG4A3603ZK',
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to newman/ in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});