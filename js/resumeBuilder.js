var bio = {
	"name": "Sandra Asoro",
	"role": "Network Design Enginner & Entry- Level Front-End Developer",
	"contacts": {
    "mobile": "678-488-5903",
    "email": "sandraasoro@gmail.com",
		"github": "sandraasoro",
		"location": "Atlanta, GA, USA"
	},
	"biopic": "images/profile.png",
	"welcomeMessage": "Hello! Thanks for viewing my page! I am a network design engineer and an entry level front-end developer.",
	"skills": ["Project Management", "RAN Engineering", "Process Development", "Java", "Python", "Software Development"],
  "display" : function(){
  }
};
var work = {
	"jobs": [{
		"employer": "AT&T",
		"title": "Sr. Specialist- Network Design Engineer",
		"location": "Atlanta, GA, USA",
		"dates": "July 2013-March 2015",
		"description": "Engaged a variety of key stakeholder organizations and work cross-functionally to define and" + "develop process flows to identify workflow for major Network Technology Development (NTD) or manual projects" + "such as: LTE Broadcast, IP Interoperability and Wireless to Wireless Digital Signal 3 (DS3) Connectivity. Deliver" + "end to end process flows to VP organizations which as a result reduces cycle times, reduces cost and increases efficiency"
	}, {
		"employer": "AT&T",
		"title": "Specialist- RAN Engineer",
		"location": "Atlanta, GA, USA",
		"dates": "March 2015-December 2016",
		"description": "Championed data quality across a variety of source databases (CSSng, ATOLL, OPTIMA, NDR, etc.)" + "by engaging market RAN and ensuring optimal performance. Developed automated soft tools in-house" + "to aid Radio Access Network (RAN) group in keeping up with new 4G network, reduce the existing 2G" + "Network and measure compliance."
	}, {
		"employer": "InComm",
		"title": "System Analyst- Intern",

		"location": "Atlanta, GA, USA",
		"dates": "May 2011-August 2011",
		"description": "Led intern group to work directly with merchants to understand the various" + "InComm products by engaging them in training sessions and developing job aid documents." + "Worked on technical document for B2B OpenLoop Project which explained to customers the" + "main advantage of investing in open loop gift cards such as Visa.",
    "display" : function(){
    }
	}]
};
var education = {
	"schools": [{
		"name": "Southern Polytechnic State University",
		"dates": "2008-2013",
		"location": "Marietta, GA, USA",
		"degree": "B.S. Electrical Engineering",
		"majors": "Electrical Engineering",
		"url": "https://www.kennesaw.edu"
	}],
	"onlineCourses": [{
		"school": "Udacity",
		"title": "Introduction to Programming",
		"dates": "December 2016",
		"url": "https://www.udacity.com"
	}]
};
var projects = {
	"projects": [{
		"title": "Make a Webpage",
		"dates": "August 2015",
		"description": "Created a web page using HTML and CSS and applied it to skills learned" + "Nanodegree.",
		"images": ["images/webpage.jpg"],
		"url": "https://github.com/sandraasoro/Web-Page-Dev"
	}, {
		"title": "Code Your Own Quiz",
		"dates": "November 2016",
		"description": "Created a fill in the blank style quiz using the Python programming language" + "Nanodegree.",
		"images": ["images/quizgame.jpg"],
		"url": "https://github.com/sandraasoro/code_your_own_quiz"
	}, {
		"title": "Create a Movie Website",
		"dates": "December 2016",
		"description": "Wrote code to store list of favorite movies and used code to generate a static web page allowing visitors to browse and watch trailers.",
		"images": ["images/moviesite.jpg"],
		"url": "https://github.com/sandraasoro/create_a_movie_website"
	}]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedContactInfo = [];
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}
for (var i = 0; i < formattedContactInfo.length; i++) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}

function displayWork() {
	if (work.jobs.length > 0 || work.jobs.length > 0) {
		$("#workExperience").append(HTMLworkStart);
		for (var i = 0; i < work.jobs.length; i++) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;
			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
}
displayWork();
projects.display = function() {
	if (projects.projects.length > 0 || projects.projects.length > 0) {
		for (var i = 0; i < projects.projects.length; i++) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
			if (projects.projects[i].images.length) {
				for (var img = 0; img < projects.projects[i].images.length; img++) {
					var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
					$(".project-entry:last").append(formattedProjectImage);
				}
			}
		}
	}
};
projects.display();
education.display = function() {
	if (education.schools.length > 0 || education.onlineCourses.length > 0) {
		for (var i = 0; i < education.schools.length; i++) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajors = HTMLschoolMajors.replace("%data%", education.schools[i].majors);
			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajors);
		}
		if (education.onlineCourses.length > 0) {
			for (i = 0; i < education.onlineCourses.length; i++) {
				$("#education").append(HTMLonlineClasses);
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);
				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
	}
};
education.display();

$("#mapDiv").append(googleMap);
