window.addEventListener('DOMContentLoaded', function() {
  // セリフデータの取得
  fetch('/json/hoikusi.json')
    .then(response => response.json())
    .then(data => {
      console.log(data.track1); // 'name'キーの文字列を取得
    });
});
