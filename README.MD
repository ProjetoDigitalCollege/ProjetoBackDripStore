projeto-back-dripstore

-Verificar as versões do node e npm:
node -v npm -v

-Inicializar um projeto Node.js
npm init -y

-Instalar dependências --save

npm install express dotenv nodemon pg pg-hstore sequelize sequelize-cli jsonwebtoken swagger-jsdoc swagger-ui-express bcrypt --save

-Usar o sequelize-cli

npx sequelize-cli init

-Editar o package.json para usar o nodemon na execução do server
e ativar o type: module

{
  "name": "back",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "bcrypt": "^5.1.1",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "nodemon": "^3.1.4",
    "pg": "^8.12.0",
    "pg-hstore": "^2.3.4",
    "sequelize": "^6.37.3",
    "sequelize-cli": "^6.6.2",
    "swagger-jsdoc": "^6.2.8",
    "swagger-ui-express": "^5.0.1"
  }
}

Crie as seguintes migrations:

npx sequilize-cli model:generate --name Endereco --attributes endereco:string,bairro:string,cidade:string,cep:integer,complemento:string

npx sequelize-cli model:generate --name EnderecoUsuario --attributes endereco_id:integer,usuario_id:integer

npx sequelize-cli model:generate --name Usuario --attributes nome:string,email:string,password:string,user:string,cpf:integer

npx sequelize-cli model:generate --name TelefoneUsuario --attributes telefone_id:integer,usuario_id:integer
npx sequelize-cli model:generate --name Telefone --attributes telefone:integer   

npx sequelize-cli model:generate --name Venda --attributes usuario_id:integer,valor_total:integer  

npx sequelize-cli model:generate --name Pedido --attributes produto_id:integer,venda_id:integer 

npx sequelize-cli model:generate --name Produto --attributes enabled:boolean,slug:string,use_in_menu:boolean,stock:integer,description:string,price:decimal,price_with_discount:decimal,categoria_id:integer,marca:string 

npx sequelize-cli model:generate --name OpcoesProdutos --attributes produto_id:integer,title:string,shape:string,radius:integer,type:string,values:string 

npx sequelize-cli model:generate --name ProdutoImg --attributes produto_id:integer,imagem_id:integer 

npx sequelize-cli model:generate --name Imagem --attributes produto_id:integer,enabled:string,path:string 

npx sequelize-cli model:generate --name ProdutoCategoria --attributes categoria_id:integer,produto_id:integer

npx sequelize-cli model:generate --name Categoria --attributes nome:string,slug:string,use_in_menu:boolean    

npx sequelize-cli migration:generate --name create-categoria
npx sequelize-cli migration:generate --name create-produto
npx sequelize-cli migration:generate --name create-produto-categoria
npx sequelize-cli migration:generate --name create-produto-imagem
npx sequelize-cli migration:generate --name create-imagem
npx sequelize-cli migration:generate --name create-opcoes-produtos
npx sequelize-cli migration:generate --name create-pedido
npx sequelize-cli migration:generate --name create-vendas
npx sequelize-cli migration:generate --name create-usuario
npx sequelize-cli migration:generate --name create-endereco
npx sequelize-cli migration:generate --name create-endereco-usuario
npx sequelize-cli migration:generate --name create-telefone
npx sequelize-cli migration:generate --name create-telefone-usuario

Execute as migrations:
npx sequelize-cli db:migrate

Criar arquivo de seed
npx sequelize-cli seed:generate --name seeders-categoria
npx sequelize-cli seed:generate --name seeders-produto
npx sequelize-cli seed:generate --name seeders-produto-categoria
npx sequelize-cli seed:generate --name seeders-produto-imagem
npx sequelize-cli seed:generate --name seeders-imagem
npx sequelize-cli seed:generate --name seeders-opcoes-produtos
npx sequelize-cli seed:generate --name seeders-pedido
npx sequelize-cli seed:generate --name seeders-vendas
npx sequelize-cli seed:generate --name seeders-usuario
npx sequelize-cli seed:generate --name seeders-endereco
npx sequelize-cli seed:generate --name seeders-endereco-usuario
npx sequelize-cli seed:generate --name seeders-telefone
npx sequelize-cli seed:generate --name seeders-telefone-usuario

Execute o seed
npx sequelize-cli db:seed:all

Configurar API
http://localhost:3000/api-docs


puxar do banco 

npm install sequelize-auto --save-dev

comando pra buscar do banco

sequelize-auto -o "./models" -d nome_do_banco -h localhost -u seu_usuario -p 5432 -x sua_senha -e postgres

