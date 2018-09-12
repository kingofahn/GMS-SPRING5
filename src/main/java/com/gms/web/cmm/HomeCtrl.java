package com.gms.web.cmm;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
@Controller
public class HomeCtrl {
	static final Logger logger = LoggerFactory.getLogger(HomeCtrl.class);
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(HttpSession session, HttpServletRequest request) {
		String  ctx = request.getContextPath();
		logger.info("\n --------- Welcome {} !! ----------","Home");
		session.setAttribute("ctx", ctx);
		//model.addAttribute("context", "");
		return "main";
	}
	@RequestMapping("/move/{prefix}/{dir}/{page}")
	public String move(
			@PathVariable String prefix,
			@PathVariable String dir,
			@PathVariable String page) {
		logger.info("\n --------- HomeController {} !!--------","move()");
		String path = prefix+":"+dir+"/"+page+".tiles";
		logger.info("\n move page >>> {}",path);
		return path;
	}
}