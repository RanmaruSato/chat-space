$(function(){
  function buildHTML(message){
    var img = message.image.url ? `<img src=${message.image.url}>` : "";
    var html = `
      <div class="message">
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
            ${message.content || ""}
            ${img}
          </p>
        </div>
      </div>`;
    return html;
  }
  function scrollBottom(position){
    $(position).animate({ scrollTop: $(position)[0].scrollHeight}, 'fast');
    return false;
  }
  $(".new_message").on("submit",function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
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
      $('.content__main').append(html);
      $('.form__submit').prop("disabled", false);
      $('.form__message').val("");
    })
    .fail(function(){
      alert('error');
      $('.form__submit').prop("disabled", false);
    })
    scrollBottom('.content__main');
  })
})
