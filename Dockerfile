ARG BASE_IMAGE=node:12.18.2-alpine3.11

FROM $BASE_IMAGE as base

WORKDIR /app

FROM base as dev

CMD yarn dev
