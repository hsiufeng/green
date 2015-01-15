function share_on_fb(pic, cap){
	FB.ui({
		method: 'share',
		name: '台灣綠色莽原爭霸戰'
		link: 'http://hsiufeng.github.io/green/index.htm',
		picture: 'http://hsiufeng.github.io/green/school/'+pic+'.jpg',
		caption: cap ,
		description: des
		},
		function(response) {
			if (response && response.post_id) {
			alert('Post was published.');
			} else {
			alert('Post was not published.');
			}
		}
	);
}