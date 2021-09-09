$(function () {
    $('.acTitle').on('click', function () {
    $(this).next().slideToggle();
  });
});
$("#scrollTop").on("click",()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
