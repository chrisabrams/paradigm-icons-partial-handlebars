var fs   = require('fs'),
    path = require('path')

module.exports = (options) => {

  var Handlebars = options.Handlebars,
      iconPath   = options.path

  var icons = fs.readFileSync(path.join(process.cwd(), iconPath), 'utf8')

  Handlebars.registerPartial('icons', icons)

}
