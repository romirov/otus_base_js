# CI/CD
Мы можем взять типовой workflow для такой проверки. И сделать прохождение такой проверки обязательным на уровне репозитория.

Создаем директорию .github/workflows в корне проекта
Для проверки кода при коммите в .github/workflows/ создаем sanity-check.yml, в который добавляем 
```
name: PR Sanity Check

on: pull_request

jobs:
  lint:
    runs-on: ubuntu-20.04
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Install Packages
        run: |
          npm install

      - name: Lint check
        run: |
          npm run lint

      - name: Lint check
        run: |
          npm run test
```

Для создания ссылки на CodeSandbox в .github/workflows/ создаем codesandbox-link-comment.yml, в который добавляем 
```
name: Add codesandbox link

on:
  pull_request:
    types: [opened]
  # https://github.com/mshick/add-pr-comment/issues/25
  pull_request_target:
    types: [opened]

jobs:
  codesandbox-comment:
    name: Add codesandbox link comment
    permissions: write-all
    runs-on: ubuntu-latest
    steps:
      - uses: mshick/add-pr-comment@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          message: |
            You can check this code at CodeSandbox with the link
            https://githubbox.com/${{ github.repository }}/tree/${{ github.head_ref }}
```

Для деплоя на GitHub Pages в .github/workflows/ создаем deploy-to-gh-pages.yml, в который добавляем 
```
name: Build and Deploy
on: [push]
permissions:
  contents: write
jobs:
  build-and-deploy:
    concurrency: ci-${{ github.ref }} # Recommended if you intend to make multiple deployments in quick succession.
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3

      - name: Install and Build 🔧 # This example project is built using npm and outputs the result to the 'build' folder. Replace with the commands required to build your project, or remove this step entirely if your site is pre-built.
        run: |
          npm ci
          npm run build

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: build # The folder the action should deploy.
```