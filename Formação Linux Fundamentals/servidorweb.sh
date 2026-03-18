#!/bin/bash

echo "Atualizando servidor..."
apt-get update
apt-get upgrade -y

echo "Instalando Apache..."
apt-get install apache2 -y

echo "Instalando unzip..."
apt-get install unzip -y

echo "Baixando aplicação web..."
cd /tmp
wget https://github.com/denilsonbonatti/linux-site-dio/archive/refs/heads/main.zip

echo "Descompactando arquivos..."
unzip main.zip

echo "Copiando arquivos para o diretório do Apache..."
cd linux-site-dio-main
cp -R * /var/www/html/

echo "Finalizando configuração..."
systemctl restart apache2

echo "Servidor web pronto!"