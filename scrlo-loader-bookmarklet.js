/*
	@author Neruthes <i@neruthes.xyz>
	@copyright Copyright (C) 2020 Neruthes <i@neruthes.xyz>
	@license AGPL-3.0 https://www.gnu.org/licenses/agpl-3.0.html
    @repo https://github.com/neruthes/Scrlo
    @usage_guide Minify this file and use it as a bookmarklet.
*/

(function(x, m, s, u) {
    window.conf_cd101a80 = u;
    var d = function () {
        x.open('GET', 'https://raw.githubusercontent.com/neruthes/Scrlo/master/scrlo.js');
        // x.open('GET', 'https://neruthes.xyz/Scrlo/scrlo.js');
        // x.open('GET', 'http://me.local:8000/scrlo.js');
        x.onload = function() {
            var t = x.responseText;
            localStorage.WdYRDeF5T = Date.now() + m + t;
            eval(t);
        };
        x.send();
    };
    if (s && Date.now() - parseInt(s.split(m)[0]) < 120000) {
        try {
            console.log(s);
            eval(s.replace(/\d+\|/, ''));
            return 5;
        } catch {
            d();
        }
    } else {
        d();
    }
})(
    new XMLHttpRequest(), '|', localStorage.WdYRDeF5T,
    'https://raw.githubusercontent.com/neruthes/Scrlo/master/config-example.json'
)
