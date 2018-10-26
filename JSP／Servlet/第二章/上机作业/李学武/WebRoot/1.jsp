<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
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
  <% 	request.setCharacterEncoding("utf-8");
  		String name=request.getParameter("txtUser");
		String pwd=request.getParameter("txtPass");
		String rpwd=request.getParameter("txtRPass");
		String gen=request.getParameter("gen");
		String em=request.getParameter("txtEmail");
		String year=request.getParameter("year");
		String month=request.getParameter("month");
		String day=request.getParameter("day");		
 %>
 <center>
 姓名：<%=name %><br/>
 密码：<%=pwd %><br/>
 性别：<%=gen %><br/>
 邮箱：<%=em %><br/>
 出生年月：<%=year %>年<%=month %>月<%=day %>日
 </center>
  </body>
</html>
