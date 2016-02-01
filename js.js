$(document).ready(function() {
	var empArray = [];
	var monthlyCosts = 0;
	var totalSalaries = 0;

	$('#employeeForm').on('submit', function(event) {
		event.preventDefault();
		var values = {};
		$.each($('#employeeForm').serializeArray(), function(i, field) {
		values[field.name] = field.value;
		
	});
	
	$('#employeeForm').find('input[type=text]').val('');
	appendDom(values);
	$('.empRvBtn').data('salary', values.empSalary);
	calcMonthly(values);
	console.log(monthlyCosts); 
	$('#empFirstName').focus();
	});

	$('#container').on('click', '.empRvBtn', function(){
		var $salaryTBR = $(this).data('salary'); 
		totalSalaries -= $salaryTBR;
		monthlyCosts = Math.round(totalSalaries / 12);
		$(this).parent().remove();
		console.log(monthlyCosts);
	});

	function appendDom(empInfo) {
		$('#container').append('<div></div>');
		var $el = $('#container').children().last();
		$el.append('<p>' + empInfo.empFirstName + ' ' + empInfo.empLastName + '</p>');
		$el.append('<button type="button" class="empRvBtn">Remove Employee<button/>');
		$el.append('<p>' + 'ID Number: ' + empInfo.idNumber + '</p>');
		$el.append('<p>' + 'Job Title: ' + empInfo.jobTitle + '</p>');
		$el.append('<p>' + 'Yearly Salary: ' + empInfo.empSalary + '</p>');
	}

	function calcMonthly(empInfo) {
		totalSalaries += parseFloat(empInfo.empSalary)
		monthlyCosts =  Math.round(totalSalaries / 12);
	}



});