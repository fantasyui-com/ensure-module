const kebabCase = require('lodash/kebabCase');
const path = require('path');
const fs = require('fs');

module.exports = function(options){
  const defaults = {
    templateSource: path.resolve(`${__dirname}/templates/`),
    destinationRoot: path.resolve(`./code_modules`),
  }
  const setup = Object.assign({}, defaults, options );

  // console.log(options);
  // console.log(setup);

  return function(name, templateType = 'promise'){
    if( (!fs.existsSync(path.resolve(`${setup.destinationRoot}/${kebabCase(name)}`))) ){
      fs.mkdirSync(path.resolve(`${setup.destinationRoot}/${kebabCase(name)}/util`), {recursive:true})

      fs.readdirSync(`${setup.templateSource}/${templateType}`).forEach(function(childItemName) {
        fs.copyFileSync(`${setup.templateSource}/${templateType}/${childItemName}`, `${setup.destinationRoot}/${kebabCase(name)}/${childItemName}`);
      });

      fs.readdirSync(`${setup.templateSource}/${templateType}/util`).forEach(function(childItemName) {
        fs.copyFileSync(`${setup.templateSource}/${templateType}/util/${childItemName}`, `${setup.destinationRoot}/${kebabCase(name)}/util/${childItemName}`);
      });

      let p = JSON.parse(fs.readFileSync(`${setup.destinationRoot}/${kebabCase(name)}/package.json`).toString());
      p.name = kebabCase(name);
      fs.writeFileSync(`${setup.destinationRoot}/${kebabCase(name)}/package.json`, JSON.stringify(p,null,'  '))
    }
  }

}
