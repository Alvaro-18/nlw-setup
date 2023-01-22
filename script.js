const form = document.querySelector('form') //constante que vai receber a tag de formulário
const nlwSetup = new NLWSetup(form) //criando um novo objeto que vem da classe importada na biblioteca
const button = document.querySelector('header button')

button.addEventListener('click', add) //adiciona um ouvidor de evento, o primeiro parametro é o evento e o segundo e a função que ele vai executar ao ouvir o evento
form.addEventListener('change', save) //change = mudança

function add() { //mesma ideia de um método

  const today = new Date().toLocaleDateString('pt-br').slice(0, -5) //variavel vai receber os dados do objeto, vai no arquivo de texto(Ln 86)

  const dayExists = nlwSetup.dayExists(today) //vai checar se o dia existe

  if(dayExists){
    alert('O dia já está incluso 🛑')
    return //vai parar o código, evitando repetição do comando embaixo
  }

  alert('adicionado com sucessor ✅')
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {} // || indica ou, nesse caso a biblioteca consegue entender um objeto vazio e não vai apresentar erro

nlwSetup.setData(data) //vai setar o data
nlwSetup.load() //vai carregar o dado

/*
const data = {
  run: ['01-01', '02-01', '03-01', '04-01', '05-01' ],  //array
  takePills:['03-01'],
  journal:['01-02']
}
*/

/*
nlwSetup.addDay('01/02')
nlwSetup.load()
*/