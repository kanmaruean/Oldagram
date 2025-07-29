let contentsEl = document.querySelector("#contents")

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function render(object) {
    // convert object into arrays and store into the variable
    let keys = Object.keys(object)
    // then use .length to get the length of the arrays
    for (let i = 0; i < keys.length; i++) {
        contentsEl.innerHTML += `
        <div class="flex flex-row items-center md:py-6 md:pl-6 lg:py-3 lg:pl-3 xl:py-2 xl:pl-2">
            <a href="#"><img class="size-9 rounded-full md:size-25 lg:size-12 xl:size-9 hover:cursor-pointer" src="${object[i].avatar}"></a>
            <a href="#"><p class="md:text-3xl lg:text-sm xl:text-xs font-bold md:pl-6 lg:pl-2 xl:pl-2">${object[i].name}</a><br><span class="font-normal">${object[i].location}</span></p>
        </div>
        <img class="w-full" src="${object[i].post}">
        <div class="flex flex-row md:py-4 md:pl-6 lg:py-3 lg:pl-2.5 xl:py-2 xl:pl-2">
            <img class="md:size-17 lg:size-7.5 xl:size-6 hover:cursor-pointer" src="images/icon-heart.png">
            <img class="md:size-17 md:ml-6 lg:size-7.5 lg:ml-4 xl:size-6 xl:ml-4 hover:cursor-pointer" src="images/icon-comment.png">
            <img class="md:size-17 md:ml-6 lg:size-7.5 lg:ml-4 xl:size-6 xl:ml-4 hover:cursor-pointer" src="images/icon-dm.png">
        </div>
        <div>
            <a href="#"><p class="md:text-4xl lg:text-base xl:text-sm font-bold md:ml-6.5 md:pb-6 lg:ml-2.5 lg:pb-2 xl:ml-2.5 xl:pb-2 hover:cursor-pointer">${object[i].likes} likes</p></a>
            <div class="flex flex-row">
                <a href="#"><p class="md:text-4xl lg:text-base xl:text-sm font-bold md:ml-6.5 md:pb-8 lg:ml-2.5 lg:pb-4 xl:ml-2.5 xl:pb-4 hover:cursor-pointer">${object[i].username}</p></a>
                <p class="md:text-4xl md:ml-4 lg:text-base lg:ml-2 xl:text-sm xl:ml-1.5">${object[i].comment}</p>
            </div>
        </div>
        `
    }
}

render(posts)