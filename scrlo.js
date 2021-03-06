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
		console.log('e.target', e.target);
		var domPtr = e.target;
		while (!domPtr.classList.contains('SKgMCCj1j4Vj-option_inner')) {
			domPtr = domPtr.parentElement;
		};
		console.log('domPtr', domPtr);
		if (domPtr.getAttribute('data-script-id') !== 'undefined' && domPtr.getAttribute('data-src').indexOf('javascript:') !== 0) { // Has "id" and is not inline script
			window.SKgMCCj1j4Vj_run_std(domPtr.getAttribute('data-script-id'));
		} else {
			window.SKgMCCj1j4Vj_run_hotload(domPtr.getAttribute('data-src'));
		};
	};
	window.SKgMCCj1j4Vj_run_std = function (scriptId) {
		console.log(`[EXEC] SKgMCCj1j4Vj_run_std`);
		console.log('scriptId', scriptId);
		window[`uuid_${scriptId}_func`]({invoker:'Scrlo'}, function (res, callback) {
			console.log(res);
			callback && callback();
		});
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
			if (xhr.status === 200 || xhr.status === 304) {
				if (xhr.responseText.slice(0, 1) !== '<') {
					eval(xhr.responseText);
				} else {
					console.log('XHR error', xhr);
				}
				console.log('[Scrlo] Executed: ' + url);
			} else {
				console.log('[Scrlo] Cannot load: ' + url + ` [Status ${xhr.status}]`);
			};
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
			// TODO: Judge by spqr.json instead of user config
			if (!scriptObj.auto || scriptObj.auto.length === 0) {
				return false; // No auto condition specified
			};
			for (var i = 0; i < scriptObj.auto.length; i++) {
				if (location.href.match(new RegExp(scriptObj.auto[i]))) {
					return true; // Yes when any auto condition is satisfied
				};
			};
		};
		var isListable = function (scriptObj) {
			// TODO: Judge by spqr.json instead of user config
			if (!scriptObj.match || isAuto(scriptObj)) {
				return true; // Is wildcard match or auto
			} else {
				// return !!location.href.match(new RegExp(scriptObj.match)); // Is matched with currrent URL
				for (var i = 0; i < scriptObj.match.length; i++) {
					if (location.href.match(new RegExp(scriptObj.match[i]))) {
						return true;
					};
				};
				return false;
			};
		};
		var listOfScripts = window.conf_dd101a80_obj.scripts.filter(function (scriptObj) {
			return isListable(scriptObj);
		}).map(function (scriptObj) {
			if (!scriptObj.spqr) {
				scriptObj.iconUrl = window.conf_dd101a80_obj.meta.icon_url_template.replace('{{ID}}', scriptObj.id);
				return scriptObj;
			} else {
				scriptObj.url = `https://neruthes.xyz/spqr/db/${scriptObj.id}/index.js`;
				scriptObj.iconUrl = `https://neruthes.xyz/spqr/db/${scriptObj.id}/icon.png`;
				return scriptObj;
				// return {
				// 	spqr: true,
				// 	id: scriptObj.id,
				// 	url: `https://neruthes.xyz/spqr/db/${scriptObj.id}/index.js`,
				// 	iconUrl: `https://neruthes.xyz/spqr/db/${scriptObj.id}/icon.png`
				// };
			};
		});
		window.SKgMCCj1j4Vj_listOfScripts = listOfScripts;
		window.SKgMCCj1j4Vj_spqr_metadata = {};
		console.log('[Scrlo] var listOfScripts', listOfScripts);
		listOfScripts.map(function (script) {
			var tag1 = document.createElement('link');
			var tag2 = document.createElement('link');
			var tag3 = document.createElement('link');
			var tag4 = document.createElement('link');
			tag1.setAttribute('rel', 'subresource');
			tag2.setAttribute('rel', 'prefetch');
			tag3.setAttribute('rel', 'subresource');
			tag4.setAttribute('rel', 'prefetch');
			tag1.setAttribute('href', script.url);
			tag2.setAttribute('href', script.url);
			tag3.setAttribute('href', script.iconUrl);
			tag4.setAttribute('href', script.iconUrl);
			document.head.appendChild(tag1);
			document.head.appendChild(tag2);
			document.head.appendChild(tag3);
			document.head.appendChild(tag4);
		});
		var listHtml = listOfScripts.map(function (scriptObj, i) {
			return `<div class="SKgMCCj1j4Vj-option">
				<div class="SKgMCCj1j4Vj-option_inner" data-script-id="${ scriptObj.id || 'undefined' }" data-src="${scriptObj.url}" data-wildcard-match="${ scriptObj.match ? 'false' : 'true' }" style="
					height: 44px !important;
					padding: 6px !important;
				">
					<span class="SKgMCCj1j4Vj-option_icon" style="
						background: rgba(0, 0, 0, 0) !important;
						display: block !important;
						float: left !important;
						width: 30px !important;
						height: 30px !important;
						margin: 0 8px 0 0;
					">
						<img class="SKgMCCj1j4Vj-option_icon_img" src="${scriptObj.iconUrl}" data-spqr="${scriptObj.spqr ? 'true' : 'false'}" style="
							background: rgba(0, 0, 0, 0) !important;
							display: block !important;
							width: 30px !important;
							height: 30px !important;
							border-radius: 3px !important;
						">
					</span>
					<span class="SKgMCCj1j4Vj-option_inner_text" style="
						color: #000 !important;
						background: rgba(0, 0, 0, 0) !important;
						display: block !important;
						line-height: 30px !important;
						height: 30px !important;
					">${scriptObj.name}</span>
				</div>
			</div>`;
		}).join('');

		var modalTag = document.createElement('div');
		modalTag.setAttribute('id', 'SKgMCCj1j4Vj');
		modalTag.setAttribute('style', `
			border-radius: 8px;
			box-shadow: rgba(0, 0, 0, 0.12) 0 8px 25px 4px;
			position: fixed;
			z-index: 2147483640;
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
			padding: 0 15px 10px 0 !important;
		}
		.SKgMCCj1j4Vj-option_inner {
			font-size: 16px !important;
			font-weight: 400 !important;
			background: #FFF !important;
			border: 1px solid #DDD !important;
			border-radius: 4px !important;
			min-width: 220px;
			cursor: pointer;
		}
		.SKgMCCj1j4Vj-option_inner[data-loading="true"] {
			opacity: 0.4 !important;
			cursor: not-allowed !important;
		}
		.SKgMCCj1j4Vj-option_inner[data-loading="false"] {}
		.SKgMCCj1j4Vj-option_inner[data-wildcard-match="true"] .SKgMCCj1j4Vj-option_inner_text::after {
			content: "*";
			font-family: 'JetBrains Mono', 'Menlo', monospace !important;
			font-size: 0.6em !important;
			vertical-align: top;
			margin-left: 4px !important;
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
		window.SKgMCCj1j4Vj_xhr_icon = [];
		document.querySelectorAll('.SKgMCCj1j4Vj-option img').forEach(function (node, i) {
			window.SKgMCCj1j4Vj_xhr_icon[i] = new XMLHttpRequest();
			window.SKgMCCj1j4Vj_xhr_icon[i].open('GET', node.src);
			window.SKgMCCj1j4Vj_xhr_icon[i].onload = function (e) {
				console.log(e);
				if (e.status == 404 || e.status == 403) {
					var defaultIconUrl = '';
					if (node.getAttribute('data-spqr') === true) {
						defaultIconUrl = 'https://neruthes.xyz/spqr/assets/_default_icon.png';
					} else {
						defaultIconUrl = window.conf_dd101a80_obj.meta.icon_url_template.replace('{{ID}}', '_default_icon');
					};
					node.setAttribute('src', defaultIconUrl);
				};
			};
			window.SKgMCCj1j4Vj_xhr_icon[i].send();
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

		// Prerun all std scripts (with "id" field) which match current URL
		// But excluding whose URLs start with "javascript:"
		var prerunScripts = window.conf_dd101a80_obj.scripts.filter(function (scriptObj) {
			return !!(typeof scriptObj.id === 'string');
		}).filter(function (scriptObj) {
			return isListable(scriptObj);
		}).filter(scriptObj => scriptObj.url.indexOf('javascript:') !== 0);
		window.SKgMCCj1j4Vj_prerunScripts = prerunScripts;
		window.conf_dd101a80_std_scripts_count = prerunScripts.length;
		window.conf_dd101a80_std_scripts_progress = 0;
		prerunScripts.map(function (scriptObj) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', scriptObj.url + '?t=' + Date.now());
			xhr.onload = function (e) {
				if (e.target.responseText.slice(0, 1) !== '<') {
					eval(e.target.responseText);
					console.log(`Loaded std script [${scriptObj.id}]: ${scriptObj.url}`);
				} else {
					console.log('XHR error', e.target);
				};
				window.conf_dd101a80_std_scripts_progress++;
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
