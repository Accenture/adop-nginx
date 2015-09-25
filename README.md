# Docker nginx repo

This is the Git repo for the Accenture DevOps Platform nginx docker image.

# What is Nginx?

Nginx is a high performance reverse proxy. This image also has the LDAP authentiction module installed.

> [wikipedia.org/wiki/Nginx](https://en.wikipedia.org/wiki/Nginx)

![logo](https://raw.githubusercontent.com/docker-library/docs/master/nginx/logo.png)

# How to use this image

## hosting some simple static content

      $ docker run --name <your-container-name> -dt \
        -v /resources/configuration/:/etc/nginx/:ro \
        -v /resources/release_note:/usr/share/nginx/html/:ro \
        -v /var/log:/var/log 
        -p 443:443 \
        -p 80:80 \
        docker.accenture.com/dcsc/academy_nginx:VERSION
        
## Release Note

This is the nginx home page on the root context. It provides an overview of the platform and links to tools in the stack.

## Configuration

The nginx configuration is externalised and stored the 'resources' directory.