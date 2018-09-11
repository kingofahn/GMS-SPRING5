package com.gms.web.mbr;
import java.util.function.Function;
import java.util.function.Predicate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;
@Controller
@RequestMapping("/member")
@SessionAttributes("user")
public class MemberCtrl {
	static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired Member member;
	@Autowired MemberService memberService;
	@Autowired MemberMapper mapper;
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String add(@ModelAttribute("member") Member member) {
		logger.info("\n --------- MemberController {} !!--------","add");
		memberService.add(member);
		return "login_page";
	}
	@RequestMapping("/list")
	public void list() {}
	
	
	@RequestMapping("/search")
	public void search() {}
	
	@RequestMapping("/retrieve")
	public void retrieve(@ModelAttribute("member") Member member, Model model) {
		logger.info("\n --------- MemberController {} !!--------","retrieve");
		model.addAttribute("user",memberService.retrieve(member));
	}
	
	@RequestMapping("/count")
	public void count() {}
	
	@RequestMapping(value="/modify", method=RequestMethod.POST)
	public String modify(@ModelAttribute("member") Member member, 
						@ModelAttribute("user") Member user,
						Model model) {
		logger.info("\n --------- MemberController {} !!--------","modify");
		logger.info("user : {}", user);
		logger.info("member : {}", member);
		member.setUserid(user.getUserid());
		memberService.modify(member);
		model.addAttribute("user", memberService.retrieve(member));
		return "public:member/login.tiles";
	}
	
	@RequestMapping(value="/remove", method=RequestMethod.POST)
	public String remove(@ModelAttribute("member") Member member,
						@ModelAttribute("user") Member user,
						Model model) {
		logger.info("\n --------- MemberController {} !!--------","remove");
		member.setUserid(user.getUserid());
		memberService.remove(member);
		return "redirect:/";
	}
	
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(@ModelAttribute("member") Member param, Model model) {
		logger.info("\n --------- MemberController {} !!--------","login");
		Predicate<String> p = s -> !s.equals("");
		String view = "login_failed";
		System.out.println("userid : "+ param.getUserid());
		System.out.println("password : "+ param.getPassword());
		if(p.test(mapper.exist(member.getUserid()))) {
			System.out.println("로그인 진행 : " + p.test(mapper.exist(param.getUserid())));
			Function <Member,String> f=(t)->{
				return mapper.login(t);
			};
			view = (f.apply(param) != null)?
					"auth:common/content.tiles":"public:member/login.tiles";
			System.out.println(view);
		}
		return view;
	}
/*		System.out.println(">>>>>>>>"+ member.getUserid());
		System.out.println(">>>>>>>>"+ member.getPassword());
		String r = mapper.exist(member.getUserid());
		System.out.println("+++++++++"+r);
		boolean b= p.test(r);
		System.out.println("::::::::::::::"+b);
		Function<Member,String> f= (t)->{
			return mapper.login(t);
		};
		System.out.println("param id >>"+member.getUserid());
		System.out.println("param pw >>"+member.getPassword());
		String s2 = f.apply(member);
		System.out.println("88888 ::" + s2);
		
		String flag ="";
		if(memberService.login(member)!=null) {
			model.addAttribute("user", memberService.retrieve(member));
			flag = "auth:common/content.tiles";
			logger.info("\n login 결과 {}", "Success");
		} else {
			flag = "public:member/login.tiles";
			logger.info("\n login 결과 {}", "fail");
		}
		return flag;*/

	@RequestMapping("/logout")
	public String logout() {
		logger.info("\n --------- MemberController {} !!--------","logout()");
		return "redirect:/";
	}
	@RequestMapping("/fileUpload")
	public void fileUpload() {} 
}