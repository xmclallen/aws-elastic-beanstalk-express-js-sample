const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send(`It's alive! I set up this app with AWS CodePipeline, CodeBuild, and Elastic Beanstalk, sourced from a github repository.`));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
