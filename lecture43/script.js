let a=document.getElementsByTagName('div')[0]
// a.innerHTML=a.innerHTML+'<h1>Hello World!</h1>'
//we can do this work by creating an element also
let b=document.createAttribute('div')
b.innerHTML='<h1>Hello World!</h1>'
a.appendChild(b)
// a.append(div);
// a.prepend(div);
// a.before(div);
// a.after(div);
// a.replaceWith(div);
