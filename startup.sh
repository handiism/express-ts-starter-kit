#!/bin/sh
npx prisma migrate deploy
node dist/app.js
