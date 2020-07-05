

var btn=document.querySelector('#child');
btn.addEventListener("click",function(event){
console.log(event);

event.stopPropagation()
parent.cl

    console.log('child');
})


var parent=document.querySelector('#parent');
parent.addEventListener("click",function(){
    console.log('parent');
})


var midParent=document.querySelector('#midParent');
midParent.addEventListener("click",function(){
    console.log('midParent');
})



