//Enviando Donacion   
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
                    $('#respuesta').text('Registro Cargado');
                }else{
                    $('#respuesta').text('Error en la Donación');
                  }
                $("#formDonation")[0].reset();
                $("#respuesta").html(data);
                 setTimeout(
                    ()=>{
                        cargarPaypal();
                     } , 1000
                 );

                }  
        });
        return false;
    });
});


cargarPaypal =()=>{
    document.forms["myForm"].submit();
}