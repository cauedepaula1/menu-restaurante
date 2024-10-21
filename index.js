<<<<<<< HEAD
         var cards = window.document.querySelectorAll(".card"); 
=======
    var cards = window.document.querySelectorAll(".card"); 
>>>>>>> 4f32afc (commit)
        cards.forEach(function(card) {
            card.addEventListener("click", clicar);
            card.addEventListener("mouseenter", entrar);
            card.addEventListener("mouseout", sair);

            function clicar() {
                card.style.color = "#ecac1c"
                card.style.backgroundColor = "#812b10"; 
            }
            function entrar() {
                card.style.backgroundColor = "#ecac1c";
            }
            function sair() {
                card.style.color = "black";
                card.style.backgroundColor = "white";         }
        });    
        var pedidos = window.document.querySelectorAll(".pedido"); //peça já
        pedidos.forEach(function(pedido) {
            pedido.addEventListener("click", function() {
                pedido.style.backgroundColor = "#dcc7b9";     //corpo era  #812b10
                pedido.style.color = " #812b10";            // cor era  #ecac1c
                                                            //Lógica adicional pode ser adicionada aqui
             });
        /*pedido.addEventListener("mouseenter", function() {
            pedido.style.backgroundColor = "#ecac1c"; //entrada
               pedido.style.color = " #812b10 ";
             });*/
        pedido.addEventListener("mouseout", function() { //saida
            pedido.style.backgroundColor = " #812b10";
                pedido.style.color = "#ecac1c";
             });
        });
        var pedidodois = window.document.querySelectorAll(".pedido-dois"); //menu
        pedidodois.forEach(function(pedido) {
            pedido.addEventListener("click", function() {
                pedido.style.backgroundColor = "#dcc7b9"; //cor diferente
                pedido.style.color = "#812b10"; // Lógica adicional pode ser adicionada aqui
             });
      /*  pedido.addEventListener("mouseenter", function() {
            pedido.style.backgroundColor = "#812b10"; //qaundo entra
               pedido.style.color = "#ecac1c";
             });*/
        pedido.addEventListener("mouseout", function() {
            pedido.style.backgroundColor = "#ecac1c"; //quando sai
                pedido.style.color = "#812b10";
             });
        });
<<<<<<< HEAD
=======
        /*let index = 0; 
        const imagens = document.querySelectorAll(".imagens img");
        const totalImagens = imagens.length;

        function mostrarImagem(){
            index++;
            if(index >= totalImagens){
                index = 0;
            }
            const deslocamento = - index
            document.querySelector(".Imagens").style.transform 
        }*/
>>>>>>> 4f32afc (commit)
