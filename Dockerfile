FROM node:20.2.0-bullseye AS base

ARG NODE_ENV=production

WORKDIR /nodecg

RUN npm install -g nodecg-cli \
	&& nodecg setup

FROM node:20.2.0-bullseye AS builder

WORKDIR /bundleBuilder

COPY . ./

RUN yarn install \
	&& echo NODE_ENV=production \
	&& yarn build

FROM node:20.2.0-bullseye-slim AS runner

WORKDIR /nodecg

RUN apt-get update && apt-get install --no-install-recommends -y tini \
	&& apt-get autoremove -y && apt-get clean -y && rm -rf /var/lib/apt/lists/* /root/.gnupg /tmp/library-scripts

COPY --from=base /nodecg .
COPY --from=builder /bundleBuilder/node_modules /nodecg/bundles/my-usual-layout/node_modules
COPY --from=builder /bundleBuilder/dashboard /nodecg/bundles/my-usual-layout/dashboard
COPY --from=builder /bundleBuilder/extension /nodecg/bundles/my-usual-layout/extension
COPY --from=builder /bundleBuilder/graphics /nodecg/bundles/my-usual-layout/graphics
COPY --from=builder /bundleBuilder/package.json /nodecg/bundles/my-usual-layout/package.json

ENV NODE_ENV=production
ENTRYPOINT ["/usr/bin/tini", "--"]

CMD ["yarn", "start"]
