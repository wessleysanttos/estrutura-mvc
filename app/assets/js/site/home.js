$("#btn-ver-mais").on("click", async function(){
    try {
        const resultado = await $.ajax({
            url: '/mvc/api/getProdutos',
            dataType: 'json',
        });

        $("#resultado").html(JSON.stringify(resultado));
    } catch (e){
        console.log('Error: ', e);
    }
})
// -------------------------------------------