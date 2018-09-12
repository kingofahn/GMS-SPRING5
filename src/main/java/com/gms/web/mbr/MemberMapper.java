package com.gms.web.mbr;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Repository;
@Repository  // 처음에 component였다가 구현체가 자동으로 만들어지기 때문에 repository로 변경하였다.
public interface MemberMapper {
	public void insert(Member p) ;
	public List<?> selectList(Map<?,?>p) ;
	public List<?> selectSome(Map<?,?>p) ;
	public Member selectOne(Member p) ;
	public int count(Map<?,?>p) ;
	public void update(Member p) ;
	public void delete(Member p) ;
	public String login(Member p) ;
	public String exist(String p);
}