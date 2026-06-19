# logica

Eu gostaria muito de montar um readme de forma didática para explicar do que esse repositório se trata com clareza. Por enquanto ainda estou tentando compreender
meu problema para poder explicá-lo de forma mais clara. Espero que o "brainstorm" que farei abaixo seja suficiente para compreender do que este estudo se trata

Após ler e reler uma simples função utilizando useEffect no React eu percebi que saber de lógica e sintaxe não é o suficiente para
se tornar um desenvolvedor independente que consegue caminhar com as próprias pernas. 

Uma simples ideia pode parecer fácil dentro dos pensamentos, porém torná-la real em código requer conhecimentos básicos de
estrutura de função, e coisas que eu não sei ainda como definir, mas por enquanto chamo de algoritmos sequenciais. Por exemplo:

  function funcao(a, b, etc...) 

    return // alguma manipulação com os parâmetros

Aqui temos uma função que recebe a, b e quantos parâmetros forem necessários. A função deve fazer algo com os parâmetros que foram disponibilizados.

Porém, nem sempre os parâmetros são definidos sem a execução de alguma tarefa. O parâmetro "a" pode exigir algum processo para que ele seja definido.

Se lembrarmos de matemática que nos ensinam na escola, podemos facilmente assimilar a seguinte situação

x + y = 10

Como vamos descobrir os valores de x e de y? Precisamos de mais informações sobre eles. Supondo que:

x = 3 + 2

x = 5

Então

5 + y = 10

y = 10 - 5

y = 5

Para solucionar esse problema, tivemos que primeiro definir o valor de x.

Vejo isso como uma base importante para conseguir se tornar independente na programação, pois muitas vezes me encontro em situações em que eu sei o que eu quero
que o sistema faça, porém, na hora de escrever código, acabo travando por algum motivo que ainda não compreendo.

Existem diversas maneiras de utilizar a situação acima em código

Você pode pedir para o usuário informar o valor de x, ou de y, ou o valor que se espera como resultado final. Podemos também aplicar regras que foram definidas para
determinadas situações, como por exemplo:

  Uma caneta custa 10 reais, um lapis 5. 
  Comprei duas canetas e um lápis. Espera-se que o resultado seja:

  10 + 10 + 5 = 25
  
  Porém temos uma taxa de 5% sobre o valor de cada unidade vendida

  Então podemos fazer:

  caneta.valor * 0.05 para descobrir o valor total a se pagar pela caneta.
  
  lapis.valor * 0.05 para descobrir o valor total a se pagar pelo lápis.

  Se caminharmos por esse caminho, teremos várias etapas para concluir a questão. Mas podemos também fazer por:

  ( caneta.valor * 0.05 ) * 2 + lapis.valor * 0.05 

  Esse cálculo já nos traria o resultado sem mais etapas.

  Porém nós temos a quantidade de itens fixa, 2 canetas e 1 lápis, mas se comprarmos quantidades diferentes?

  Teríamos então que trocar os valores fixos por variáveis:

  (caneta.valor * 0.05) * x + (lapis.valor * 0.05) * y

  Já adiantando meu conheciemnto sobre programação, estou simulando o acesso do atributo "valor" dos objetos caneta e lápis.
  Porém a equação acima ainda não é a melhor maneira para ser escrita se imaginarmos como seria um sistema real para isso, pois estamos nos limitando apenas a compra de canetas e lápis, mas e se comprarmos também um caderno que custa 20 reais? Teríamos que acrescentar o caderno à equação?

  (caneta.valor * 0.05) * x + (lapis.valor * 0.05) * y + (caderno.valor * 0.05) * z

  E se continuarmos adicionando itens à nossa lista de compras? Teríamos que escrever mais código? Nessa situação teríamos que criar 1 variável de quantidade comprada para cada item que decidirmos comprar. Eu ainda adiantei o pensamento em objetos para os produtos, se não, teríamos que criar variáveis para salvar os valores dos itens também.

Essa é apenas uma situação bem básica das milhares de situações que existem carreira de desenvolvimento. E elas podem ser bem mais complicadas que isso.

É sobre isso que este estudo se trata.
  

  

  









