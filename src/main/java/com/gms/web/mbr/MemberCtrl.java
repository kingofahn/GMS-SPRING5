package com.gms.web.mbr;
import java.util.function.Function;
import java.util.function.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;
import com.gms.web.cmm.Util;

@Controller
@RequestMapping("/member")
@SessionAttributes("user")
public class MemberCtrl {
	@Autowired Member member;
	@Autowired MemberService memberService;
	@Autowired MemberMapper mapper;
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String add(@ModelAttribute("member") Member member) {
		Util.log.accept("\n --------- MemberController  !!--------");
		memberService.add(member);
		return "login_page";
	}
	@RequestMapping("/list")
	public void list() {}
	
	
	@RequestMapping("/search")
	public void search() {}
	
	@RequestMapping("/retrieve")
	public void retrieve(@ModelAttribute("member") Member member, Model model) {
		Util.log.accept("\n --------- MemberController  !!--------");
		model.addAttribute("user",memberService.retrieve(member));
	}
	
	@RequestMapping("/count")
	public void count() {}
	
	@RequestMapping(value="/modify", method=RequestMethod.POST)
	public String modify(@ModelAttribute("member") Member member, 
						@ModelAttribute("user") Member user,
						Model model) {
		Util.log.accept("\n --------- MemberController {} !!--------");
		Util.log.accept("member :" + member.toString());
		member.setUserid(user.getUserid());
		memberService.modify(member);
		model.addAttribute("user", memberService.retrieve(member));
		return "public:member/login.tiles";
	}
	
	@RequestMapping(value="/remove", method=RequestMethod.POST)
	public String remove(@ModelAttribute("member") Member member,
						@ModelAttribute("user") Member user,
						Model model) {
		Util.log.accept("\n --------- MemberController !!--------");
		member.setUserid(user.getUserid());
		memberService.remove(member);
		return "redirect:/";
	}
	
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(@ModelAttribute("member") Member param, Model model) {
		Util.log.accept("\n --------- MemberController !!--------");
		String view = "login_failed";
		Util.log.accept("userid : "+ param.getUserid());
		System.out.println("password : "+ param.getPassword());
		if(Util.isNotEqual.test(mapper.exist(param.getUserid()))) {
			System.out.println("로그인 진행 : " + Util.isNotEqual.test(mapper.exist(param.getUserid())));
			Function <Member,String> f=(t)->{
				return mapper.login(t);
			};
			view = (f.apply(param) != null)?
					"auth:common/content.tiles":"public:member/login.tiles";
			System.out.println(view);
		}
		Predicate<String> p1 = s -> s.equals("auth:common/content.tiles");
		member = (Predicate.isEqual("auth:common/content.tiles").test(view))?
				mapper.selectOne(param) : new Member();
		Util.log.accept(member.toString());
		return view;
	}
	
	@RequestMapping("/logout")
	public String logout() {
		Util.log.accept("\n --------- MemberController  !!--------");
		return "redirect:/";
	}
	@RequestMapping("/fileUpload")
	public void fileUpload() {} 
}