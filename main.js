$(function(){ 
    $(document).ready(function() { $('body').bootstrapMaterialDesign(); });
    var date1;
    var date2;
    var rolldate1 = new Rolldate({
        el: '#example',
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
        confirm: function(date) {
            date1=date;
            console.log(date);
          },
    });

    var rolldate2 = new Rolldate({
        el: '#example1',
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
        confirm: function(date) {
            date2=date;
            console.log(date);
          },
    });

    $("#basicDate").flatpickr({
        enableTime: false,
        
        dateFormat: "F, d Y"
    });
    $("#basicDate2").flatpickr({
        enableTime: false,
        
        dateFormat: "F, d Y"
    });
    $('.collapse').collapse()
    var calendar = flatpickr("#mycalendar");
    // ...        
    var fp = flatpickr("#basicDate", {}); // flatpickr
        var fp1 = flatpickr("#basicDate2", {}); // flatpickr


    $('#buttoncalc').on('click', function(event) {

    const date12 = new Date(date1);
    const date23 = new Date(date2);
    const diffTime = Math.abs(date23 - date12);
    console.log(diffTime);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    const input1 = $("#input1").val()
    const input2 = $("#input2").val()
    const volume = input2 - input1;
    const result = volume/diffDays;

    const result1 = (volume/input1)/diffDays;
    $("#abs_result").html("Absolute Growth: "+result+"ml")
    $("#rel_result").html("Relative Growth: "+result1+"%")
        
      });

})



