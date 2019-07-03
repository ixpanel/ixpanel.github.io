function get_random()
{
    var ranNum= Math.floor(Math.random()*9000)+1000;
    return ranNum;
}

function disp_comment(side, divname, idno, username, usermail)
   		{
      		if (side == 'p')
      		{
      			var authnum = get_random();
            var inml = '<table border=0 cellspacing="0" cellpadding="0" width=80%>';
            inml += '<tr><td><img src="images/corner_b_t_bl.gif"></td></tr>';
            inml += '<tr><td style="vertical-align:top; padding:15px; background-color:#5BD9D2">';
            inml += '<form method="post" action="comment_2.php" enctype="multipart/form-data" id="input_' + divname + '" onsubmit="return check(' + "\'" + 'input_' + divname + "\'" +');">';
            inml += '  <div style="font-size: 14px; font-weight:bold; font-family: Arial, Sans-Serif; padding-bottom:2px; border-bottom-style: dashed; border-bottom-width: 1px; border-bottom-color:#FFFFFF; vertical-align: top; color:#000000;">';
            inml += '    我也要出一張嘴：';
            inml += '  </div>';
            inml += '  <div style="font-size: 12px; font-family: Arial, Sans-Serif; padding-top: 5px; padding-bottom: 5px; border-bottom-style: dashed; border-bottom-width: 1px; border-bottom-color:#FFFFFF; vertical-align: top; color:#000000;">';
            inml += '    我的暱稱：' + username + '<input type="hidden" name="name" value="' +username+ '">';
            inml += '  </div>';
            inml += '  <div style="font-size: 12px; font-family: Arial, Sans-Serif; padding-top: 5px; padding-bottom: 5px; border-bottom-style: dashed; border-bottom-width: 1px; border-bottom-color:#FFFFFF; vertical-align: top; color:#000000;">';
            inml += '    我的 E-mail：' + usermail + '<input type="hidden" name="email" value="' +usermail+ '">';
            inml += '  </div>';
            inml += '  <div style="font-size: 12px; font-family: Arial, Sans-Serif; padding-top: 2px; margin-bottom:5px; padding-bottom:5px; border-bottom-style: dashed; border-bottom-width: 1px; border-bottom-color:#FFFFFF; vertical-align: top; color:#000000;">';
            inml += '    我的意見：<BR><textarea cols=55 rows=5 name="argument" style="font-size:12px; border-color:#CCCCCC; border-width:1px; font-family:Arial, sans-serif; padding:2px;"></textarea>';
            inml += '  </div>';
            inml += '  <div style="font-size: 12px; font-family: Arial, Sans-Serif; padding-top: 2px; margin-bottom:5px; padding-bottom:5px; border-bottom-style: dashed; border-bottom-width: 1px; border-bottom-color:#FFFFFF; vertical-align: top; color:#000000;">';
            inml += '    輸入認證碼：<input type=text name="authinput" style="width: 80px" style="font-size:12px; border-color:#CCCCCC; border-width:1px; font-family:Arial, sans-serif; padding:2px;"><img src="authimg.php?authnum='+ authnum +'&c=p"> ';
            inml += '  </div>';
            inml += '  <input type="submit" name="Submit" value="我要發表" style="font-size:12px;">';
            inml += '  <input type="hidden" name="title_id" value="'+idno+'">';
            inml += '  <input type="hidden" name="side" value="p">';
            inml += '  <input type="hidden" name="rebutt" value="0">';
            inml += '  <input type="hidden" name="authnum" value="'+authnum+'">';
            inml += '</form>';
            inml += '</td></tr>';
            inml += '<tr><td><img src="images/corner_b_b_bl.gif"></td></tr>';
            inml += '</table>';

            var unml = '<table border=0 cellspacing="0" cellpadding="0" width=80%>';
            unml += '<tr><td><img src="images/corner_b_t_bl.gif"></td></tr>';
            unml += '<tr><td style="vertical-align:top; padding:15px; background-color:#5BD9D2">';
						unml += '<div style="font-size: 12px; font-family: Arial, Sans-Serif; padding-top: 5px; padding-bottom: 5px; vertical-align: top; color:#000000;">您尚未登入！請<a href="http://www.ixpanel.com/affiliatelogin.jsp" style="color:#666666">點這裡</a>前往登入頁面。登入後才可以發言喔～</div>';
            unml += '</td></tr>';
            unml += '<tr><td><img src="images/corner_b_b_bl.gif"></td></tr>';
            unml += '</table>';

            if (username != '' && usermail != '')
            {
            	document.getElementById(divname).innerHTML = inml;
            }
          	else
          	{
          		document.getElementById(divname).innerHTML = unml;
          	}
     			}else if (side == 'n')
     			{
     				var authnum = get_random();
     				var inml = '<table border=0 cellspacing="0" cellpadding="0" width=80%>';
            inml += '<tr><td><img src="images/corner_b_t_rd.gif"></td></tr>';
            inml += '<tr><td style="vertical-align:top; padding:15px; background-color:#FCCC2D">';
            inml += '<form method="post" action="comment_2.php" enctype="multipart/form-data" id="input_' + divname + '" onsubmit="return check(' + "\'" + 'input_' + divname + "\'" +');">';
            inml += '  <div style="font-size: 14px; font-weight:bold; font-family: Arial, Sans-Serif; padding-bottom:2px; border-bottom-style: dashed; border-bottom-width: 1px; border-bottom-color:#FFFFFF; vertical-align: top; color:#000000;">';
            inml += '    我也要出一張嘴：';
            inml += '  </div>';
            inml += '  <div style="font-size: 12px; font-family: Arial, Sans-Serif; padding-top: 5px; padding-bottom: 5px; border-bottom-style: dashed; border-bottom-width: 1px; border-bottom-color:#FFFFFF; vertical-align: top; color:#000000;">';
            inml += '    我的暱稱：' + username + '<input type="hidden" name="name" value="' +username+ '">';
            inml += '  </div>';
            inml += '  <div style="font-size: 12px; font-family: Arial, Sans-Serif; padding-top: 5px; padding-bottom: 5px; border-bottom-style: dashed; border-bottom-width: 1px; border-bottom-color:#FFFFFF; vertical-align: top; color:#000000;">';
            inml += '    我的 E-mail：' + usermail + '<input type="hidden" name="email" value="' +usermail+ '">';
            inml += '  </div>';
            inml += '  <div style="font-size: 12px; font-family: Arial, Sans-Serif; padding-top: 2px; margin-bottom:5px; padding-bottom:5px; border-bottom-style: dashed; border-bottom-width: 1px; border-bottom-color:#FFFFFF; vertical-align: top; color:#000000;">';
            inml += '    我的意見：<BR><textarea cols=55 rows=5 name="argument" style="font-size:12px; border-color:#CCCCCC; border-width:1px; font-family:Arial, sans-serif; padding:2px;"></textarea>';
            inml += '  </div>';
            inml += '  <div style="font-size: 12px; font-family: Arial, Sans-Serif; padding-top: 2px; margin-bottom:5px; padding-bottom:5px; border-bottom-style: dashed; border-bottom-width: 1px; border-bottom-color:#FFFFFF; vertical-align: top; color:#000000;">';
            inml += '    輸入認證碼：<input type=text name="authinput" style="width: 80px" style="font-size:12px; border-color:#CCCCCC; border-width:1px; font-family:Arial, sans-serif; padding:2px;"><img src="authimg.php?authnum='+ authnum +'&c=n"> ';
            inml += '  </div>';
            inml += '  <input type="submit" name="Submit" value="我要發表" style="font-size:12px;">';
            inml += '  <input type="hidden" name="title_id" value="'+idno+'">';
            inml += '  <input type="hidden" name="side" value="n">';
            inml += '  <input type="hidden" name="rebutt" value="0">';
            inml += '  <input type="hidden" name="authnum" value="'+authnum+'">';
            inml += '</form>';
            inml += '</td></tr>';
            inml += '<tr><td><img src="images/corner_b_b_rd.gif"></td></tr>';
            inml += '</table>';

            var unml = '<table border=0 cellspacing="0" cellpadding="0" width=80%>';
            unml += '<tr><td><img src="images/corner_b_t_rd.gif"></td></tr>';
            unml += '<tr><td style="vertical-align:top; padding:15px; background-color:#FCCC2D">';
						unml += '<div style="font-size: 12px; font-family: Arial, Sans-Serif; padding-top: 5px; padding-bottom: 5px; vertical-align: top; color:#000000;">您尚未登入！請<a href="http://www.ixpanel.com/affiliatelogin.jsp" style="color:#666666">點這裡</a>前往登入頁面。登入後才可以發言喔～</div>';
            unml += '</td></tr>';
            unml += '<tr><td><img src="images/corner_b_b_rd.gif"></td></tr>';
            unml += '</table>';

            if (username != '' && usermail != '')
            {
            	document.getElementById(divname).innerHTML = inml;
            }
          	else
          	{
          		document.getElementById(divname).innerHTML = unml;
          	}
          }
			}
