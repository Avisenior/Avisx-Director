const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// Find and replace buildHL function
const pattern = /function buildHL\(lang\)\{[\s\S]*?\n\}/;
const newFunc = `function buildHL(lang){
  const hl=document.getElementById('heroHL');
  if(!hl) return;
  hl.innerHTML='';
  const lines = hlTexts[lang][0].split('\n');
  lines.forEach((line, li) => {
    const div = document.createElement('div');
    if (li === lines.length - 1) {
      div.innerHTML = \`<span class="accent">\${line}</span>\`;
    } else {
      div.textContent = line;
    }
    hl.appendChild(div);
  });
}`;

content = content.replace(pattern, newFunc);
fs.writeFileSync('index.html', content, 'utf8');
console.log('Fixed buildHL function');
