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