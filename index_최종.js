//================ 0 1 . i n d e x ====================

function nextPageindex() {
    window.location.href = "service.html";
}


//=============== 0 2 . s e r v i c e ==============

function nextPageService() {
    window.location.href = "ctg.html";
}

//=============== 0 3 . c t g =========================

function saveDataCtg(button){
    if(button === 0){

        window.localStorage.setItem("ctg",0);
        var ctg = window.localStorage.getItem("ctg");
        window.location.href = "place.html";
    }else if(button===1){

        window.localStorage.setItem("ctg",1);
        var ctg = window.localStorage.getItem("ctg");
        window.location.href = "place.html";
    }else if(button === 2){
    
        window.localStorage.setItem("ctg",2);
        var ctg = window.localStorage.getItem("ctg");
        window.location.href = "place.html";
    }else if(button ===3){
    
        window.localStorage.setItem("ctg",3);
        var ctg = window.localStorage.getItem("ctg");
        window.location.href = "place.html";
    }else if(button===4){
    
        window.localStorage.setItem("ctg",4);
        var ctg = window.localStorage.getItem("ctg");
        window.location.href = "place.html";
    }


}

saveDataCtg();


function onFirstButtonClick(){
    saveDataCtg(0);
}

function onSecondButtonClick(){
    saveDataCtg(1);
}

function onThirdButtonClick(){
    saveDataCtg(2);
}

function onFourButtonClick(){
    saveDataCtg(3);
}

function onFiveButtonClick(){
    saveDataCtg(4);
}

//================= 0 4 . p l a c e ===========================

function saveValueButton(button){
    if (button === "left"){
        window.localStorage.setItem("place",0);
        var place = window.localStorage.getItem("place");
        window.location.href = "size.html";
        
    } else if (button ==="right"){
        window.localStorage.setItem("place",1);
        var place = window.localStorage.getItem("place");
        window.location.href = "size.html";
    }
}

function onLeftButtonClick(){
    saveValueButton("left");
}

function onRightButtonClick(){
    saveValueButton("right");
}

//============ 0 5 . s i z e ============

function saveValue(){
    var rangeInputSize=document.getElementById("score_s").value;

    window.localStorage.setItem("size",rangeInputSize);
    var size=window.localStorage.getItem("size");
    window.location.href="money.html"
}


//=========== 0 6 . m o n e y ============


function saveValue_Money(){
    var rangeInputMoney=document.getElementById("score").value;

    window.localStorage.setItem("money",rangeInputMoney);
    var money=window.localStorage.getItem("money");
    window.location.href="drink.html"
}

//============ 0 7 . d r i n k ================


function saveDataDrink(button){
    if(button === 0){        
        window.localStorage.setItem("drink",0);
        var drink = window.localStorage.getItem("drink");
        window.location.href = "menu.html";


        //====== j s o n ========
        // var outputList=new Array();
        var outputList=[];

        outputList.push(ctg);
        outputList.push(place);
        outputList.push(size);
        outputList.push(money);
        outputList.push(drink);

        var jsonData=JSON.stringify(outputList);

        // alert(jsonData);
        console.log(jsonData);

    }else if(button === 1){
        window.localStorage.setItem("drink",1);
        var drink = window.localStorage.getItem("drink");
        window.location.href = "menu.html";

        //====== j s o n ========
        // var outputList=new Array();
        var outputList=[];

        outputList.push(ctg);
        outputList.push(place);
        outputList.push(size);
        outputList.push(money);
        outputList.push(drink);

        var jsonData=JSON.stringify(outputList);

        // alert(jsonData);
        console.log(jsonData);

    }

}


function onYesButton(){
    saveDataDrink(0);
}

function onNoButton(){
    saveDataDrink(1);
}


//================ 0 8 . m e n u ============

// function onMenuButton(){
//     window.location.href="menu_itr.html";
// }


//======== 0 8 . m e n u / i t r ====

var storeName=date.store;

document.getElementById("store").innerText=storeName;

var store_itr=data.explain;

document.getElementById("explain").innerText=store_itr;

function again(){
    window.localStorage.removeItem('ctg');
    window.localStorage.removeItem('place');
    window.localStorage.removeItem('size');
    window.localStorage.removeItem('money');
    window.localStorage.removeItem('drink');

    window.location.href="index.html"
}


// data.store;
//식당명 print됨


//========= 0 8 . m e n u _ f>b>f =======
// var myKey="텍스트 내용";
//키 값이 가리키는 텍스트 내용

// document.getElementById("myText").innerText=myKey

// var store_itr=document.getElementById("store_itr");
// data.explain;
//식당설명 print됨