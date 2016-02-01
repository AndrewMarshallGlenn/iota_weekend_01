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
	calcMonthly(values);
	console.log(monthlyCosts); 
	});

	$('#container').on('click', '.empRvBtn', function(){
		$(this).addClass('tbr');
		removeEmp();
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
		monthlyCosts =  totalSalaries / 12;
	}

	function removeEmp(){
		$('.tbr').parent().remove();
	}

});