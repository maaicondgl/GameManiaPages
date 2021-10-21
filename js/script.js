$(document).ready(function(){
  $("#barra").click(function(){




    
    // $("#menu").addClass("menu-ativo")

    if($("#menu").hasClass("menu-ativo")){
        $("#menu").removeClass("menu-ativo")
    } else{
      $("#menu").addClass("menu-ativo")
    }
  })
})

$(document).ready(function(){
 $("#carrousel img:eq(0)").addClass("banner-ativo").show()
 setInterval(slide,1000)

  function slide(){
    if( $(".banner-ativo").next().length) {
        $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
    }else{
      $(".banner-ativo").removeClass().hide()
      $("#carrousel img:eq(0)").addClass("banner-ativo").show()
      
    }
  }
})
  

