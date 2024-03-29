url = `https://linux.pescadogames.com/assets/json/status.json`;
act = "act";
pro = "pro";

// ブラウザの言語を取得する
var lang = (navigator.language) ? navigator.language : navigator.userLanguage;
// ただし、どちらのプロパティにも対応していないブラウザではundefinedになる

if (lang === undefined)
    lang = "ja"; // 不明のときは日本語と見なす

if (lang.toLowerCase().indexOf("ja") !== -1) {
    statusactive = "正常";
    statusproblem = "問題発生";
    statusupdating = "更新作業中"
    statusbroken = "崩壊中";
    statusendofservice = "サービス終了";
    statusallactive = "すべてのサービスは正常に動作しています！";
    statusallproblem = "一部のサービスで問題が発生しています";
}
else {
    statusactive = "Working";
    statusproblem = "Problem";
    statusupdating = "Updating"
    statusbroken = "Broken";
    statusendofservice = "End of Service";
}

$.getJSON(url, (data) => {
    /* ↓WebSite */
    /* GitHubPagesStatus(Repository) */
    if (data.githubpagesstatus == "act") {
        var elm = document.getElementById('githubpagesstatus');
        elm.textContent = statusactive;
    }
    else if (data.githubpagesstatus == "pro") {
        var elm = document.getElementById('githubpagesstatus');
        elm.textContent = statusproblem;
        $('.githubpagesstatus').addClass('statusproblem');
        $('.githubpagesstatus').addClass('allservicestatusproblem');
        $('.githubpagesstatus').next(".problempagebutton").addClass('problempagebuttonshow');
        $('.githubpagesstatus').next(".problempagebutton").attr('href', data.displayproblempage);
    }
    else {
        var elm = document.getElementById('githubpagesstatus');
        elm.textContent = statusbroken;
        $('.githubpagesstatus').addClass('statusstop');
        $('.githubpagesstatus').addClass('allservicestatusproblem');
        $('.githubpagesstatus').next(".problempagebutton").addClass('problempagebuttonshow');
        $('.githubpagesstatus').next(".problempagebutton").attr('href', data.displayproblempage);
    }

    /* DisplayStatus */
    if (data.displaystatus == "act") {
        var elm = document.getElementById('displaystatus');
        elm.textContent = statusactive;
    }
    else if (data.displaystatus == "pro") {
        var elm = document.getElementById('displaystatus');
        elm.textContent = statusproblem;
        $('.displaystatus').addClass('statusproblem');
        $('.displaystatus').addClass('allservicestatusproblem');
        $('.displaystatus').next(".problempagebutton").addClass('problempagebuttonshow');
        $('.displaystatus').next(".problempagebutton").attr('href', data.displayproblempage);
    }
    else {
        var elm = document.getElementById('displaystatus');
        elm.textContent = statusbroken;
        $('.displaystatus').addClass('statusstop');
        $('.displaystatus').next(".problempagebutton").addClass('problempagebuttonshow');
        $('.displaystatus').next(".problempagebutton").attr('href', data.displayproblempage);
    }

    if (data.githubpagesstatus == "act") {
        if (data.displaystatus == "act") {
            var elm = document.getElementById('websitestatus');
            elm.textContent = statusactive;
        }
        else {
            var elm = document.getElementById('websitestatus');
            elm.textContent = statusproblem;
            $('.websitestatus').addClass('statusproblem');
        }
    }
    else {
        var elm = document.getElementById('websitestatus');
        elm.textContent = statusproblem;
        $('.websitestatus').addClass('statusproblem');
    }
    /* ↑WebSite */

    /* ↓PGBOT */
    /* Server */
    if (data.pgbotserverstatus == "act") {
        var elm = document.getElementById('pgbotserverstatus');
        elm.textContent = statusactive;
    }
    else if (data.pgbotserverstatus == "pro") {
        var elm = document.getElementById('pgbotserverstatus');
        elm.textContent = statusproblem;
        $('.pgbotserverstatus').addClass('statusproblem');
        $('.pgbotserverstatus').addClass('allservicestatusproblem');
        $('.pgbotserverstatus').next(".problempagebutton").addClass('problempagebuttonshow');
        $('.pgbotserverstatus').next(".problempagebutton").attr('href', data.pgbotserverproblempage);
    }
    else {
        var elm = document.getElementById('pgbotserverstatus');
        elm.textContent = statusbroken;
        $('.pgbotserverstatus').addClass('statusstop');
        $('.pgbotserverstatus').addClass('allservicestatusproblem');
        $('.pgbotserverstatus').next(".problempagebutton").addClass('problempagebuttonshow');
        $('.pgbotserverstatus').next(".problempagebutton").attr('href', data.pgbotserverproblempage);
    }

    /* PGBOTRepository */
    if (data.pgbotrepository == "act") {
        var elm = document.getElementById('pgbotrepositorystatus');
        elm.textContent = statusactive;
    }
    else if (data.pgbotrepository == "pro") {
        var elm = document.getElementById('pgbotrepositorystatus');
        elm.textContent = statusproblem;
        $('.pgbotrepositorystatus').addClass('statusproblem');
        $('.pgbotrepositorystatus').addClass('allservicestatusproblem');
        $('.pgbotrepositorystatus').next(".problempagebutton").addClass('problempagebuttonshow');
        $('.pgbotrepositorystatus').next(".problempagebutton").attr('href', data.pgbotrepositoryproblempage);
    }
    else {
        var elm = document.getElementById('pgbotrepositorystatus');
        elm.textContent = statusbroken;
        $('.pgbotrepositorystatus').addClass('statusstop');
        $('.pgbotrepositorystatus').addClass('allservicestatusproblem');
        $('.pgbotrepositorystatus').next(".problempagebutton").addClass('problempagebuttonshow');
        $('.pgbotrepositorystatus').next(".problempagebutton").attr('href', data.pgbotrepositoryproblempage);
    }

    /* PGBOTReponse */
    if (data.pgbotresponse == "act") {
        var elm = document.getElementById('pgbotresponsestatus');
        elm.textContent = statusactive;
    }
    else if (data.pgbotresponse == "pro") {
        var elm = document.getElementById('pgbotresponsestatus');
        elm.textContent = statusproblem;
        $('.pgbotresponsestatus').addClass('statusproblem');
        $('.pgbotresponsestatus').addClass('allservicestatusproblem');
        $('.pgbotresponsestatus').next(".problempagebutton").addClass('problempagebuttonshow');
        $('.pgbotresponsestatus').next(".problempagebutton").attr('href', data.pgbotresponseproblempage);
    }
    else {
        var elm = document.getElementById('pgbotresponsestatus');
        elm.textContent = statusbroken;
        $('.pgbotresponsestatus').addClass('statusstop');
        $('.pgbotresponsestatus').addClass('allservicestatusproblem');
        $('.pgbotresponsestatus').next(".problempagebutton").addClass('problempagebuttonshow');
        $('.pgbotresponsestatus').next(".problempagebutton").attr('href', data.pgbotresponseproblempage);
    }

    /* PGBOTGBC */
    if (data.pgbotgbc == "act") {
        var elm = document.getElementById('pgbotgbcstatus');
        elm.textContent = statusactive;
    }
    else if (data.pgbotgbc == "pro") {
        var elm = document.getElementById('pgbotgbcstatus');
        elm.textContent = statusproblem;
        $('.pgbotgbcstatus').addClass('statusproblem');
        $('.pgbotgbcstatus').addClass('allservicestatusproblem');
        $('.pgbotgbcstatus').next(".problempagebutton").addClass('problempagebuttonshow');
        $('.pgbotgbcstatus').next(".problempagebutton").attr('href', data.pgbotgbcproblempage);
    }
    else {
        var elm = document.getElementById('pgbotgbcstatus');
        elm.textContent = statusbroken;
        $('.pgbotgbcstatus').addClass('statusstop');
        $('.pgbotgbcstatus').addClass('allservicestatusproblem');
        $('.pgbotgbcstatus').next(".problempagebutton").addClass('problempagebuttonshow');
        $('.pgbotgbcstatus').next(".problempagebutton").attr('href', data.pgbotgbcproblempage);
    }

    if (data.pgbotserverstatus == "act") {
        if (data.pgbotrepository == "act") {
            if (data.pgbotresponse == "act") {
                if (data.pgbotgbc == "act") {
                    var elm = document.getElementById('pgbotstatus');
                    elm.textContent = statusactive;
                }
                else {
                    var elm = document.getElementById('pgbotstatus');
                    elm.textContent = statusproblem;
                    $('.pgbotstatus').addClass('statusproblem');
                }
            }
            else {
                var elm = document.getElementById('pgbotstatus');
                elm.textContent = statusproblem;
                $('.pgbotstatus').addClass('statusproblem');
            }
        }
        else {
            var elm = document.getElementById('pgbotstatus');
            elm.textContent = statusproblem;
            $('.pgbotstatus').addClass('statusproblem');
        }
    }
    else {
        var elm = document.getElementById('pgbotstatus');
        elm.textContent = statusproblem;
        $('.pgbotstatus').addClass('statusproblem');
    }
    /* ↑PGBOT */

    /* ↓PescadoGamesLauncher */
    /* PescadoGamesLauncherServerDownloadAndInstall */
    if (data.serverstatus == "act") {
        var elm = document.getElementById('serverstatus');
        elm.textContent = statusactive;
    }
    else if (data.serverstatus == "pro") {
        var elm = document.getElementById('serverstatus');
        elm.textContent = statusproblem;
        $('.serverstatus').addClass('statusproblem');
        $('.serverstatus').addClass('allservicestatusproblem');
        $('.serverstatus').next(".problempagebutton").addClass('problempagebuttonshow');
        $('.serverstatus').next(".problempagebutton").attr('href', data.serverproblempage);
    }
    else {
        var elm = document.getElementById('serverstatus');
        elm.textContent = statusbroken;
        $('.serverstatus').addClass('statusstop');
        $('.serverstatus').addClass('allservicestatusproblem');
        $('.serverstatus').next(".problempagebutton").addClass('problempagebuttonshow');
        $('.serverstatus').next(".problempagebutton").attr('href', data.serverproblempage);
    }

    /* PescadoGamesLauncherWebSiteShow */
    if (data.websiteviewstatus == "act") {
        var elm = document.getElementById('websiteviewstatus');
        elm.textContent = statusactive;
    }
    else if (data.websiteviewstatus == "pro") {
        var elm = document.getElementById('websiteviewstatus');
        elm.textContent = statusproblem;
        $('.websiteviewstatus').addClass('statusproblem');
        $('.websiteviewstatus').addClass('allservicestatusproblem');
        $('.websiteviewstatus').next(".problempagebutton").addClass('problempagebuttonshow');
        $('.websiteviewstatus').next(".problempagebutton").attr('href', data.websiteviewsproblempage);
    }
    else {
        var elm = document.getElementById('websiteviewstatus');
        elm.textContent = statusbroken;
        $('.websiteviewstatus').addClass('statusstop');
        $('.websiteviewstatus').addClass('allservicestatusproblem');
        $('.websiteviewstatus').next(".problempagebutton").addClass('problempagebuttonshow');
        $('.websiteviewstatus').next(".problempagebutton").attr('href', data.websiteviewsproblempage);
    }

    if (data.serverstatus == "act") {
        if (data.websiteviewstatus == "act") {
            var elm = document.getElementById('pescadogameslauncherstatus');
            elm.textContent = statusactive;
        }
        else {
            var elm = document.getElementById('pescadogameslauncherstatus');
            elm.textContent = statusproblem;
            $('.pescadogameslauncherstatus').addClass('statusproblem');
        }
    }
    else {
        var elm = document.getElementById('pescadogameslauncherstatus');
        elm.textContent = statusproblem;
        $('.pescadogameslauncherstatus').addClass('statusproblem');
    }

    if (data.githubpagesstatus == "act") {
        if (data.displaystatus == "act") {
            if (data.serverstatus == "act") {
                if (data.websiteviewstatus == "act") {
                    if (data.pgbotserverstatus == "act") {
                        if (data.pgbotrepository == "act") {
                            if (data.pgbotresponse == "act") {
                                if (data.pgbotgbc == "act") {
                                    var elem = document.getElementById('statusmark');
                                    elem.src = "https://linux.pescadogames.com/assets/image/StatusCheckMark.svg";
                                    var elm = document.getElementById('statustext');
                                    elm.textContent = statusallactive;
                                    $('.nowstatus').addClass('allok');
                                }
                                else {
                                    var elem = document.getElementById('statusmark');
                                    elem.src = "https://linux.pescadogames.com/assets/image/StatusDenger.svg";
                                    var elm = document.getElementById('statustext');
                                    elm.textContent = statusallproblem;
                                    $('.nowstatus').removeClass('allok');
                                    $('.nowstatus').addClass('allproblem');
                                }
                            }
                            else {
                                var elem = document.getElementById('statusmark');
                                elem.src = "https://linux.pescadogames.com/assets/image/StatusDenger.svg";
                                var elm = document.getElementById('statustext');
                                elm.textContent = statusallproblem;
                                $('.nowstatus').removeClass('allok');
                                $('.nowstatus').addClass('allproblem');
                            }
                        }
                        else {
                            var elem = document.getElementById('statusmark');
                            elem.src = "https://linux.pescadogames.com/assets/image/StatusDenger.svg";
                            var elm = document.getElementById('statustext');
                            elm.textContent = statusallproblem;
                            $('.nowstatus').removeClass('allok');
                            $('.nowstatus').addClass('allproblem');
                        }
                    }
                    else {
                        var elem = document.getElementById('statusmark');
                        elem.src = "https://linux.pescadogames.com/assets/image/StatusDenger.svg";
                        var elm = document.getElementById('statustext');
                        elm.textContent = statusallproblem;
                        $('.nowstatus').removeClass('allok');
                        $('.nowstatus').addClass('allproblem');
                    }
                }
                else {
                    var elem = document.getElementById('statusmark');
                    elem.src = "https://linux.pescadogames.com/assets/image/StatusDenger.svg";
                    var elm = document.getElementById('statustext');
                    elm.textContent = statusallproblem;
                    $('.nowstatus').removeClass('allok');
                    $('.nowstatus').addClass('allproblem');
                }
            }
            else {
                var elem = document.getElementById('statusmark');
                elem.src = "https://linux.pescadogames.com/assets/image/StatusDenger.svg";
                var elm = document.getElementById('statustext');
                elm.textContent = statusallproblem;
                $('.nowstatus').removeClass('allok');
                $('.nowstatus').addClass('allproblem');
            }
        }
        else {
            var elem = document.getElementById('statusmark');
            elem.src = "https://linux.pescadogames.com/assets/image/StatusDenger.svg";
            var elm = document.getElementById('statustext');
            elm.textContent = statusallproblem;
            $('.nowstatus').removeClass('allok');
            $('.nowstatus').addClass('allproblem');
        }
    }
    else {
        var elem = document.getElementById('statusmark');
        elem.src = "https://linux.pescadogames.com/assets/image/StatusDenger.svg";
        var elm = document.getElementById('statustext');
        elm.textContent = statusallproblem;
        $('.nowstatus').removeClass('allok');
        $('.nowstatus').addClass('allproblem');
    }
});
