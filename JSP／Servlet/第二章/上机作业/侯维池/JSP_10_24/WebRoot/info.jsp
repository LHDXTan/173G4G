<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'textRegist.jsp' starting page</title>
    
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
    <%request.setCharacterEncoding("utf-8");
    String name=request.getParameter("txtUser");
    out.println(name);
	String pw=request.getParameter("txtPass");
	out.println(pw);
	String pwd=request.getParameter("txtRPass");
	out.println(pwd);
	String sex=request.getParameter("gen");
	out.println(sex);
	String email=request.getParameter("txtEmail");
	out.println(email);
	String[] shengri=request.getParameterValues("year");
	String[] shengri1=request.getParameterValues("month");
	String[] shengri2=request.getParameterValues("day");
	if(shengri!=null){
	for(String shengrii : shengri){
	out.println(shengrii);
	}
	}
	if(shengri1!=null){
	for(String shengrie : shengri1){
	out.println(shengrie);
	}
	}
	if(shengri2!=null){
	for(String shengriw : shengri2){
	out.println(shengriw);
	}}  %>
  </body>
</html>
