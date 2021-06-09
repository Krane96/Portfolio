//API
const url = 'https://www.martinlk.no/wp-json/wp/v2/posts?per_page=3';
const posts = document.querySelector('.latest-blog-posts');

async function fetchPosts(){
    try{
        const waiting = await fetch(url);
        const result = await waiting.json();
        sendAPItoHTML(result);
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
};

fetchPosts();

//send api to html

function sendAPItoHTML(post){
    post.forEach(function(blog){
        posts.innerHTML += `
        <div class="latestPosts">
        <a href="#">${blog.title.rendered}</a>
        <img>${blog.content.rendered}</img>



        </div>
        `

    })

};