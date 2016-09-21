//This is the title for your window tab, and your Radar
document.title = "Codingkapoor's Technology Radar as of September 2016";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// "pc": polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [   
            { "name": "OOPs", "pc": {"r":80, "t":100}, "movement": "c" },
            { "name": "Restful Web Services", "pc": {"r":30, "t":150}, "movement": "c" },
            { "name": "Design Patterns", "pc": {"r":50, "t":130}, "movement": "c" },
            { "name": "SOLID principles", "pc": {"r":60, "t":110}, "movement": "c" },
            { "name": "Dependency Injection", "pc": {"r":80, "t":120}, "movement": "c" },
            { "name": "Clean Code", "pc": {"r":60, "t":160}, "movement": "c" },
           
            { "name": "Reactive Architectures", "pc": {"r":130, "t":170}, "movement": "c" }, 
            { "name": "Functional Programming", "pc": {"r":170, "t":110}, "movement": "c" },  
            { "name": "Single Page App", "pc": {"r":180, "t":130}, "movement": "c" },            
         
            { "name": "Polygot Programming", "pc": {"r":280, "t":110}, "movement": "c" }, 
            { "name": "Reactive Design Patterns", "pc": {"r":230, "t":130}, "movement": "c" },
         
            { "name":"Microservices", "pc": {"r":320, "t":150}, "movement": "c" }
        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
            { "name": "Git", "pc": {"r":80, "t":56}, "movement": "c" },
            { "name": "SVN", "pc": {"r":20, "t":25}, "movement": "c" },
            { "name": "Maven", "pc": {"r":30, "t":72}, "movement": "c" },
            { "name": "Github", "pc": {"r":80, "t":76}, "movement": "c" },
            
            { "name": "NoSQL", "pc": {"r":170, "t":19}, "movement": "c" },
            { "name": "SBT", "pc": {"r":150, "t":69}, "movement": "c" },

            { "name": "Flyway", "pc": {"r":280, "t":74}, "movement": "c" },  
            { "name": "Json Web Tokens (JWT)", "pc": {"r":280, "t":78}, "movement": "c" },

            { "name": "Swagger", "pc": {"r":330, "t":18}, "movement": "c" }
        ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            { "name": "JVM", "pc": {"r":30, "t":225}, "movement":"c" },
            { "name": "MongoDB", "pc": {"r":90, "t":220}, "movement":"c" },   
            { "name": "AWS ECS", "pc": {"r":90, "t":250}, "movement":"c" }, 
        
            { "name": "Docker", "pc": {"r":130, "t":260}, "movement":"c" },   
         
            { "name": "OAuth", "pc": {"r":250, "t":220}, "movement":"c" },  
         
            { "name": "Apache Spark", "pc": {"r":370, "t":215}, "movement":"c" },
            { "name": "OSGI", "pc": {"r":380, "t":185}, "movement":"c" }
        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            { "name": "Java7", "pc": {"r":30, "t":290}, "movement": "c" },
            { "name": "Scala", "pc": {"r":30, "t":330}, "movement": "c" },            
            { "name": "Jersey", "pc": {"r":50, "t":310}, "movement": "c" },
            { "name": "Hibernate", "pc": {"r":60, "t":340}, "movement": "c" },
            { "name": "Spring IoC", "pc": {"r":70, "t":280}, "movement": "c" },
            { "name": "HTML5", "pc": {"r":80, "t":340}, "movement": "c" },
            { "name": "CSS3", "pc": {"r":90, "t":310}, "movement": "c" },
            { "name": "Twitter Bootsrap", "pc": {"r":50, "t":290}, "movement": "c" },
            
            { "name": "Akka", "pc": {"r":150, "t":298}, "movement": "c" },          
            { "name": "Play", "pc": {"r":130, "t":355}, "movement":"c" },   
            { "name": "JavaScript", "pc": {"r":190, "t":280}, "movement":"c" },
            { "name": "JQuery", "pc": {"r":190, "t":280}, "movement":"c" },
            { "name": "Angularjs", "pc": {"r":190, "t":280}, "movement":"c" },
              
            { "name": "Java8", "pc": {"r":280, "t":300}, "movement":"c" },
            { "name": "Spring Boot", "pc": {"r":285, "t":320}, "movement":"c" },   
            { "name": "Spring MVC", "pc": {"r":220, "t":275}, "movement":"c" },   
            { "name": "Spring AOP", "pc": {"r":270, "t":282}, "movement":"c" },

            { "name": "Spray/akka-http", "pc": {"r":360, "t":330}, "movement": "c" },
            { "name": "Dagger", "pc": {"r":385, "t":290}, "movement":"c" },
            { "name": "Scala.js", "pc": {"r":375, "t":280}, "movement":"c" },
            { "name": "React.js", "pc": {"r":390, "t":350}, "movement":"c" },
            { "name": "Guice", "pc": {"r":390, "t":350}, "movement":"c" },
            { "name": "Go", "pc": {"r":390, "t":350}, "movement":"c" }
        ]
    }
];
