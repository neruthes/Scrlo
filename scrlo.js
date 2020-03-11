/*
	@author Neruthes <i@neruthes.xyz>
	@copyright Copyright (C) 2020 Neruthes <i@neruthes.xyz>
	@license AGPL-3.0 https://www.gnu.org/licenses/agpl-3.0.html
    @repo https://github.com/neruthes/Scrlo
	@version 0.2.0
*/

(function(){
	window.SKgMCCj1j4Vj_close = function () {
		document.querySelector('#SKgMCCj1j4Vj').style.opacity = '0';
		setTimeout(function () {
			document.querySelector('#SKgMCCj1j4Vj').remove();
		}, 355);
	};
	if (document.querySelector('#SKgMCCj1j4Vj')) {
		window.SKgMCCj1j4Vj_close();
		return 1;
	};
	window.SKgMCCj1j4Vj_choose = function (e) {
		if (e.target.getAttribute('data-script-id') !== 'undefined') {
			window.SKgMCCj1j4Vj_run_std(e.target.getAttribute('data-script-id'));
		} else {
			window.SKgMCCj1j4Vj_run_hotload(e.target.getAttribute('data-src'));
		};
	};
	window.SKgMCCj1j4Vj_run_std = function (scriptId) {
		window[`uuid_${id}_func`]();
	};
	window.SKgMCCj1j4Vj_run_hotload = function (url) {
		var optionNode = document.querySelector(`[data-src="${url}"]`) || { setAttribute: function () {} };
		if (url.indexOf('javascript:') === 0) {
			eval(url.slice(11));
			return 0;
		};
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.onload = function(){
			setTimeout(function () {
				optionNode.setAttribute('data-loading', 'false');
			}, 300);
			eval(xhr.responseText);
			console.log('[Scrlo] Executed: ' + url);
		};
		xhr.send();
		optionNode.setAttribute('data-loading', 'true');
		setTimeout(function () {
			optionNode.setAttribute('data-loading', 'false');
		}, 1200);
	};
	window.SKgMCCj1j4Vj_render = function () {
		console.log('EXEC: SKgMCCj1j4Vj_render');
		if (document.querySelector('#SKgMCCj1j4Vj')) {
			document.querySelector('#SKgMCCj1j4Vj').remove();
		};
		var isAuto = function (scriptObj) {
			if (!scriptObj.auto || scriptObj.auto.length === 0) {
				return false;
			};
			for (var i = 0; i < scriptObj.auto.length; i++) {
				if (location.href.match(new RegExp(scriptObj.auto[i]))) {
					return true;
				};
			};
		};
		var listOfScripts = window.conf_dd101a80_obj.scripts.filter(function (scriptObj) {
			if (!scriptObj.match || isAuto(scriptObj)) {
				return true;
			} else {
				return !!location.href.match(new RegExp(scriptObj.match));
			};
		});
		console.log('[Scrlo] var listOfScripts', listOfScripts);
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
				<div class="SKgMCCj1j4Vj-option_inner" data-script-id="${ script.id || 'undefined' }" data-src="${script.url}" data-wildcard-match="${ script.match ? 'false' : 'true' }">
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
			width: auto !important;
			min-width: 240px;
			height: calc(100vh - 80px);
			max-height: 500px;
			padding: 0px;
			transition: opacity 350ms ease;
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
			width: auto !important;
			min-width: 240px !important;
			height: calc(100vh - 80px) !important;
			max-height: 500px !important;
			padding: 20px 5px 20px 20px !important;
			margin: 0 auto !important;
			overflow: hidden !important;
		}
		#SKgMCCj1j4Vj-header {
			color: #000 !important;
			background: #FFF !important;
			padding: 0 15px 15px 0 !important;
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
			-webkit-user-select: none;
			user-select: none;
		}
		.SKgMCCj1j4Vj-option {
			color: #000 !important;
			background: #FFF !important;
			padding: 0 15px 15px 0 !important;
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
					color: #000 !important;
					background: #FFF !important;
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

		window.SKgMCCj1j4Vj_runAllAutoRun = function () { // Autorun after all std scripts are loaded
			var autoScripts = window.conf_dd101a80_obj.scripts.filter(function (scriptObj) {
				return isAuto(scriptObj);
			});
			console.log('[Scrlo] var autoScripts', autoScripts);
			if (!window.SKgMCCj1j4Vj_firstrun) {
				window.SKgMCCj1j4Vj_firstrun = true;
				autoScripts.map(function (scriptObj) {
					console.log(`[Scrlo] Automatically executing: ${scriptObj.url}`);
					document.querySelector(`[data-src="${scriptObj.url}"]`).click();
				});
			};
		};

		// Prerun all std scripts (width "id" field)
		var prerunScripts = window.conf_dd101a80_obj.scripts.filter(function (scriptObj) {
			return !!(typeof scriptObj.id === 'string');
		});
		window.conf_dd101a80_std_scripts_count = prerunScripts.length;
		window.conf_dd101a80_std_scripts_progress = 0;
		prerunScripts.map(function (scriptObj) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', scriptObj.url);
			xhr.onload = function (e) {
				eval(e.target.responseText);
				window.conf_dd101a80_std_scripts_progress++;
				console.log(`Loaded std script [${scriptObj.id}]: ${scriptObj.url}`);
				if (window.conf_dd101a80_std_scripts_progress === window.conf_dd101a80_std_scripts_count) {
					console.log('Loaded all std scripts.');
					window.SKgMCCj1j4Vj_runAllAutoRun();
				};
			};
			xhr.send();
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
				console.log('[Scrlo] Loading config from localStorage.');
				try {
					window.conf_dd101a80_obj = JSON.parse(localStorage['lskey_R7Cbnr7n9aYT_conf'].split('||')[1]);
					window.SKgMCCj1j4Vj_render();
					return 0;
				} catch (e) {
				};
			};
		};
		localStorage.removeItem('lskey_R7Cbnr7n9aYT_conf');
		console.log('[Scrlo] Loading config from remote.');
		window.SKgMCCj1j4Vj_forceLoadRemoteConfig();
		return 0;
    })(window.SopMbn8);
})();
