<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head> 
    <title>登录</title>

  </head>
  
  <%
  		
		Cookie[] cookies = request.getCookies();
		String user="";
		String pwd = "";
		if(cookies!=null){
			for(int i=0;i<cookies.length;i++){
				if(cookies[i].getName().equals("uname"))
					response.sendRedirect("welcome.jsp");
			}
		}

  	
   %>
  <body>
    <form name="loginForm" method="post" action="doLogin.jsp">
			用户名：<input type="text" name="userName" />
			密码：<input type="password" name="pwd" />
			<input type="submit" value="登录">
		</form>

  </body>
</html>
