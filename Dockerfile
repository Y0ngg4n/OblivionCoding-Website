# build env
FROM node as build
WORKDIR /app
COPY package*.json ./
RUN yarn install --network-timeout 600000
COPY . ./
RUN yarn run build

# production env
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
