var id;
var a,b,c,d
var showbutton_pressed = false;
DetectTask();

function DetectTask(){
    const url = new URL(document.URL);
    id = url.searchParams.get("id");
    if(id == 1){
        GenerateTask1()
    }
    if(id == 2){
        GenerateTask2();
    }
    if(id == 3){
        GenerateTask3();
    }
    if(id == 4){
        GenerateTask4();
    }
}
function GenButton(){
    if(id == 1){
        GenerateTask1();
    }
    if(id == 2){
        GenerateTask2();
    }
    if(id == 3){
        GenerateTask3();
    }
    if(id == 4){
        GenerateTask4();
    }
}
function ShowSolve(){
    if(id == 1){
        ShowSolve1();
    }
    if(id == 2){
        ShowSolve2();
    }
    if(id == 3){
        ShowSolve3();
    }
    if(id == 4){
        ShowSolve4();
    }
}

// 1st task
function GenerateTask1(){
    a = Math.ceil(Math.random() * 100);
    b = Math.ceil(Math.random()* 100);
    c = Math.ceil(Math.random()* 100);

    if(b < a && b < c && a > c && (c - b) * 100 % (a - b) == 0 && a != c){
        document.getElementById('task_text').textContent = "Агрофирма закупает куриные яйца только в двух домашних хозяйствах. Известно, что "+ String(a) + "% яиц из первого хозяйства  — яйца высшей категории, а из второго хозяйства  — "+String(b) + "% яиц высшей категории. В этой агрофирме " + String(c) + "% яиц высшей категории. Найдите вероятность того, что яйцо, купленное у этой агрофирмы, окажется из первого хозяйства.";
    }else{
        GenerateTask1();
    }
    if(showbutton_pressed){
        const canvas = document.getElementById('task_pic');
        const context = canvas.getContext('2d');
        document.getElementById('solve_button').textContent = "Показать решение";
        context.clearRect(0, 0, canvas.width, canvas.height);
        showbutton_pressed = false;
    }
}

function ShowSolve1(){
    const canvas = document.getElementById('task_pic');
    const context = canvas.getContext('2d');
    if(showbutton_pressed == false){
        canvas.width = 900;
        canvas.height = 700;
        var pic = new Image();
        pic.src = "img/task_agr.png";
        pic.onload = function(){
            context.drawImage(pic, 0, 0);
        }
        context.font = '30pt Calibri';
        context.fillText('x',250,205);
        context.fillText('(1 - x)',580,205);
        context.fillText(((100 - b) * 0.01).toFixed(2),710,430);
        context.fillText((b * 0.01).toFixed(2),470,430);
        context.fillText(((100 - a) * 0.01).toFixed(2),350,430);
        context.fillText((a * 0.01).toFixed(2),100,430);
        context.fillText('Всего яиц высшей категории: '+ (c * 0.01).toFixed(2),155,480);
        context.fillText("Уравнение: " + (a* 0.01).toFixed(2) + "x" + " + " + (b* 0.01).toFixed(2)+"(1 - x) = "+(c* 0.01).toFixed(2),140,600);
        context.fillText("Ответ: " + (c-b)/(a-b),140,650);
            showbutton_pressed = true;
            document.getElementById('solve_button').textContent = "Спрятать решение";
            return;
    }
    if(showbutton_pressed == true){
        document.getElementById('solve_button').textContent = "Показать решение";
        context.clearRect(0, 0, canvas.width, canvas.height);
        showbutton_pressed = false;
        return
    }
}

// 2st task
function GenerateTask2(){
    a = Math.ceil(Math.random() * 10);
    b = Math.ceil(Math.random()* 10);
    c = 10
    d = Math.ceil(Math.random()* 8);
    if(a > b && c > d && a < 10 && b < 10){
        solve_button.disabled = false;
        document.getElementById('task_text').textContent = "Ковбой Джон попадает в муху на стене с вероятностью " + String((a*0.1).toFixed(1) + " если стреляет из пристрелянного револьвера. Если Джон стреляет из непристрелянного револьвера, то он попадает в муху с вероятностью " + String((b*0.1).toFixed(1)) + ". На столе лежит " + String(c) + " револьвера(-ов), из них только " + String(d) + " пристрелянные. Ковбой Джон видит на стене муху, наудачу хватает первый попавшийся револьвер и стреляет в муху. Найдите вероятность того, что Джон промахнётся.");
    }else{
        GenerateTask2();
    }
    const canvas = document.getElementById('task_pic');
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('solve_button').textContent = "Показать решение";
    showbutton_pressed = false;
}

function ShowSolve2(){
    const canvas = document.getElementById('task_pic');
    const context = canvas.getContext('2d');
    if(showbutton_pressed == false){
        canvas.width = 900;
        canvas.height = 700;
        var pic = new Image();
        pic.src = "img/task_cowboy.png";
        pic.onload = function(){
            context.drawImage(pic, 0, 0);
        }
        context.font = '30pt Calibri';
        context.fillText(String(((c - d)*0.1).toFixed(1)),235,205);
        context.fillText(String(((d)*0.1).toFixed(1)),600,205);
        context.fillText(String(((a)*0.1).toFixed(1)),490,420);
        context.fillText(String(((10 - a)*0.1).toFixed(1)),715,420);
        context.fillText(String(((b)*0.1).toFixed(1)),115,420);
        context.fillText(String(((10 - b)*0.1).toFixed(1)),345,420);
        context.fillText("Решение: " + String(((c - d)*0.1).toFixed(1)) + " * " + String(((10 - b)*0.1).toFixed(1)) + " + " + String(((d)*0.1).toFixed(1)) + " * " + String(((10 - a)*0.1).toFixed(1)) + " = " + String(((((c - d)*0.1).toFixed(1)*((10 - b)*0.1).toFixed(1))+(((d)*0.1).toFixed(1)*((10 - a)*0.1).toFixed(1))).toFixed(2)),145,480);

            showbutton_pressed = true;
            document.getElementById('solve_button').textContent = "Спрятать решение";
            return;
    }
    if(showbutton_pressed == true){
        document.getElementById('solve_button').textContent = "Показать решение";
        context.clearRect(0, 0, canvas.width, canvas.height);
        showbutton_pressed = false;
        return
    }
}

