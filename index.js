var elems = document.getElementsByClassName("icon-desc");

var el = document.getElementById('navigation');

el.addEventListener('mouseover', function handleMouseOverEvent() {
    for (var i=0;i<elems.length;i+=1){

      }
    });
  

el.addEventListener('mouseout', function handleMouseOutEvent() {
    for (var i=0;i<elems.length;i+=1){
       
      }
    });

var icon = document.getElementById('nav-icon');

// $(document).ready(function(){
//   $('#nav-icon').click(function(){
//     $('#nav-icon').toggleClass('open');
//     if ($("#nav-icon").hasClass("open")) {
//       el.style.width="200px";
//       el.style.opacity="1";
//       // el.style.display="flex";
//     }else{
//       // el.style.display="none";
//       el.style.width="0";
//       el.style.opacity="0";
//     }
//   });
// });

$(document).ready(function(){
  $('#nav-icon').click(function(){
    $('#nav-icon').toggleClass('open');
    el.classList.toggle('open');
  });
});




  // Where el is the DOM element you'd like to test for visibility
function isHidden(el) {
  var style = window.getComputedStyle(el);
  return (style.display === 'flex')
}