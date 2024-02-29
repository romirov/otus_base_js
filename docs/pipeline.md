# CI/CD
Мы можем взять типовой workflow для такой проверки. И сделать прохождение такой проверки обязательным на уровне репозитория.
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

Создаем директорию .github/workflows в корне проекта
В .github/workflows/ создаем sanity-check.yml