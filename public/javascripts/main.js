const holidayApiInstance = new holidayApi();

$(document).ready(() => {
  loadUsers();
})

function loadUsers() {
  holidayApiInstance.getUsers()
    .then(users => {
      console.log(users)
      const $usersContainer = $('#users-container');
      $usersContainer.empty();
      let $userTemplate;
      for(var key in users) {
        $userTemplate = $('#templates > .user-card').clone();
        let user = users[key];
        
        $userTemplate.find('.user-name').text(`${user.nombre} ${user.apellidos}`);
        /* $userTemplate.find('.user-email').text(user.email);
        $userTemplate.find('.user-team').text(user.idEquipo);
        $userTemplate.find('.user-days').text(user.diasAcumulados);
        $userTemplate.attr('data-id', user.idUsuario) */
        
        $usersContainer.append($userTemplate);
      }
      /* for (let user of users) {
        $userTemplate = $('#templates > .user-card').clone();
        
        $userTemplate.find('.user-name').text(`${user.nombre} ${user.apellidos}`);
        $userTemplate.find('.user-email').text(user.email);
        $userTemplate.find('.user-team').text(user.idEquipo);
        $userTemplate.find('.user-days').text(user.diasAcumulados);
        $userTemplate.attr('data-id', user.idUsuario)
        
        $usersContainer.append($userTemplate);
      } */
    });
}
