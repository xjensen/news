var TurndownService = require('turndown');
const frontmatter = require('@github-docs/frontmatter');
const fs = require('fs');
var path = require('path');

var turndownService = new TurndownService({ headingStyle: 'atx' });
turndownService.keep(['figure', 'iframe', 'div', 'cwds-accordion']);

const glob = require('glob');

glob('posts/*.html', {}, (_, files) => {
  files.forEach(file => {
    const filepath = `./${file}`;
    fs.readFile(filepath, 'utf8', (_, file) => {
      const { data, content } = frontmatter(file);
      const markdown = turndownService.turndown(content);
      const newFile = frontmatter.stringify(markdown, data);
      const newFilePath = path.parse(filepath);
      fs.writeFileSync(`./posts/${newFilePath.name}.md`, newFile, { encoding: 'utf8', flag: 'w' });
    });
  });
});
