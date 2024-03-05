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
name: Deploy to GithubPages

on:
  push:
    branches:
      - master

jobs:
  deploy-to-gh-pages:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Install Packages
        run: |
          npm install

      - name: Build
        run: |
          npm run build

      - name: Deploy
        # https://github.com/marketplace/actions/deploy-to-github-pages
        uses: JamesIves/github-pages-deploy-action@3.6.2
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BRANCH: gh-pages # The branch the action should deploy to.
          FOLDER: dist # The folder the action should deploy.
          CLEAN: true # Automatically remove deleted files from the deploy branch
```