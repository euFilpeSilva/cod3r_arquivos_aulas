 {
     {
         {
             {
                 var qualquer = "qualquer!!!!!";
                }
            }
        }
    }

    console.log(qualquer);

    // o escopo de uma variavel do tipo var  é global exeto se a variavel for declarada dentro de uma função
    // var ou é global ou tem escopo debloco

function teste(){
    var local = "local";
    console.log(local);
}

teste()