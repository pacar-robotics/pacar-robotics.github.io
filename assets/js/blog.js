var resp;
var xmlHttp;

resp  = '';
xmlHttp = new XMLHttpRequest();

if(xmlHttp != null)
{
    xmlHttp.open( "GET", "/blog/blog.json", false );
    xmlHttp.send( null );
    resp = JSON.parse(xmlHttp.responseText);
}

for (var post of resp.blog){
    var postDiv = document.createElement("div");
    postDiv.className = "blog-post";
    postDiv.style = "width: 90%; height: 40%; background-color: #FFFFFF; overflow: auto; padding: 20px; margin: 1em; box-shadow: 0 0 0.5em 0.5em #EEEEEE inset; display: block;";
    var thumbnail = document.createElement("img");
    thumbnail.src = post.image;
    thumbnail.className = "blog-thumbnail";
    thumbnail.style = "width: 5em; height: 5em; float: left; border-radius: 0.25em; border: 0.02em solid #000000";
    postDiv.appendChild(thumbnail);
    var title = document.createElement("h3");
    title.innerHTML = "<a href=\"" + post.url + "\">" + post.title + "</a>";
    title.style = "margin-left: 4.5em; display: block; margin-bottom: 0; text-decoration:underline; text-decoration-style: dotted;"
    postDiv.appendChild(title);
    var description = document.createElement("p");
    description.innerHTML =  post.description;
    description.style = "margin-left: 6em; display: block;"
    postDiv.appendChild(description);
    document.getElementById("posts").appendChild(postDiv);
}