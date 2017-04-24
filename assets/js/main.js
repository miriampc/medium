window.addEventListener('load',function(){
    var docFragment=document.createDocumentFragment();

    htmlElements.forEach(function(e){
        if(e.parentId!=''){
            return;
        }
        var padre =  htmlElements.filter(function(pe){return pe.id==e.id});
        var elemento = document.createElement(padre[0].element);

        elemento.setAttribute("class",e.classElem);
        document.body.prepend(elemento);
        searchTagHtml(e.id, elemento);
    });

    function searchTagHtml(idTag, elementParent){
      var list=  htmlElements.filter(function(e){return e.parentId==idTag});

        if(list.length == 0)
            return;

        for(var a in list){
            var elementChild=document.createElement(list[a].element);
            elementChild.setAttribute("class",list[a].classElem);
            elementParent.appendChild(elementChild);
            searchTagHtml(list[a].id, elementChild);
        }
    }
    //añadiendo textos a elementos
    document.getElementsByClassName('edit')[0].appendChild(document.createTextNode('Edit'));
    document.getElementsByClassName('verde')[0].appendChild(document.createTextNode('5'));
    document.getElementsByClassName('h4')[0].appendChild(document.createTextNode('Brendan Eich'));
    document.getElementsByClassName('blogger-text')[0].appendChild(document.createTextNode('Programador conocido por inventar el lenguaje de programación JavaScript.'));
    document.getElementsByClassName('blog-date')[0].appendChild(document.createTextNode('Mar 21 . 6 min read'));
    document.getElementsByTagName('h1')[0].appendChild(document.createTextNode('¿Qué es Javascript?'));
    document.getElementsByClassName('blog')[0].appendChild(document.createTextNode('JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico. Se utiliza principalmente en su forma del lado del cliente (client-side), implementado como parte de un navegador web permitiendo mejoras en la interfaz de usuario y páginas web dinámicas aunque existe una forma de JavaScript del lado del servidor(Server-side JavaScript o SSJS).'));
    document.getElementsByClassName('text-green')[0].appendChild(document.createTextNode('Next Story'));
    document.getElementsByClassName('text-in-footer')[0].appendChild(document.createTextNode('Describiendo el flujo de trabajo en...'));

});
