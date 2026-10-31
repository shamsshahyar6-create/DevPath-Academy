import { readFile } from 'node:fs/promises';

const packageJson = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));

console.log(`Package: ${packageJson.name}@${packageJson.version}`);
console.log('Scripts:');
for (const [name, command] of Object.entries(packageJson.scripts ?? {})) {
  console.log(`- ${name}: ${command}`);
}
console.log('Dependencies:', Object.keys(packageJson.dependencies ?? {}).join(', ') || 'none');
console.log(
  'Dev dependencies:',
  Object.keys(packageJson.devDependencies ?? {}).join(', ') || 'none',
);
