package com.gms.web.controller;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.domain.MemberDTO;
import com.gms.web.service.MemberService;
@Controller
@RequestMapping("/member")
@SessionAttributes("user")
public class MemberController {
	static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired MemberDTO member;
	@Autowired MemberService memberService;
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String add(@ModelAttribute("member") MemberDTO member) {
		logger.info("\n --------- MemberController {} !!--------","add");
		memberService.add(member);
		return "login_page";
	}
	@RequestMapping("/list")
	public void list() {}
	
	@RequestMapping("/search")
	public void search() {}
	
	@RequestMapping("/retrieve")
	public void retrieve(@ModelAttribute("member") MemberDTO member, Model model) {
		logger.info("\n --------- MemberController {} !!--------","retrieve");
		model.addAttribute("user",memberService.retrieve(member));
	}
	
	@RequestMapping("/count")
	public void count() {}
	
	@RequestMapping(value="/modify", method=RequestMethod.POST)
	public String modify(@ModelAttribute("member") MemberDTO member, 
						@ModelAttribute("user") MemberDTO user,
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
	public String remove(@ModelAttribute("member") MemberDTO member,
						@ModelAttribute("user") MemberDTO user,
						Model model) {
		logger.info("\n --------- MemberController {} !!--------","remove");
		member.setUserid(user.getUserid());
		memberService.remove(member);
		return "redirect:/";
	}
	
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(@ModelAttribute("member") MemberDTO member, Model model) {
		logger.info("\n --------- MemberController {} !!--------","login");
		String flag ="";
		if(memberService.login(member)!=null) {
			model.addAttribute("user", memberService.retrieve(member));
			flag = "auth:common/content.tiles";
			logger.info("\n login 결과 {}", "Success");
		} else {
			flag = "public:member/login.tiles";
			logger.info("\n login 결과 {}", "Success");
		}
		return flag;
	}
	@RequestMapping("/logout")
	public String logout() {
		logger.info("\n --------- MemberController {} !!--------","logout()");
		return "redirect:/";
	}
	@RequestMapping("/fileUpload")
	public void fileUpload() {} 
}