$(document).ready(function(){
    $('#btnEnviar').click(function(event){
        event.preventDefault(); // Evita o envio padrão do formulário

        // Captura os valores dos selects e do campo de texto
        var nome = $('#nome').val();
        var conteudo1 = $('#conteudo1').val();
        var conteudo2 = $('#conteudo2').val();
        var conteudo3 = $('#conteudo3').val();
        var conteudo4 = $('#conteudo4').val();
        var conteudo5 = $('#conteudo5').val();
        var comentario = $('#comentario').val();
        
        
        console.log(nome);
        console.log(conteudo1);
        console.log(conteudo2);
        console.log(conteudo3);
        console.log(conteudo4);
        console.log(conteudo5);
        console.log(comentario);

        // Envia os dados via AJAX para o PHP
        $.ajax({
            url: '/projetoGL/bancoDados.php',
            type: 'POST',
            data: {
                nome: nome, 
                conteudo1: conteudo1,
                conteudo2: conteudo2,
                conteudo3: conteudo3,
                conteudo4: conteudo4,
                conteudo5: conteudo5,
                comentario: comentario
            },
            success: function(data){
                alert('Dados cadastrados com sucesso:');
            },
            error: function(error){
                alert('Erro ao cadastrar: ' + error);
            }
        });
    });
});