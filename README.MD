final-projeto-back-dripstore

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
npx sequelize-cli model:generate --name User --attributes full_name:string,email:string,password:string

npx sequelize-cli model:generate --name Address --attributes user_id:integer,street:string,number:string,city:string,state:string,zip_code:string

npx sequelize-cli model:generate --name Category --attributes name:string

npx sequelize-cli model:generate --name Product --attributes name:string,description:text,price:decimal,stock:integer,category_id:integer

npx sequelize-cli model:generate --name Order --attributes user_id:integer,address_id:integer,status:string

npx sequelize-cli model:generate --name OrderItem --attributes order_id:integer,product_id:integer,quantity:integer

Execute as migrations:
npx sequelize-cli db:migrate

Criar arquivo de seed
npx sequelize-cli seed:generate --name demo-data

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