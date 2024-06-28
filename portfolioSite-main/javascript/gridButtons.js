//queryselectorAll queries document for all attributes w/ passed selector (class gridButton)
    var buttons = document.querySelectorAll(".gridButton");
  //javascript is weakly typed so our var is actually containing a list of all buttons...
  //we loop thu each button in buttons and for each button in buttons we call a function which we pass that button
   buttons.forEach(function(button) {
        //when that button is clicked we call this JS function...
       button.onclick = function() {
          //check against filename so that we cant just spam load the same page.
           var fileName = location.href.split("/").slice(-1)[0];
           //branches for loading each page.
           if (button.classList.contains("experienceButton") && fileName != "ExperiencePage.html") {
               location.href = "ExperiencePage.html";
           } else if (button.classList.contains("educationButton")&& fileName != "EducationPage.html") {
               location.href = "EducationPage.html";
           } else if (button.classList.contains("projectsButton")&& fileName != "ProjectsPage.html") {
               location.href = "ProjectsPage.html";
           } else if (button.classList.contains("resumeButton")&& fileName != "ResumePage.html") {
               location.href = "ResumePage.html";
           } else if (button.classList.contains("nameButton")&& fileName != "index.html") {
               location.href = "mePage.html";
           }
       };
   });