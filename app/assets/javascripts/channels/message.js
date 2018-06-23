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
                      ${message.user_name}
                    </div>
                    <div class="upper-message__date">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class="lower-meesage">
                    <p class="lower-message__content">
                    ${message}
                    ${img}
                    </p>
                  </div>`
    return html;
  }

  $(".new_message").on("submit",function(){
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
      console.log(data)
      var html = buildHTML(data);
      $('.upper-massage').append(html)
    })
    .fail(function(){
      alert('error');
    })
  })
})
