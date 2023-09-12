-- Arquivo init.sql
DROP USER IF EXISTS 'bd_user'@'%';
CREATE USER IF NOT EXISTS 'bd_user'@'%' IDENTIFIED BY 'senha_user';
GRANT ALL PRIVILEGES ON *.* TO 'bd_user'@'%';
FLUSH PRIVILEGES;
