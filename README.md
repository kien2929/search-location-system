# READ ME

## Requirements
- Nodejs version: v18.12.0
- Yarn version: v4.0.0-rc.48
- Docker

## Setup
- Install dependencies
```sh
yarn
```
- Run docker database
```sh
docker compose --file ./development/docker-compose.yaml up
```
- Add  `.env` for node environment
```sh
cp .env.example .env
```
- Migrate database
```sh
yarn prisma:migrate
```
- Generate database schema
```sh
yarn prisma:generate
```
- Seed mock data
```sh
yarn prisma:seed
```

## Start project
```sh
yarn start
```

## Run tests
```sh
yarn test:unit
```
