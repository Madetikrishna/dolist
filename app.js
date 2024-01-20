const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const ejs=require("ejs");
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

const homecontent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const aboutcontent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const contactcontent="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."


app.get("/home", function(req,res){
     res.render("home",{startingcontent:homecontent,
    posts:posts});
});

app.get("/about",function(req,res){
    res.render("about",{about:aboutcontent})
})

app.get("/contact",function(req,res){
    res.render("contact",{contact:contactcontent})
})

app.get("/compose", function(req,res){
    res.render("compose");
});
app.post("/compose",function(req, res){
    const post ={
        title:req.body.posttitle,
        content: req.body.postbody
    };
    posts.push(post);
    res.redirect("/")
});

app.get("/posts/:postname", function(req,res){
    const requestedtitle= _.lowerCase(req.params.postname);

    if (storedtitle === requestedtitle) {
        res.render("post", {
            title:post.title,
            content:post.content
        })
    }

})








app.listen(3000,function(){
    console.log("The server is up and running succssfully")
})