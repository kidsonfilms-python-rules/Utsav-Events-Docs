const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
        burger.classList.toggle('toggle')

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`
            }
        })
    })

    
}

const preload = () => {
    navSlide()

    // Loading md File into HTML
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var section = urlParams.get('section')
    if (!section) section = 'index'
    main = document.querySelector('.main')
    main.src = `./docsMd/${section}.md`

    //Loading Links
    $.getJSON('./docsMd', data => {
        console.log('Found Doc Files => ', data);
        data.forEach((file) => {
            console.log('Creating Link => ', file.split('.')[1])
            if (file.toLowerCase() == '0.index.md') {name = '.Start'} else name = file
            sidebar = document.querySelector('#sidebar')
            li = document.createElement('li')
            a = document.createElement('a')
            a.innerHTML = name.split('.')[1]
            a.href = `?section=${file.split('.')[0] + '.' + file.split('.')[1]}`
            li.appendChild(a)
            sidebar.appendChild(li)
        })
    });
}

const app = () => {
    preload()
}




app()