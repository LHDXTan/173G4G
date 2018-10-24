<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>注册信息</title>
    
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
   		request.setCharacterEncoding("UTF-8");
   		String name = request.getParameter("txtUser");
   		String gender = request.getParameter("gen");
   		String email = request.getParameter("txtEmail");
   		String year = request.getParameter("year");
   		String month = request.getParameter("month");
   		String day = request.getParameter("day");
   		
    %>
    <table>
    	<tr>
    		<td>姓名</td><td><%=name %></td>
    	</tr>
    	<tr>
    		<td>性别</td><td><%=gender%></td>
    	</tr>
    	<tr>
    		<td>邮件地址</td><td><%=email %></td>
    	</tr>
    	<tr>
    		<td>出生日期</td><td><%=year %>-<%=month %>-<%=day %></td>
    	</tr>
    </table>
  </body>
</html>
