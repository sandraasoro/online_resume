var bio = {
    "name": "Sandra Asoro",
    "role": "Network Design Enginner & Entry- Level Front-End Developer",
    "contacts": {
      "email": "sandraasoro@gmail.com",
      "github": "sandraasoro",
      "location": "Atlanta, GA, USA"
    },
    "picture": "images/profile.png",
    "welcomeMessage": "Hello! Thanks for viewing my page! I am a network design enginner and an entry level front-end developer.",
    "skills": ["Project Management", "RAN Engineering", "Process Development" "Java", "Python", "Software Development"]
};

var work = {
  "jobs": [
    {
      "employer": "AT&T",
      "title": "Sr. Specialist- Network Design Engineer",
      "location": "Atlanta, GA, USA",
      "datesWorked": "July 2013-March 2015",
      "description": "Engaged a variety of key stakeholder organizations and work cross-functionally to define and"+
      "develop process flows to identify workflow for major Network Technology Development (NTD) or manual projects"+
      "such as: LTE Broadcast, IP Interoperability and Wireless to Wireless Digital Signal 3 (DS3) Connectivity. Deliver"+
      "end to end process flows to VP organizations which as a result reduces cycle times, reduces cost and increases efficiency"
    },
    {
      "employer": "AT&T",
      "title": "Specialist- RAN Engineer",
      "location": "Atlanta, GA, USA",
      "datesWorked": "March 2015-December 2016",
      "description": "Championed data quality across a variety of source databases (CSSng, ATOLL, OPTIMA, NDR, etc.)"+
      "by engaging market RAN and ensuring optimal performance. Developed automated soft tools in-house"+
      "to aid Radio Access Network (RAN) group in keeping up with new 4G network, reduce the existing 2G"+
      "Network and measure compliance."
    },
    {
      "employer": "InComm",
      "title": "System Analyst- Intern",
      "location": "Atlanta, GA, USA",
      "datesWorked": "May 2011-August 2011",
      "description": "Led intern group to work directly with merchants to understand the various"+
      "InComm products by engaging them in training sessions and developing job aid documents."+
      "Worked on technical document for B2B OpenLoop Project which explained to customers the"+
      "main advantage of investing in open loop gift cards such as Visa."
    }
  ]
};

var education = {
  "schools": [
    { "name": "Southern Polytechnic State University",
    "datesAttended": "2008-2013",
    "location": "Marietta, GA, USA",
    "degree": "B.S. Electrical Engineering",
    "major": "Electrical Engineering",
    "url": "www.kennesaw.edu"
  }
]
},
"onlineCourses": [
  { "school": "Udacity",
  "title": "Introduction to Programming",
  "completed": "December 2016",
  "url": "https://www.udacity.com"
}
]
};

var projects = {
  "projects": [
    {
      "title": "Make a Webpage",
      "datesWorked": "August 2015",
      "description": "Created a web page using HTML and CSS and applied it to skills learned" +
      "Nanodegree.",
      "images": ["images/webpage.jpg"],
      "url": "https://github.com/sandraasoro/Web-Page-Dev"
    },
    {
      "title": "Code Your Own Quiz",
      "datesWorked": "November 2016",
      "description": "Created a fill in the blank style quiz using the Python programming language" +
      "Nanodegree.",
      "images": ["images/quizgame.jpg"],
      "url": "https://github.com/sandraasoro/code_your_own_quiz"
    },
    {
      "title": "Create a Movie Website",
      "datesWorked": "December 2016",
      "description": "Wrote code to store list of favorite movies and used code to generate a static web page allowing visitors to browse and watch trailers.",
      "images": ["images/moviesite.jpg"],
      "url": "https://github.com/sandraasoro/create_a_movie_website"
    }
  ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  for(i in bio.skills) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
  }
}

for(i in formattedContactInfo) {
  $("#topContacts").append(formattedContactInfo[i]);
  $("#footerContacts").append(formattedContactInfo[i]);
}

function displayWork() {
  if(work.jobs.length > 0) {
    $("#workExperience").append(HTMLworkStart);

    for(i in work.jobs) {
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);]

      var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
    }
  }
}

displayWork();

projects.display = function() {
  if(projects.projects.length > 0) {
    for(i in projects.projects) {
      $("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
        $(".project-entry:last").append(formattedProjectImage);
      }
    }
  }
}

projects.display();

education.display = function() {
  if(education.schools.length > 0 || education.onlineCourses.length > 0) {
    for(i in education.schools) {
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolMinor);
    }

    if(education.onlineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
      for(i in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
      }
    }
  }
}

$("#mapDiv").append(googleMap);
