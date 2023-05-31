// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  $(function () {
    // call the save buttons
    var saveButtons = document.getElementsByClassName('saveBtn');
    // create a for loop regarding all the save buttons
    for (var i = 0; i < saveButtons.length; i++) {
      // upon clicking, run this function
      saveButtons[i].addEventListener('click', function () {
        var closestTimeBlock = this.parentNode;
        var timeBlockId = closestTimeBlock.id;
        var descriptionInput = closestTimeBlock.querySelector('textarea');
        var description = descriptionInput.value;
        localStorage.setItem(timeBlockId, description);
      });
  
      // Retrieve value from localStorage and display it in the child textbox
      var closestTimeBlock = saveButtons[i].parentNode;
      var timeBlockId = closestTimeBlock.id;
      var descriptionInput = closestTimeBlock.querySelector('textarea');
      var savedDescription = localStorage.getItem(timeBlockId);
      if (savedDescription) {
        descriptionInput.value = savedDescription;
      }
    }    
    // 
    var colorBox = document.querySelectorAll(".time-block");
    var currentTime = dayjs().format('HH');

    var currentTimeValue = "hour-" + currentTime

    console.log(currentTimeValue);

    for (var t = 0; t < colorBox.length; t++) {
      // track the local time
      console.log(currentTime);
      // pasre ID to just a number
      var boxID = colorBox[t].id;
      var boxIDparsed = parseInt(boxID.split('-')[1]);
      console.log(boxIDparsed);
      // if textarea has the same id as the hour, make the class green 
      if (boxIDparsed < currentTime) {
        console.log(colorBox[t], "past");
        colorBox[t].classList.add("past");
        colorBox[t].classList.remove("present");
        colorBox[t].classList.remove("future");
      } else if (boxIDparsed == currentTime) {
        console.log(colorBox[t], "present");
        colorBox[t].classList.add("present");
        colorBox[t].classList.remove("past");
        colorBox[t].classList.remove("future");
      } else if (boxIDparsed > currentTime) {
        console.log(colorBox[t], "future");
        colorBox[t].classList.add("future");
        colorBox[t].classList.remove("present");
        colorBox[t].classList.remove("past");
      };



    }


    

  });
  


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // make varibale for the button
  // var saveBtn = $('button');
  // // call the value in the text area
  // var textarea9 = $("#textarea-9");
  // var text9Value = textarea9.value;
  // // upon click, save to local storage
  // saveBtn.on("click", function() {

  //   console.log("clicked");
  //   localStorage.setItem('Hour', text9Value);
  // })

  


  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY HH:mma'));

;



