$(function() {
	$("#tabs").tabs();

	/*Explanation of Selectors
Every td that is used to input data, and every td that is used to receive this data, has been given a class that is used in the code as the selector. The class names use the following abbreviations:
r = round
p = player (or partnership)
ss = scoresheet
c = court

For example, r1 means Round 1, p1 means player or partnership #1, c1 means court #1.
The class .r1p1 refers to the td in Round 1 where the score for player or partnership #1 is entered by the user.
The class .r1p1_ss refers to the td on the Score Sheet that receives the score from .r1p1.
The class .c1 refers to court #1 and the class .c1r1 refers to the td for Round 1 Court #1. 

The td's that enter player names and receive player names use the classes of .p1NameEnter and .p1NameCopy.
Similarly, the td's that enter team names and receive team names use the classes of .homeEnter and .homeCopy, or .awayEnter and .awayCopy.*/


	//Round 1: Transfer scores from Round 1 to Score Sheet Tab
	//Round 1 Player 1
	$('.r1p1').on('keyup', function() {
		$('.r1p1_ss').text($(this).val());
		$('.p1total').text(Number($('.r1p1_ss').text()) + Number($('.r2p1_ss').text()) + Number($('.r3p1_ss').text()));
		displayHomeTotal();
	});

	//Round 1 Player 2
	$('.r1p2').on('keyup', function() {
		$('.r1p2_ss').text($(this).val());
		$('.p2total').text(Number($('.r1p2_ss').text()) + Number($('.r2p2_ss').text()) + Number($('.r3p2_ss').text()));
		displayHomeTotal();
	});

	//Round 1 Player 3
	$('.r1p3').on('keyup', function() {
		$('.r1p3_ss').text($(this).val());
		$('.p3total').text(Number($('.r1p3_ss').text()) + Number($('.r2p3_ss').text()) + Number($('.r3p3_ss').text()));
		displayHomeTotal();
	});

	//Round 1 Player 4
	$('.r1p4').on('keyup', function() {
		$('.r1p4_ss').text($(this).val());
		$('.p4total').text(Number($('.r1p4_ss').text()) + Number($('.r2p4_ss').text()) + Number($('.r3p4_ss').text()));
		displayAwayTotal();
	});

	//Round 1 Player 5
	$('.r1p5').on('keyup', function() {
		$('.r1p5_ss').text($(this).val());
		$('.p5total').text(Number($('.r1p5_ss').text()) + Number($('.r2p5_ss').text()) + Number($('.r3p5_ss').text()));
		displayAwayTotal();
	});

	//Round 1 Player 6
	$('.r1p6').on('keyup', function() {
		$('.r1p6_ss').text($(this).val());
		$('.p6total').text(Number($('.r1p6_ss').text()) + Number($('.r2p6_ss').text()) + Number($('.r3p6_ss').text()));
		displayAwayTotal();
	});

	//Round 2: Transfer scores from Round 2 to Score Sheet Tab
	//Round 2 Player 1
	$('.r2p1').on('keyup', function() {
		$('.r2p1_ss').text($(this).val());
		$('.p1total').text(Number($('.r1p1_ss').text()) + Number($('.r2p1_ss').text()) + Number($('.r3p1_ss').text()));
		displayHomeTotal();
	});

	//Round 2 Player 2
	$('.r2p2').on('keyup', function() {
		$('.r2p2_ss').text($(this).val());
		$('.p2total').text(Number($('.r1p2_ss').text()) + Number($('.r2p2_ss').text()) + Number($('.r3p2_ss').text()));
		displayHomeTotal();
	});

	//Round 2 Player 3
	$('.r2p3').on('keyup', function() {
		$('.r2p3_ss').text($(this).val());
		$('.p3total').text(Number($('.r1p3_ss').text()) + Number($('.r2p3_ss').text()) + Number($('.r3p3_ss').text()));
		displayHomeTotal();
	});

	//Round 2 Player 4
	$('.r2p4').on('keyup', function() {
		$('.r2p4_ss').text($(this).val());
		$('.p4total').text(Number($('.r1p4_ss').text()) + Number($('.r2p4_ss').text()) + Number($('.r3p4_ss').text()));
		displayAwayTotal();
	});

	//Round 2 Player 5
	$('.r2p5').on('keyup', function() {
		$('.r2p5_ss').text($(this).val());
		$('.p5total').text(Number($('.r1p5_ss').text()) + Number($('.r2p5_ss').text()) + Number($('.r3p5_ss').text()));
		displayAwayTotal();
	});

	//Round 2 Player 6
	$('.r2p6').on('keyup', function() {
		$('.r2p6_ss').text($(this).val());
		$('.p6total').text(Number($('.r1p6_ss').text()) + Number($('.r2p6_ss').text()) + Number($('.r3p6_ss').text()));
		displayAwayTotal();
	});

	//Round 3:Transfer scores from Round 3 to Score Sheet Tab
	//Round 3 Player 1 
	$('.r3p1').on('keyup', function() {
		$('.r3p1_ss').text($(this).val());
		$('.p1total').text(Number($('.r1p1_ss').text()) + Number($('.r2p1_ss').text()) + Number($('.r3p1_ss').text()));
		displayHomeTotal();
	});

	//Round 3 Player 2
	$('.r3p2').on('keyup', function() {
		$('.r3p2_ss').text($(this).val());
		$('.p2total').text(Number($('.r1p2_ss').text()) + Number($('.r2p2_ss').text()) + Number($('.r3p2_ss').text()));
		displayHomeTotal();
	});

	//Round 3 Player 3
	$('.r3p3').on('keyup', function() {
		$('.r3p3_ss').text($(this).val());
		$('.p3total').text(Number($('.r1p3_ss').text()) + Number($('.r2p3_ss').text()) + Number($('.r3p3_ss').text()));
		displayHomeTotal();
	});

	//Round 3 Player 4
	$('.r3p4').on('keyup', function() {
		$('.r3p4_ss').text($(this).val());
		$('.p4total').text(Number($('.r1p4_ss').text()) + Number($('.r2p4_ss').text()) + Number($('.r3p4_ss').text()));
		displayAwayTotal();
	});

	//Round 3 Player 5

	$('.r3p5').on('keyup', function() {
		$('.r3p5_ss').text($(this).val());
		$('.p5total').text(Number($('.r1p5_ss').text()) + Number($('.r2p5_ss').text()) + Number($('.r3p5_ss').text()));
		displayAwayTotal();
	});

	//Round 3 Player 6
	$('.r3p6').on('keyup', function() {
		$('.r3p6_ss').text($(this).val());
		$('.p6total').text(Number($('.r1p6_ss').text()) + Number($('.r2p6_ss').text()) + Number($('.r3p6_ss').text()));
		displayAwayTotal();
	});

	function displayAwayTotal() {
		$('.awayTotal').text(Number($('.p4total').text()) + Number($('.p5total').text()) + Number($('.p6total').text()));
	}

	function displayHomeTotal() {
		$('.homeTotal').text(Number($('.p1total').text()) + Number($('.p2total').text()) + Number($('.p3total').text()));
	}

	//Add Team Names
	//Home Team

	// Any classes containing NameEnter
	$('[class*=NameEnter]').on('keyup', function() {
		var classes = $(this).attr('class').split(' '),
			i = 0,
			thisClass,
			copyClass;

		// Find the class
		for (i = 0; i < classes.length; i += 1) {
			if (classes[i].indexOf('NameEnter') !== -1) {
				thisClass = classes[i];
				break;
			}
		}

		copyClass = thisClass.replace('NameEnter', 'NameCopy');
		$('.' + copyClass).text($(this).val());
	});

	//Change Court Numbers
	$('.c1').on('keyup', function() {
		$('.c1r1, .c1r2, .c1r3').text($(this).val());
	});

	$('.c2').on('keyup', function() {
		$('.c2r1, .c2r2, .c2r3').text($(this).val());
	});

	$('.c3').on('keyup', function() {
		$('.c3r1, .c3r2, .c3r3').text($(this).val());
	});

});