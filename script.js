const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.work a').forEach(link=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        lightboxImg.src = link.href;
        lightbox.showModal();
    })
});

lightbox.addEventListener('click',(e)=>{
    if(e.target === lightbox){
        lightbox.close();
    }   
});