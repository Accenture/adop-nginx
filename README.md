# Supported tags and respective Dockerfile links

- [`0.1.0`, `0.1.0` (*0.1.0/Dockerfile*)](https://github.com/Accenture/adop-nginx/blob/master/Dockerfile.md)

# Build Status

[![Build Status](https://travis-ci.org/Accenture/adop-nginx.svg?branch=master)](https://travis-ci.org/Accenture/adop-nginx)

# What is adop-nginx?

adop-nginx provides Nginx with LDAP support. Nginx is a high performance reverse proxy. This image also has the LDAP authentiction module installed.

> [wikipedia.org/wiki/Nginx](https://en.wikipedia.org/wiki/Nginx)

![logo](https://raw.githubusercontent.com/docker-library/docs/master/nginx/logo.png)

# How to use this image

      $ docker run --name <your-container-name> -dt \
        -v /resources/configuration/:/etc/nginx/:ro \
        -v /resources/release_note:/usr/share/nginx/html/:ro \
        -v /var/log:/var/log 
        -p 443:443 \
        -p 80:80 \
        accenture/adop-nginx:VERSION
        
## Configuration

The nginx configuration is externalised and stored the 'resources' directory.

Runtime configuration can be provided using environment variables:

* LDAP_SERVER, the LDPA URI, i.e. ldap-host:389
* LDAP_USERNAME, the LDAP BASE_DN
* LDAP_PASSWORD, the password to use connecting to LDAP service using the provided username 
* LDAP_USER_BASE_DN, the LDAP user BASE_DN
* LDAP_GROUP_ATTRIBUTE, LDAP object field attribute the defines group appartenence. 
* LDAP_USER_ID_ATTRIBUTE, LDAP object field attribute the defines the user identifier. 
* LDAP_USER_OBJECT_CLASS, LDAP user object class

# License
Please view [licence information](LICENCE.md) for the software contained on this image.

#Supported Docker versions

This image is officially supported on Docker version 1.9.1.
Support for older versions (down to 1.6) is provided on a best-effort basis.

# User feedback

## Documentation
Documentation for this image is available in the [Nginx documentation page](http://nginx.org/en/docs/). 
Additional documentaion can be found under the [`docker-library/docs` GitHub repo](https://github.com/docker-library/docs). Be sure to familiarize yourself with the [repository's `README.md` file](https://github.com/docker-library/docs/blob/master/README.md) before attempting a pull request.

## Issues
If you have any problems with or questions about this image, please contact us through a [GitHub issue](https://github.com/Accenture/adop-nginx/issues).

## Contribute
You are invited to contribute new features, fixes, or updates, large or small; we are always thrilled to receive pull requests, and do our best to process them as fast as we can.

Before you start to code, we recommend discussing your plans through a [GitHub issue](https://github.com/Accenture/adop-nginx/issues), especially for more ambitious contributions. This gives other contributors a chance to point you in the right direction, give you feedback on your design, and help you find out if someone else is working on the same thing.
