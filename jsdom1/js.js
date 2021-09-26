// //catch
// let ul = document.querySelector('ul');
// let li3rd = document.getElementsByTagName('li')[2];

// //create
// let li4th = document.createElement('li');
// let li4thNode = document.createTextNode('Waifuable : YES');

// //append element
// li4th.append(li4thNode);

// //add to html
// ul.append(li4th);
//#f7eeea

let changebg = document.getElementById('changebg');
let bodybg = document.getElementsByTagName('body')[0];
let togglepic = document.getElementById('togglepic');
let meiimg = document.querySelector('article img');

let bodybgarr = ['#f7eeea','#f7f7ea','#edf7ea','#eaf7f7','#f7eaeb','#eceaf7','#f7eaf4'];
let bodybgindex = 1;


// EVENT LISTENER   

changebg.addEventListener('click',function(){
    if (bodybgindex == bodybgarr.length){
        bodybgindex = 0;
    }
    bodybg.style.backgroundColor = bodybgarr[bodybgindex];
    bodybgindex++;
});

togglepic.addEventListener('click',function(){
    meiimg.remove();
})