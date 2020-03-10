/*
	@author Neruthes <i@neruthes.xyz>
	@copyright Copyright (C) 2020 Neruthes <i@neruthes.xyz>
	@license AGPL-3.0 https://www.gnu.org/licenses/agpl-3.0.html
    @repo https://github.com/neruthes/Scrlo
	@version 0.2.0
*/

(function(){
	window.SKgMCCj1j4Vj_close = function () {
		window.SKgMCCj1j4Vj = false;
		document.querySelector('#SKgMCCj1j4Vj').remove();
	};
	if (document.querySelector('#SKgMCCj1j4Vj')) {
		window.SKgMCCj1j4Vj_close()
		return 1;
	};
	window.SKgMCCj1j4Vj_choose = function (e) {
		var src = e.target.getAttribute('data-src');
		var xhr = new XMLHttpRequest();
		e.target.setAttribute('data-loading', 'true');
		xhr.open('GET', src);
		xhr.onload = function(){
			setTimeout(function () {
				e.target.setAttribute('data-loading', 'false');
			}, 300);
			eval(xhr.responseText);
			console.log('Loaded: ' + src);
		};
		xhr.send();
		setTimeout(function () {
			e.target.setAttribute('data-loading', 'false');
		}, 1200);
	};
	window.SKgMCCj1j4Vj_render = function () {
		var listOfScripts = window.conf_dd101a80_obj.scripts.filter(function (script) {
			if (!script.match) {
				return true;
			} else {
				return !!location.href.match(new RegExp(script.match));
			};
		});
		console.log('listOfScripts', listOfScripts);
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
			return `<div class="SKgMCCj1j4Vj-option">
				<div class="SKgMCCj1j4Vj-option_inner" data-src="${script.url}" data-wildcard-match="${ script.match ? 'false' : 'true' }">
					${script.name}
				</div>
			</div>`;
		}).join('');

		var modalTag = document.createElement('div');
		modalTag.setAttribute('id', 'SKgMCCj1j4Vj');
		modalTag.setAttribute('style', `
			border-radius: 8px;
			box-shadow: rgba(0, 0, 0, 0.12) 0 8px 25px 4px;
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
		SKgMCCj1j4Vj,
		#SKgMCCj1j4Vj * {
			font-family: -apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif !important;
			color: #000 !important;
			line-height: 1.5 !important;
			box-sizing: border-box !important;
		}
		#SKgMCCj1j4Vj-inner {
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
		#SKgMCCj1j4Vj-header {
			color: #000 !important;
			background: #FFF !important;
			padding: 0px 0 15px !important;
		}
		#SKgMCCj1j4Vj-h1 {
			font-size: 22px !important;
			font-weight: 600 !important;
			color: #000 !important;
			background: #FFF !important;
			border: none;
			padding: 0 !important;
			margin: 0 !important;
		}
		#SKgMCCj1j4Vj-list {
			color: #000 !important;
			background: #FFF !important;
			height: calc(100vh - 190px) !important;
			overflow: auto !important;
		}
		.SKgMCCj1j4Vj-option {
			color: #000 !important;
			background: #FFF !important;
			padding: 0 0 15px !important;
		}
		.SKgMCCj1j4Vj-option_inner {
			font-size: 18px !important;
			font-weight: 400 !important;
			background: #FFF !important;
			border: 1px solid #DDD !important;
			border-radius: 4px !important;
			padding: 6px 10px !important;
			cursor: pointer;
		}
		.SKgMCCj1j4Vj-option_inner[data-loading="true"] {
			opacity: 0.4 !important;
			cursor: not-allowed !important;
		}
		.SKgMCCj1j4Vj-option_inner[data-loading="false"] {}
		.SKgMCCj1j4Vj-option_inner[data-wildcard-match="true"]::before {
			content: "* ";
			font-family: 'JetBrains Mono', 'Menlo', monospace !important;
			font-size: inherit !important;
			opacity: 0.5 !important;
		}
		.SKgMCCj1j4Vj-option_inner:hover,
		.SKgMCCj1j4Vj-option_inner:active {
			background: #F5F5F5 !important;
			border: 1px solid #AAA !important;
		}
		</style>
		<div id="SKgMCCj1j4Vj-inner">
			<div id="SKgMCCj1j4Vj-header">
				<span style="
					font-size: 22px;
					font-weight: 900;
					float: right;
					margin: 0px 0 0;
					cursor: pointer;
				" onclick="window.SKgMCCj1j4Vj_close()">╳</span>
				<h1 id="SKgMCCj1j4Vj-h1"><a href="https://github.com/neruthes/Scrlo" style="color: inherit !important; text-decoration: none !important; background: #FFF !important;">Scrlo</a></h1>
			</div>
			<div id="SKgMCCj1j4Vj-list">
				${listHtml}
			</div>
		</div>`;
		document.body.appendChild(modalTag);
		document.querySelectorAll('.SKgMCCj1j4Vj-option_inner').forEach(function (node) {
			node.addEventListener('click', window.SKgMCCj1j4Vj_choose);
		});
	};

	window.SKgMCCj1j4Vj_forceLoadRemoteConfig = function () {
		var xhr2 = new XMLHttpRequest();
        xhr2.open('GET', window.SopMbn8);
        xhr2.onload = function (e) {
            try {
                JSON.parse(e.target.responseText);
            } catch (e) {
                alert('Error: Cannot load config file. Maybe it is restricted by Content Security Policy?');
                return 1;
            };
			window.conf_dd101a80_obj = JSON.parse(e.target.responseText);
			// Cache config file for 300 seconds for the same website
			localStorage['lskey_R7Cbnr7n9aYT_conf'] = [
				Date.now().toString(),
				JSON.stringify(window.conf_dd101a80_obj)
			].join('||');
			// Render
			window.SKgMCCj1j4Vj_render();
        };
        xhr2.send();
	};
    window.SopMbn8 = window.SopMbn8 || 'https://gist.githubusercontent.com/neruthes/c46d0c63fec2fb4f8a30739150d8aa3f/raw/scrlo-config.json';
    (function (configUrl) {
		if (localStorage['lskey_R7Cbnr7n9aYT_conf']) { // Cache exists
			var cacheTime = parseInt(localStorage['lskey_R7Cbnr7n9aYT_conf'].split('||')[0]);
			var currentTime = Date.now();
			if (currentTime - cacheTime < 300000) { // 300 seconds
				console.log('Loading config from localStorage.');
				window.conf_dd101a80_obj = JSON.parse(localStorage['lskey_R7Cbnr7n9aYT_conf'].split('||')[1]);
				window.SKgMCCj1j4Vj_render();
				return 0;
			} else {
				console.log('Loading config from remote.');
				window.SKgMCCj1j4Vj_forceLoadRemoteConfig();
				return 0;
			}
		} else {
			console.log('Loading config from remote.');
			window.SKgMCCj1j4Vj_forceLoadRemoteConfig();
			return 0;
		};
    })(window.SopMbn8);
})();
