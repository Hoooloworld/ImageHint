function linkClick ()
{
  // 保存上次点击按钮的下标
  var lastElement = null;
  // 动画对于的 class
  var classNames = ["tranDynamic", "rotateDynamic", "scaleDynamic", "skewDynamic"];

  var fig = document.getElementsByTagName ("figure");
  var menu = document.getElementById ("menu");
  var lis = menu.getElementsByTagName ("li");
  var figca = fig[0].getElementsByTagName ("figcaption");

  for (var i = 0, len = classNames.length; i < len; i++)
  {
    lis[i].onclick = (function (index, element)
    {
      return function ()
      {
        fig[0].className = classNames[index];
        lastElement = resetBgColor (element, lastElement);
      };
    })(i, lis[i]);
  }
}

// 重置切换后的按钮背景颜色
function resetBgColor (element, lastElement)
{
  if (lastElement !== null) {
    lastElement.style.backgroundColor = "";
  }
  element.style.backgroundColor = "#F79842";
  lastElement = element;
  return lastElement;
}

addLoadEvent (linkClick);
