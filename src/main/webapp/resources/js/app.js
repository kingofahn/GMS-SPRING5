"use strict";
var app  = app || {};
var user = user || {}; 
app = {
		init : x =>{
			console.log('step 1')
			app.session.context(x);  // 경로설정
			app.onCreate();          // 생성자 느낌
		},
		onCreate : () =>{
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
		},
		setContentView : ()=>{
			console.log('step 4' + app.session.path('ctx'));
		}
};

app.session ={
	context : x=> {
		console.log('step 2' + x)
		sessionStorage.setItem('ctx',x);
		sessionStorage.setItem('js',x+'/resources/js');
		sessionStorage.setItem('cs',x+'/resources/css');
		sessionStorage.setItem('img',x+'/resources/img');
	},
	path : x=> {
		return sessionStorage.getItem(x);
	}
};

app.x = ()=>{
	return app.session.path('ctx');
};
app.j = ()=>{
	return app.session.path('js');
};
app.c = ()=>{
	return app.session.path('css');
};
app.i = ()=>{
	return app.session.path('img');
};

user.session = x=>{
		$.each(x, (k,v)=>{
		/*alert('key:'+k+', value:'+v)*/
		sessionStorage.setItem(k,v);
		})
};
user.get = x=>{
	return sessionStorage.getItem(x);
}