var htmlElements=[{id:'n1',parentId:'',element:'form', classElem:'form-container',type:'principal'},
                  {id:'n11',parentId:'n1',element:'header', classElem:'header',type:'parent'},
                  {id:'n111',parentId:'n11',element:'nav', classElem:'menu left',type:'parent-child'},
                  {id:'n1111',parentId:'n111',element:'div', classElem:'sprite sprite-medium-logo',type:'parent-child'},
                  {id:'n1112',parentId:'n111',element:'div', classElem:'sprite sprite-chicas-lab',type:'parent-child'},
                  {id:'n1113',parentId:'n111',element:'span', classElem:'icon-twitter',type:'parent-child'},
                  {id:'n1114',parentId:'n111',element:'span', classElem:'icon-facebook',type:'parent-child'},
                  {id:'n112',parentId:'n11',element:'nav', classElem:'menu right',type:'parent-child'},
                  {id:'n1121',parentId:'n112',element:'div', classElem:'edit',type:'parent-child'},
                  {id:'n1122',parentId:'n112',element:'span', classElem:'icon-search',type:'parent-child'},
                  {id:'n1123',parentId:'n112',element:'div', classElem:'verde',type:'parent-child'},
                  {id:'n1124',parentId:'n112',element:'div', classElem:'sprite sprite-brendan-eich',type:'parent-child'},
                  {id:'n1125',parentId:'n112',element:'div', classElem:'sprite sprite-laboratoria-logo',type:'parent-child'},
                  {id:'n12',parentId:'n1',element:'section', classElem:'contenedor',type:'parent'},
                  {id:'n121',parentId:'n12',element:'aside', classElem:'blogger',type:'parent-child'},
                  {id:'n1211',parentId:'n121',element:'div', classElem:'sprite sprite-brendan',type:'parent-child'},
                  {id:'n1212',parentId:'n121',element:'div', classElem:'blogger-dates inline-block',type:'parent-child'},
                  {id:'n12121',parentId:'n1212',element:'h4', classElem:'h4',type:'parent-child'},
                  {id:'n12122',parentId:'n1212',element:'p', classElem:'blogger-text',type:'parent-child'},
                  {id:'n12123',parentId:'n1212',element:'p', classElem:'blog-date',type:'parent-child'},
                  {id:'n122',parentId:'n12',element:'aside', classElem:'blog',type:'parent-child'},
                  {id:'n1221',parentId:'n122',element:'h1', classElem:'h1',type:'parent-child'},
                  {id:'n1222',parentId:'n122',element:'p', classElem:'blog',type:'parent-child'},
                  {id:'n13',parentId:'n1',element:'footer', classElem:'footer',type:'parent'},
                  {id:'n131',parentId:'n13',element:'div', classElem:'left',type:'parent'},
                  {id:'n1311',parentId:'n131',element:'span', classElem:'icon-heart',type:'parent'},
                  {id:'n1312',parentId:'n131',element:'span', classElem:'icon-bubble',type:'parent'},
                  {id:'n132',parentId:'n13',element:'div', classElem:'icons right',type:'parent'},
                  {id:'n1321',parentId:'n132',element:'span', classElem:'icon-twitter2',type:'parent'},
                  {id:'n1322',parentId:'n132',element:'span', classElem:'icon-facebook2',type:'parent'},
                  {id:'n1323',parentId:'n132',element:'span', classElem:'icon-googleplus',type:'parent'},
                  {id:'n1324',parentId:'n132',element:'span', classElem:'icon-bookmark',type:'parent'},
                  {id:'n1325',parentId:'n132',element:'div', classElem:'foot-text inline-block',type:'parent'},
                  {id:'n13251',parentId:'n1325',element:'p', classElem:'text-green',type:'parent'},
                  {id:'n13252',parentId:'n1325',element:'p', classElem:'text-in-footer',type:'parent'}];

window.addEventListener('load',function(){
    var docFragment=document.createDocumentFragment();

    htmlElements.forEach(function(e){
        if(e.parentId!=''){
            return;
        }
        var padre =  htmlElements.filter(function(pe){return pe.id==e.id});
        var elemento=document.createElement(padre[0].element);

        //elemento.classList.add(e.classElem.toString());
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
            //elementChild.classList.add(list[a].classElem);
            elementChild.setAttribute("class",list[a].classElem);
            elementParent.appendChild(elementChild);
            searchTagHtml(list[a].id, elementChild);
        }
    }
    //añadiendo texto
    document.getElementsByClassName('edit')[0].appendChild(document.createTextNode('Edit'));
    document.getElementsByClassName('verde')[0].appendChild(document.createTextNode('5'));
    document.getElementsByClassName('h4')[0].appendChild(document.createTextNode('Brendan Eich'));
    document.getElementsByClassName('blogger-text')[0].appendChild(document.createTextNode('Programador conocido por inventar el lenguaje de programación JavaScript.'));
    document.getElementsByClassName('blog-date')[0].appendChild(document.createTextNode('Mar 21 . 6 min read'));
    document.getElementsByTagName('h1')[0].appendChild(document.createTextNode('¿Qué es Javascript?'));
    document.getElementsByClassName('blog')[0].appendChild(document.createTextNode('JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,3 basado en prototipos, imperativo, débilmente tipado y dinámico.Se utiliza principalmente en su forma del lado del cliente (client-side), implementado como parte de un navegador web permitiendo mejoras en la interfaz de usuario y páginas web dinámicas4 aunque existe una forma de JavaScript del lado del servidor(Server-side JavaScript o SSJS). Su uso en aplicaciones externas a la web, por ejemplo en documentos PDF, aplicaciones de escritorio (mayoritariamente widgets) es también significativo.'));
    document.getElementsByClassName('text-green')[0].appendChild(document.createTextNode('Next Story'));
    document.getElementsByClassName('text-in-footer')[0].appendChild(document.createTextNode('Describiendo el flujo de trabajo en...'));
});
