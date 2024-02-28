const template = document.createElement('template');
template.innerHTML = `
<div class="header">
    <div class="container">
        <a href="index.html" class="logo"><img src="img/arrows.png"></img></a>
            <ul class="menu">
                <li class="tasksi" onclick="OpenTaskMenu()"><button>Задачи</button>
                <ul class="tasksmenu" id="taskmenuopen">
                <li><a href="task_page.html?id=1">Агрофирма</a></li>
                <li><a href="task_page.html?id=2">Ковбой Джон</a></li>
                <li><a href="task_page.html?id=3">Шахматы</a></li>
                <li><a href="task_page.html?id=4">Фабрики</a></li>
                </ul>
                </li>
            </ul>
    </div>
</div>
`
document.body.appendChild(template.content);

var menuopened = false;
function OpenTaskMenu(){
    if(menuopened == false){
        menuopened = true;
        document.getElementById('taskmenuopen').style.display = "block";
        return;
    }
    if(menuopened == true){
        menuopened = false;
        document.getElementById('taskmenuopen').style.display = "none";
        return;
    }
}