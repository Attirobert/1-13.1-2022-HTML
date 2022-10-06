// JavaScript Document


 //  var SzT_title_Tmb   = new Array();
   var SzT_e_Tmb   = new Array();

function Magyarazat_Init(s_magyarazat_) { 
  s_magyarazat = s_magyarazat_; //alert(s_magyarazat);
  if (s_magyarazat > '' ) {MagyarazDIV_init(s_magyarazat); 
      if (document.getElementById("Fel_Tipus").value=="1" ) {document.getElementById("magyaraz_btn").style.visibility="visible"; }
   }
  
}

function MagyarazDIV_init(szoveg){// ez van az alt helyett minden lapon
  var bal=220;
  var fent=155;
  m_doboz=document.createElement("div"); m_doboz.setAttribute("id","magyaraz");
  m_doboz.className="magyaraz";
  m_doboz.visibility="hidden";  
//  m_doboz.style.backgroundColor="#fff"; 
  m_doboz.style.top=fent+'px';
  m_doboz.style.left=bal+'px';
//  m_doboz.style.width=800 +'px';
//  m_doboz.style.height=600 +'px';

  document.body.appendChild(m_doboz);
  document.getElementById("magyaraz").innerHTML=szoveg;	 
  document.getElementById("magyaraz").style.visibility="hidden";

  if (m_doboz.addEventListener){
      m_doboz.addEventListener('click', Magyarazat_Elrejt, false); 
      
  } else if (m_doboz.attachEvent){
   	     m_doboz.attachEvent("onclick",Magyarazat_Elrejt);
	     
          }
}

function Magyaraz_Init() { 

}


function Magyarazat_Latszik(e) {
   document.getElementById("magyaraz").style.visibility="visible";
   document.getElementById("magyaraz_btn").style.visibility="hidden";
}

function Magyarazat_Elrejt(e) {
  document.getElementById("magyaraz").style.visibility="hidden";
  document.getElementById("magyaraz_btn").style.visibility="visible";
}

