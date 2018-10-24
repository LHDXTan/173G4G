<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'zuoye2.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="css/style.css">

  </head>
  
  <body>
  <div >
  <form action="MyJsp.jsp">
    <table id="tab" background="images/Snap1.jpg">
    <tr id="tr1"><td>用户名：</td><td><input type="text" name="yhm"/> </td></tr>
    <tr id="tr2"><td>密码：</td><td><input type="text" name="mm"/> </td></tr>
    </table>
    <input id="bt" type="submit" value="登录"></input>
  </form>
  </div>
  </body>
</html>
