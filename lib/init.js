'use strict';

const fs = require('fs');
const path = require('path');
const readlineSync = require('readline-sync');

const CONFIG_FILE = 'frog.config.json';
const THEMES = ['frogui', 'gcloud', 'gcloud_p', 'beui', 'custom'];

const DEFAULT_CONFIG = {
  outDir: 'public/frog-ui',
  theme: 'frogui',
  includeJs: true,
  includeAssets: true,
  includeReferences: false,
  tokens: {
    primary: '#2563eb',
    fontSize: '16px',
    radius: '8px'
  }
};

const parseArgs = (args) => {
  const options = {
    yes: false,
    force: false
  };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === '--yes' || arg === '-y') {
      options.yes = true;
      continue;
    }

    if (arg === '--force') {
      options.force = true;
      continue;
    }

    if (arg === '--out') {
      options.outDir = readOptionValue(args, index, arg);
      index += 1;
      continue;
    }

    if (arg === '--theme') {
      options.theme = readOptionValue(args, index, arg);
      index += 1;
      continue;
    }

    if (arg === '--primary') {
      options.primary = readOptionValue(args, index, arg);
      index += 1;
      continue;
    }

    if (arg === '--font-size') {
      options.fontSize = readOptionValue(args, index, arg);
      index += 1;
      continue;
    }

    if (arg === '--radius') {
      options.radius = readOptionValue(args, index, arg);
      index += 1;
      continue;
    }

    if (arg === '--help' || arg === '-h') {
      options.help = true;
      continue;
    }

    throw new Error(`Unknown init option: ${arg}`);
  }

  return options;
};

const readOptionValue = (args, index, optionName) => {
  const value = args[index + 1];

  if (!value || value.startsWith('--')) {
    throw new Error(`${optionName} requires a value.`);
  }

  return value;
};

const normalizeConfig = (config) => ({
  outDir: config.outDir,
  theme: config.theme,
  includeJs: Boolean(config.includeJs),
  includeAssets: Boolean(config.includeAssets),
  includeReferences: Boolean(config.includeReferences),
  tokens: {
    primary: config.tokens.primary,
    fontSize: config.tokens.fontSize,
    radius: config.tokens.radius
  }
});

const askText = (message, defaultValue) => {
  const answer = readlineSync.question(`${message} (${defaultValue}): `);
  return answer.trim() || defaultValue;
};

const askBoolean = (message, defaultValue) => {
  const suffix = defaultValue ? 'Y/n' : 'y/N';
  const answer = readlineSync.question(`${message} (${suffix}): `).trim().toLowerCase();

  if (!answer) return defaultValue;
  return answer === 'y' || answer === 'yes';
};

const askTheme = (defaultTheme) => {
  const defaultIndex = THEMES.indexOf(defaultTheme);
  const selectedIndex = readlineSync.keyInSelect(
    THEMES,
    'Which theme do you want to use?',
    {defaultInput: String(defaultIndex + 1)}
  );

  if (selectedIndex === -1) return defaultTheme;
  return THEMES[selectedIndex];
};

const createConfig = (options) => {
  const config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));

  if (options.outDir) config.outDir = options.outDir;
  if (options.theme) config.theme = options.theme;
  if (options.primary) config.tokens.primary = options.primary;
  if (options.fontSize) config.tokens.fontSize = options.fontSize;
  if (options.radius) config.tokens.radius = options.radius;

  if (options.yes) return normalizeConfig(config);

  config.outDir = askText('Where should Frog UI files be generated?', config.outDir);
  config.theme = askTheme(config.theme);
  config.includeJs = askBoolean('Include component JavaScript files?', config.includeJs);
  config.includeAssets = askBoolean('Include assets?', config.includeAssets);
  config.includeReferences = askBoolean('Include reference files?', config.includeReferences);
  config.tokens.primary = askText('Primary color token', config.tokens.primary);
  config.tokens.fontSize = askText('Base font size token', config.tokens.fontSize);
  config.tokens.radius = askText('Border radius token', config.tokens.radius);

  return normalizeConfig(config);
};

const validateConfig = (config) => {
  if (!config.outDir) throw new Error('outDir is required.');
  if (!THEMES.includes(config.theme)) {
    throw new Error(`theme must be one of: ${THEMES.join(', ')}`);
  }
};

const writeConfig = (config, options) => {
  const targetPath = path.join(process.cwd(), CONFIG_FILE);

  if (fs.existsSync(targetPath) && !options.force) {
    throw new Error(`${CONFIG_FILE} already exists. Use --force to overwrite it.`);
  }

  fs.writeFileSync(targetPath, `${JSON.stringify(config, null, 2)}\n`);
  return targetPath;
};

const printHelp = () => {
  console.log(`Usage:
  frog-ui init [options]

Options:
  --yes, -y            Create frog.config.json with defaults
  --force             Overwrite an existing frog.config.json
  --out <path>        Output directory for generated files
  --theme <name>      Theme name: ${THEMES.join(', ')}
  --primary <color>   Primary token value
  --font-size <size>  Base font size token value
  --radius <size>     Border radius token value
`);
};

const init = (args) => {
  try {
    const options = parseArgs(args);

    if (options.help) {
      printHelp();
      return;
    }

    const config = createConfig(options);
    validateConfig(config);
    const targetPath = writeConfig(config, options);

    console.log(`Created ${path.relative(process.cwd(), targetPath)}`);
    console.log('Next: frog-ui build');
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
};

module.exports = {
  DEFAULT_CONFIG,
  THEMES,
  init,
  parseArgs
};
