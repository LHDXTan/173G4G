<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
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
	<meta http-equiv="cache-control" content="UTF-8">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
  </head>
  
  <body>
    This is my JSP page. <br>这是第一个JSP<br>
   <br>
   
    <%
    out.print(new Date().toLocaleString());
     %>
       <br>
   <br>
     <%
int i,j;
for (i = 1; i <= 100; i++) {
for (j = 2; j < i; j++)
{
if (i % j == 0) break;
}
if (j >= i)
{
%>
<%=i %>
<%
}
}
%>

<%
	int aa=0;
	long k;
	for(k=2000;k<2013;k++){
	if(k%4==0){
	aa++;
	}
}
 %>
<br>
<%="2013-2014共有"+aa+"个闰年"
 %>>
</body>
</html>

  </body>
</html>
