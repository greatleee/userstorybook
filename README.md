# Userstorybook 클론 for 다소

### Dependencies
- Node: 14.16.1
- Yarn: 1.22.10

### Migration
```zsh
# generate
# generate실행하기 전에 src/**/*.entity.ts파일들을 build해야한다.
yarn build
yarn typeorm migration:generate -c <connection> -n <name>

# run
# 새로 생긴 migration파일(*.ts)파일들을 build해야 db에 적용할 수 있다.
yarn build
yarn typeorm migration:run -c <connection>

# revert
yarn typeorm migration:revert -c <connection>
```
