<script type="text/javascript">
FB.init({
    appId: '538493282919996',
    status: true,
    cookie: true,
    xfbml: true,
    channelURL: 'http://dingpachan.github.io/test/', //
    oauth: true
});
function fbshare(v1,img){
	var cap=" 我投了"+v1+"一票呦~";
	FB.getLoginStatus(function (response) {
		if (response.status === 'connected') {
			sd(cap,img);
		} else {
			FB.login(function (response) {
				if (response.authResponse) {
							var uid = response.authResponse.userID;
							var accessToken = response.authResponse.accessToken;
					sd(cap,img);
				} else {
					alert('登入失敗!');
				}
			}, {
				scope: 'email,publish_stream'
			});
		}
	});	
}

function sd(cap,img){
	FB.ui(
		{ 
			method: 'feed',
			name: '台灣綠色莽原爭霸戰',
			link: 'http://hsiufeng.github.io/green/',
			picture: 'https://github.com/hsiufeng/green/school/'+img,
			caption: cap, 
			description: ' 向大自然致敬！台灣最有大自然氛圍的校園？森林、綠地、空曠、野生動物！？到底獎落誰家，由你來揭曉！ ', 
		}, 
			function(response) { 
			if (response && response.post_id) {
				alert('分享成功'); 
			} else { 
				alert('分享失敗');
			}
			FB.logout(function(response) {
			});
		} 
	);
}
</script>