/**Aqui foi criada uma constante para o botão menu do meu html. Toda vez que eu precisar colocar alguma funcionalidade em alguma coisa no html, como pegar um dado e interagir de alguma forma ou pegar um botão e colocar algum evento eu crio uma variável ou constante para ele. 
 *  Mas como associar um botão a uma variável o constante? 1º crie um id para o botão ou qualquer tag em html, 2º chame ele através deste comando: document.getElementById('') e dentro destes parêntesis e aspas coloque o id que você deu para o elemento. 
 */
const btnMobile = document.getElementById('btn-mobile'); 

/**Para que serve esta função? Ela serve para fazer algo quando eu clicar no meu botão*/
function toggleMenu(event){ //para corrigir aquele problema de touchstart abrir e fechar o menu ao mesmo tempo 1º eu coloquei o argumento evente entre parêntesis


    if (event.type === 'touchstart') event.preventDefault(); //2º coisa para corrigir o bug. Eu fiz essa condicional simples. Se o tipo do evento, ou seja (event.type) for igual 'touchstart. Previna o evento de fazer o padrão, isto é (event.preventDefault()) este comando em parêntesis impede que o meu touch start gere aquele bug 


    const nav = document.getElementById('nav'); // ← ← Este foi o primeiro comando que declarei aqui em JS. Qual foi a lógica? Com esta função eu quero dar funcionalidade àquela barra de navegação do menu hambúrguer foi por isso que eu criei uma constante para chamar a barra de navegação


    nav.classList.toggle('active') // ← ← Este foi o segundo comando que eu dei. Para que serve? Serviu para adicionar uma classe para a minha const nav, que referencia a minha área nav do html (que é o menu). Este comando é feito nesta lógica leia isto e olhe para o código. na minha constante nav eu quero adicionar uma class (classList), mas faça o seguinte, adicione caso não tenha ou remova caso tenha (toggle = alternar) e eu quero que o nome dessa classe seja active (Que poderia ser qualquer outro, o nome é opcional). E como saber se está adicionando a classe de verdade? É simples. É só ir em inspecionar, e olhar para a tag nav quando você clicar no botão menu, se estiver sem classe e você clicar irá adicionar uma classe imediatamente com o nome que você deu, neste caso 'active', se você clicar novamente o js irá remover esta classe, pense neste comando como se fosse um interruptor, liga a lâmpada, desliga a lâmpada. Depois de dar este comando eu tive que ir no css para fazer um estilo quando a id nav tivesse a classe active que lá no css está assim #nav.active #menu. E assim foi a lógica em css: quando o meu id nav estiver com a classe active, quero que meu menu... Mais informações via css hehe

    
    const active = nav.classList.contains('active')// este comando significa: naBarraDeNavegação.queroSaber.seContémEstaClasse//Qual Classe? ('active)
    event.currentTarget.setAttribute('aria-expanded', active)//Este comando significa evento.oAtualEventoDestaFunção.mudarAtributo//Qual atributo?('aria-expanded' //você precisará de uma variável para isto qual é a variáve?, active) Com estes dois comandos acima fiz assim: Se conter a classe active o valor vai ser true se não o valor vai ser false


    if (active){  //Se tiver esta classe active
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu') //no atual evento mude o atributo 'aria-label' para 'Fechar Menu' 
    }else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu') //Senão. No atual evento mude o atributo 'aria-label' para 'Abrir Menu' 
    }
}
//Este foi o primeiro comando que eu dei, que serve para eu mandar o JS observar o meu botão, que criei na const lá em cima. E neste caso ele está observando assim, se clicarem neste botão ative a sequência de comandos da função toggleMenu. Depois de dar este comando eu vou precisar criar a função para que determinados comandos aconteçam e foi o que foi feito ↑↑☻
btnMobile.addEventListener('click', toggleMenu); /*lê-se quando eu clicar no id btn-mobile salvo na const btnMobile execute uma função chamada toggleMenu*/

btnMobile.addEventListener('touchstart', toggleMenu);/*Este evento foi adicionado na constante btnMobile por causa que se eu deixasse somente o evnto de click iria gerar um atraso na responsividade do menu, fazendo ele ficar mais lento, então adicionei um evento de touchstart para que quando o usuário tocasse no botão ele fosse mais rápido no celular, mas só que fazendo somente isso ele me geraria como se fosse 2 clicks um para abrir o menu e outro ao mesmo tempo fechando este menu e como corrigir isto é só através da função toggleMenu que eu criei*/ 