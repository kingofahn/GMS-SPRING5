"use strict";
var app  = app || {};
app =(()=>{
	var init =x=>{
		console.log('step 1 : '  + x)
		app.router.init(x);
	};
	return{init : init};
})();

app.main =(()=>{
	var w,nav, header, content, footer, ctx, script, style, img;
	var init =()=>{
		ctx = $.ctx();
		script = $.script();
		style = $.style();
		img = $.img();
		w = $('#wrapper');
		nav = script + '/nav.js';
		header = script+'/header.js';
		content = script + '/content.js';
		footer = script + '/footer.js';
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
      $.when(
		   $.getScript($.script()+'/header.js'),
  		   $.getScript($.script()+'/nav.js'),
           $.getScript($.script()+'/content.js'),
           $.getScript($.script()+'/footer.js'),
           $.Deferred(y=>{
               $(y.resolve);
           })
       ).done(z=>{
           w.html(
        		   headerUI()
        		   +navUI()
                   +contentUI(ctx)
                   +footerUI()
           );
           $('#login_btn').click(e=>{
        	  /* e.preventDefault();*/
        	   app.permission.login();
        	   console.log('step4::: 로그인 성공');
           });
           $('#board').click(e=>{
        	   app.board.init();
           });
       })
       .fail(x=>{
           console.log('로드 실패');
       });
    };
	return{init : init};
})();

app.board =(()=>{
	var w,nav, header, content, footer, ctx, script, style, img;
	var init =()=>{
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
		alert('Board');
		/*$('#header').remove();*/
		$('#content').empty();
	};
	return{init:init};
})();

app.permission = (()=>{
    var login =()=>{
        alert('login');
        //$('#header').remove();
        $('#content').empty();
        $.getScript($.script()+"/login.js", ()=>{
            $('#content').html(loginUI());
        })
    };
    return {login : login};
})();



app.router = {
	    init : x =>{
	        $.getScript(x+'/resources/js/router.js',  // 외부의 JS 파일을 호출하는 것. 자바로치면 import의 의미.
	                ()=>{
	                    $.extend(new Session(x));        //확장. JS 객체기반언어
	                    $.getScript($.ctx()+'/resources/js/util.js')
	                    .done(x=>{
                    		console.log('실행');
                    		app.permission.login();
                    		})
	                    .fail(x=>{
	                    	console.log('실패')});
	                    app.main.init();
	                });
    }
};

/*app=(x=>{
	init : x =>{
		console.log('step 1')
		app.router.init(x);
		app.onCreate();          // 생성자 느낌
	};
	var onCreate =()=>{
		console.log('step 3');
		app.setContentView();
		$('#login_btn').click(()=>{
			location.href = app.x()+'/move/public/member/login';
		});
		$('#join_btn').click(()=>{   
			location.href = app.x()+'/move/public/member/add';
		});
		$('#logout_btn').click(()=>{   
			location.href = app.x()+'/member/logout';
		});
		$('#mypage_btn').click(()=>{   
			location.href = app.x()+'/member/retrieve/'+user.get('userid')+'/retrieve';
		});
		$('#modify_btn').click(()=>{
			location.href = app.x()+'/member/retrieve/'+user.get('userid')+'/modify';
		});
		$('#remove_btn').click(()=>{   
			location.href = app.x()+'/member/retrieve/'+user.get('userid')+'/remove';
		});
		$('#loginForm_btn').click(()=>{
			$('#userLoginForm').attr({action:app.x()+"/member/login", method:"POST"}).submit();
        });
		$('#modifyForm_btn').click(()=>{
			$('#modifyForm').attr({action:app.x()+"/member/modify/", method:"POST"}).submit();
        });
		$('#removeForm_btn').click(()=>{
			$('#removeForm').attr({action:app.x()+"/member/remove/", method:"POST"}).submit();
        });	
		$('#joinForm_Btn').click(()=>{
            $('#joinForm').attr({action:app.x()+"/member/add", method:"POST"}).submit();
        });
	};
	setContentView : ()=>{ // 여기에 코딩하는 부분은 동적ui부분이다.
		console.log('step 4');
		}
	return{
		init : init
	};
})();*/