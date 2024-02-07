# 724 Events

## Description
L'application est le site d'une agence evenementielle.
## Pre-requis
- NodeJS  >= v16.14.1

## Installation
- `yarn install`

## Lancement de l'application
- `yarn start`

## Tests
- `yarn test`



 const lastEvent = last?.events.sort((evtA, evtB) => // ajout de cette fonction à l'arrivée des datas pour les trier avant de passer le filtre de pagination
  new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
).slice(-1)[0];