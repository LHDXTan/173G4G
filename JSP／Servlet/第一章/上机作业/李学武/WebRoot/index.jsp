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
    This is my JSP page. <br>我的Web<br>
    现在时间是：
    <% out.println(new Date().toLocaleString());//获取时间 %><br>
    <% int a=0;//变量
    for (int i = 2; i <= 100; i++) { // 质数
            for (int k = 2; k <= i; k++) { // 除数
                // 排除所有在 i=k 之前 能被k整除(余数为0)的数
                if (i % k == 0 && i != k) {
                    break;
                }
                // 输出所有在 i=k 且 i%k=0的数
                if (i % k == 0 && i == k) {
                    System.out.println(i);
                    a+=i;
                }
            }
        }
        out.println("1-100素数的和"+a);
     %><br>2000-2013的闰年：
     <% int y=0;
     for(int i=2000;i<=2013;i++){
     if(i%4==0&&i%100!=0||i%400==0){
     	y++;
		}
     }
      %>
      <%=y %>
  </body>
</html>
