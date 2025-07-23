// JavaScript source code
let check = document.getElementById("check");
check.innerHTML = "Hello DOM";
console.log(check.outerHTML);

let configuration = document.getElementById("configuration");
//configuration.append("Этот текст добавляется в конец элемента (перед закрывающем дескриптором)");
configuration.append("append();");
configuration.prepend("prepend();");
configuration.before("Добавление элементов к ноде");
configuratiom.after("Усе");