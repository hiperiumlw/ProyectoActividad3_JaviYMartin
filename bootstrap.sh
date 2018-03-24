#!/usr/bin/env bash

sudo apt-get update
sudo apt-get install -y apache2
DEBIAN_FRONTEND=noninteractive sudo -E apt-get -q -y install mysql-server
sudo apt-get -y install php5
sudo apt-get -y install nodejs
sudo apt-get -y install nodejs-legacy
if ! [ -L /var/www/html/ ]; then
  sudo rm -rf /var/www/html/
  sudo ln -fs /vagrant /var/www/html
fi

echo 'CREATE DATABASE IF NOT EXISTS actividad3 CHARACTER SET Latin1 COLLATE latin1_spanish_ci;'> basededatos.sql
echo 'USE actividad3;' >> basededatos.sql
echo 'CREATE TABLE cliente (id INT NOT NULL AUTO_INCREMENT,usuario VARCHAR(45) NOT NULL,email VARCHAR(45) NOT NULL,password VARCHAR(80) NOT NULL,hash VARCHAR(80) NULL,PRIMARY KEY (id));' >> basededatos.sql
cat basededatos.sql
sudo mysql -u root < basededatos.sql

