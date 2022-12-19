window.pastes = window.datas = [];
$(document).ready(function() {
    $('#dataContainer').DataTable();
    $("#loadData").on('click', function(event){
        page = $("#page").val();
        perPage = $("#perPage").val();
        loadPastes(page, perPage);
    });
    
    $("#showPages").on('click', function(event){
        length = $("#perPage").val();
        loadPastes(1,length);
    });
    loaded();
} );
chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
    switch (request.method) {
        case 'getPastes':
            getPastes();
            break;
        case 'refresh':
            loadPastes;
            break;
        default:
            console.error('Unknown method "%s"', request.method);
            break;
    }
});

function getPastes()
{
    loadPastes(window.page, window.perPage);
    setTimeout(
        ()=>{$("#tbody")[0].innerHTML = "";},
        1000);
}
function loadPastes(page, perPage){
    if(undefined == page) page=window.page || 1;
    else window.page = page;
    if(undefined == perPage) perPage=window.perPage || 100;
    else window.perPage = perPage;
$.ajax({
    type: "GET",
    async: true,
    url: "https://api.paste.ee/v1/pastes?key=u2lCg91AYV6hZ2jSYHsuE2KZbeQ8h0ovJjsr808GY&page="+page+"&perpage="+perPage,
    success: function(data){
        document.body.style.cursor = "progress";
        window.data = data;
        window.pages = data.last_page;
        data.data.forEach(fetchData);
        pageElement = $("#page")[0];
        d = document.getElementById('page').children;
        for(let i=0; i<d.length; i++){if(i == 0){ continue;}else d[i].remove()};
        for(let i=0; i< window.pages; i++){
          pageElement.insertAdjacentHTML('beforeEnd',"<option value='"+(i+1)+"'>"+(i+1)+"</option>");
      }
    }
  });
}

function fetchData(e, i, a) {
    if(i == a.length - 1)
    {
        setTimeout(function(){document.querySelectorAll('textarea').forEach(function(e){e.value = unescape(e.value);});document.body.style.cursor = "initial";},000);
        setTimeout(function(){document.querySelectorAll('textarea').forEach(function(e){e.value = unescape(e.value);});document.body.style.cursor = "initial";},2000);
        setTimeout(function(){document.querySelectorAll('textarea').forEach(function(e){e.value = unescape(e.value);});document.body.style.cursor = "initial";},4000);
        setTimeout(function(){document.querySelectorAll('textarea').forEach(function(e){e.value = unescape(e.value);});document.body.style.cursor = "initial";},6000);
        setTimeout(function(){document.querySelectorAll('textarea').forEach(function(e){e.value = unescape(e.value);});document.body.style.cursor = "initial";},8000);
        setTimeout(function(){document.querySelectorAll('textarea').forEach(function(e){e.value = unescape(e.value);});document.body.style.cursor = "initial";
            $(".autoselect").on('mouseenter', function(event){
                event.target.select();
                document.execCommand('copy');
            });
        },10000);
    }
    $.ajax({
        type: "GET",
        async: true,
        url: "https://api.paste.ee/v1/pastes/"+e.id+"?key=u2lCg91AYV6hZ2jSYHsuE2KZbeQ8h0ovJjsr808GY",
        success: function(data){
            window.datas[e.id] = data;
            window.pastes[e.id] = {date:e.created_at, content: data.paste.sections[0].contents};
            $("#tbody")[0].innerHTML += "<tr><td>"+(i+1)+"</td><td>v1.2</td><td><textarea class='autoselect'>"+escape(data.paste.sections[0].contents)+"</textarea></td><td>"+e.created_at+"</td></tr>";
        }
      });
    }

function success()
{
    return window.pastes;
}
getPastes();
window.resd = "";
function loaded()
{
    if(!window.location.href.includes('background.html#opened'))
    {
        window.open("#opened")
    }
}


