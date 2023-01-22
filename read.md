JAVASCRIPT
VARIAVÉIS 
const mensagem = "Hello!" //criação de uma variável
alert("Hello World!") //serve como print 


 let boasVindas = "Fala, Dev!"; - variavel temporaria(o valor pode mudar dentro do programa) 
  
  boasVindas = "Fala, Dev, Tudo Beleza!"
  vai funcionar tranquilamente.

  const serHumano = true; - varivel constante(o valor não pode mudar dentro do programa)

  serhumano = false; vai dar erro



  alert("Fala, Dev!") - usando uma função

  function alert(text){ - criando uma função
    return text
  }


/------------------------------/
OBJETOS

criando um objeto:
  const celular = { - você faz um objeto com o par de chaves, tá criando uma constante e atribuindo um objeto
    cor: 'preto', - propriedade
    ligar: function() {o código do metodo vai aqui} - propriedade que está recebendo uma funcão = metodo
  }

usando um objeto:
  celular.cor - funciona como um get
  celular.ligar{} - funciona como um metodo

  ex:

const celular = {
  cor: 'preto',
  ligar: function() {
    const mensagem = "ligando"
    alert(mensagem)
  }
}

alert(celular.cor)
celular.ligar()

/------------------------------/

DOM(Document Object Model)
- É a modelagem dos nossos elementos HTML em Objetos JavaScript
ex:

document.body.style.backgroundColor = "white" //muda a cor do plano de fundo
//o body está dentro do objeto document, tudo que vem antes do . é um objeto

document.querySelector("") //função que vai fazer uma pesquisa com o seletor dentro do css

document.querySelector("input").click() //função que vai fazer uma pesquisa com o seletor dentro do css, o parametro indica o que ele vai procurar e função .click() indica que ele deve far um click no parametro

document.querySelector('input').style.backgroundColor="red" - isso muda o background color do parametro


Posso controlar minha página, meu documento HTML, pelo JavaScript, através do objeto document
document - objeto que existe em todo navegador
.querySelector('a') - seleciona a tag a
.click() - dá a ordem de clicar na tag a

/------------------------------/
#A configuração do parametro dento do querySelector funciona da mesma forma que o css
Ex:
.querySelector('a') - seleciona a tag a
.querySelector(.days a) - seleciona a tag a dentro da classe days

/------------------------------/
Biblioteca

React é uma biblioteca

Para usar precisa instalar a biblioteca e depois é necessário estudar a biblioteca

/------------------------------/
new Date() - pega a data do dia atual, só que me padrão americano

new Date().toLocaleDateString() - função que vai trazer a data no modo local

new Date().toLocaleDateString('pt-br') - função que vai trazer a data no modo brasileiro

new Date().toLocaleDateString('pt-br').slice() - função que vai cortar a string, o parametro indica a posição.

/------------------------------/

LocalStorage = objeto que guarda na mémoria do browser 
localStorage.setItem('nome', value) - função que precisa de dois parametros, um nome e um valor(esse valor é uma string)

Ex:
localStorage.setItem('NLWSetup.data', JSON.stringfy(nlwSetup.data)) - JSON.stringfy -> converte o objeto em uma string

/------------------------------/
console.log() - digita qualquer coisa no console automaticamente
/------------------------------/

localStorage.getItem('NLWSetup@habits') - pega o value do localStorage

JSON.parse(localStorage.getItem('NLWSetup@habits')) - converte o texto de novo em objeto

/------------------------------/
GIT e GITHUB

GIT - controle de versão:
branch - é a linha do tempo(pode ter uma linha do tempo principal e alternativa)
commit - são os pontos na linha do tempo, assim você pode ir e voltar
stage area - local de preparação do commit

comandos: 
git init - inicia o git(repositório) no seu projeto

git add . - adiciona todos os arquivos modificados, ao stage

git commit -m "message here" - cria e descreve o um ponto na história

git push - envia alterações para o repositório remoto


GITHUB - Repositório(onde ficará o histórico do projeto)