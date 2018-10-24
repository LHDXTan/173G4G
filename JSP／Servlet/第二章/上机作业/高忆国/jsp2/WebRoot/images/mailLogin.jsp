<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<HEAD>
 <base href="<%=basePath%>">
<META http-equiv="Content-Type" content="text/html; charset=UTF-8">
<TITLE>登录验证</TITLE>
<STYLE type="text/css">
td{font-size:12px}
</STYLE>
<SCRIPT type="text/javascript">
function checkLogin(){
	var userName=document.myform.userid.value;
	var userPass=document.myform.passwd.value;
	var vegName=/^[a-zA-Z0-9]+$/;
	if(!vegName.test(userName)){
		alert("用户名错误，请重新输入");
		document.myform.userid.focus();
		return false;
	}
	var regPwd=/^\w{6,}$/; 
	if(!regPwd.test(userPass)){
		alert("密码输入错误，请重新输入");
		document.myform.passwd.select();
		return false;
	}
	return true;
}

</SCRIPT>
</HEAD>

<BODY>
<FORM NAME="myform" METHOD="POST" action="" onSubmit="return checkLogin()">
<TABLE align="center">
<TR>
<TD>
<IMG src="images/Snap1.jpg"><DIV style="position:absolute; left: 490px; top: 216px; width: 356px;">
  <TABLE width="100%" height="100%" border=0 cellPadding=0 cellSpacing=0>
                   <TBODY>
                        <TR vAlign=top> 
                          <TD width="23%" 
                      height=27 align=right class=bld>用户名:&nbsp;</TD>
                          <TD height="27" align=left><INPUT TYPE="text" SIZE="20" NAME="userid"><BR>用户名由字母和数字组成</TD>
                     </TR>
                        <TR vAlign=top> 
                          <TD class=bld align=right height=27>密码:&nbsp;</TD>
                          <TD height="27" align=left><INPUT TYPE="password" SIZE="20" NAME="passwd"><BR>密码由字母、数字和下划线组成，至少6位</TD>
                     </TR>
                        <TR vAlign=top> 
                          <TD class=bld align=right height=40>&nbsp;</TD>
                            <TD  align=left valign="middle"><A href="#"><INPUT name="submit" type="image" src="images/login.gif" width="101" height="22" border="0" ></A> </TD>
                        </TR>
          </TABLE></DIV>
</TD>
</TR>
</TABLE>
</FORM>
</BODY>
</HTML>
