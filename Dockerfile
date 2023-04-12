
FROM nginx:alpine

RUN rm -f /usr/share/nginx/html/*
COPY dist/front /usr/share/nginx/html
COPY src/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "deamon off;"]
