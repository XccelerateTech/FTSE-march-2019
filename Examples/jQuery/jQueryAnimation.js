// $('#toggle-div').toggle();
// // #toggle-div hides
// $('#toggle-div').toggle();
// // #toggle-div shows
// $('#fade-div').fadeOut();
// // #fade-div fadeOut
// $('#fade-div').fadeIn();
// // #fade-div fadeIn
// $('#fade-div').fadeTo('slow',0,5);
// // #fade-div fadeTo opacity 0.5
// $('#fade-div').fadeToggle();
// // #fade-div fades to disappear.s
// $('#slide-div').slideUp();
// // #slide-div hides
// $('#slide-div').slideDown();
// // #slide-div shows
// $('#slide-div').slideToggle();
// // #slide-div hides
// $('#slide-div').slideToggle();
// // #slide-div shows

// $('#animate-div').animate({
//     width:"60%",
//     marginRight: "5px",
//     opacity: 0.7,
//     fontSize: "20px"
// },5000,'swing',function(){
//     console.log("Animation completed!");
// });



// //delay

// $('#slide-div').slideUp(1000).delay(1000).slideDown(2000);
// // SlideUp and delay and SlideDown
// $('#slide-div').hide().delay(1000).show();

// // more custom animation

$( "p" ).animate({
    height: 200,
    width: 400,
    opacity: 0.5
  }, 1000, "linear", function() {
    console.log( "all done" );
  });   

//   $('#patrick').toggle().delay(10000).toggle();

//   $('#stack').fadeOut().delay(8000).fadeIn();



  $("#princess").animate({
      opacity: 1,
      height: 1600,
      width: 457
  },9000, "swing", function (){
      console.log('princess picture')
  })


/*  .animate( properties [, duration ] [, easing ] [, complete ] )
properties
Type: PlainObject
An object of CSS properties and values that the animation will move toward.
duration (default: 400)
Type: Number or String
A string or number determining how long the animation will run.
easing (default: swing)
Type: String
A string indicating which easing function to use for the transition.
complete
Type: Function()
A function to call once the animation is complete, called once per matched element */