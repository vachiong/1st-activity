function openTab(evt, passionName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }


    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active","");
    }

    document.getElementById(passionName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  

  
  document.getElementById("defaultOpen").click();

  function openLink(evt,navName){
    var navLink = document.getElementsByClassName("navLink");
    for (i = 0; i < navLink.length; i++) {
      navLink[i].className = navLink[i].className.replace("active","");
    }

    evt.currentTarget.className += " active"
  }