-o "./models": Diretório de saída onde os modelos gerados serão salvos (neste caso, na pasta models).
-d nome_do_banco: Nome do banco de dados.
-h localhost: Host do banco de dados (geralmente localhost).
-u seu_usuario: Nome de usuário do banco de dados.
-p 5432: Porta do banco de dados PostgreSQL.
-x sua_senha: Senha do banco de dados.
-e postgres: Dialeto do banco de dados (neste caso, postgres).


/reverter todas migrações
npx sequelize-cli db:migrate:undo:all

/pegar modelo do banco
"sequelize-auto": "sequelize-auto -o './models' -d database -h localhost -u postgres -p porta -x password -e postgres"

/modelos do banco por sql

--enums do opcoes_produto
create type shape as enum ('square','circle');

create type texto as enum ('text');


categoria
create table categoria (

id serial4 not null,

nome varchar(50) not null,

slug varchar(50),

use_in_menu boolean,

constraint pk_categoria primary key(id)

);


produtocategoria
create table produto_categoria (

id serial4 not null,

categoria_id int4 not null,

produto_id int4 not null,

constraint pk_produto_categoria primary key (id)

);


alter table produto_categoria add constraint fk_categoria foreign key (categoria_id) references categoria(id);

alter table produto_categoria add constraint fk_produto foreign key (produto_id) references produto(id);


produtos
create table produto (

id serial4 not null,

enabled boolean,

slug varchar(50),

marca varchar(30),

use_in_menu boolean,

stock int4,

description varchar(100),

price decimal(10,2) not null,

price_with_discount decimal(10,2) not null,

constraint pk_produto primary key (id)

);


produtoimgs
create table produto_imagem (

id serial4 not null,

produto_id int4 not null,

imagem_id int4 not null,

constraint pk_produto_imagem primary key(id)

);


alter table produto_imagem add constraint fk_imagem foreign key (imagem_id) references imagem(id);

alter table produto_imagem add constraint fk_produto foreign key (produto_id) references produto(id);


imagens
create table imagem (

id serial4 not null,

enabled boolean,

path varchar(200) not null,

constraint pk_imagem primary key(id)

);


opcoesprodutos
create table opcoes_produtos (

id serial4 not null,

produto_id int4 not null,

title varchar(50),

shape shape default 'square',

radiu int4,

type text default 'text',

values int4,

constraint pk_opcoes_produtos primary key (id)

);


alter table opcoes_produtos add constraint fk_produto foreign key (produto_id) references produto(id);


pedidos
create table pedido (

id serial4 not null,

produto_id int4 not null,

venda_id int4 not null,

constraint pk_pedido primary key (id)

);


alter table pedido add constraint fk_venda foreign key (venda_id) references vendas(id);

alter table pedido add constraint fk_produto foreign key (produto_id) references produto(id);


vendas
create table vendas (

id serial4 not null,

usuario_id int4 not null,

valor_total int4,

constraint pk_vendas primary key(id)

);


alter table vendas add constraint fk_usuario foreign key (usuario_id) references usuario(id);


usuarios
create table usuario (

id serial4 not null,

nome varchar(50) not null,

email varchar(100) not null unique check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$'),

password varchar(50) not null,

username varchar(30) not null,

cpf varchar(11) not null unique check (cpf ~ '^[0-9]{11}$'),

constraint pk_usuario primary key (id)

);


enderecousuario
create table endereco_usuario (

id serial4 not null,

endereco_id int4 not null,

usuario_id int4 not null,

constraint pk_endereco_usuario primary key (id)

);


alter table endereco_usuario add constraint fk_endereco foreign key (endereco_id) references endereco(id);

alter table endereco_usuario add constraint fk_usuario foreign key (usuario_id) references usuario(id);


enderecos
create table endereco (

id serial4 not null,

rua varchar(100) not null,

bairro varchar(100) not null,

cidade varchar(100) not null,

cep varchar(9) not null unique check (cep ~ '^[0-9]{5}-[0-9]{3}$'),

complemento varchar(50),

constraint pk_endereco primary key(id)

);


telefoneusuarios
create table telefone_usuario (

id serial4 not null,

telefone_id int4 not null,

usuario_id int4 not null,

constraint pk_telefone_usuario primary key (id)

);


alter table telefone_usuario add constraint fk_telefone foreign key (telefone_id) references telefone(id);

alter table telefone_usuario add constraint fk_usuario foreign key (usuario_id) references usuario(id);


telefones
create table telefone (

id serial4 not null,

telefone varchar(11) not null unique check (telefone ~ '^\d{10,11}$'),

constraint pk_telefone primary key(id)

);

