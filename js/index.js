//index.js

// control typed.js in title
// big thank you and credit to Matt Boldt for Typed.JS
// check it out here: https://github.com/mattboldt/typed.js/
$(function(){
	$(".typed").typed({
		strings: ["I enjoy baked goods.", "I like to solve problems.", "I play professional basketball.", 
		"I have a passion for coding.", "I am a shoe enthusiast."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 25,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 800,
		// loop
		loop: true,
		// shuffle the strings
		shuffle: true,
		//only backspace unused words
  		smartBackspace: true,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});


// open and close modals
$(function(){
	var modal = "";

	// chrome extension modal
	$( "#extension-btn" ).click(function () {
	  $("#extension-modal").css( 'display', 'block' );
	  modal = $("#extension-modal");
	});

	// mini hoop basketball modal
	$( "#mini-hoop-btn" ).click(function () {
	  $("#mini-hoop-modal").css( 'display', 'block' );
	  modal = $("#mini-hoop-modal");
	});

	// sse database reader modal
	$( "#database-btn" ).click(function () {
	  $("#database-modal").css( 'display', 'block' );
	  modal = $("#database-modal");
	});

	// dabari the monkey modal
	$( "#dabari-btn" ).click(function () {
	  $("#dabari-modal").css( 'display', 'block' );
	  modal = $("#dabari-modal");
	});

	// craigslist modal
	$( "#craigslist-btn" ).click(function () {
	  $("#craigslist-modal").css( 'display', 'block' );
	  modal = $("#craigslist-modal");
	});

	// basketball highlights modal
	$( "#highlights-btn" ).click(function () {
	  $("#highlights-modal").css( 'display', 'block' );
	  modal = $("#highlights-modal");
	});

	// basketball news modal
	$( "#bball-news-btn" ).click(function () {
	  $("#bball-news-modal").css( 'display', 'block' );
	  modal = $("#bball-news-modal");
	});

	// close the modal on clicks to the 'X'
	$ ( ".close" ).click( function () {
	  $( modal ).css( 'display', 'none' );
	});

	// close the modal on clicks outside the modal
	$('body').click(function (event) {
	  if ($(event.target).is( modal )) {
	    $( modal ).css( 'display', 'none');
	  }
	});
});


// Scroll page to sections
$(function(){
	$("#about-btn").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#about").offset().top
    	}, 2000);
	});

	$("#proj-btn").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#projects").offset().top 
        }, 2000);
	});

	$("#bask-btn").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#basketball").offset().top 
        }, 2000);
	});
});





