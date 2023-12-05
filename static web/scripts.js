document.addEventListener('DOMContentLoaded', function () {
  const showSidebarBtn = document.getElementById('showSidebarBtn');
  const hideSidebarBtn = document.getElementById('hideSidebarBtn');

  showSidebarBtn.addEventListener('click', showSidebar);
  hideSidebarBtn.addEventListener('click', hideSidebar);
});

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}
