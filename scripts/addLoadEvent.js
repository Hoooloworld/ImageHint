/*
 共享 onload 事件
*/
function addLoadEvent (func)
{
	var oldOnLoad = window.onload;
	if (typeof window.onload !== "function")
	{
		window.onload = func;
	}
	else
	{
		window.onload = function ()
		{
			oldOnLoad();
			func();
		}
	}
}