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

document.getElementById('img-cream').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
/*document.getElementById('img-cream2').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[2]);
}*/

/*document.getElementById('active').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.Length - 1]);
}*/

