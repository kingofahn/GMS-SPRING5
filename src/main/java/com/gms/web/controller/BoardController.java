package com.gms.web.controller;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.gms.web.domain.ArticleDTO;
import com.gms.web.service.BoardService;

@Controller
@RequestMapping("/board")
public class BoardController {
	static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	@Autowired ArticleDTO Board;
	@Autowired BoardService BoardService;
	@RequestMapping("/register")
	public String add(@ModelAttribute("Board") ArticleDTO Board) {
		logger.info("\n --------- BoardController {} !!--------","add");
		/*BoardService.add(Board);*/
		return "auth:board/listAll.tiles";
	}
	@RequestMapping("/listAll")
	public void list() {}
	
	@RequestMapping("/search")
	public void search() {}
	
	@RequestMapping("/retrieve")
	public void retrieve() {}
	
	@RequestMapping("/count")
	public void count() {}
	
	@RequestMapping(value="/modify", method=RequestMethod.POST)
	public String modify(@ModelAttribute("Board") ArticleDTO Board, Model model) {
		logger.info("\n --------- BoardController {} !!--------","modify");
		BoardService.modify(Board);
		model.addAttribute("user", BoardService.retrieve(Board));
		return "auth:board/retrieve.tiles";
	}
	@RequestMapping(value="/remove", method=RequestMethod.POST)
	public String remove(@ModelAttribute("Board") ArticleDTO Board) {
		logger.info("\n --------- BoardController {} !!--------","remove");
		BoardService.remove(Board);
		return "redirect:/";
	}
	
	@RequestMapping("/fileUpload")
	public void fileUpload() {} 

}