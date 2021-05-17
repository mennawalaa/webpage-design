
// Mobile Menu

document.getElementById("hamburguer-icon").onclick=function(){
  document.getElementById("sliding-header-menu-outer").style.right="0";
}
document.getElementById("sliding-header-menu-close-button").onclick=function(){
  document.getElementById("sliding-header-menu-outer").style.right="-320px";
}

// About us Tab

var aboutUs = {
  "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
  "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
  "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unseletectedColor = "#646872";
var seletect="#2A2D34"
var about_button=document.getElementsByClassName("single-tab");

for(var i=0;i<about_button.length;++i){
  about_button[i].onclick=function(){
    document.getElementById("box-text").innerHTML=aboutUs[this.innerHTML];
  
  for(var b=0;b<about_button.length;++b){
      about_button[b].style["background-color"]= unseletectedColor;
      about_button[b].style["font-weight"]="normal";
  }
  
    this.style["background-color"]=seletect;
    this.style["font-weight"]="bold";
  }
}




var ourServices = [
  {
    'title': 'Web design.',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding.',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Digital Marketing.',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];

//next indicator

document.getElementById("service-next").onclick=function(){
  var current_title=document.getElementById("service-title").innerHTML;

  for(var i=0;i<ourServices.length;++i){
   if(i+1==ourServices.length){
     break;
   }
    if(ourServices[i].title==current_title){
      document.getElementById("service-title").innerHTML=ourServices[i+1].title;
      document.getElementById("service-text").innerHTML=ourServices[i+1].text;
   
    }
  }

}
//prev indicatior

document.getElementById("service-previous").onclick=function(){
  var current_title=document.getElementById("service-title").innerHTML;
  for(var i=ourServices.length-1;i>0;--i){
    if(i-1>=0){ 
    if(ourServices[i].title==current_title){
        document.getElementById("service-title").innerHTML=ourServices[i-1].title;
        document.getElementById("service-text").innerHTML=ourServices[i-1].text;
      }
    }
    
  }
}







  
   


   