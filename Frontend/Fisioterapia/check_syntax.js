const fs = require('fs');
const babel = require('@babel/core');

const code = fs.readFileSync('C:/THPro-Web/Frontend/Estetica_Corporal/src/layout/Header.tsx', 'utf8');

try {
  babel.transformSync(code, {
    presets: ['@babel/preset-react', '@babel/preset-typescript'],
    filename: 'Header.tsx'
  });
  console.log('Babel parsing successful! NO syntax errors.');
} catch (e) {
  console.error('Babel parsing error:');
  console.error(e.message);
}
