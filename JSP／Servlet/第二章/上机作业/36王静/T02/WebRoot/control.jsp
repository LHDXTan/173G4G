<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
	<head>
		<title>登录处理页面</title>
	</head>
	<body>
	<%
		request.setCharacterEncoding("UTF-8");
		String name = request.getParameter("userid").trim();
		String pwd = request.getParameter("passwd").trim();
		if(name.equals("lucky")&& pwd.equals("123456")){
	 		request.getRequestDispatcher("welcome.jsp").forward(request,response);
		} else{
			response.sendRedirect("mailLogin.jsp");
	}
	%>
	</body>
</html>
