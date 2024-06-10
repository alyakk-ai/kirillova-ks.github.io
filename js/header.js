const tmp_header = document.createElement('template'); 
tmp_header.innerHTML=` 
<nav class="menu">  
<a href="index.html"><img class="logo" src="img/logo.png"></a>
        <ul class="list-menu"> 
            <li><a href="index.html" class="menulink" >Главная</a></li> 
            <li><a href="kaspersky.html" class="menulink" >Kaspersky Anti-Virus</a></li> 
            <li><a href="drweb.html" class="menulink" >Dr. Web</a></li> 
            <li><a href="norton.html" class="menulink" >Norton</a></li> 
            <li><a href="avast.html" class="menulink" >Avast Antivirus</a></li> 
        </ul> 
</nav>` 
document.body.appendChild(tmp_header.content);