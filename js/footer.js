const tmp_footer = document.createElement('template');
tmp_footer.innerHTML=`
<div class="footer">
<ul class="footer-sign">
    <li class="footer-contact">Контакты:</li>
    <li><br><a class="contact-link" href="https://web.telegram.org/k/#1964234773">Telegram</a></li>
    <li><br><a class="contact-link" href="https://vk.com/id419914856">ВКонтакте</a></li>
</ul>
<ul class="footer-menu">
    <li class="footer-contact">Поддержка:</li>
    <li><br>kkseniakir7@gmail.com</li>
    <li><br>Кириллова Ксения</li>
</ul>
</div>`
document.body.appendChild(tmp_footer.content);