# Laravel CRUD Project

#### How to install php in linux

##### Update and Upgrade the System:

-   sudo apt update
-   sudo apt upgrade -y

##### Add the PHP Repository:

-   sudo apt-get install ca-certificates apt-transport-https software-properties-common
-   sudo add-apt-repository ppa:ondrej/php
-   sudo apt-get update

##### Install PHP 8.x:

-   apt-get install php8.3
-   apt install libapache2-mod-php8.3
-   systemctl restart apache2
-   apt install php8.3-mysql php8.3-imap php8.3-ldap php8.3-xml php8.3-curl php8.3-mbstring php8.3-zip

#### How to install xampp in linux

-   install xampp for Linux.
-   sudo apt update
-   sudo apt upgrade
-   sudo chmod +x installation_file
-   sudo ./installation_file
-   sudo /opt/lampp/lampp start
-   sudo /opt/lampp/lampp stop
-   sudo ./manager-linux-x64.run

#### How to install composer in linux

##### Step 1 — Installing PHP and Additional Dependencies:

-   sudo apt update
-   sudo apt install php-cli unzip

##### Step 2 — Downloading and Installing Composer:

-   cd ~
-   curl -sS https://getcomposer.org/installer -o /tmp/composer-setup.php
-   HASH=`curl -sS https://composer.github.io/installer.sig`
-   echo $HASH
-   php -r "if (hash_file('SHA384', '/tmp/composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
-   sudo php /tmp/composer-setup.php --install-dir=/usr/local/bin --filename=composer
-   composer

#### How to create project in composer

-   composer create-project laravel/laravel project-name
-   cd project-name
-   php artisan migrate
-   php artisan serve
-   php artisan make:controller contoller-name
-   php artisan make:model model-name -m(for migrate)
-   php artisan migrate:fresh
