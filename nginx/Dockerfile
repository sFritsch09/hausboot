FROM nginx:stable
# FROM nginx:1.21.4-alpine

ARG CERTBOT_EMAIL=admin@xn--teichland-kapitne-4qb.de
ARG DOMAIN_LIST
ARG DOMAIN_LIST2

RUN  apt-get update \
     && apt-get install -y cron certbot python3-certbot-nginx bash wget \
     && certbot certonly --standalone --agree-tos -m "${CERTBOT_EMAIL}" -n -d ${DOMAIN_LIST} \
     && rm -rf /var/lib/apt/lists/* \
     && echo "PATH=$PATH" > /etc/cron.d/certbot-renew  \
     && echo "@monthly certbot renew --nginx >> /var/log/cron.log 2>&1" >> /etc/cron.d/certbot-renew \
     && crontab /etc/cron.d/certbot-renew

RUN  certbot certonly --standalone --agree-tos -m "${CERTBOT_EMAIL}" -n -d ${DOMAIN_LIST2} \
     && echo "PATH=$PATH" > /etc/cron.d/certbot-renew2  \
     && echo "@monthly certbot renew --nginx >> /var/log/cron.log 2>&1" >> /etc/cron.d/certbot-renew2 \
     && crontab /etc/cron.d/certbot-renew2

VOLUME /etc/letsencrypt

COPY default.conf /etc/nginx/conf.d/
CMD [ "sh", "-c", "cron && nginx -g 'daemon off;'" ]