// 3st task
function GenerateTask3(){
    a = Math.ceil(Math.random() * 100);
    b = Math.ceil(Math.random()* 100);
        solve_button.disabled = false;
        document.getElementById('task_text').textContent = "Если шахматист А. играет белыми фигурами, то он выигрывает у шахматиста Б. с вероятностью "+ String((a*0.01).toFixed(2)) + ". Если А. играет чёрными, то А. выигрывает у Б. с вероятностью " + String((b*0.01).toFixed(2)) + ". Шахматисты А. и Б. играют две партии, причём во второй партии меняют цвет фигур. Найдите вероятность того, что А. выиграет оба раза. Округлите до сотых.";
    const canvas = document.getElementById('task_pic');
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('solve_button').textContent = "Показать решение";
    showbutton_pressed = false;
}

function ShowSolve3(){
    const canvas = document.getElementById('task_pic');
    const context = canvas.getContext('2d');
    if(showbutton_pressed == false){
        canvas.width = 900;
        canvas.height = 700;
        var pic = new Image();
        pic.src = "img/task3.png";
        pic.onload = function(){
            context.drawImage(pic, 0, 70);
        }
        context.font = '30pt Calibri';
        context.fillText("А. играет белыми",115,80);
        context.fillText("А. играет черными",505,80);
        context.fillText(String(((a)*0.01).toFixed(2)),115,285);
        context.fillText(String(((100 - a)*0.01).toFixed(2)),340,285);
        context.fillText(String(((b)*0.01).toFixed(2)),485,285);
        context.fillText(String(((100 - b)*0.01).toFixed(2)),705,285);
        
        context.fillText("Решение: " + String(((a)*0.01).toFixed(2)) + " * " + String(((b)*0.01).toFixed(2)) + " = " + String((((a)*0.01).toFixed(2) * (b)*0.01).toFixed(2)),190,385);
            showbutton_pressed = true;
            document.getElementById('solve_button').textContent = "Спрятать решение";
            return;
    }
    if(showbutton_pressed == true){
        document.getElementById('solve_button').textContent = "Показать решение";
        context.clearRect(0, 0, canvas.width, canvas.height);
        showbutton_pressed = false;
        return
    }
}

// 4st task
function GenerateTask4(){
    a = Math.ceil(Math.random() * 100);
    b = Math.ceil(Math.random()* 25);
    c = Math.ceil(Math.random()* 25);
    if(a > 0 && a < 100){
        document.getElementById('task_text').textContent = "Две фабрики выпускают одинаковые стекла для автомобильных фар. Первая фабрика выпускает " + String(a) + "% этих стекол, вторая  — " + String(100 - a) + "%. Первая фабрика выпускает " + String(b) + "% бракованных стекол, а вторая  — " + String(c) + "%. Найдите вероятность того, что случайно купленное в магазине стекло окажется бракованным.";
    }else{
        GenerateTask4();
    }
    if(showbutton_pressed){
        const canvas = document.getElementById('task_pic');
        const context = canvas.getContext('2d');
        document.getElementById('solve_button').textContent = "Показать решение";
        context.clearRect(0, 0, canvas.width, canvas.height);
        showbutton_pressed = false;
    }
}

function ShowSolve4(){
    const canvas = document.getElementById('task_pic');
    const context = canvas.getContext('2d');
    if(showbutton_pressed == false){
        canvas.width = 900;
        canvas.height = 700;
        var pic = new Image();
        pic.src = "img/task_fab.png";
        pic.onload = function(){
            context.drawImage(pic, 0, 0);
        }
        context.font = '30pt Calibri';
        context.fillText((a * 0.01).toFixed(2),225,205);
        context.fillText(((100 - a) * 0.01).toFixed(2),595,205);
        context.fillText((c * 0.01).toFixed(2),710,430);
        context.fillText(((100 - c) * 0.01).toFixed(2),470,430);
        context.fillText(((100 - b) * 0.01).toFixed(2),350,430);
        context.fillText((b * 0.01).toFixed(2),100,430);
        context.fillText("Решение: " + (a* 0.01).toFixed(2) + " * " + (b* 0.01).toFixed(2) + " + " + ((100 - a)* 0.01).toFixed(2) + " * " + (c * 0.01).toFixed(2) + " = " + (((a*b + (100-a)*c) * 0.0001).toFixed(4)),85,600);
            showbutton_pressed = true;
            document.getElementById('solve_button').textContent = "Спрятать решение";
            return;
    }
    if(showbutton_pressed == true){
        document.getElementById('solve_button').textContent = "Показать решение";
        context.clearRect(0, 0, canvas.width, canvas.height);
        showbutton_pressed = false;
        return
    }
}