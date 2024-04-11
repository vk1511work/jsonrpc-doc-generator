FROM avtodev/open-rpc-docs-builder:1.3  AS builder

RUN rm -f /app/package.json

COPY --chown=node ./package.json /app/package.json

RUN yarn add @remix-run/router@0.2.0-pre.7
RUN yarn add react-router@5.3.4
RUN yarn add react-router-dom@5.3.4
RUN yarn add prismjs@1.29.0

