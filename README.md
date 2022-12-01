
## Конфигурация всех линтеров через `package.json`:

```json
{
    "prettier": "ds-presets-lint/prettier",
    "eslintConfig": {
        "extends": "./node_modules/ds-presets-lint/eslint/index.js"
    },
    "stylelint": {
        "extends": "ds-presets-lint/stylelint"
    },
    "commitlint": {
        "extends": ["./node_modules/ds-presets-lint/commitlint"]
    }
}
```

## Конфигурация скриптов для запуска линтеров и форматтера в `package.json`:

```json
{
    "scripts": {
        "lint:css": "stylelint ./src/**/*.css",
        "lint:scripts": "eslint \"**/*.{js,jsx,ts,tsx}\" --ext .js,.jsx,.ts,.tsx",
        "lint": "yarn lint:css && yarn lint:scripts",
        "format": "prettier-eslint --write $INIT_CWD/{config,src}/**/*.{ts,tsx,js,jsx,css}"
    }
}
```

Если eslint пытается валидировать файлы, над которыми вы не имеете контроль, вы можете исключить
их с помощью `.eslintignore`

```
.build
.idea
coverage
```

Для запуска eslint рекомендуется использовать флаг [--max-warnings](https://eslint.org/docs/2.0.0/user-guide/command-line-interface#-max-warnings), который позволяет ограничить количество возникающих предупреждений.

## Конфигурация `husky` и `lint-staged`:

```json
{
    "lint-staged": {
        "{src,config}/**/*.{js,jsx,ts,tsx}": ["prettier-eslint --write", "eslint"],
        "*.css": ["prettier-eslint --write", "stylelint"]
    },
    "husky": {
        "hooks": {
            "pre-commit": "lint-staged",
            "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
        }
    }
}
```
В lint-staged так же рекомендуется добавить запуск юнит-тестов, например, `yarn jest --findRelatedTests`

## Итоговая конфигурация линтеров:

```json
{
    "scripts": {
        "lint:css": "stylelint ./src/**/*.css",
        "lint:scripts": "eslint \"**/*.{js,jsx,ts,tsx}\" --ext .js,.jsx,.ts,.tsx",
        "lint": "yarn lint:css && yarn lint:scripts",
        "format": "prettier-eslint --write $INIT_CWD/{config,src}/**/*.{ts,tsx,js,jsx,css}"
    },
    "lint-staged": {
        "{src,config}/**/*.{js,jsx,ts,tsx}": ["prettier-eslint --write", "eslint"],
        "*.css": ["prettier-eslint --write", "stylelint"]
    },
    "husky": {
        "hooks": {
            "pre-commit": "lint-staged",
            "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
        }
    },
    "prettier": "ds-presets-lint/prettier",
    "eslintConfig": {
        "extends": "./node_modules/ds-presets-lint/eslint/index.js"
    },
    "stylelint": {
        "extends": "ds-presets-lint/stylelint"
    },
    "commitlint": {
        "extends": ["./node_modules/ds-presets-lint/commitlint"]
    }
}
```

## Настройка для VS Code:

https://github.com/prettier/prettier-vscode

## Настройка для WebStorm:

https://prettier.io/docs/en/webstorm.html#using-prettier-with-eslint
Вместо `$ProjectFileDir$/node_modules/.bin/prettier` указывать `$ProjectFileDir$/node_modules/ds-presets-lint/node_modules/.bin/prettier-eslint`
