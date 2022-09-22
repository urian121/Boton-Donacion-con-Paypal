
$(function(){
    $('#formDonation').on('submit', function(e){
        e.preventDefault();

        $("#sendDonation").text("Cargando espere . .");
        $.ajax({
            url: 'recibeDonation.php',
            type: "POST",
            data: $('#formDonation').serialize(),
            success: function(data){
                if(data.message === 1){
                    setTimeout( ()=>{
                        cargarPaypal();
                     } , 500
                 );
                 $("#formDonation")[0].reset();
                }else{
                    $("#sendDonation").text("Enviar Donación");
                    $('#respuesta').text('Error en la Donación');
                  }
            }  
        });
        return false;
    });
});


cargarPaypal =()=>{
    document.forms["myForm"].submit();
}