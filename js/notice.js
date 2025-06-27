$(document).ready(function () {
 
  $(".notice-list li p:nth-of-type(3)").hide();
  $(".notice-list li .notice-detail").hide();

  $(".notice-list li p:nth-of-type(2)").click(function () {
    const $li = $(this).closest("li");

    $li.find("p:nth-of-type(2)").hide();             
    $li.find("p:nth-of-type(3)").show();              
    $li.find(".notice-detail").slideDown(300);        
  });

  $(".notice-list li p:nth-of-type(3)").click(function () {
    const $li = $(this).closest("li");

    $li.find("p:nth-of-type(3)").hide();             
    $li.find("p:nth-of-type(2)").show();              
    $li.find(".notice-detail").slideUp(300);          
  });
});