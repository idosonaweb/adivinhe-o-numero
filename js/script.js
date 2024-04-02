// ----------------- JOGO DA ADIVINHAÇÃO ----------------

window.onload = function () 
{
    var aleatorio = Math.floor(Math.random() * 101) ;

    var palpite = 0 ;

    var vidas_restantes = 6 ;

    var acertou = false ;

    var mensagem = document.querySelector("#mensagem") ;

    var num = document.querySelector("#num");

    var saida = document.querySelector("#saida");

    const form = document.querySelector("form");

    window.addEventListener("keydown", keydownFunction);

    function keydownFunction(event) {
        
        if (event.keyCode == 13) 
        {
            validarJogada();
        }

    }

    function validarJogada() {

        palpite = parseInt(num.value);
        
        num.value = "" ;

        num.focus();

        if (isNaN(palpite)) 
        {
            saida.innerHTML = "Por favor, digite apenas números."
        }
        else
        {
            if (palpite > 100 || palpite < 0) 
            {
                saida.innerHTML = "Por favor, digite apenas valores entre 0 e 100." ;
            }
            else
            {
                playGame();
            }
        }
    }

    function playGame() {
        
        vidas_restantes--;

        mensagem.innerHTML = "<br>" + vidas_restantes + " vidas restantes" ;

        if (palpite > aleatorio) 
        {
            saida.innerHTML = "Nããõoo, meu número é menor que " + palpite + ". " ;

            if (vidas_restantes < 1) 
            {
                fimDoJogo();
            }
        }
        else
        {
            if (palpite < aleatorio) 
            {
                saida.innerHTML = "Nããõoo, meu número é maior que " + palpite + ". " ;

                if (vidas_restantes < 1) 
                {
                    fimDoJogo();
                }
            }
            else
            {
                if (palpite === aleatorio) 
                {
                    acertou = true ;

                    fimDoJogo();
                }
            }
        }
    }

    function fimDoJogo() {
        
        if (acertou) 
        {
            saida.innerHTML = "PARABÉNS, VOCÊ ACERTOU!!!!!"  ;
            
            mensagem.innerHTML = "<br> O número era o " + aleatorio ;   
        }
        else
        {
            saida.innerHTML = "Que pena....acabaram suas vidas." ;

            mensagem.innerHTML = "<br> O número era o " + aleatorio ; 
        }

        window.removeEventListener("keydown", keydownFunction)
        
        num.disabled = true ;

    }
    
}

// -------------------- FIM DO JOGO ---------------------