const crazyButtons = document.querySelectorAll('.btn-crazy');

function goCrazy() {
    //random number left
    const offsetLeft = Math.random() * (window.innerWidth - this.clientWidth);
    //random number top
    const offsetTop = Math.random() * (window.innerHeight - this.clientHeight);


    this.style.top = offsetTop + 'px';
    this.style.left = offsetLeft + 'px';
}


crazyButtons.forEach(button => button.addEventListener('mouseenter', goCrazy));