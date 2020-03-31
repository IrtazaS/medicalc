$(function () {
  $(document).ready(function () { $('body').bootstrapMaterialDesign(); });
  var dateInit;
  var dateCurrent;
  new Rolldate({
    el: '#dateInit',
    lang: {
      title: 'Select A Date',
      cancel: 'Cancel',
      confirm: 'Confirm',
      year: '',
      month: '',
      day: '',
      hour: '',
      min: '',
      sec: ''
    },
    confirm: function (date) {
      dateInit = date;
      console.log(date);
    },
  });

  new Rolldate({
    el: '#dateCurrent',
    lang: {
      title: 'Select A Date',
      cancel: 'Cancel',
      confirm: 'Confirm',
      year: '',
      month: '',
      day: '',
      hour: '',
      min: '',
      sec: ''
    },
    confirm: function (date) {
      dateCurrent = date;
      console.log(date);
    },
  });


  $('#buttoncalc').on('click', function (event) {
    const dateInitFinal = new Date(dateInit);
    const dateCurrentFinal = new Date(dateCurrent);
    const diffTime = Math.abs(dateCurrentFinal - dateInitFinal);
    console.log(diffTime);
    if( !$('#volumeInit').val() || !$('#volumeCurrent').val() || !$('#dateInit').val() || !$('#dateCurrent').val() ) {
      Swal.fire({
        icon: 'error',
        text: 'Please fill all fields!',
      })
    }
      else if(diffTime == 0){
        Swal.fire({
          icon: 'error',
          text: 'Please choose different dates!',
        })
      }

else{

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const input1 = $("#volumeInit").val()
    const input2 = $("#volumeCurrent").val()
    const volume = input2 - input1;
    const result = volume / diffDays;

    const result1 = (volume / input1) / diffDays;
    Swal.fire({
      html:
        '<b>Absolute growth: </b> ' + result + 'ml' + '<br>' +
        '<b>Relative growth: </b> ' + result1 + '%' + '<br>',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonText: 'Reset'
    }).then((result) => {
      if (!result.value) {
resetInput();
      }
    })
  }
  });

  $('#buttonreset').on('click', function (event) {
resetInput();
  });
  function resetInput(){
    $('#dateInit').val('');
    $('#dateCurrent').val('');
    $('#volumeInit').val('');
    $('#volumeCurrent').val('');
  }


})



