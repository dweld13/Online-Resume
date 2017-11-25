//bio object
var bio = {
    "name" : "David Weld",
    "role": "Web Developer",
    "contacts": {
        "mobile": "720-427-7333",
        "email": "dweld13@gmail.com",
        "github": "dweld13",
        "twitter": "@daveweld13",
        "location": "Austin, TX"
    },
    "welcomeMessage": "Welcome to David Weld's resume. Built as a project in Udacity's Front-End Web Development course.",
    "skills": [
        "Geographic Information Systems (GIS)", "Web Development", "JavaScript", "HTML5"
    ],
    "biopic": "images/DW.jpg",
};


//displays skills array as function
bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedNameRole = formattedName + formattedRole;
    $("#header").prepend(formattedNameRole);
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });

    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
};


//work object
var work = {
    "jobs": [
    {
        "employer": "Apple via Apex",
        "title": "GIS Technician",
        "location": "Austin, TX",
        "dates": "August 2016 - November 2017",
        "description": "Contributions to Editor, Approver, QA and Verifier teams. Daily use of proprietary GIS platform."
    },
    {
        "employer": "Intermap Technologies",
        "title": "Remote Sensing Analyst",
        "location": "Englewood, CO",
        "dates": "July 2013 - August 2016",
        "description": "GIS Data Production team and Software Development team member. QA/QC of remotely sensed aerial imagery, research of ecological species for oil and gas pipeline reference, QA/QC of proprietary software user interfaces, manual testing."
    },
    {
        "employer": "Broken Tee Golf Course",
        "title": "Proshop Cashier/Starter",
        "location": "Englewood, CO",
        "dates": "August 2012 - August 2016",
        "description": "Frontine representative of the golf course, operate cash register, book tee times over the phone, oversee pace of play."
    },
    {
        "employer": "Iowa Geological and Water Survey",
        "title": "GIS Technician Assistant",
        "location": "Iowa City, IA",
        "dates": "August 2010 - July 2012",
        "description": "Historical aerial imagery analysis, orthorectify and geocode aerial imagery, analyze aerial imagery for transmission line coverage using LiDAR data."
    }]
};


//project object
var projects = {
    "projects": [{
        "title": "Iowa City Interactive Map",
        "dates": "2017",
        "description": "Project as part of Udacity Front-End Web Development course. Interactive map using Google Maps API.",
        "images": ["images/image2.jpg"]
    }, {
        "title": "NBA Team Trends",
        "dates": "2016",
        "description": "Personal side project creating graphical representations of NBA team wins by season.",
        "images": ["images/image1.jpg"]
    }]
};


//education object
var education = {
    "schools": [
    {
        "name": "University of Iowa",
        "location": "Iowa City, IA",
        "degree": "BS",
        "majors": ["Geography"],
        "dates": "2008 - 2012",
        "url": "http://uiowa.edu"
    }],
    "onlineCourses": [
    {
        "title": "Front End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "http://udacity.com"
    }]
};


//display work section
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};


//display projects section
projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);

        project.images.forEach(function(image) {
            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedImage);
        });
    });
};


//display education section
education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedName + formattedDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedMajor);
        var formattedURL = HTMLschoolURL.replace("%data%", school.url);
        $(".education-entry:last").append(formattedURL);
    });
        $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(onlineCourse) {
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        $(".education-entry:last").append(formattedTitle + formattedSchool);
        var formattedDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedURL = HTMLonlineURL.replace("%data%",onlineCourse.url);
        $(".education-entry:last").append(formattedURL);
    });
};


//function calls for each section
bio.display();
work.display();
projects.display();
education.display();


//log clicks
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});


//lived and worked map
$("#mapDiv").append(googleMap);
