const lightbox = document.getElementById('lightbox');//document（htmlページ全体）.（の中にある）get(得る)Element(HTMLの要素。<img>とか<dialog>とか)ById(("lightbox")というidをたよりに)
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.work a')/*.workの中の<a>タグを全部かき集めて配列にしろ */.forEach(link=>{//集めた配列を先頭から1つずつ取り出し、仮にlinkという変数名をつけて{...}を繰り返す。また、=>はこれから{...}の関数を実行するという意味
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