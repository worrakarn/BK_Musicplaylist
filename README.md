# BK_Musicplaylist

This backend playlist music

## Docker Setup

```sh
docker compose build
```

```sh
docker compose up -d
```

## Migrate db

```sh
docker exec -it server sh -c "npm run migrate"
```

## Seeding db

```sh
docker exec -it server sh -c "npm run seed"
```

## Rollback db

```sh
docker exec -it server sh -c "npm run rollback"
```

## URL

```sh
http://localhost:3000/api-docs/
```
