## SETUP BANCK END COM NODE.JS

#### 1º criar a pasta server

**mkdir server**

#### 2º cria o package.json

**npm init -y**

#### 3º Instala dependencias de desenvolvimento

**npm install typescript -D**

**npm i tsx -D**
Permite exercutar um arquivo do node com typescript sem precisar fazer conversão.

#### 4º instala biblioteca para interpretar o typescript no Node

**npx tsc --init**
Criará um arquivo tsconfig.json com toda a configuração do typescript do projeto

#### 5º cria um script dentro do json para execusão da aplicação

**"dev": "tsx watch src/server.ts"**
execulta com..
**npm run dev**
OBS: o watch fica assistindo todas as mudançãs no arquivo e muda sem ter que fazer reloading

INFOR
*Dependencias de desenvolvimento não são usados em produção, somente enquanto o projeto está sendo desenvolvido.
*Node não interpreta código typescript, por isso precisa de uma biblioteca que faça isso

### Rotas para a a API RESTFULL do back end

As alterações, inclusões, exclusões etc serão realizados ou retornadas através de rotas http EX: localhost:3000/habits.
Para isso será utilizado o FASTIFY que funciona como o express.

#### 6ºinstala as dependências

**npm install fastify**
É uma estrutura da web focada em fornecer melhor experiência de desenvolvimento com o mínimo de sobrecarga.

## Formas de se comunicar com banco de dados

Existem três formas mais comuns de trabalhar com banco de dados

1ª DRIVER NATIVO
se connecta escrevendo queries SQL em forma de strings e manda o banco executar. A execusão das queries retorna uma Promise (Operação Assíncrona)

2ª QUERY BUILDER
aqui as queries são ecritas usando funções e a biblioteca se encarrega de gerar a query nativa.

3ª ORM (mapeamento objeto-relacional)
mapeia a estrutura relacional do banco em objetos na linguagem utilizada onde tabelas viram objetos, linhas viram atributos do objeto e relação entre tabela se transforma em relação entre objeto. Nesse caso, não precisa se preocupar com as queries.
EX: PRISMA

#### 7º instala a ORM PRISMA

**npm i -D prisma**
e
**npm i @prisma/client**

indicar que deseja usar o banco de dados do tipo SQLite (SQLite cria um arquivo local, sem precisar usar o DOCKER)
**npx prisma init --datasource-provider SQLite**

Depois de criar a primeira tabela roda o comando...
**npx prisma migrate dev**
que vai ler todas as alterações do arquivo schema.prisma e cria um arquivo SQL que vai fazer as alterações no banco de dados (dar um nome para o arquivo SQL é chamdado de migration que é o versionamento do banco de dados, como um git commit). Todos os migrations que for dado, será guardado dentro da pasta migrations

Para visualizar, navegar e criar novos elementos no banco de dados através de uma interface, basta rodar o comando
**npx prisma studio**

Para acessar a lista de dados da tabela, basta importar dentro do arquivo server.tx **import{PrismaClient} from "@prisma/client"** e cria uma variável **const prisma = new PrismaClient()** e já tem acesso ao banco de dados

### Instala CORS

A configuração do CORS é para que a aplicação Front End possa buscar os dados do back end. Instala a integração do CORS com o fstify
**npm i @fastify/cors**
Import o CORS dentro do server.ts
**import cors from "@fastify/cors"**
e dentro da aplicação cria um
**app.register(cors)**

Poderia configurar endereços que podem acessar o back end dentro de ..
**app.register(cors, { origin: ["http://localhost:300"]})**

---

## SETUP FRONT END

#### 1º Cria a aplicação com o Vite utilizando React e typescript

**npm create vite@latest**
Seleciona as tecnologias citadas.

### 2º Instala as dependencias

**npm install**

### 3º Instala Tailwindcss - biblioteca de estilização, é um plugin do Postcss / Postcss - automatiza tarefas dentro do css / autoprefixer - adiciona prefixos de browser, como webki

**npm install -D tailwindcss postcss autoprefixer**

Depois de instalada, para criar o arquivo do postcss.config, executa...
**npx tailwindcss init -p**

## REACT

É possível passar informações para dentro do componente por meio de propriedades.
EX:
\*\*no componente
Cria um objeto passando quais propriedades o componente vai receber...

interface HabitProps {
completed: number
}

...depois passa a props como um parâmetro da função mencionando que a props deve seguir o padrão do HabitProps, para que possa ser acessada pelo App

export function Habit(props: HabitProps){
return(<p>{props.completed}</p>)
}

\*\*no App
acessa a propriedade passando para o componente completed={3}, será mostrado na tela, no caso o número 3.

App(){
return (
<>
<Habits completed={3}/>
</>
)
}

PROPRIEDADES são as informações que modificam um componente visual ou comportamentalmente

## SETUP MOBILE REACT NATIVE

#### 1º Criar o app

```npx create-expo-app mobile --template

```

Seleciona o Blank (Typescript)

#### iniciar a aplicação

```npx expo start

```

Se as atualizações não estiverem sendo aplicadas, usa

```npx expo start --clear

```

OBS: usar o emulador ou o celular para ver a aplicação

#### Instala font

`npx expo install expo-font @expo-google-fonts/inter`

Importa as fonts dentro do App

```import {useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold} from "@expo-google-fonts/inter";

```
Para garantir que a font será carregada antes da aplicação, usar o hook useFonts, passando as fonts da aplicação.