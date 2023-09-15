# Projeto CRUD de Employee com Integração Random User Generator

Este é um projeto de exemplo que demonstra como criar um aplicativo CRUD de funcionários (employee) usando Node.js, TypeScript, Prisma, Express, MySQL e Docker, com integração com a API Random User Generator.

## Pré-requisitos

Certifique-se de que você tenha as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

## Configuração do Ambiente

1. Clone este repositório em sua máquina local:

2. Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:
   
  ``` DATABASE_URL="mysql://bd_user:senha_user@localhost:3306/enterprise" ```

3. Inicie os contêineres Docker para o MySQL e o aplicativo Express:

 ``` docker-compose up -d ```

4. Instale as dependências do projeto:

  ``` npm install ```

5. Execute as migrações do banco de dados para criar as tabelas necessárias:

 ``` npm run prisma:resolve ```

## Executando o Aplicativo

Para iniciar o aplicativo, execute o seguinte comando:

``` npm run dev ```

Isso iniciará o servidor Express na porta 3000.

## Endpoints da API

`/hello`: Retorna uma mensagem de saudação.

`/employee`: Implementa o CRUD para funcionários (employee). Você pode usar ferramentas como Postman ou curl para testar os endpoints CRUD (GET, POST, PUT, DELETE).

`/populate`: Este endpoint consome a API Random User Generator e insere 10 funcionários aleatórios na base de dados.

## Exemplo de Uso

```
curl --request GET \
  --url http://localhost:3000/hello

curl --request POST \
  --url http://localhost:3000/employee \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "${name}",
	"role": "${role}"
}'

curl --request PUT \
  --url http://localhost:3000/employee \
  --header 'Content-Type: application/json' \
  --data '{
	"id": ${id},
	"name": ${name},
	"role": ${role}
}'

curl --request GET \
  --url 'http://localhost:3000/employee?id=${ids}&name=${name}&role=${role}'

curl --request DELETE \
  --url 'http://localhost:3000/employee?id=${id}'

curl --request GET \
  --url http://localhost:3000/populate

```

## Contribuindo

Sinta-se à vontade para contribuir com melhorias para este projeto. Basta fazer um fork do repositório, fazer suas alterações e enviar um pull request.
