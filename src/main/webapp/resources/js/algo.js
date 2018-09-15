"use strict"; 
var algo = algo || {};
algo = {
    init :x=>{
    	algo.onCreate(x);
    	algo.setContentView();
    },
    onCreate:x=>{
    	algo.router.onCreate(x);
    },
    setContentView:()=>{
        $('#wrapper').empty();
    }
};
algo.main = {
    onCreate:()=>{
    	algo.main.setContentView();
    },
    setContentView : ()=>{
        $('#wrapper').html('<h1>알고리즘</h1><h3>수 열</h3><div id="ctn">'
    		+'<table id="tbl" style="width:800px;height:300px;'
    		+'border-collapse: collapse;border: 1px solid black;margin:0 auto">'
    		+ '<tr style="border: 1px solid black;">'
    		+  '<td id="t__l" style="width: 50%;border: 1px solid black;"></td>'
    		+  '<td id="t__r" style="width: 50%;border: 1px solid black;"></td>'
    		+ '</tr>'
    		+'</table>'
    		+'</div>');
        let $t__l = $('#t__l');
        let $t__r = $('#t__r');
        $("<ul />")
        .attr({id : 'side__menu'})
        .addClass('list-group').appendTo($t__l);
       $('<li/>')
       .attr({id : 'arith'})
       .addClass('list-group-item')
       .appendTo($('#side__menu'));
       $('<a/>')
       .attr({href : '#'})
       .html('등차수열의 합')
       .appendTo($('#arith'))
       .click(e=>{
    	$t__r.empty();

    	$('<div/>').attr({id:'ques'}).appendTo($t__r);
       	$('<h4/>').html('시작값 x, 마지막값 y, 공차 d 인 등차수열의 합을 구하시오.').appendTo($('#ques'));
       	
       	let json = [{text:'시작값 : ',input:'sta'},
   				{text:'마지막값 :',input:'end'},
   				{text:'공차  :',input:'diff'}]
       	
       	$.each(json, (i,j)=> {
       		$('<label/>').html(j.text).appendTo($('#ques'));
           	$('<input/>').attr({id : j.input, type:'text'}).appendTo($('#ques'));
           	$('<br/>').appendTo($('#ques'));
       	});
       	
       	/* 
       	 //기본 for
   	  	for(let i in j){
       		$('<label/>').html(j[i].text).appendTo($('#ques'));
           	$('<input/>').attr({id : j[i].input, type:'text'}).appendTo($('#ques'));
           	$('<br/>').appendTo($('#ques'));
           	
           	let arr = [{id:'sta', label:'시작값'},
       		{id:'end', label:'마지막값'},
       		{id:'diff', label:'공차'}];
       	// hye-ri
      	for(let i in arr){
       		$('<label/>').html(arr[i].label).appendTo($('#ques'));
           	$('<input/>').attr({id: arr[i].id,type:'text'}).appendTo($('#ques'));
           	$('<br/>').appendTo($('#ques'));
       	}
       	
       	// dan-a
       	$(arr).each(function(){
       		$('<label/>').html(this.label).appendTo($('#ques'));
           	$('<input/>').attr({id: this.id,type:'text'})
           		.appendTo($('#ques'));
           	$('<br/>').appendTo($('#ques'))
       	});
       	// nuri
       	$.each(arr,function(){
			$('<label>').html(this.label).appendTo($('#ques'));
			$('<input>').attr({id: this.id ,type:'text'}).appendTo($('#ques'));
			$('<br>').appendTo($('#ques'));
		});
       	// sojin
     	$.each(arr,(i,j)=>{
       		$('<label/>').html(j.label).appendTo($('#ques'));
           	$('<input/>').attr({id: j.id,type:'text'}).appendTo($('#ques'));
           	$('<br/>').appendTo($('#ques'));
       	}
       	}*/
       	
       	$('<button/>')
       	.addClass('btn btn-primary')
       	.attr({type:'button'})
       	.html('결과보기')
       	.appendTo($('#ques'))
       	.click(e=>{
       		let a = $('<h6/>').attr({id:'checker'});
       		$('#checker').remove();
       		if(($.fn.zeroChecker(
        	        [$('#sta').val(),
            	        $('#end').val(),
            	        $('#diff').val()]))){
       			a.attr({id:'checker'}).html('빈칸을 채우세요').appendTo($('#ques'));
       		}else{
            	let sta = $('#sta').val()*1;
            	let end = $('#end').val()*1;
            	let diff = $('#diff').val()*1;
            	let sum = 0;
            	let i =0;
            	while(i<end){
            		sum+=sta;
            		sta=sta+diff;
            		i+=diff;
            		console.log(sum);
            	}
            	a.html('결과값 : '+sum).appendTo($('#ques'));
       		}
       	});
    });
       
    }
};        
             
