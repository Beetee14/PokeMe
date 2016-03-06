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

function addTriangleTo(target) {
    var dimensions = target.getClientRects()[0];
    var pattern = Trianglify({
        width: dimensions.width, 
        height: dimensions.height,
        x_colors: "Oranges"
    });
    target.style['background-image'] = 'url(' + pattern.png() + ')';
}

addTriangleTo(document.getElementById('bckrnd'));