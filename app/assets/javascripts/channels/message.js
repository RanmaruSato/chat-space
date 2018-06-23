$(function(){
  function buildHTML(message){
    if (message.content){
      var message = $(message.content);
    }else{
      var message =``
    }
    if (message.image){
      var img = `<img src=${message.image}>`;
    }else{
      var img = ``
    }
    var html = `
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.user.name}
                    </div>
                    <div class="upper-message__date">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class="lower-meesage">
                    ${message}
                    ${img}
                  </div>`
    return html;
  }

  $(".new_message").on("submit",function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.message').append(html)
    })
    .fail(function(){
      alert('error');
    })
  })
})


// <% if message.content.present? %>
//                       <p class="lower-message__content">
//                         <%= message.content %>
//                       </p>
//                     <% end %>
//                     <%= image_tag message.image.url, class: 'lower-message__image' if message.image.present? %>
