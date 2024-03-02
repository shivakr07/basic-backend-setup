const fs = require('fs-extra');
const path = require('path');

const copyTemplateFiles = async () => {
  const templatesPath = path.resolve(__dirname, 'templates');
  const destinationPath = process.cwd(); 

  await fs.copy(templatesPath, destinationPath);

  console.log('Basic backend setup complete!');
};