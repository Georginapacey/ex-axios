const blogApi = new BlogApi();

$(document).ready(() => {
  loadUsers();
})

function loadUsers() {
  blogApi.getUsers()
    .then(users => {
      const $usersContainer = $('#users-container');
      $usersContainer.empty();
      let $userTemplate;
      for (let user of users) {
        $userTemplate = $('#templates > .user-card').clone();
        
        $userTemplate.find('.user-name').text(user.name);
        $userTemplate.find('.user-email').text(user.email);
        $userTemplate.find('.user-company').text(`${user.company.name}. ${user.company.catchPhrase}.`);
        $userTemplate.attr('data-id', user.id)
        $userTemplate.click(onClickUserCard)
        
        $usersContainer.append($userTemplate);
      }
    });
}

function onClickUserCard() {
  $('.user-card').removeClass('active');
  
  const $userCard = $(this);
  $userCard.addClass('active');
  const userId = $userCard.data('id');
  
  blogApi.getUserPosts(userId)
    .then(posts => {
      const $postsContainer = $('#posts-container');
      $postsContainer.empty();
      let $postTemplate;
      for (let post of posts) {
        $postTemplate = $('#templates > .post-card').clone();

        $postTemplate.find('.post-title').text(post.title);
        $postTemplate.find('.post-body').text(post.body);
        $postTemplate.find('.btn-danger').attr('data-id', post.id).click(onClickDeletePost);

        $postsContainer.append($postTemplate);
      }
    })
}

function onClickDeletePost() {
  const postId = $(this).data('id');
  const $postCard = $(this).parents('.post-card');

  blogApi.deletePost(postId)
    .then(post => {
      $postCard.remove();
    });
}