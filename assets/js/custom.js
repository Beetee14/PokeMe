$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $('#myModal').on('show.bs.modal', function (event) {
      var element = $(event.relatedTarget);
      var recipient = element.data('whatever');
      var modal = $(this);
      modal.find('.modal-title').text('New message to ' + recipient);
      modal.find('.modal-body input').val(recipient);
  });
});

function clicked(){
    alert("thing");
}