/*         $('#t__1').html('<a id="arith__seq"><h3>등차수열</h3></a>');
            $('#t__1').append('<a id="swit__seq"><h3>스위치수열</h3></a>')
            $('#t__1').append('<a id="fibo__seq"><h3> 피보나치수열</h3></a>')
            $('#t__1').append('<a id="fact__seq"><h3>팩토리얼 함수</h3></a>')
            
            $('#arith__seq').click(e=>{
            	let ques = 
            		'	<h3>시작값 x, 마지막값 y, 공차 d인 등차수열의 합을 구하시오</h3>'
            		+'	<label for="시작값">시작값</label>	<input id="s" type="text" value="">'
            		+'	<label for="마지막값">마지막값</label>	<input id="e" type="text" value="">'
            		+'	<label for="공차">공차</label>	<input id="d" type="text" value="">'
            		+'	<button id="bt"> 결과보기</button>'
            		+'	<h6 id="rs"> </h6>'
            	$('#t__r').html(ques);
            	$('#bt').click(()=>{
        			$('#rs').empty().text(($.fn.zeroChecker([
        				$('#s').val(),
        				$('#e').val(),
        				$('#D').val()]))?
        					'빈칸을 채우세요'
        					:
        					'입력값이 모두 정상으로 입력되었습니다.');
                	let sta = $('#s').val()*1;
                	let end = $('#e').val()*1;
                	let diff = $('#d').val()*1;
                	let sum = 0;
                	let i =0;
                	while(i<end){
                		sum+=sta;
                		sta=sta+diff;
                		i+=diff;
                		console.log(sum);
                	}
                	$('#t__a').html(sum);
                });
        	});

            $('#swit__seq').click(e=>{
            	let ques = 
            		'	<h3>시작값 x와 마지막값 y의 +/1 스위치 합을 구하시오(1-2+3-4...)</h3>'
            		+'	<label for="시작값">시작값</label>	<input id="s" type="text" value="">'
            		+'	<label for="마지막값">마지막값</label>	<input id="e" type="text" value="">'
            		+'	<label for="공차">공차</label>	<input id="d" type="text" value="">'
            		+'	<button id="bt"> 결과보기</button>'
            		+'	<h6 id="rs"> </h6>'
            	$('#t__r').html(ques);
            	$('#bt').click(()=>{
            		$('#rs').empty().text(($.fn.zeroChecker([
        				$('#s').val(),
        				$('#e').val(),
        				]))?
        					'빈칸을 채우세요'
        					:
        					'입력값이 모두 정상으로 입력되었습니다.');
                	let sta = $('#s').val()*1;
                	console.log('sta :: '+sta);
                	let end = $('#e').val()*1;
                	console.log('end :: '+end);
                	let sum = 0;
                	let i=0;
                	while(sta<end){
                		sum+=sta;
                		console.log('sum1 : '+sum);
                		sta++
                   		sum-=sta;
                		console.log('sum2 : '+sum);
                		sta++
                	}
                	$('#t__a').html(sum);
            	});
            	
            });
            $('#fibo__seq').click(e=>{
            	let ques = 
            		'	<h3>피보나치 수열을 구하시오</h3>'
            		+'	<label for="시작값">첫번째값</label>	<input id="s" type="text" value="">'
            		+'	<label for="두번째값">두번째값</label><input id="e" type="text" value="">'
            		+'	<label for="항수">항수</label><input id="n" type="text" value="">'
            		+'	<button id="bt"> 결과보기</button>'
            		+'	<h6 id="rs"> </h6>'
            		$('#t__r').html(ques);
            		$('#bt').click(()=>{
            			let a1 = $('#s').val()*1;
                    	let a2 = $('#e').val()*1;
                    	let n = $('#n').val()*1;
                    	alert($.fn.zeroChecker([
            				$('#s').val(),
            				$('#e').val(),
            				$('#n').val()]));
            			$('#rs').empty().text(($.fn.zeroChecker([
            				$('#s').val(),
            				$('#e').val(),
            				$('#n').val()]))?
            					'빈칸을 채우세요'
            					:
            					'입력값이 정상으로 입력되었습니다.');
                    	let sum = a1+a2;
                    	let a3 = 0;
                    	let i = 2;
                    	while(i<n){
                    		a3= a1+a2;
                    		sum += a3;
                    		console.log('a1 :' + a1 + '|| a2 :' + a2 + '|| a3 :' + a3 + '|| sum :'+sum);
                    		a1=a2;
                    		a2=a3;
                    		i++;
                    	}
            			$('#t__a').html(sum);
            		});
    		});
            $('#fact__seq').click(e=>{alert('팩토리얼 함수 선택')});
        }
};*/

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
algo.math = {};
algo.appl = {};

algo.router = {
    onCreate : x =>{
        /*alert('step 2' + x);*/
        $.getScript(x+'/resources/js/router.js',  // 외부의 JS 파일을 호출하는 것. 자바로치면 import의 의미.
                ()=>{
                    $.extend(new Session(x));        //확장. JS 객체기반언어
                    $.getScript($.ctx()+'/resources/js/util.js')
                    .done(x=>{console.log('실행');})
                    .fail(x=>{console.log('실패')});
                    algo.main.onCreate();
                }
        );
    }
};