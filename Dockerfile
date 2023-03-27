FROM node:16.17.1 AS build
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:alpine AS prod
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist .
EXPOSE 80
# run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]