# pantry

To run in dev:

    start: docker-compose up -d
    stop: docker-compose down

To run in prod:

    start: docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

Guide to setting up hot reloading ts
https://dev.to/dariansampare/setting-up-docker-typescript-node-hot-reloading-code-changes-in-a-running-container-2b2f
