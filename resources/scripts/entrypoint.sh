#!/bin/bash
set -e

cp -R /resources/configuration/* /etc/nginx/
cp -R /resources/release_note/* /usr/share/nginx/html/

/usr/sbin/nginx
