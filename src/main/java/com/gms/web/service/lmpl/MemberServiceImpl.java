package com.gms.web.service.lmpl;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gms.web.domain.MemberDTO;
import com.gms.web.mapper.MemberMapper;
import com.gms.web.service.MemberService;

@Service
public class MemberServiceImpl implements MemberService {
	@Autowired MemberMapper memberDAO;
	@Override
	public void add(MemberDTO p) {
		int stf = Integer.valueOf(new SimpleDateFormat("yyyy").format(new Date()))+1-1900;
		String ssn = p.getSsn();
		String gender = "";
		gender=(ssn.split("/")[1].equals("1"))? "man":"woman" ;
		p.setAge(String.valueOf(stf - Integer.parseInt(ssn.substring(0,2))));
		p.setGender(gender);
		memberDAO.insert(p);
	}
	@Override
	public List<?> list(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<?> search(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public MemberDTO retrieve(MemberDTO p) {
		return memberDAO.selectOne(p);
	}
	@Override
	public int count(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return 0;
	}
	@Override
	public void modify(MemberDTO p) {
		memberDAO.update(p);
	}
	@Override
	public void remove(MemberDTO p) {
		memberDAO.delete(p);
		
	}
	@Override
	public MemberDTO login(MemberDTO p) {
		return memberDAO.login(p);
	}
}