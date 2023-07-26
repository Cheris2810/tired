let items = document.querySelectorAll('li');
items.forEach(li => {
    li.addEventListener('click',function(e){
        console.log(e.target);
        document.getElementById('action').style.top = e.target.offsetTop + 'px';
        items.forEach(li_hide => {
            li_hide.classList.remove('active');
        })
        this.classList.add('active');
    })

})

