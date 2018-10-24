<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'info.jsp' starting page</title>
    
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
    String name=request.getParameter("txtUser");
     String psw=request.getParameter("txtPass");
     String sex=request.getParameter("gen");
      String email=request.getParameter("txtEmail");
      String year=request.getParameter("year");
       String mouth=request.getParameter("month");
        String day=request.getParameter("day");
     
     %>
     <table>
		<tr>
		<td>名字<td><%=name %></td></td>
		</tr>     
     <tr>
		<td>密码<%=psw %></td>
		</tr>     <tr>
		<td>性别<%=sex %></td>
		</tr>     <tr>
		<td>邮箱<%=email %></td>
		</tr>     
     <td>出生年月<%=year %><%=mouth %><%=day %></td>
		</tr>     
     
     </table>
    
    
  </body>
</html>
