<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<head>
<title>欢迎</title>
</head>
<body>
		<%
			String name = request.getParameter("userid");
 		%>
		你好：<%=name %>！
	  </body>
</html>
