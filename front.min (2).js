

<!doctype html>
<html lang="">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>СтатГрад 2 &mdash; </title>
    <link rel="icon" type="image/png" href="/static/images/favicon.png"/>
    <style type="text/css" media="all">
      @import url("/static/font-awesome/css/font-awesome.css");
      
      @import url("/static/front.min.css");
      
    </style>

    <script type="text/javascript">
      (function() {
        window.isDebug = false;
        window.isMicrosite = false;
        window.micrositeDomain = false;
        window.micrositeId = false;
        window.is_authenticated = false;
      })(window);
    </script>

    
        <script data-main="/static/front.min.js" src="/static/assets/require/require.js"></script>
    
    <meta name="w1-verification" content="194077633220"/>
</head>
<body >


<div class="navbar navbar-fixed-top">
    <div class="navbar-inner">
        <div class="container-fluid">
            <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

            <a href="/" class="brand">СтатГрад</a>

            <div class="nav-collapse collapse">

            
                <form action="/#administrative" method="post" class="navbar-form pull-right">
                    <input type='hidden' name='csrfmiddlewaretoken' value='e6ADwLMdCcCNi2OYK4ZcDGofc7mlhOZX' />
                    <input type="hidden" name="is_top_login_form" value="true">
                    <div class="control-group ">
                    <input type="hidden" name="hash" value="" id="fld-hash"/>
                    <input
                            id="id_username"
                            type="text"
                            
                            name="username"
                            class="input-medium "
                            placeholder="логин статград"
                            />
                    <input
                            id="id_password"
                            type="password"
                            name="password"
                            autocomplete="off"
                            class="input-medium"
                            placeholder="пароль"
                            />
                    <input type="submit" value="Войти" class="btn"/>
                    </div>
                </form>
            

            
                <ul class="nav">
                    <li class=""><a href="/">Публикации</a></li>
                    <li class=""><a href="/helpdesk/">Вопрос-ответ</a></li>
                </ul>
            
            </div> <!--/.nav-collapse -->
        </div>
    </div>
</div>










<div class="container-fluid container-main">
    
    <section id="error">
    <div class="page-header">
        <h1>Ошибка 404</h1>
    </div>
        <!-- .block_head ends -->
    <div class="row-fluid">
        <div class="span12">
        Увы, вы ввели неправильный адрес или были перенаправлены на него ;(
        </div>
    </div>
    </section>

</div>

<div class="container-fluid">
    <section id="footer">
        <div class="page-header">
        </div>
        <div class="row-fluid">
            <div class="span4 text-left">
                <p>&copy; <a href="https://www.statgrad.org">СтатГрад</a>, 2006 &mdash; 2020 <a href="http://www.mccme.ru/">МЦНМО</a></p>
            </div>
            <div class="span4 text-center"></div>
            <div class="span4 text-right">
                
                <p>
                    Почта поддержки: <a href="mailto:need@sghelp.ru">need@sghelp.ru</a>
                </p>
            </div>
        </div>
    </section>
</div>

<!-- Support form -->

<div id="modal-support" class="modal support-modal  fade hide">
    <div class="modal-header">
        <a class="close" data-dismiss="modal">&times;</a>
        <h5>Служба поддержки</h5>
    </div>
    <form action="." method="POST" >
        <div class="bs-docs-example">
            
            <div class="tab-content">
                <div class="tab-pane fade active in" id="support-form">
                    <div class="modal-body">
                        <h5 class="support-modal__title">Если у вас проблема или вы хотите задать вопрос, заполните форму:</h5>
                        <fieldset>
                            <input type='hidden' name='csrfmiddlewaretoken' value='e6ADwLMdCcCNi2OYK4ZcDGofc7mlhOZX' />
                            
                            <input type="hidden" name="is_support_form" value="true">
                            
                                <div class="col-sender-name">
<div class="control-group required">
    
        <label class="control-label" for="id_sender_name">Номер школы или логин СтатГрад</label>

        <div class="controls">
            <input id="id_sender_name" maxlength="128" name="sender_name" type="text" />

            

            

        </div>
    
</div>
</div>
                                <div class="col-sender-email">
<div class="control-group required">
    
        <label class="control-label" for="id_sender_email">ваш E-Mail</label>

        <div class="controls">
            <input id="id_sender_email" maxlength="128" name="sender_email" type="email" />

            

            

        </div>
    
</div>
</div>
                                
<div class="control-group required">
    
        <label class="control-label" for="id_captcha">Введите код с картинки</label>

        <div class="controls">
            
<img src="/captcha/image/8c0b1ddac242dcf5f48539cd1fe117f73c44544c/" alt="captcha" class="captcha" /><input id="id_captcha_0" name="captcha_0" type="hidden" value="8c0b1ddac242dcf5f48539cd1fe117f73c44544c" />
<input autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" id="id_captcha_1" name="captcha_1" type="text" />



            

            

        </div>
    
</div>

                            
                            
<div class="control-group required">
    
        <label class="control-label" for="id_description">Опишите суть проблемы или заявки</label>

        <div class="controls">
            <textarea cols="40" id="id_description" name="description" rows="5">
</textarea>

            

            

        </div>
    
</div>

                            <p class="max-report-count">Максимальное количество символов - <span id="length_counter">2000</span></p>
                            
<div class="control-group">
    
        <label class="control-label" for="id_type">Тип проблемы</label>

        <div class="controls">
            <select id="id_type" name="type">
<option value="" selected="selected">---------</option>
<option value="4">Как получить логин СтатГрад?</option>
<option value="3">Не получается заказать публикацию</option>
<option value="2">Не получается пополнить баланс</option>
<option value="1">Не получается войти в систему</option>
<option value="5">Я знаю, как сделать СтатГрад 2 лучше</option>
<option value="6">Публикация не скачивается</option>
</select>

            

            
            <p class="help-block">
                Постарайтесь указать тему обращения
            </p>
            

        </div>
    
</div>

                        </fieldset>
                    </div>
                    <div class="modal-footer">
                        <a href="#" class="btn secondary" onclick="$('#modal-support').modal('hide')">Отменить</a>
                        <input type="submit" value="Отправить" class="btn primary"/>
                    </div>
                </div>
                
            </div>
        </div>
    </form>
</div>
<!-- End of support form -->



<div class="logout-settings" data-timeout="10" data-logout-url="/accounts/logout/"></div>

<script type="text/javascript">

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-34824367-1']);
    _gaq.push(['_setDomainName', 'statgrad.org']);
    _gaq.push(['_trackPageview']);

    (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

</script>
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter24674273 = new Ya.Metrika({id:24674273,
                    webvisor:true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    trackHash:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="//mc.yandex.ru/watch/24674273" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->



</body>
</html>