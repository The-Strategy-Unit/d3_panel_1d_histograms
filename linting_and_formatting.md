# Linting and formatting guide
1. Install the VS Code extensions 'ESlint v.2.4.2' and 'Prettier v.10.1.0'
2. Follow instructions below to install [ESLint](https://eslint.org/) and
[Prettier](https://prettier.io/)

## Install ESLint
Open a powershell terminal:  
* run `npm init` to create a `package.json` file to store project metadata incl.
dependencies. It's fine to accept default arguments and update later.
* run `npm init @eslint/config` to install and configure ESLint in the workspace
folder. The only default argument I change is to prefer .json format for the
config file. I select npm as the package manager.
* after running `npm init @eslint/config`, you’ll have an .eslintrc.json file
in your directory
* run `npm install --save-dev eslint-config-prettier` to install
eslint-config-prettier, which turns off all rules that are unnecessary or might
conflict with Prettier

## Install Prettier
Open a powershell terminal:   
* run `npm install --save-dev --save-exact prettier` to install Prettier
* run `node --eval "fs.writeFileSync('.prettierrc','{}\n')"` to create an empty
config file
* create a .prettierignore file `New-Item -Name ".prettierignore"`

## Integrating ESLint and Prettier
Linters usually contain not only code quality rules, but also stylistic rules.
Most stylistic rules are unnecessary when using Prettier, but worse – they might
conflict with Prettier! Use Prettier for code formatting concerns, and linters
for code-quality concerns. Turn off rules that conflict or are unnecessary with
Prettier by using [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier).

We installed eslint-config-prettier earlier so we just need to add it to the
'extends' array in our ESLint config file .eslintrc.json
```json
{
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "prettier"
  ]
}
```

## Usage
**ESLint**  
* run `npx eslint yourfile.js` to lint a specific file

**Prettier**  
* run `npx prettier --check yourfile.js` to check that a file is formatted
* run `npx prettier --write yourfile.js` to format a specific file
* or while in the document you want to format Ctrl + Shift + P > Format Document
With > Prettier - Code formatter
