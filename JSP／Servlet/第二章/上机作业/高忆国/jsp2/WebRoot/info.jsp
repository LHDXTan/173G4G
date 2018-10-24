<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
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
    String name = request.getParameter("txtUser");
    String pass = request.getParameter("txtPass");
    String sex = request.getParameter("gen");
    String em = request.getParameter("txtEmail");
    String y = request.getParameter("year");
    String m = request.getParameter("month");
    String d = request.getParameter("day");
     %>
     <table>
     <th>
     用户注册信息
     </th>
     <tr>
     <td>
     <%="姓名:"+name %>
     </td>
     <tr>
     <td>
     <%="密码 :"+pass %>
     </td>
     </tr>
     <tr>
     <tr>
     <td>
     <%="性别 :"+sex %>
     </td>
     </tr>
     <tr>
     
     <td>
     <%="邮箱 :"+em %>
     </td>
     </tr>
     <tr>
     <td>
     <%="出生日期 :"+y+"年"+m+"月"+d+"日" %>
     </td>
     </tr>
     
     </table>
     
     
     
     <br>
  </body>
</html>
