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
COPY --from=build /app/sitemap.xml /usr/share/nginx/html/sitemap.xml
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]