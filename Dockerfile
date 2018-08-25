FROM node:10-alpine as sdk

WORKDIR /home/ssmotor/

RUN npm install -g @angular/cli

COPY ./ ./
RUN npm install

RUN ng build --prod

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=sdk /home/ssmotor/dist/ /usr/share/nginx/html
