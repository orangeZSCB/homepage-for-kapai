// Typed.js
  const options = {
    strings: [
          "是 一只卡牌~",
          "是 MtF 🏳️‍⚧️",
          "的爱好是吃电子补佳乐（误 🍥",
          "......?"
    ],
    typeSpeed: 100,
    loop: true,
    startDelay: 500,
  };

  const typed = new Typed('#typed', options);

// 随机年龄
// 使用 Fitten Code 人工智能编写
document.addEventListener('DOMContentLoaded', function () {
  let timer;  // 声明一个变量来保存定时器ID
  function updateRandomAge() {
    var randomAge = Math.random() * (65.514 - 2.5) + 2.5;
    document.getElementById("randomAge").textContent = randomAge.toFixed(3); // 如果你想保留1位小数
    clearTimeout(timer);  // 清除之前的定时器
    timer = setTimeout(updateRandomAge, 50);  // 更新定时器
  }

  updateRandomAge();  // 首次调用
});
