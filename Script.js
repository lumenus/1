   $( document ).ready(function() {
   var linkMass = { 
'RF-0001':'http://base.parsing-cloud.ru/RF/RF-0001-База_автомагазинов-7218756008.xlsx'
   };
                  
var oldLink = '';
   function findProduct(){
     var  cProduct = $('.t706__product').length;oldLink='';
     $('input[name="product-link"]').val('');
     for (let i = 0; i < cProduct; i++) { 
        var artPrd = $('.t706__product-title:eq('+i+') div:last').html();
        oldLink = oldLink+'\n'+(i+1)+') '+linkMass[artPrd];
     };
     $('input[name="product-link"]').val(oldLink);
   };   
   //При клике на модель
    $('.t706 .t-submit').click(function(e) {e.preventDefault();findProduct();
      setTimeout(function(){$('input[name="product-link"]').val('');}, 10000);  });
   $(document).on("keydown", ".t706 form", function(event) {return event.key != "Enter";});
});


