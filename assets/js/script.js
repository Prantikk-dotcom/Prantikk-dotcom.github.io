//ARTICLES
document.addEventListener('DOMContentLoaded', function() {
    const posts = [
        {
            title: "This is a <strong>Featured Articles</strong> Or it's new.",
            imgSrc: "images/pic04.jpg",
            subtitle: "Something that would be updated everyday",
            content: "Phasellus laoreet massa id justo mattis pharetra. Fusce suscipit ligula vel quam viverra sit amet mollis tortor congue. Sed quis mauris sit amet magna accumsan tristique. Curabitur leo nibh, rutrum eu malesuada in, tristique at erat lorem ipsum dolor sit amet lorem ipsum sed consequat magna tempus veroeros lorem sed tempus aliquam lorem ipsum veroeros consequat magna tempus lorem ipsum consequat Phasellus laoreet massa id justo mattis pharetra. Fusce suscipit ligula vel quam viverra sit amet mollis tortor congue. Sed quis mauris sit amet magna accumsan tristique. Curabitur leo nibh, rutrum eu malesuada in tristique."
        },
        {
            title: "This is space for another Featured Article, or Research.",
            imgSrc: "images/pic05.jpg",
            subtitle: "Doesn't have to be new, but Something that says <strong> Important </strong>",
            content: "Phasellus laoreet massa id justo mattis pharetra. Fusce suscipit Curabitur leo nibh, rutrum malesuada."
        }
    ];

    const postContainer = document.getElementById('post-container');

    posts.forEach(post => {
        const article = document.createElement('article');
        article.classList.add('box', 'post');
        
        article.innerHTML = `
            <header>
                <h2><a href="#">${post.title}</a></h2>
            </header>
            <a href="#" class="image featured"><img src="${post.imgSrc}" alt="" /></a>
            <h3>${post.subtitle}</h3>
            <p>${post.content}</p>
            <ul class="actions">
                <li><a href="#" class="button icon solid fa-file">Continue Reading</a></li>
            </ul>
        `;
        
        postContainer.appendChild(article);
    });
});






//SUGGESTED ARTCILES
document.addEventListener('DOMContentLoaded', function() {
    const posts = [
        {
            date: "July 30",
            title: "Old Article that was previously featured",
            content: "Lorem ipsum dolor odio facilisis convallis. Etiam non nunc vel est suscipit convallis non id orci lorem ipsum sed magna consequat feugiat lorem dolore."
        },
        {
            date: "July 28",
            title: "Another similar article",
            content: "Lorem ipsum dolor odio facilisis convallis. Etiam non nunc vel est"
        },
        {
            date: "July 24",
            title: "You get the point, right?",
            content: "Lorem ipsum dolor odio facilisis convallis. Etiam non nunc vel est"
        }
    ];

    const postContainer = document.getElementById('sidebar-section');
    const ulElement = document.createElement('ul');
    ulElement.className = 'divided';
    posts.forEach(post => {
        const liElement = document.createElement('li');
        const article = document.createElement('article');
        article.classList.add('box', 'excerpt');
        
        article.innerHTML = `
            <header>
                <span class="date">${post.date}</span>
                <h3><a href="#">${post.title}</a></h3>
            </header>
            <p>${post.content}</p>
        `;
        liElement.appendChild(article);
        ulElement.appendChild(liElement);
    });
    postContainer.appendChild(ulElement);
});





//RESEARCH
document.addEventListener('DOMContentLoaded', function() {
    const researchList = [
        {
            title: "Some Research of note, Picture included to draw attention.",
            image: "images/pic06.jpg",
            text: "Phasellus sed laoreet massa id justo mattis pharetra. Fusce suscipit ligula vel quam viverra sit amet mollis tortor congue magna"
        },
        {
            title: "Like a chart with an interesting title",
            image: "images/pic07.jpg",
            text: "Phasellus sed laoreet massa id justo mattis pharetra. Fusce suscipit ligula vel quam"
        }
    ];

    const researchContainer = document.getElementById('highlight-section');
    const ulElement = document.createElement('ul');
    ulElement.className = 'divided';
    researchList.forEach(research => {
        const liElement = document.createElement('li');
        const article = document.createElement('article');
        article.classList.add('box', 'highlight');
        
        article.innerHTML = `
            <header>
                <h3><a href="#">${research.title}</a></h3>
            </header>
            <a href="#" class="image left"><img src="${research.image}" alt="" /></a>
            <p>${research.text}</p>
            <ul class="actions">
                <li><a href="#" class="button icon solid fa-file">Learn More</a></li>
            </ul>
        `;

        liElement.appendChild(article);
        ulElement.appendChild(liElement);
    });
    researchContainer.appendChild(ulElement);
});
