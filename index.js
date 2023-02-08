var elems = document.getElementsByClassName("icon-desc");

var el = document.getElementById('navigation');

el.addEventListener('mouseover', function handleMouseOverEvent() {
    for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'block';
      }
    });
  

el.addEventListener('mouseout', function handleMouseOutEvent() {
    for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'none';
      }
    });

var icon = document.getElementById('nav-icon');

$(document).ready(function(){
  $('#nav-icon').click(function(){
    $('#nav-icon').toggleClass('open');
    if ($("#nav-icon").hasClass("open")) {
      el.style.width="100px";
      el.style.opacity="10";
      // el.style.display="flex";
    }else{
      // el.style.display="none";
      el.style.width="0";
      el.style.opacity="0";
    }
  });
});

el.onmouseover = function(){
  el.style.width="200px!important";
  };
