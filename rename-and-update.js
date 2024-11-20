const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve('build');
const jsDir = path.join(projectRoot, 'static/js');
const cssDir = path.join(projectRoot, 'static/css');
const assetManifestPath = path.join(projectRoot, 'asset-manifest.json');
const indexFilePath = path.join(projectRoot, 'index.html');

const patterns = {
  jsFile: /main\.[^\.]+\.js/i,
  cssFile: /main\.[^\.]+\.css/i,
  jsSourceMap: /sourceMappingURL=main\.[^\.]+\.js\.map/i,
  cssSourceMap: /sourceMappingURL=main\.[^\.]+\.css\.map/i
};

const replacements = {
  jsFile: 'main.js',
  cssFile: 'main.css',
  jsSourceMap: 'sourceMappingURL=main.js.map',
  cssSourceMap: 'sourceMappingURL=main.css.map'
};

function renameFilesInDirectory(directory, pattern, replacement) {
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const newFileName = file.replace(pattern, replacement);
    if (newFileName !== file) {
      const oldPath = path.join(directory, file);
      const newPath = path.join(directory, newFileName);
      fs.renameSync(oldPath, newPath);
      console.log(`${oldPath} -> ${newPath}`);
    }
  });
}

function replaceInFile(filePath, pattern, replacement) {
  if (!fs.existsSync(filePath)) {
    console.error(`Файл не найден: ${filePath}`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const updatedContent = content.replace(pattern, replacement);

  if (updatedContent !== content) {
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Обновлено: ${filePath}`);
  }
}

function main() {
  renameFilesInDirectory(jsDir, /main\.[^\.]+\.js/i, 'main.js');

  renameFilesInDirectory(cssDir, /main\.[^\.]+\.css/i, 'main.css');

  replaceInFile(path.join(jsDir, 'main.js'), patterns.jsSourceMap, replacements.jsSourceMap);
  replaceInFile(path.join(cssDir, 'main.css'), patterns.cssSourceMap, replacements.cssSourceMap);

  replaceInFile(indexFilePath, patterns.jsFile, `${replacements.jsFile}?v=${process.env.npm_package_version}`);
  replaceInFile(indexFilePath, patterns.cssFile, `${replacements.cssFile}?v=${process.env.npm_package_version}`);

  replaceInFile(assetManifestPath, patterns.jsFile, replacements.jsFile);
  replaceInFile(assetManifestPath, patterns.cssFile, replacements.cssFile);
  replaceInFile(assetManifestPath, patterns.jsSourceMap, replacements.jsSourceMap);
  replaceInFile(assetManifestPath, patterns.cssSourceMap, replacements.cssSourceMap);
}

main();
