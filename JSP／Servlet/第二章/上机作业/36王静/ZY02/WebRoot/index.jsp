<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>登录处理页面</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
  </head>
  
  <body>
  <%
  request.setCharacterEncoding("utf-8");
  String name=request.getParameter("userid").trim();
  String pwd = request.getParameter("passwd").trim();
		if(name.equals("lucky")&& pwd.equals("123456")){
	 		request.getRequestDispatcher("welcome.jsp").forward(request,response);
		} else{
			response.sendRedirect("mailLogin.jsp");
	}
   %>
  
  
  </body>
</html>
