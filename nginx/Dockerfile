FROM nginx:1.21.4-alpine

# COPY nginx.conf /etc/nginx/nginx.conf
# COPY --from=build /app/build /usr/share/nginx/html
ARG CERTBOT_EMAIL=admin@teichland-kapitäne.de
ARG DOMAIN_LIST

      # && certbot certonly --standalone --agree-tos -m "${CERTBOT_EMAIL}" -n -d ${DOMAIN_LIST} \
      # && rm -rf /var/lib/apt/lists/* \
      # && echo "PATH=$PATH" > /etc/cron.d/certbot-renew  \
      # && echo "@monthly certbot renew --nginx >> /var/log/cron.log 2>&1" >>/etc/cron.d/certbot-renew \
      # && crontab /etc/cron.d/certbot-renew
RUN  apk update \
      && apk add -y cron certbot python-certbot-nginx bash wget

VOLUME /etc/letsencrypt

COPY default.conf /etc/nginx/conf.d/
CMD [ "sh", "-c", "cron && nginx -g 'daemon off;'" ]