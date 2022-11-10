# build environment
FROM node:14.9 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
RUN npm install react-scripts@5.0.1 -g
COPY . ./
ARG REACT_APP_IS_DEBUG
ARG REACT_APP_BACKEND_BASE_URL
ARG REACT_APP_APPLICATION_BASE_URL
ENV REACT_APP_IS_DEBUG $REACT_APP_IS_DEBUG
ENV REACT_APP_BACKEND_BASE_URL $REACT_APP_BACKEND_BASE_URL
ENV REACT_APP_APPLICATION_BASE_URL $REACT_APP_APPLICATION_BASE_URL
RUN CI='' npm run build 

# production environment
FROM nginx:latest

ARG PORT
ENV PORT $PORT

COPY --from=build /app/build /usr/share/nginx/html

COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./proxy.conf /etc/nginx/includes/proxy.conf

EXPOSE $PORT
CMD ["nginx", "-g", "daemon off;"]