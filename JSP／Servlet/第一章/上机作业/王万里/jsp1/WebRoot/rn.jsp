<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'rn.jsp' starting page</title>
    
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

        int a;

		int [] arr={2010,2011,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022};
		out.println("2010年-2022年闰年的是");
      for (int i = 0; i < arr.length; i++) {
	          if(arr[i]%4==0){
	        	  a=arr[i];
	        	out.println("<br>"+a);
	          }   
	
}		

%>



  </body>
</html>
