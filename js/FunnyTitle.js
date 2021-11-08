var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = 'ヽ(●-`Д´-)ノ';
        clearTimeout(titleTime);
    }
    else {
        document.title = 'ヾ(Ő∀Ő3)ノ' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});