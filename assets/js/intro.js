//EMAILJS for prantikkbd@gmail.com
const public_key = "vycxPh5aGiV0rjFN8";
const service_id = "service_n6nrwgm";
const template_id = "template_rcnf0wm";


emailjs.init(public_key); 
document.querySelector("form").addEventListener("submit", sendEmail);

//INTRODOCUMENTS
document.addEventListener('DOMContentLoaded', function() {
    const posts = [
        {
            title: "What is Prantikk?",
            imgSrc: "images/prantikk.jpg",
            content: "Prantikk is an independent grassroots media organization dedicated to professional, research-driven, and credible journalism. Rooted in the voice of the people, we strive to inform, inspire, and empower communities through stories that matter."
        },
        {
            title: "What is our Platform?",
            imgSrc: "images/logo.jpg",
            content: "We are embarking on a journey to bring you stories that matter—stories that inspire, inform, and ignite change. Prantikk is more than just a media organization; it's a platform rooted in the heart of Bangladesh, dedicated to professional, research-driven, and credible journalism. We are here to amplify the voices of the unheard, shed light on the untold, and spark conversations that lead to progress. Join us as we build a media platform by the people, for the people, and of the people. Together, let’s shape a better future through stories that truly matter."
        },
        {
            title: "What are our Goals?",
            imgSrc: "images/prantikkNews.jpg",
            content: "Our primary goal is to create a platform that prioritizes credible, research-driven journalism to address the pressing issues of our time. We aim to inspire meaningful conversations, amplify marginalized voices, and provide nuanced perspectives that contribute to progress. By upholding professional standards and fostering community engagement, we strive to empower our audience with stories that drive understanding and change."
        }
    ];

    const postContainer = document.getElementById('introduction');

    posts.forEach(post => {

        const box = document.createElement('section');
        box.classList.add('col-4', 'col-6-medium', 'col-12-small');
        
        box.innerHTML = `
            <a href="#" class="image featured"><img src="${post.imgSrc}" alt="" /></a>
            <header>
                <h2><a href="#">${post.title}</a></h2>
            </header>
            <p>${post.content}</p>
        `;
        
        postContainer.appendChild(box);
    });
});



//BANNER
document.addEventListener('DOMContentLoaded', function() {
    const banner = {
                        motto: "Propaganda is to a democracy what the bludgeon is to a totalitarian state.<i> [Noam Chomsky]</i>"
                   };

    const postContainer = document.getElementById('banner');
    const box = document.createElement('div');
    box.classList.add('container');
    box.innerHTML = `
        <p><strong>${banner.motto}</strong></p>
    `;        
    postContainer.appendChild(box);
});



//DOCUMENTARY
document.addEventListener('DOMContentLoaded', function() {
    const info = {
                        title: "Coming soon. Stay tuned with <strong>Prantikk</strong>.",
                        videoSrc: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fprantikk.news%2Fvideos%2F1289601985491312%2F&show_text=false&width=560&t=0"
                };

    const videoContainer = document.getElementById('video-section');
    const box = document.createElement('div');
    box.classList.add('container');
    box.innerHTML = `
        <header>
        <h2>${info.title}</h2>
        </header>
        <iframe width="560" height="315" 
        src="${info.videoSrc}"
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
        </iframe>
    `;        
    videoContainer.appendChild(box);
});



//EMAIL
function sendEmail(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
        name: String(formData.get("name")), 
        email: String(formData.get("email")),
        message: String(formData.get("message"))
    };

    //console.log(data);
    emailjs.send(service_id, template_id, data)
        .then(function(response) {
            alert("Message sent successfully!");
            console.log('Success:', response);
        }, function(error) {
            alert("Failed to send message. Please try again.");
            console.log('Error:', error);
        });
}

