document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menuitem');

  menuItems.forEach(item => {
      item.addEventListener('click', function() {
          // Remove the 'active' class from all menu items
          menuItems.forEach(menuItem => menuItem.classList.remove('active'));

          // Add the 'active' class to the clicked menu item
          this.classList.add('active');
      });
  });
});


