/*
	@author Neruthes <i@neruthes.xyz>
	@copyright Copyright (C) 2020 Neruthes <i@neruthes.xyz>
	@license AGPL-3.0 https://www.gnu.org/licenses/agpl-3.0.html
    @repo https://github.com/neruthes/Scrlo
*/

(function(){
	if (document.querySelector('#uuid_cd101a8082fe4bb1b94efb131c7724dd')) {
		return 1;
	};

	window.uuid_cd101a8082fe4bb1b94efb131c7724dd_close = function () {
		window.uuid_cd101a8082fe4bb1b94efb131c7724dd = false;
		document.querySelector('#uuid_cd101a8082fe4bb1b94efb131c7724dd').remove();
	};
	window.uuid_cd101a8082fe4bb1b94efb131c7724dd_choose = function (e) {
		var src = e.target.getAttribute('data-src');
		var xhr = new XMLHttpRequest();
		xhr.open('GET', src);
		xhr.onload = function(){
			eval(xhr.responseText);
			console.log('Loaded: ' + src);
		};
		xhr.send();
	};

    window.conf_cd101a80 = window.conf_cd101a80 || 'https://gist.githubusercontent.com/neruthes/c46d0c63fec2fb4f8a30739150d8aa3f/raw/scrlo-config.json';
    (function (configUrl) {
        var xhr2 = new XMLHttpRequest();
        xhr2.open('GET', configUrl);
        xhr2.onload = function (e) {
            try {
                JSON.parse(e.target.responseText);
            } catch (e) {
                alert('Error: Cannot load config file. Maybe it is restricted by Content Security Policy?');
                return 1;
            };
            window.conf_dd101a80 = JSON.parse(e.target.responseText);
			var listOfScripts = window.conf_dd101a80.scripts.filter(function (script) {
				if (!script.match) {
					return true;
				} else {
					return !!location.href.match(new RegExp(script.match));
				};
			});
			console.log('listOfScripts', listOfScripts);
			window.listOfScripts = listOfScripts;
			listOfScripts.map(function (script) {
				var tag1 = document.createElement('link');
				var tag2 = document.createElement('link');
				tag1.setAttribute('rel', 'subresource');
				tag2.setAttribute('rel', 'prefetch');
				tag1.setAttribute('href', script.url);
				tag2.setAttribute('href', script.url);
				document.head.appendChild(tag1);
				document.head.appendChild(tag2);
			});

			var listHtml = listOfScripts.map(function (script, i) {
				return `<div class="uuid_cd101a8082fe4bb1b94efb131c7724dd-option">
					<div class="uuid_cd101a8082fe4bb1b94efb131c7724dd-option_inner" data-src="${script.url}">
						${script.name}
					</div>
				</div>`;
			}).join('');

			var modalTag = document.createElement('div');
			modalTag.setAttribute('id', 'uuid_cd101a8082fe4bb1b94efb131c7724dd');
			modalTag.setAttribute('style', `
				/*background: rgba(128, 128, 128, 0.4);*/
		        box-shadow: rgba(0, 0, 0, 0.08) 0 5px 20px 2px;
				position: fixed;
				z-index: 9999;
				top: 20px;
				right: 20px;
				width: calc(100vw - 40px);
		        max-width: 300px;
		        height: calc(100vh - 80px);
		        max-height: 500px;
				padding: 0px;
			`);
			modalTag.innerHTML = `
			<style>
			uuid_cd101a8082fe4bb1b94efb131c7724dd,
			#uuid_cd101a8082fe4bb1b94efb131c7724dd * {
				font-family: -apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif !important;
				color: #000 !important;
				line-height: 1.5 !important;
				box-sizing: border-box !important;
			}
			#uuid_cd101a8082fe4bb1b94efb131c7724dd-inner {
				font-family: -apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif !important;
				background: #FFF !important;
				border-radius: 8px !important;
		        width: calc(100vw - 40px) !important;
		        max-width: 300px !important;
		        height: calc(100vh - 80px) !important;
		        max-height: 500px !important;
				padding: 20px !important;
				margin: 0 auto !important;
				overflow: hidden !important;
			}
			#uuid_cd101a8082fe4bb1b94efb131c7724dd-header {
				color: #000 !important;
				background: #FFF !important;
				padding: 0px 0 25px !important;
			}
			#uuid_cd101a8082fe4bb1b94efb131c7724dd-h1 {
				font-size: 22px !important;
				font-weight: 600 !important;
				color: #000 !important;
				background: #FFF !important;
				padding: 0 !important;
				margin: 0 !important;
			}
			#uuid_cd101a8082fe4bb1b94efb131c7724dd-list {
				color: #000 !important;
				background: #FFF !important;
				height: calc(100vh - 190px) !important;
				overflow: auto !important;
			}
			.uuid_cd101a8082fe4bb1b94efb131c7724dd-option {
				color: #000 !important;
				background: #FFF !important;
				padding: 0 0 15px !important;
			}
			.uuid_cd101a8082fe4bb1b94efb131c7724dd-option_inner {
				font-size: 20px !important;
				font-weight: 400 !important;
				background: #FFF !important;
				border: 1px solid #DDD !important;
				border-radius: 4px !important;
				padding: 10px !important;
				cursor: pointer !important;
			}
			.uuid_cd101a8082fe4bb1b94efb131c7724dd-option_inner:hover,
			.uuid_cd101a8082fe4bb1b94efb131c7724dd-option_inner:active {
				background: #F5F5F5 !important;
				border: 1px solid #AAA !important;
			}
			</style>
			<div id="uuid_cd101a8082fe4bb1b94efb131c7724dd-inner">
				<div id="uuid_cd101a8082fe4bb1b94efb131c7724dd-header">
					<span style="
						font-size: 22px;
						font-weight: 900;
						float: right;
		                margin: 0px 0 0;
						cursor: pointer;
					" onclick="window.uuid_cd101a8082fe4bb1b94efb131c7724dd_close()">╳</span>
					<h1 id="uuid_cd101a8082fe4bb1b94efb131c7724dd-h1">Choose Script</h1>
				</div>
				<div id="uuid_cd101a8082fe4bb1b94efb131c7724dd-list">
					${listHtml}
				</div>
			</div>`;
			document.body.appendChild(modalTag);
			document.querySelectorAll('.uuid_cd101a8082fe4bb1b94efb131c7724dd-option_inner').forEach(function (node) {
				node.addEventListener('click', window.uuid_cd101a8082fe4bb1b94efb131c7724dd_choose);
			});
        };
        xhr2.send();
    })(window.conf_cd101a80);
})();
