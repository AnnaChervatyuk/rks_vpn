const fs = require('fs');
const path = require('path');

const targetDirectory = 'build/static/media';
const projectRoot = 'build';
const extensionsToProcess = ['.html', '.css', '.js'];

const renameMap = {};

function renameFilesInDirectory(directory) {
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);

    if (fs.statSync(filePath).isFile()) {
      const newFileName = file.replace(/\.\w+\./, '.');
      const newFilePath = path.join(directory, newFileName);

      if (newFileName !== file) {
        fs.renameSync(filePath, newFilePath);
        console.log(`${filePath} -> ${newFilePath}`);
        renameMap[file] = newFileName;
      }
    }
  });
}

function findFilesInDirectory(dir, extensions, fileList = []) {
  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const itemPath = path.join(dir, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      findFilesInDirectory(itemPath, extensions, fileList);
    } else if (extensions.includes(path.extname(item))) {
      fileList.push(itemPath);
    }
  });

  return fileList;
}

function updateReferencesInProject() {
  const filesToProcess = findFilesInDirectory(projectRoot, extensionsToProcess);

  filesToProcess.forEach((file) => {
    const content = fs.readFileSync(file, 'utf8');
    let updatedContent = content;

    Object.keys(renameMap).forEach((oldName) => {
      const newName = renameMap[oldName];
      const regex = new RegExp(oldName.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
      updatedContent = updatedContent.replace(regex, newName);
    });

    if (updatedContent !== content) {
      fs.writeFileSync(file, updatedContent, 'utf8');
      console.log(`Ссылки в файле ${file} обновлены.`);
    }
  });
}

renameFilesInDirectory(targetDirectory);
updateReferencesInProject();
