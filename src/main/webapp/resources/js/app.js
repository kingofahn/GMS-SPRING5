"use strict";
var app  = app || {};
var user = user || {}; 
app = {
		init : x =>{
			console.log('step 1')
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
		setContentView : ()=>{ // 여기에 코딩하는 부분은 동적ui부분이다.
			console.log('step 4');
		}
};