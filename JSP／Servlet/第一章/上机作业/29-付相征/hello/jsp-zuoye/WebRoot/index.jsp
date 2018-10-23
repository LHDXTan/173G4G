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
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
</head>

<body>
	This is my JSP page.
	</br></br>
	<%
	//系统的当前时间
    out.print(new Date().toLocaleString());
     %></br></br>
	<%!
	//1-100的所有素数之和
          int counnum(){
           int i=0, j=0,count=0;
           for(i=1;i<=100;i++){
            for(j=2;j<i;j++){
               if(i%j==0){
                  break;
               }  
               
             }
              if(i==j){
                  count=count+i;
               }
            }
            return count;
          }     
              
       %>
	1—100之间的所有素数之和：
	<%=counnum() %>
	</br></br>
	<%!
	//2000-2013年中的闰年的个数
	 int findYear(){
            int count=0;
            for(int year=2000;year<=2013;year++){
                if((year%4==0&&year%100!=0)||year%400==0){
                
                         count++;
                             
                }
                        
            } 
              return count;    
     }
	 %>
	 从2000年-2013年期间 ，共有<%=findYear() %>个闰年
</body>
</html>
