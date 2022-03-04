$(() => {
  $('nav.mobile').click(() => {
    var menuList = $('nav.mobile > ul')

    let icon = $('.menu-button-mobile').find('i');
    if (menuList.is(':hidden') == true) {
      icon.removeClass('fa-bars'); // REMOVING CLASS
      icon.addClass('fa-xmark'); // ADDING CLASS
      menuList.slideToggle();
    } else {
      icon.removeClass('fa-xmark'); // REMOVING CLASS
      icon.addClass('fa-bars'); // ADDING CLASS
      menuList.slideToggle();
    }
  })
})