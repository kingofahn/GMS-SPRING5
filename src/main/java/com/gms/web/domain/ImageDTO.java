package com.gms.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;
@Component // bean으로 쓴다는 의미
@Data // getter setter으로 쓴다는 의미
public class ImageDTO {
	private String imgseq,
			imgname,
			extension,
			userid;
}