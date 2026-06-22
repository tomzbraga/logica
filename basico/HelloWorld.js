/* Até hoje eu tento achar um local que me explique com clareza como que a linguagem funciona por baixo dos panos para que eu consiga explicar o que é o "console"
o que é o "log". Na minha opinião, a melhor maneira de entender tudo é pegar um material de estudo e tirar as dúvidas com a IA. Mas ainda assim é muito difícil, pois
para entender algo primeiro precisamos saber perguntar. Nem sempre sabemos o que perguntar. 

Por exemplo: 

Como todo bom início na programação, aqui vai o simples olá mundo.

*/

console.log("Olá Mundo!");

/* Consigo ter a ideia abstrata de que (pesquisando na IA) "console" é um objeto e "log" é um método dentro do objeto "console".
Mas como eu consigo chamar "console" sendo que eu nunca defini esse objeto? Como eu consigo chamar o método "log" se eu nunca criei esse método?
Na teoria, que todos sabem, é possível imaginar que, em alguma etapa da execução desse código, alguém lê "console" e fala:

OPA! Identifiquei essa palavra. Eu tenho aqui na Terra da Imaginação alguma coisa imaginária que eu tenho que fazer. Hmmm... logo após a palavra
"console" eu tenho ".log" OPA! Eu também tenho uma coisa imaginária a se fazer com isso. 

Essa brincadeira é a minha maneira de expressar a minha frustração de como é tão difícil entender algo que deveria ser tão simples.
A única coisa que imagino quando um código é executado é a decolagem de um avião com o código dentro e as palavras vão pulando de paraquedas
e caindo em seus devidos lugares na Terra da Imaginação.
Cada função, variável, parâmetro receberá um endereço que deverá se encaixar em algum local automatizado para funcionar. É a perfeita utilização de "caiu como uma luva".

Voltando quando eu disse que alguém "lê" a palavra console, nunca me foi ensinado quem é que lê o meu código. É o compilador?
Sei que compiladores transformam o código em linguagem de máquina, mas como? Cada pessoa explica de um jeito, o compilador lê o código, o compilador transforma o código
o compilador isso, o compilador aquilo, e vejo meus colegas de classe e eu saindo de lá do mesmo jeito que entramos... sem saber fazer nada.

Vamos seguir com mais código: */

let a = 1;
let b = 2;

/* Irmão... oq que é let???

Para armazenar um dado em código se utilizam variáveis. Para declarar uma variável escrevemos "let nome da variável = o valor que você quer"
Com toda a certeza do mundo você aprendeu a declarar variável em JS com a frase acima.
Não se explica pq "let", diferença entre "let" e "var", cade o int? cade o boolean?
Meu maior argumento para sustentar a minha crítica ao ensino de programção é: 

Imagine que você está tentando ensinar um alemão a falar português. Vc chega nele e fala "Quando você estiver com fome diga 'estou com fome'", porém você não explica
o que significa "estou com fome", ele pode pensar significa "Ich will essen" ou "Hast du verstanden, worauf ich hinauswollte?" por exemplo.
Talvez na maioria dos casos o alemão conseguiria bons resultados, porém imagine ele chegando numa loja, fica apontando para a comida e dizendo repetidamente
"Estou com fome, estou com fome!" Seria cômico, mesmo que compreensível. 
Agora imagine fazer cursos ou uma faculdade de programação e sair de lá meia boca porém com nota 10 em tudo. É possível! Acredite.
Tem jovens de 17 cursando programação em 2026. O que acha que vão aprender? C, Java? Amigo, minha aula de frontend foi em react. DIRETO em React.
Eu não sabia nem o que era document.querySelector mas já estava aprendendo(decorando) o que que o useState fazia. E DIGO MAAAAAIS
Até eu entender o que é o useState, o professor já estava passando Context API. E eu não era o único "atrasado" na sala.
Como eu vou aprender React se eu só sei lógica de programação amigo?

Voltando ao material:

as variáveis "a" e "b" armazenam os seus valores. "let" tem a ver com hoisting e em qual escopo a variável se encontra. 
*/

function soma(a, b) {
  return a + b;
}

/* Aqui temos mais uma atuação da Terra da Imaginação! Como diachos o computador entende que function é uma função? Mas isso cai na mesma situação
descrita acima e vou tentar não perder mais tempo com essa frustração.
*/

console.log("a + b = ", soma(a, b));
