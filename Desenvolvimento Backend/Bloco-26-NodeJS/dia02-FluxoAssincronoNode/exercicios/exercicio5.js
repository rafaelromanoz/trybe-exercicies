const fs = require('fs').promises;

async function promiseAll() {
  let arrayString = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const criarDocumentos = arrayString.map((element, index) => {
    fs.writeFile(`./file${index + 1}`, element);
  })
  await Promise.all(criarDocumentos)

  const files = [
    'file1',
    'file2',
    'file3',
    'file4',
    'file5'
  ]
  const lerDocumentos = await Promise.all(
    files.map((fileName) => fs.readFile(fileName, 'utf8'))
  );
  const newFileContent = lerDocumentos.join(' ');
  await fs.writeFile('./fileAll', newFileContent)
}

promiseAll()