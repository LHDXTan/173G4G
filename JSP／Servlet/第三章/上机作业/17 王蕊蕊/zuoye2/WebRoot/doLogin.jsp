<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
		request.setCharacterEncoding("UTF-8");
		String name = request.getParameter("userName");
		String pwd = request.getParameter("pwd");
		if("sa".equals(name.trim())&& "123".equals(pwd.trim())){
			//以key/value的形式创建Cookie
			Cookie uname=new Cookie("uname", name.trim()); 
			uname.setMaxAge(5*60);
			response.addCookie(uname);
			response.sendRedirect("welcome.jsp");
		} 
	%>

