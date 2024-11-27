$(document).ready(function ()
		{
    $('#genderDropdown').on('change', function () 
    		{
        const selectedGender = $(this).val();
        
        $('#textInput').val(selectedGender);
    });
});
