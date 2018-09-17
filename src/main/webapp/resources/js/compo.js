"use strict";
var ui={
	div : x =>{return $('<div/>').attr(x);},
	span : x=>{return $},
	anchor : x=>{ //ui.anchor({txt:'test'});
		return $('<a/>').attr({href : '#'}).html(x.txt);},
	ul :x=>{ 
		let ul =$('<ul>');
		for(var i=0;i<x.len;i++){
			$('<li/>').attr({id : x.id+'-'+i
				}).appendTo(ul);
		}
       	return ul;
	},
	label : x=>{
		return $('<label/>')
		.attr('for',x.i)
		.text(x.txt)
	},
	input : x=>{ // id,val
		let p = ui.div({}).addClass("input-group mb-3");
		(ui.div({id:'input-group-prepend'})
				.addClass("input-group-prepend"))
				.html('<span class="input-group-text" id="basic-addon1">'
						+ x.div__val
						+'</span>').appendTo(p);
		/*ui.span({
			id: "basic-addon1",
			value: x.div__val
		}).appendTo($('#input-group-prepend'));*/
		$("<input/>").attr({
			id : x.input__id,
			type: 'text',
			placeholder:"입금액" ,
			"aria-label":"Username", 
			"aria-describedby":"basic-addon1"
		}).addClass("form-control").appendTo(p);
		return p;
	},	
	inputGroupPrepend : x =>{
		return '<div class="input-group mb-3">'
		 + '<div class="input-group-prepend">'
		 + '<span class="input-group-text" id="basic-addon1">@</span>'
		 + '</div>'
		 + '<input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">'
		 + '</div>'
	}
}
