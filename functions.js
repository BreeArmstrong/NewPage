// These Functions create a new webpage and then the slug for the new webpage

function getLink (pageName)
{
  //Uses chibibree.com as base
  website = "https://chibibree.com/";
  
  //changes the entered info to lower case then replaces spaces with - to create the slug
  url = pageName.toLowerCase().replace(" ", "-");
  
  // concatonates the website and slug to make the new url.
  newUrl = website + url
  
  return newUrl
}

//Gets the slug from the getLink function and returns it.

function getSlug ()
{
  var link = getLink(url);
  
  var urlSlug = link.split("/");
  
  //This code is to check to see which part of the split is the slug
  //console.log(urlSlug);
  //now call just the slug part

  
  slug = urlSlug[3]
  
  return slug;
}


//Prompts the user to add in desired page name. 

newPage = prompt("What is the name of your new page?")

console.log("The new page name is: " + newPage)

getLink(newPage);
console.log("New page link: " + newUrl);

getSlug(newPage);
console.log("New Page Slug is: " + slug)

newPage2 = prompt("What is the name of your new page?")

console.log("The new page name is: " + newPage2)

getLink(newPage2);
console.log("New page link: " + newUrl);

getSlug(getLink);
console.log("New Page Slug is: " + slug)

// newLink("About Me");
// newLink("Cosplay Goals");
// newLink("Cosplay Portfolio");
// newLink("Fashion Portfolio");
