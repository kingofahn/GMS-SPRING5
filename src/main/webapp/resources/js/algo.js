"use strict";
var algo = algo || {};
algo = {
        init : x =>{
            /*alert('step 1' + x);*/
            algo.onCreate(x);
            algo.setContentView();
        },
        onCreate : x=>{
            algo.router.onCreate(x);
        },
        setContentView : ()=>{
            $('#wrapper').empty();
        }
};
algo.main = {
        onCreate : () =>{
            /*alert('step 4 ::' + $.ctx());*/
            algo.main.setContentView();
        },
        setContentView : ()=>{
            /*alert('step 5 ::' + $.ctx());*/
            $('#wrapper').html('<h1>알고리즘</h1><h3>수열</h3><div id="ctn">'
            		+'<table id="tbl" style"width:800px;height:300px;'
            		+'border-collapse: collapse; border:1px solid black; margin:0 auto">'
            		+'<tr style="border: 1px solid black;">'
            		+'<td id="t__1" style="width: 50%;border:1px solid black;"></td>'
            		+'<td id="t__r" style="width: 50%;border:1px solid black;"></td>'
            		+'</tr>'
            		+'</table>'
        			+'</div>');
            $('#t__1').html('<a id="arith__seq"><h3>등차수열</h3></a>');
            $('#t__1').append('<a id="swit__seq"><h3>스위치수열</h3></a>')
            $('#t__1').append('<a id="fibo__seq"><h3> 피보나치수열</h3></a>')
            $('#t__1').append('<a id="fact__seq"><h3>팩토리얼 함수</h3></a>')
            
            $('#arith__seq').click(e=>{alert('등차수열 선택');});
            $('#swit__seq').click(e=>{alert('스위치 수열 선택')});
            $('#fibo__seq').click(e=>{alert('피보나치 수열 선택')});
            $('#fact__seq').click(e=>{alert('팩토리얼 함수 선택')});
        }
};

algo.series = {
        arith : x =>{},
        fibonacci : x =>{},
        swit : x => {},
        factorial : x => {}
};
algo.array = {
        bubble : x =>{},
        insert : x =>{},
        select : x => {},
        ranking : x =>{}
};
algo.matrix = {
        fiveBy5 : x =>{},
        sandGlass : x =>{},
        snail : x =>{},
        diamond : x =>{},
        zigzag : x =>{}
};
algo.math = {
        
};
algo.appl = {};

algo.router = {
    onCreate : x =>{
        /*alert('step 2' + x);*/
        $.getScript(x+'/resources/js/router.js',  // 외부의 JS 파일을 호출하는 것. 자바로치면 import의 의미.
                ()=>{
                    /*alert('step 3' + x);*/
                    $.extend(new Session(x));        //확장. JS 객체기반언어
                    algo.main.onCreate();
                }
        );
    }
};