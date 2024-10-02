# Tamagotchi-Crud API

API for the tamagotchi crud app, scaffolded with NestJS and linked to a Postgres database.

## Installation

1. cd into api folder and install dependencies with `pnpm install`
2. Run the app with `pnpm run start:dev` to start in watch mode

## Endpoints

### GET /tamagotchi

Returns a list of all tamagotchis in the database.

### GET /tamagotchi/:id

Returns a tamagotchi with the specified ID.

### POST /tamagotchi

Creates a new tamagotchi with the provided data.

### PUT /tamagotchi/:id

Updates the tamagotchi with the specified ID with the provided data.

### DELETE /tamagotchi/:id

Deletes the tamagotchi with the specified ID.