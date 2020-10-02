window.addEventListener('scroll', function() {
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 300)
})

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    document.getElementById("myNav").style.width = "0%";
}

function scrollToBot() {
    document.getElementById('blur_edu').scrollIntoView({behavior: 'smooth'});
}

function scrollToEdu() {
    document.getElementById('blur_edu').scrollIntoView({behavior: 'smooth'});
    document.getElementById("myNav").style.width = "0%";
}

function scrollToExp() {
    document.getElementById('blur_exp').scrollIntoView({behavior: 'smooth'});
    document.getElementById("myNav").style.width = "0%";
}

function scrollToSkl() {
    document.getElementById('blur_skl').scrollIntoView({behavior: 'smooth'});
    document.getElementById("myNav").style.width = "0%";
}

function scrollToProyek() {
    document.getElementById('blur_proyek').scrollIntoView({behavior: 'smooth'});
    document.getElementById("myNav").style.width = "0%";
}

function scrollToKontak() {
    document.getElementById('blur_msg').scrollIntoView({behavior: 'smooth'});
    document.getElementById("myNav").style.width = "0%";
}