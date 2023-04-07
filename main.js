const mainMenuItems = document.querySelectorAll('.main_menu > li');
  mainMenuItems.forEach(item => {
    if (item.querySelector('#sub_menu')) {
      item.addEventListener('mouseover', () => {
        item.querySelector('#sub_menu').style.display = 'block';
      });
      item.addEventListener('mouseout', () => {
        item.querySelector('#sub_menu').style.display = 'none';
      });
    }
  });