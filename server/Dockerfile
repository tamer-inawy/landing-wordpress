FROM composer as composerStg

COPY ["./contact-form/", "/app/contact-form/"]

WORKDIR /app/contact-form

RUN composer install

# Phase 2
FROM wordpress:latest

RUN mkdir /var/www/html/wp-content/plugins/contact-form

COPY --from=composerStg /app/contact-form/src /var/www/html/wp-content/plugins/contact-form/src

COPY --from=composerStg /app/contact-form/vendor /var/www/html/wp-content/plugins/contact-form/vendor

COPY --from=composerStg /app/contact-form/contact-form.php /var/www/html/wp-content/plugins/contact-form/contact-form.php
