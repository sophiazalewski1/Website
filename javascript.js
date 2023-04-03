window.onload = function () {
    const xValues = [100,200,300,400,500,600,700,800,900,1000];
    const data = {
        type: "line",
        data: {
          labels: xValues,
          datasets: [{ 
            data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
            borderColor: "red",
            fill: false,
            label: "Ford Fulkerson Sequential"
          }, { 
            data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
            borderColor: "green",
            fill: false,
            label: "Ford Fulkerson Parallel"
          }, { 
            data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
            borderColor: "blue",
            fill: false,
            label: "Dinic's Sequential"
          }]
        },
        options: {
        }
      }
    var chart = new Chart("myChart", data);
    window.addEventListener("scroll", (event) => {
        var currHeight = document.documentElement.scrollTop+window.innerHeight;
        var offsetTop = document.getElementById("myChart").offsetTop;
        var height = document.getElementById("myChart").height;
        console.log(currHeight);
        console.log(offsetTop + height/2);
        if(currHeight > offsetTop + height / 2 + 40 && 
           currHeight < offsetTop + height / 2 + 70){
            chart1Triggered = true;
            chart.destroy();
            new Chart("myChart", data);
        }
    });
};

function openPage(pageName) {
    var i;
    var x = document.getElementsByClassName("page");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(pageName).style.display = "block";  
    document.getElementById("close").style.visibility='visible';
}

function closeAllPages(){
    var i;
    var x = document.getElementsByClassName("page");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById("close").style.visibility='hidden';   
}