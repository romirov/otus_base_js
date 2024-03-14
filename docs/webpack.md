# Webpack

## Миниму для работы
- установить как зависимость
- добавить команды в package.json
- добавить файл конфигурации webpack.config.js с настройками(по необходимости)

### Установка
```
npm install webpack webpack-cli --save-dev
```

### Команды в package.json
Проверяем, что в package.json добавилось
```
"private": true,
```
Если нет, то добавляем.

Пример:
```
{
  "name": "otus_base_js",
  "version": "1.0.0",
  "description": "## Описание веток с заданиями",
  "main": "src/script.js",
  "private": true,
  "directories": {
    ...
```

### Настройки для создания бандла(код для браузера, собранный из файлов js в проекте)
Переносим index.html из корня в папку dist
Меняем в теге script название скрипта c src/script.js на main.js

### Получение бандла
Запустить 
```
npx webpack
```
После запуска команды в папке dist/ появится main.js

Добавляем в package.json в секцию scripts:
```
"build": "webpack"
```

После этого, если запустить
```
npm run build
```
то запустится webpack и в папке dist создастся main.js