switch(true) {
    case url.search(/u.md|www.qishu.cc\/$|iqdb.org/) > -1:
        O(document.getElementsByTagName('a'))
        if (url.search(/iqdb.org/) > -1) {
            setTimeout(function() {
                C()
            }, 180 * 1000);
            if (url.search(/webp$/) > -1) {
                location.href = url.split(/(\.webp|%40)/)[0];
            }
        }
        break;
    case url.search(/^https:\/\/i\d.hdslb.com/) > -1:
        location.href = 'https://iqdb.org/?url=' + url;
        break;
    case url.search(/mahjong.pub\/\?cid=\d+#!ranking|nodocchi.moe/) > -1:
        setTimeout(function() {
            location.reload();
        }, 5 * 60 * 1000);
        break;
    case url.search(/post.php$/) > -1 || url.search(/yuuyuyuko|yande.re|(bmp|gif|jpe?g|png|webp)$/) === -1 && title.search(/安全性錯誤|百度知道 - 信息提示|403|404|502|(链接|页面)不存在|Login|Register - Zerochan|Image not available/) > -1 || document.body.innerHTML.search(/间隔6小时0分钟0秒|This post was deleted.|update your account settings/) > -1:
        C()
        break;
    case url.search(/extra=#pid\d+$/) > -1:
        setTimeout(function() {
            C()
        }, 10 * 1000);
        break;
    case url.search(/image(:|\/)\d+/) > -1:
        onmouseup = function() {
            setTimeout(function() {
                C()
            }, 5 * 1000);
        };
        break;
    case url.search(/pan.baidu.com\/s|(posts\/|post\/show\/|post&s=view&id=|www.zerochan.net\/|view_post\/)\d+|hentaidude.com\/|(bmp|gif|jpe?g|png|webp)$|txt\/\d+.html/) > -1 && url.search(/init|path/) === -1:
        onmouseup = function() {
            if (event.button === 2) {
                setTimeout(function() {
                    C()
                }, 2 * 1000);
            }
        };
        break;
    case url.search(/^https:\/\/www.baidu.com\/$/) > -1:
        document.getElementsByTagName('img')[0].setAttribute('src', 'https://s1.ax1x.com/2018/04/15/CZXxG4.gif');
        break;
    case url.search(/pan.baidu.com/) > -1:
        e[0] = document.createElement('div');
        e[0].style = 'position:fixed; left:1660px; top:190px; width:210px; border:solid 1px rgba(249, 204, 226, .6)';
        e[0].innerHTML = title.split(/_免费/)[0];
        break;
    case url.search(/github.com/) > -1:
        if (url.search(/login/) > -1) {
            document.getElementById('login_field').value = u[1];
            document.getElementById('password').value = p[0];
            document.getElementsByClassName('commit')[0].click();
        }
        if (url.search(/delete/) > -1) {
            document.getElementById('sudo_password').value = p[0];
            document.getElementsByClassName('btn btn-block btn-primary')[0].click();
        }
        break;
    case url.search(/www.z4a.net\/login/) > -1:
        document.getElementsByName('login-subject')[0].value = u[1];
        document.getElementsByName('password')[0].value = p[0];
        document.getElementsByClassName('cursor-pointer icon-input-submit')[0].click();
        break;
    case url.search(/^http:\/\/www.allcpp.cn\/$/) > -1:
        document.getElementById('l-user-id').value = u[2];
        document.getElementById('l-user-pd').value = p[1];
        document.getElementById('l-user-login').click();
        break;
    case url.search(/bilibili.com/) > -1:
        if (url.search(/login/) > -1) {
            setTimeout(function() {
                document.getElementById('login-username').value = u[2] + ' ';
            }, 4 * 1000);
            document.getElementById('login-username').onkeyup = function() {
                document.getElementById('login-passwd').value = p[1] + ' ';
            };
            CK('keep-login')
            document.getElementsByClassName('icon-input-submit')[0].click();
        }
        break;
    case url.search(/www.tsdm/) > -1:
        if (url.search(/member.php\?mod=logging&action=login/) > -1) {
            document.getElementsByName('username')[0].value = u[0];
            document.getElementsByName('password')[0].value = p[0];
            CKN('cookietime', 0)
        }
        if (url.search(/forum.php\?mod=modcp&fid=125/) > -1) {
            document.getElementById('cppwd').value = p[0];
            document.getElementById('submit').click();
        }
        if (url.search(/home.php\?mod=space&do=pm&subop=view&touid=/) > -1) {
            document.getElementById('replymessage').value = '[color=#9030f0][/color]';
            document.getElementById('pmsubmit').onclick = function() {
                document.getElementById('replymessage').value = '[color=#9030f0][/color]';
            };
        }
        if (url.search(/mod=space&do=notice/) > -1 || title.search(/提示信息/) > -1) {
            setTimeout(function() {
                history.go(-1);
            }, 10 * 1000);
        }
        if (document.getElementById('myprompt').innerHTML.search(/提醒\(\d+\)/) > -1 && url.search(/mod=post&action=(newthread|reply)/) === -1) {
            new Audio('http://www.liuli.in/mp3/onj001.mp3').play();
            setTimeout(function() {
                location.reload();
            }, 60 * 1000);
            onmouseup = function() {
                if (event.button === 2) {
                    location.href = 'home.php?mod=space&do=notice';
                }
            };
        }
        break;
    case url.search(/tenhou.net\/cs\/edit/) > -1:
        onkeyup = function() {
            if (event.keyCode === 86) {
                if (document.getElementsByName('M')[1].value.search(/\[(IDLE|PLAY)\] /) > -1) {
                    document.getElementsByName('M')[1].value = e.value.replace(/\[(IDLE|PLAY)\] /g, '').replace(/ /g, '\n');
                }
            }
        };
        if (url.search(/OK|MEMBER%20NOT%20FOUND%0D%0A/) > -1) {
            history.go(-1);
        }
        CKN('RANDOMSTART', 0)
        document.getElementsByName('R0T')[0].value = '0000';
        v = parseInt(M) + 1 < 10 ? '0' + (parseInt(M) + 1) : parseInt(M) + 1;
        document.getElementsByName('R0')[0].value = y + v + d;
        document.getElementsByName('R1')[0].value = y + v + d;
        document.getElementsByName('R1T')[0].value = '0100';
        if (document.getElementsByName('T')[0].value === '第○○回　○○○○○杯') {
            document.getElementsByName('T')[0].value = '第○屆　盃';
            CKN('R2_00000008', 1)
            CKN('USECSR', 1)
            CKN('CSR_00004000', 1)
            CKN('CSR_00008000', 1)
            CKN('CSR_00040000', 1)
            document.getElementsByName('M')[0].value = '';
            for (i = 4; i < 7; i++) {
                document.getElementsByName('RCS_0' + i)[0].value = 10 * 10000;
            }
            for (i = 21; i < 36; i++) {
                document.getElementsByName('RCS_' + i)[0].value = 0;
            }
        }
        else {
            setTimeout(function() {
                window.scrollTo(0, 2655);
            }, 3 * 1000);
        }
        break;
    case url.search(/^https:\/\/majsoul.union-game.com\/#\//) > -1:
        document.getElementsByClassName('nav-link')[2].setAttribute('href', 'https://majsoul.union-game.com/0/v0.4.1.w/user_xieyi/1.txt');
        document.getElementsByClassName('nav-link')[2].setAttribute('target', '_blank');
        break;
    case url.search(/https:\/\/majsoul.union-game.com\/0\/v0.4.1.w\/user_xieyi\/1.txt/) > -1:
        e[0] = document.createElement('script');
        e[0].setAttribute('src', 'https://yuuyuyuko.github.io/uuz/dhs.js');
        setTimeout(function() {
            function F(a, b, c) {
                document.getElementById('cid').value = a;
                document.getElementById('c_round').value = b;
                document.getElementById('c_pw').value = c;
                init_all();
            }
            onkeyup = function() {
                if (event.keyCode === 90) {F(50, 1, 'tsdm')}
                if (event.keyCode === 81) {F(47, 1, 'hnfy')}
                if (event.keyCode === 87) {F(40, 13, 'fhxy')}
                if (event.keyCode === 69) {F(46, 1, 'dfbm2')}
                if (event.keyCode === 65) {F(45, 2, 'qlsqls')}
            };
        }, .5 * 1000);
        break;
}
