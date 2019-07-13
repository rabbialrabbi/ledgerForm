
var i = 0;

$(document).ready(function(){

    // add additional work and job field

    $("#work").click(function () {
        i++
        $("#workField").append('<div id="workInlineField'+i+'" class="row ledger_row-3"><div class="col-2"><label for="ledgerName"></label></div><div class="col-10"><span class="colon">:</span><input type="text" name="companyName'+i+'" placeholder="Company Name"><input type="text" name="jobTitle'+i+'" placeholder="Job Title"><i id="minus'+i+'" class="fas fa-minus work-remove"></i></div></div>');

        $("#workField").on('click','.work-remove',function () {
            $(this).parents().eq(1).remove()
        });
    });


    // add additional phone number

    $("#phone").click(function(){
        i++
        $("#phoneField").append(' <div class="row ledger_row-5"><div class="col-2"><label for="phoneNo"></label></div><div class="col-10"><span class="colon">:</span><input id="phoneNo'+i+'" type="text" name="phoneNo'+i+'" value="+880"><i id="minus'+i+'" class="fas fa-minus work-remove"></i></div></div>');

        $("#phoneField").on('click','.work-remove', function () {
            $(this).parents().eq(1).remove()
        });

    });
    

});