function disp_rebuttal(side, divname, idno, rebuttal, username, usermail)
	{
      		if (side == 'p')
      		{
      			var authnum = get_random();
            var inml = '<table border=0 cellspacing="0" cellpadding="0" width=80%>';
            inml += '<tr><td><img src="images/corner_c_t_bl.gif"></td></tr>';
            inml += '<tr><td style="vertical-align:top; padding:15px; background-color:#84E4DF">';
            inml += '<form method="post" action="comment_2.php" enctype="multipart/form-data" id="input_' + divname + '" onsubmit="return check(' + "\'" + 'input_' + divname + "\'" +');">';
            inml += '  <div style="font-size: 14px; font-weight:bold; font-family: Arial, Sans-Serif; padding-bottom:2px; border-bottom-style: dashed; border-bottom-width: 1px; border-bottom-color:#FFFFFF; vertical-align: top; color:#000000;">';
            inml += '    我要提出反方意見：';
            inml += '  </div>';
            inml += '  <div style="font-size: 12px; font-family: Arial, Sans-Serif; padding-top: 5px; padding-bottom: 5px; border-bottom-style: dashed; border-bottom-width: 1px; border-bottom-color:#FFFFFF; vertical-align: top; color:#000000;">';
            inml += '    我的暱稱：' + username + '<input type="hidden" name="name" value="' +username+ '">';
            inml += '  </div>';
            inml += '  <div style="font-size: 12px; font-family: Arial, Sans-Serif; padding-top: 5px; padding-bottom: 5px; border-bottom-style: dashed; border-bottom-width: 1px; border-bottom-color:#FFFFFF; vertical-align: top; color:#000000;">';
            inml += '    我的 E-mail：' + usermail + '<input type="hidden" name="email" value="' +usermail+ '">';
            inml += '  </div>';
            inml += '  <div style="font-size: 12px; font-family: Arial, Sans-Serif; padding-top: 2px; margin-bottom:5px; padding-bottom:5px; border-bottom-style: dashed; border-bottom-width: 1px; border-bottom-color:#FFFFFF; vertical-align: top; color:#000000;">';
            inml += '    我的意見：<BR><textarea cols=40 rows=5 name="argument" style="font-size:12px; border-color:#CCCCCC; border-width:1px; font-family:Arial, sans-serif; padding:2px;"></textarea>';
            inml += '  </div>';
            inml += '  <div style="font-size: 12px; font-family: Arial, Sans-Serif; padding-top: 2px; margin-bottom:5px; padding-bottom:5px; border-bottom-style: dashed; border-bottom-width: 1px; border-bottom-color:#FFFFFF; vertical-align: top; color:#000000;">';
            inml += '    輸入認證碼：<input type=text name="authinput" style="width: 80px" style="font-size:12px; border-color:#CCCCCC; border-width:1px; font-family:Arial, sans-serif; padding:2px;"><img src="authimg.php?authnum='+ authnum +'&c=x"> ';
            inml += '  </div>';
            inml += '  <input type="submit" name="Submit" value="我要發表" style="font-size:12px;">';
            inml += '  <input type="hidden" name="title_id" value="'+idno+'">';
            inml += '  <input type="hidden" name="side" value="n">';
            inml += '  <input type="hidden" name="rebutt" value="'+rebuttal+'">';
            inml += '  <input type="hidden" name="authnum" value="'+authnum+'">';
            inml += '</form>';
            inml += '</td></tr>';
            inml += '<tr><td><img src="images/corner_c_b_bl.gif"></td></tr>';
            inml += '</table>';

            var unml = '<table border=0 cellspacing="0" cellpadding="0" width=80%>';
            unml += '<tr><td><img src="images/corner_c_t_bl.gif"></td></tr>';
            unml += '<tr><td style="vertical-align:top; padding:15px; background-color:#84E4DF">';
            unml += '<div style="font-size: 12px; font-family: Arial, Sans-Serif; padding-top: 5px; padding-bottom: 5px; vertical-align: top; color:#000000;">您尚未登入！請<a href="http://www.ixpanel.com/affiliatelogin.jsp" style="color:#666666">點這裡</a>前往登入頁面。登入後才可以發言喔～</div>';
            unml += '</td></tr>';
            unml += '<tr><td><img src="images/corner_c_b_bl.gif"></td></tr>';
            unml += '</table>';

            if (username != '' && usermail != '')
            {
            	document.getElementById(divname).innerHTML = inml;
            }
          	else
          	{
          		document.getElementById(divname).innerHTML = unml;
          	}
     			}else if (side == 'n')
     			{
     				var authnum = get_random();
     				var inml = '<table border=0 cellspacing="0" cellpadding="0" width=80%>';
            inml += '<tr><td><img src="images/corner_c_t_rd.gif"></td></tr>';
            inml += '<tr><td style="vertical-align:top; padding:15px; background-color:#FFDE61">';
            inml += '<form method="post" action="comment_2.php" enctype="multipart/form-data" id="input_' + divname + '" onsubmit="return check(' + "\'" + 'input_' + divname + "\'" +');">';
            inml += '  <div style="font-size: 14px; font-weight:bold; font-family: Arial, Sans-Serif; padding-bottom:2px; border-bottom-style: dashed; border-bottom-width: 1px; border-bottom-color:#FFFFFF; vertical-align: top; color:#000000;">';
            inml += '    我要提出正方意見：';
            inml += '  </div>';
            inml += '  <div style="font-size: 12px; font-family: Arial, Sans-Serif; padding-top: 5px; padding-bottom: 5px; border-bottom-style: dashed; border-bottom-width: 1px; border-bottom-color:#FFFFFF; vertical-align: top; color:#000000;">';
            inml += '    我的暱稱：' + username + '<input type="hidden" name="name" value="' +username+ '">';
            inml += '  </div>';
            inml += '  <div style="font-size: 12px; font-family: Arial, Sans-Serif; padding-top: 5px; padding-bottom: 5px; border-bottom-style: dashed; border-bottom-width: 1px; border-bottom-color:#FFFFFF; vertical-align: top; color:#000000;">';
            inml += '    我的 E-mail：' + usermail + '<input type="hidden" name="email" value="' +usermail+ '">';
            inml += '  </div>';
            inml += '  <div style="font-size: 12px; font-family: Arial, Sans-Serif; padding-top: 2px; margin-bottom:5px; padding-bottom:5px; border-bottom-style: dashed; border-bottom-width: 1px; border-bottom-color:#FFFFFF; vertical-align: top; color:#000000;">';
            inml += '    我的意見：<BR><textarea cols=40 rows=5 name="argument" style="font-size:12px; border-color:#CCCCCC; border-width:1px; font-family:Arial, sans-serif; padding:2px;"></textarea>';
            inml += '  </div>';
            inml += '  <div style="font-size: 12px; font-family: Arial, Sans-Serif; padding-top: 2px; margin-bottom:5px; padding-bottom:5px; border-bottom-style: dashed; border-bottom-width: 1px; border-bottom-color:#FFFFFF; vertical-align: top; color:#000000;">';
            inml += '    輸入認證碼：<input type=text name="authinput" style="width: 80px" style="font-size:12px; border-color:#CCCCCC; border-width:1px; font-family:Arial, sans-serif; padding:2px;"><img src="authimg.php?authnum='+ authnum +'&c=y"> ';
            inml += '  </div>';
            inml += '  <input type="submit" name="Submit" value="我要發表" style="font-size:12px;">';
            inml += '  <input type="hidden" name="title_id" value="'+idno+'">';
            inml += '  <input type="hidden" name="side" value="p">';
            inml += '  <input type="hidden" name="rebutt" value="'+rebuttal+'">';
            inml += '  <input type="hidden" name="authnum" value="'+authnum+'">';
            inml += '</form>';
            inml += '</td></tr>';
            inml += '<tr><td><img src="images/corner_c_b_rd.gif"></td></tr>';
            inml += '</table>';

            var unml = '<table border=0 cellspacing="0" cellpadding="0" width=80%>';
            unml += '<tr><td><img src="images/corner_c_t_rd.gif"></td></tr>';
            unml += '<tr><td style="vertical-align:top; padding:15px; background-color:#FFDE61">';
            unml += '<div style="font-size: 12px; font-family: Arial, Sans-Serif; padding-top: 5px; padding-bottom: 5px; vertical-align: top; color:#000000;">您尚未登入！請<a href="http://www.ixpanel.com/affiliatelogin.jsp" style="color:#666666">點這裡</a>前往登入頁面。登入後才可以發言喔～</div>';
            unml += '</td></tr>';
            unml += '<tr><td><img src="images/corner_c_b_rd.gif"></td></tr>';
            unml += '</table>';

            if (username != '' && usermail != '')
            {
            	document.getElementById(divname).innerHTML = inml;
            }
          	else
          	{
          		document.getElementById(divname).innerHTML = unml;
          	}
            }
			}
function check(formname)
{
 reg = new RegExp("^[a-zA-Z0-9\-\.\_]+\@[a-zA-Z0-9\-\.]+(\\.)+([a-zA-Z]{2,4})$","gi");
 if (document.getElementById(formname).email.value == '')
  {
       alert("E-mail 欄位不能為空白喔！");
       document.getElementById(formname).email.focus();
       return false;
  }
 if (!reg.test(document.getElementById(formname).email.value))
  {
       alert("E-mail 輸入錯誤！");
       document.getElementById(formname).email.focus();
       return false;
  }
 if (document.getElementById(formname).authinput.value == '')
  {
       alert("驗證碼欄位不能為空白喔！");
       document.getElementById(formname).authinput.focus();
       return false;
  }
  if (document.getElementById(formname).authinput.value != document.getElementById(formname).authnum.value)
  {
       alert("驗證碼輸入錯誤！");
       document.getElementById(formname).authinput.focus();
       return false;
  }

   return true;
}
