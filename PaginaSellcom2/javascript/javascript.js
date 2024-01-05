$(document).ready(function() {
    $('#full-menu').hide();
    $('#btn-menu').click(function(){
       
        $('.menu').toggleClass('close');
        $('#full-menu').fadeToggle(300);

        var mainHeader = document.getElementById("main-header");
        var xButton = document.getElementById("btn-menu");
        var logoHeader = document.getElementById("navmenu_logo");
        var floatingButtons = document.getElementById("menu-share");

        if (xButton.classList.contains('close')===true){
            mainHeader.style.position = "fixed";
            //logoHeader.style = "none";
            logoHeader.src='../PaginaSellcom/Assets/Images/Home/Logo-Sellcom-Blanco.png';
            logoHeader.style.height = "65px"
            mainHeader.style.background = "black";

            //solo si se encuentra en alguna de las marcas
            //y evitar error en consola por el null
            if (floatingButtons != null){
                floatingButtons.style.zIndex = "0";
            }

        }else{
            mainHeader.style.position = "absolute";
            
            //solo si se encuentra en alguna de las marcas
            //y evitar error en consola por el null
            if (floatingButtons != null){
                floatingButtons.style.zIndex = "100";
            }
            //logoHeader.style.display = "block";
            //logoHeader.style.height = "70px"
            mainHeader.style.background = "transparent";
            if (mainHeader.classList.contains('newHeaderV')!=true){
                logoHeader.src='../PaginaSellcom/Assets/Images/Home/Logo-Sellcom.png';
                logoHeader.style.height = "70px"
            }else{
                console.log("nteeeee");
                logoHeader.src='../PaginaSellcom/Assets/Images/Home/Logo-Sellcom-Blanco.png';
                logoHeader.style.height = "65px"
            }
        }

        /*if (mainHeader.style.zIndex === "10" || mainHeader.style.zIndex === '') {
            //console.log("si");
            //reduce z-index when menu is showing
            mainHeader.style.zIndex = "initial";
            xButton.style.zIndex = "10";
        } else {
            //console.log("no");
            //add z-index when menu is not showing
            mainHeader.style.zIndex = "10";
            xButton.style.zIndex = "initial";
        }*/
    }); 
    
    //Carrusel Horizontal
    $('#HCI1').click(function(){        
        var HCI1 = document.getElementById("HCI1");
        var HCI2 = document.getElementById("HCI2");
        var HCI3 = document.getElementById("HCI3");
        console.log('Si');
     
        if (HCI1.style.zIndex === "11" || HCI1.style.zIndex === '') {
            HCI1.style.zIndex = "initial";
            HCI1.style.zIndex = "13";
            HCI2.style.zIndex = "12";
            HCI3.style.zIndex = "11";
        } else {
            if (HCI1.style.zIndex === "12" || HCI1.style.zIndex === '') {
                HCI1.style.zIndex = "initial";
                HCI1.style.zIndex = "13";
                HCI2.style.zIndex = "12";
                HCI3.style.zIndex = "11";
            }        
        }
    });

    $('#HCI2').click(function(){        
        var HCI1 = document.getElementById("HCI1");
        var HCI2 = document.getElementById("HCI2");
        var HCI3 = document.getElementById("HCI3");
       
        if (HCI2.style.zIndex === "11" || HCI2.style.zIndex === '') {
            HCI2.style.zIndex = "initial";
            HCI2.style.zIndex = "14";
            HCI3.style.zIndex = "12";
            HCI1.style.zIndex = "11";
        } else {
            if (HCI2.style.zIndex === "12" || HCI2.style.zIndex === '') {
                HCI2.style.zIndex = "initial";
                HCI2.style.zIndex = "14";
                HCI3.style.zIndex = "12";
                HCI1.style.zIndex = "11";
            }  
        }
    }); 

    $('#HCI3').click(function(){        
        var HCI1 = document.getElementById("HCI1");
        var HCI2 = document.getElementById("HCI2");
        var HCI3 = document.getElementById("HCI3");

        if (HCI3.style.zIndex === "11" || HCI3.style.zIndex === '') {                       
            HCI3.style.zIndex = "initial";
            HCI3.style.zIndex = "13";
            HCI2.style.zIndex = "12";
            HCI1.style.zIndex = "11";
        } else {
            if (HCI3.style.zIndex === "12" || HCI3.style.zIndex === '') {
                HCI3.style.zIndex = "initial";
                HCI3.style.zIndex = "13";
                HCI2.style.zIndex = "12";
                HCI1.style.zIndex = "11";
            }         
        }
    });  

    $('#Nube1').click(function(){        
        var Nube1 = document.getElementById("Nube1");
        var Nube2 = document.getElementById("Nube2");
        var Nube3 = document.getElementById("Nube3");
     
        if (Nube1.style.zIndex === "11" || Nube1.style.zIndex === '') {
            Nube1.style.zIndex = "initial";
            Nube1.style.zIndex = "13";
            Nube2.style.zIndex = "12";
            Nube3.style.zIndex = "11";
        } else {
            if (Nube1.style.zIndex === "12" || Nube1.style.zIndex === '') {
                Nube1.style.zIndex = "initial";
                Nube1.style.zIndex = "13";
                Nube2.style.zIndex = "12";
                Nube3.style.zIndex = "11";
            }        
        }
    });

    $('#Nube2').click(function(){        
        var Nube1 = document.getElementById("Nube1");
        var Nube2 = document.getElementById("Nube2");
        var Nube3 = document.getElementById("Nube3");       
       
        if (Nube2.style.zIndex === "11" || Nube2.style.zIndex === '') {
            Nube2.style.zIndex = "initial";
            Nube2.style.zIndex = "13";
            Nube3.style.zIndex = "12";
            Nube1.style.zIndex = "11";
        } else {
            if (Nube2.style.zIndex === "12" || Nube2.style.zIndex === '') {
                Nube2.style.zIndex = "initial";
                Nube2.style.zIndex = "13";
                Nube3.style.zIndex = "12";
                Nube1.style.zIndex = "11";
            }  
        }
    }); 

    $('#Nube3').click(function(){
        var Nube1 = document.getElementById("Nube1");
        var Nube2 = document.getElementById("Nube2");
        var Nube3 = document.getElementById("Nube3");

        if (Nube3.style.zIndex === "11" || Nube3.style.zIndex === '') {            
            Nube3.style.zIndex = "initial";
            Nube3.style.zIndex = "14";
            Nube2.style.zIndex = "12";
            Nube1.style.zIndex = "11";
        } else {
            if (Nube3.style.zIndex === "12" || Nube3.style.zIndex === '') {                
                Nube3.style.zIndex = "initial";
                Nube3.style.zIndex = "14";
                Nube2.style.zIndex = "12";
                Nube1.style.zIndex = "11";
            }      
        }
    });

    $('#Security1').click(function(){        
        var Security1 = document.getElementById("Security1");
        var Security2 = document.getElementById("Security2");
        var Security3 = document.getElementById("Security3");
     
        if (Security1.style.zIndex === "11" || Security1.style.zIndex === '') {
            Security1.style.zIndex = "initial";
            Security1.style.zIndex = "13";
            Security2.style.zIndex = "12";
            Security3.style.zIndex = "11";
        } else {
            if (Security1.style.zIndex === "12" || Security1.style.zIndex === '') {
                Security1.style.zIndex = "initial";
                Security1.style.zIndex = "13";
                Security2.style.zIndex = "12";
                Security3.style.zIndex = "11";
            }        
        }
    });

    $('#Security2').click(function(){        
        var Security1 = document.getElementById("Security1");
        var Security2 = document.getElementById("Security2");
        var Security3 = document.getElementById("Security3");       
       
        if (Security2.style.zIndex === "11" || Security2.style.zIndex === '') {
            Security2.style.zIndex = "initial";
            Security2.style.zIndex = "13";
            Security3.style.zIndex = "12";
            Security1.style.zIndex = "11";
        } else {
            if (Security2.style.zIndex === "12" || Security2.style.zIndex === '') {
                Security2.style.zIndex = "initial";
                Security2.style.zIndex = "13";
                Security3.style.zIndex = "12";
                Security1.style.zIndex = "11";
            }  
        }
    }); 

    $('#Security3').click(function(){
        var Security1 = document.getElementById("Security1");
        var Security2 = document.getElementById("Security2");
        var Security3 = document.getElementById("Security3");

        if (Security3.style.zIndex === "11" || Security3.style.zIndex === '') {            
            Security3.style.zIndex = "initial";
            Security3.style.zIndex = "14";
            Security2.style.zIndex = "12";
            Security1.style.zIndex = "11";
        } else {
            if (Security3.style.zIndex === "12" || Security3.style.zIndex === '') {                
                Security3.style.zIndex = "initial";
                Security3.style.zIndex = "14";
                Security2.style.zIndex = "12";
                Security1.style.zIndex = "11";
            }      
        }
    });

    $('#Procesos1').click(function(){        
        var Procesos1 = document.getElementById("Procesos1");
        var Procesos2 = document.getElementById("Procesos2");
        var Procesos3 = document.getElementById("Procesos3");
     
        if (Procesos1.style.zIndex === "11" || Procesos1.style.zIndex === '') {
            Procesos1.style.zIndex = "initial";
            Procesos1.style.zIndex = "13";
            Procesos2.style.zIndex = "12";
            Procesos3.style.zIndex = "11";
        } else {
            if (Procesos1.style.zIndex === "12" || Procesos1.style.zIndex === '') {
                Procesos1.style.zIndex = "initial";
                Procesos1.style.zIndex = "13";
                Procesos2.style.zIndex = "12";
                Procesos3.style.zIndex = "11";
            }        
        }
    });

    $('#Procesos2').click(function(){        
        var Procesos1 = document.getElementById("Procesos1");
        var Procesos2 = document.getElementById("Procesos2");
        var Procesos3 = document.getElementById("Procesos3");       
       
        if (Procesos2.style.zIndex === "11" || Procesos2.style.zIndex === '') {
            Procesos2.style.zIndex = "initial";
            Procesos2.style.zIndex = "13";
            Procesos3.style.zIndex = "12";
            Procesos1.style.zIndex = "11";
        } else {
            if (Procesos2.style.zIndex === "12" || Procesos2.style.zIndex === '') {
                Procesos2.style.zIndex = "initial";
                Procesos2.style.zIndex = "13";
                Procesos3.style.zIndex = "12";
                Procesos1.style.zIndex = "11";
            }  
        }
    }); 

    $('#Procesos3').click(function(){
        var Procesos1 = document.getElementById("Procesos1");
        var Procesos2 = document.getElementById("Procesos2");
        var Procesos3 = document.getElementById("Procesos3");

        if (Procesos3.style.zIndex === "11" || Procesos3.style.zIndex === '') {            
            Procesos3.style.zIndex = "initial";
            Procesos3.style.zIndex = "13";
            Procesos2.style.zIndex = "12";
            Procesos1.style.zIndex = "11";
        } else {
            if (Procesos3.style.zIndex === "12" || Procesos3.style.zIndex === '') {                
                Procesos3.style.zIndex = "initial";
                Procesos3.style.zIndex = "13";
                Procesos2.style.zIndex = "12";
                Procesos1.style.zIndex = "11";
            }      
        }
    });

    $('#EndUser1').click(function(){        
        var EndUser1 = document.getElementById("EndUser1");
        var EndUser2 = document.getElementById("EndUser2");
        var EndUser3 = document.getElementById("EndUser3");
     
        if (EndUser1.style.zIndex === "11" || EndUser1.style.zIndex === '') {
            EndUser1.style.zIndex = "initial";
            EndUser1.style.zIndex = "13";
            EndUser2.style.zIndex = "12";
            EndUser3.style.zIndex = "11";
        } else {
            if (EndUser1.style.zIndex === "12" || EndUser1.style.zIndex === '') {
                EndUser1.style.zIndex = "initial";
                EndUser1.style.zIndex = "13";
                EndUser2.style.zIndex = "12";
                EndUser3.style.zIndex = "11";
            }        
        }
    });

    $('#EndUser2').click(function(){        
        var EndUser1 = document.getElementById("EndUser1");
        var EndUser2 = document.getElementById("EndUser2");
        var EndUser3 = document.getElementById("EndUser3");       
       
        if (EndUser2.style.zIndex === "11" || EndUser2.style.zIndex === '') {
            EndUser2.style.zIndex = "initial";
            EndUser2.style.zIndex = "13";
            EndUser3.style.zIndex = "12";
            EndUser1.style.zIndex = "11";
        } else {
            if (EndUser2.style.zIndex === "12" || EndUser2.style.zIndex === '') {
                EndUser2.style.zIndex = "initial";
                EndUser2.style.zIndex = "13";
                EndUser3.style.zIndex = "12";
                EndUser1.style.zIndex = "11";
            }  
        }
    }); 

    $('#EndUser3').click(function(){
        var EndUser1 = document.getElementById("EndUser1");
        var EndUser2 = document.getElementById("EndUser2");
        var EndUser3 = document.getElementById("EndUser3");

        if (EndUser3.style.zIndex === "11" || EndUser3.style.zIndex === '') {            
            EndUser3.style.zIndex = "initial";
            EndUser3.style.zIndex = "13";
            EndUser2.style.zIndex = "12";
            EndUser1.style.zIndex = "11";
        } else {
            if (EndUser3.style.zIndex === "12" || EndUser3.style.zIndex === '') {                
                EndUser3.style.zIndex = "initial";
                EndUser3.style.zIndex = "13";
                EndUser2.style.zIndex = "12";
                EndUser1.style.zIndex = "11";
            }      
        }
    });

    $('#Monitoreo1').click(function(){        
        var Monitoreo1 = document.getElementById("Monitoreo1");
        var Monitoreo2 = document.getElementById("Monitoreo2");
        var Monitoreo3 = document.getElementById("Monitoreo3");
     
        if (Monitoreo1.style.zIndex === "11" || Monitoreo1.style.zIndex === '') {
            Monitoreo1.style.zIndex = "initial";
            Monitoreo1.style.zIndex = "13";
            Monitoreo2.style.zIndex = "12";
            Monitoreo3.style.zIndex = "11";
        } else {
            if (Monitoreo1.style.zIndex === "12" || Monitoreo1.style.zIndex === '') {
                Monitoreo1.style.zIndex = "initial";
                Monitoreo1.style.zIndex = "13";
                Monitoreo2.style.zIndex = "12";
                Monitoreo3.style.zIndex = "11";
            }        
        }
    });

    $('#Monitoreo2').click(function(){        
        var Monitoreo1 = document.getElementById("Monitoreo1");
        var Monitoreo2 = document.getElementById("Monitoreo2");
        var Monitoreo3 = document.getElementById("Monitoreo3");       
       
        if (Monitoreo2.style.zIndex === "11" || Monitoreo2.style.zIndex === '') {
            Monitoreo2.style.zIndex = "initial";
            Monitoreo2.style.zIndex = "13";
            Monitoreo3.style.zIndex = "12";
            Monitoreo1.style.zIndex = "11";
        } else {
            if (Monitoreo2.style.zIndex === "12" || Monitoreo2.style.zIndex === '') {
                Monitoreo2.style.zIndex = "initial";
                Monitoreo2.style.zIndex = "13";
                Monitoreo3.style.zIndex = "12";
                Monitoreo1.style.zIndex = "11";
            }  
        }
    }); 

    $('#Monitoreo3').click(function(){
        var Monitoreo1 = document.getElementById("Monitoreo1");
        var Monitoreo2 = document.getElementById("Monitoreo2");
        var Monitoreo3 = document.getElementById("Monitoreo3");

        if (Monitoreo3.style.zIndex === "11" || Monitoreo3.style.zIndex === '') {            
            Monitoreo3.style.zIndex = "initial";
            Monitoreo3.style.zIndex = "13";
            Monitoreo2.style.zIndex = "12";
            Monitoreo1.style.zIndex = "11";
        } else {
            if (Monitoreo3.style.zIndex === "12" || Monitoreo3.style.zIndex === '') {                
                Monitoreo3.style.zIndex = "initial";
                Monitoreo3.style.zIndex = "13";
                Monitoreo2.style.zIndex = "12";
                Monitoreo1.style.zIndex = "11";
            }      
        }
    });

    $('#Data1').click(function(){        
        var Data1 = document.getElementById("Data1");
        var Data2 = document.getElementById("Data2");
        var Data3 = document.getElementById("Data3");
     
        if (Data1.style.zIndex === "11" || Data1.style.zIndex === '') {
            Data1.style.zIndex = "initial";
            Data1.style.zIndex = "13";
            Data2.style.zIndex = "12";
            Data3.style.zIndex = "11";
        } else {
            if (Data1.style.zIndex === "12" || Data1.style.zIndex === '') {
                Data1.style.zIndex = "initial";
                Data1.style.zIndex = "13";
                Data2.style.zIndex = "12";
                Data3.style.zIndex = "11";
            }        
        }
    });

    $('#Data2').click(function(){        
        var Data1 = document.getElementById("Data1");
        var Data2 = document.getElementById("Data2");
        var Data3 = document.getElementById("Data3");       
       
        if (Data2.style.zIndex === "11" || Data2.style.zIndex === '') {
            Data2.style.zIndex = "initial";
            Data2.style.zIndex = "13";
            Data3.style.zIndex = "12";
            Data1.style.zIndex = "11";
        } else {
            if (Data2.style.zIndex === "12" || Data2.style.zIndex === '') {
                Data2.style.zIndex = "initial";
                Data2.style.zIndex = "13";
                Data3.style.zIndex = "12";
                Data1.style.zIndex = "11";
            }  
        }
    }); 

    $('#Data3').click(function(){
        var Data1 = document.getElementById("Data1");
        var Data2 = document.getElementById("Data2");
        var Data3 = document.getElementById("Data3");

        if (Data3.style.zIndex === "11" || Data3.style.zIndex === '') {            
            Data3.style.zIndex = "initial";
            Data3.style.zIndex = "13";
            Data2.style.zIndex = "12";
            Data1.style.zIndex = "11";
        } else {
            if (Data3.style.zIndex === "12" || Data3.style.zIndex === '') {                
                Data3.style.zIndex = "initial";
                Data3.style.zIndex = "13";
                Data2.style.zIndex = "12";
                Data1.style.zIndex = "11";
            }      
        }
    });

    $('#Network1').click(function(){        
        var Network1 = document.getElementById("Network1");
        var Network2 = document.getElementById("Network2");
        var Network3 = document.getElementById("Network3");
     
        if (Network1.style.zIndex === "11" || Network1.style.zIndex === '') {
            Network1.style.zIndex = "initial";
            Network1.style.zIndex = "13";
            Network2.style.zIndex = "12";
            Network3.style.zIndex = "11";
        } else {
            if (Network1.style.zIndex === "12" || Network1.style.zIndex === '') {
                Network1.style.zIndex = "initial";
                Network1.style.zIndex = "13";
                Network2.style.zIndex = "12";
                Network3.style.zIndex = "11";
            }        
        }
    });

    $('#Network2').click(function(){        
        var Network1 = document.getElementById("Network1");
        var Network2 = document.getElementById("Network2");
        var Network3 = document.getElementById("Network3");       
       
        if (Network2.style.zIndex === "11" || Network2.style.zIndex === '') {
            Network2.style.zIndex = "initial";
            Network2.style.zIndex = "13";
            Network3.style.zIndex = "12";
            Network1.style.zIndex = "11";
        } else {
            if (Network2.style.zIndex === "12" || Network2.style.zIndex === '') {
                Network2.style.zIndex = "initial";
                Network2.style.zIndex = "13";
                Network3.style.zIndex = "12";
                Network1.style.zIndex = "11";
            }  
        }
    }); 

    $('#Network3').click(function(){
        var Network1 = document.getElementById("Network1");
        var Network2 = document.getElementById("Network2");
        var Network3 = document.getElementById("Network3");

        if (Network3.style.zIndex === "11" || Network3.style.zIndex === '') {            
            Network3.style.zIndex = "initial";
            Network3.style.zIndex = "13";
            Network2.style.zIndex = "12";
            Network1.style.zIndex = "11";
        } else {
            if (Network3.style.zIndex === "12" || Network3.style.zIndex === '') {                
                Network3.style.zIndex = "initial";
                Network3.style.zIndex = "13";
                Network2.style.zIndex = "12";
                Network1.style.zIndex = "11";
            }      
        }
    });


    //Carrusel Vertical
    $('#HCI1V').click(function(){        
        var HCI1 = document.getElementById("HCI1V");
        var HCI2 = document.getElementById("HCI2V");
        var HCI3 = document.getElementById("HCI3V");
             
        if (HCI1.style.zIndex === "11" || HCI1.style.zIndex === '') {
            HCI1.style.zIndex = "initial";
            HCI1.style.zIndex = "13";
            HCI2.style.zIndex = "12";
            HCI3.style.zIndex = "11";
        } else {
            if (HCI1.style.zIndex === "12" || HCI1.style.zIndex === '') {
                HCI1.style.zIndex = "initial";
                HCI1.style.zIndex = "13";
                HCI2.style.zIndex = "12";
                HCI3.style.zIndex = "11";
            }        
        }
    });

    $('#HCI2V').click(function(){        
        var HCI1 = document.getElementById("HCI1V");
        var HCI2 = document.getElementById("HCI2V");
        var HCI3 = document.getElementById("HCI3V");
       
        if (HCI2.style.zIndex === "11" || HCI2.style.zIndex === '') {
            HCI2.style.zIndex = "initial";
            HCI2.style.zIndex = "14";
            HCI3.style.zIndex = "12";
            HCI1.style.zIndex = "11";
        } else {
            if (HCI2.style.zIndex === "12" || HCI2.style.zIndex === '') {
                HCI2.style.zIndex = "initial";
                HCI2.style.zIndex = "14";
                HCI3.style.zIndex = "12";
                HCI1.style.zIndex = "11";
            }  
        }
    }); 

    $('#HCI3V').click(function(){        
        var HCI1 = document.getElementById("HCI1V");
        var HCI2 = document.getElementById("HCI2V");
        var HCI3 = document.getElementById("HCI3V");

        if (HCI3.style.zIndex === "11" || HCI3.style.zIndex === '') {                       
            HCI3.style.zIndex = "initial";
            HCI3.style.zIndex = "13";
            HCI2.style.zIndex = "12";
            HCI1.style.zIndex = "11";
        } else {
            if (HCI3.style.zIndex === "12" || HCI3.style.zIndex === '') {
                HCI3.style.zIndex = "initial";
                HCI3.style.zIndex = "13";
                HCI2.style.zIndex = "12";
                HCI1.style.zIndex = "11";
            }         
        }
    });  

    $('#Nube1V').click(function(){        
        var Nube1 = document.getElementById("Nube1V");
        var Nube2 = document.getElementById("Nube2V");
        var Nube3 = document.getElementById("Nube3V");
     
        if (Nube1.style.zIndex === "11" || Nube1.style.zIndex === '') {
            Nube1.style.zIndex = "initial";
            Nube1.style.zIndex = "13";
            Nube2.style.zIndex = "12";
            Nube3.style.zIndex = "11";
        } else {
            if (Nube1.style.zIndex === "12" || Nube1.style.zIndex === '') {
                Nube1.style.zIndex = "initial";
                Nube1.style.zIndex = "13";
                Nube2.style.zIndex = "12";
                Nube3.style.zIndex = "11";
            }        
        }
    });

    $('#Nube2V').click(function(){        
        var Nube1 = document.getElementById("Nube1V");
        var Nube2 = document.getElementById("Nube2V");
        var Nube3 = document.getElementById("Nube3V");       
       
        if (Nube2.style.zIndex === "11" || Nube2.style.zIndex === '') {
            Nube2.style.zIndex = "initial";
            Nube2.style.zIndex = "13";
            Nube3.style.zIndex = "12";
            Nube1.style.zIndex = "11";
        } else {
            if (Nube2.style.zIndex === "12" || Nube2.style.zIndex === '') {
                Nube2.style.zIndex = "initial";
                Nube2.style.zIndex = "13";
                Nube3.style.zIndex = "12";
                Nube1.style.zIndex = "11";
            }  
        }
    }); 

    $('#Nube3V').click(function(){
        var Nube1 = document.getElementById("Nube1V");
        var Nube2 = document.getElementById("Nube2V");
        var Nube3 = document.getElementById("Nube3V");

        if (Nube3.style.zIndex === "11" || Nube3.style.zIndex === '') {            
            Nube3.style.zIndex = "initial";
            Nube3.style.zIndex = "14";
            Nube2.style.zIndex = "12";
            Nube1.style.zIndex = "11";
        } else {
            if (Nube3.style.zIndex === "12" || Nube3.style.zIndex === '') {                
                Nube3.style.zIndex = "initial";
                Nube3.style.zIndex = "14";
                Nube2.style.zIndex = "12";
                Nube1.style.zIndex = "11";
            }      
        }
    });

    $('#Security1V').click(function(){        
        var Security1 = document.getElementById("Security1V");
        var Security2 = document.getElementById("Security2V");
        var Security3 = document.getElementById("Security3V");
     
        if (Security1.style.zIndex === "11" || Security1.style.zIndex === '') {
            Security1.style.zIndex = "initial";
            Security1.style.zIndex = "13";
            Security2.style.zIndex = "12";
            Security3.style.zIndex = "11";
        } else {
            if (Security1.style.zIndex === "12" || Security1.style.zIndex === '') {
                Security1.style.zIndex = "initial";
                Security1.style.zIndex = "13";
                Security2.style.zIndex = "12";
                Security3.style.zIndex = "11";
            }        
        }
    });

    $('#Security2V').click(function(){        
        var Security1 = document.getElementById("Security1V");
        var Security2 = document.getElementById("Security2V");
        var Security3 = document.getElementById("Security3V");       
       
        if (Security2.style.zIndex === "11" || Security2.style.zIndex === '') {
            Security2.style.zIndex = "initial";
            Security2.style.zIndex = "13";
            Security3.style.zIndex = "12";
            Security1.style.zIndex = "11";
        } else {
            if (Security2.style.zIndex === "12" || Security2.style.zIndex === '') {
                Security2.style.zIndex = "initial";
                Security2.style.zIndex = "13";
                Security3.style.zIndex = "12";
                Security1.style.zIndex = "11";
            }  
        }
    }); 

    $('#Security3V').click(function(){
        var Security1 = document.getElementById("Security1V");
        var Security2 = document.getElementById("Security2V");
        var Security3 = document.getElementById("Security3V");

        if (Security3.style.zIndex === "11" || Security3.style.zIndex === '') {            
            Security3.style.zIndex = "initial";
            Security3.style.zIndex = "14";
            Security2.style.zIndex = "12";
            Security1.style.zIndex = "11";
        } else {
            if (Security3.style.zIndex === "12" || Security3.style.zIndex === '') {                
                Security3.style.zIndex = "initial";
                Security3.style.zIndex = "14";
                Security2.style.zIndex = "12";
                Security1.style.zIndex = "11";
            }      
        }
    });

    $('#Procesos1V').click(function(){        
        var Procesos1 = document.getElementById("Procesos1V");
        var Procesos2 = document.getElementById("Procesos2V");
        var Procesos3 = document.getElementById("Procesos3V");
     
        if (Procesos1.style.zIndex === "11" || Procesos1.style.zIndex === '') {
            Procesos1.style.zIndex = "initial";
            Procesos1.style.zIndex = "13";
            Procesos2.style.zIndex = "12";
            Procesos3.style.zIndex = "11";
        } else {
            if (Procesos1.style.zIndex === "12" || Procesos1.style.zIndex === '') {
                Procesos1.style.zIndex = "initial";
                Procesos1.style.zIndex = "13";
                Procesos2.style.zIndex = "12";
                Procesos3.style.zIndex = "11";
            }        
        }
    });

    $('#Procesos2V').click(function(){        
        var Procesos1 = document.getElementById("Procesos1V");
        var Procesos2 = document.getElementById("Procesos2V");
        var Procesos3 = document.getElementById("Procesos3V");       
       
        if (Procesos2.style.zIndex === "11" || Procesos2.style.zIndex === '') {
            Procesos2.style.zIndex = "initial";
            Procesos2.style.zIndex = "13";
            Procesos3.style.zIndex = "12";
            Procesos1.style.zIndex = "11";
        } else {
            if (Procesos2.style.zIndex === "12" || Procesos2.style.zIndex === '') {
                Procesos2.style.zIndex = "initial";
                Procesos2.style.zIndex = "13";
                Procesos3.style.zIndex = "12";
                Procesos1.style.zIndex = "11";
            }  
        }
    }); 

    $('#Procesos3V').click(function(){
        var Procesos1 = document.getElementById("Procesos1V");
        var Procesos2 = document.getElementById("Procesos2V");
        var Procesos3 = document.getElementById("Procesos3V");

        if (Procesos3.style.zIndex === "11" || Procesos3.style.zIndex === '') {            
            Procesos3.style.zIndex = "initial";
            Procesos3.style.zIndex = "13";
            Procesos2.style.zIndex = "12";
            Procesos1.style.zIndex = "11";
        } else {
            if (Procesos3.style.zIndex === "12" || Procesos3.style.zIndex === '') {                
                Procesos3.style.zIndex = "initial";
                Procesos3.style.zIndex = "13";
                Procesos2.style.zIndex = "12";
                Procesos1.style.zIndex = "11";
            }      
        }
    });

    $('#EndUser1V').click(function(){        
        var EndUser1 = document.getElementById("EndUser1V");
        var EndUser2 = document.getElementById("EndUser2V");
        var EndUser3 = document.getElementById("EndUser3V");
     
        if (EndUser1.style.zIndex === "11" || EndUser1.style.zIndex === '') {
            EndUser1.style.zIndex = "initial";
            EndUser1.style.zIndex = "13";
            EndUser2.style.zIndex = "12";
            EndUser3.style.zIndex = "11";
        } else {
            if (EndUser1.style.zIndex === "12" || EndUser1.style.zIndex === '') {
                EndUser1.style.zIndex = "initial";
                EndUser1.style.zIndex = "13";
                EndUser2.style.zIndex = "12";
                EndUser3.style.zIndex = "11";
            }        
        }
    });

    $('#EndUser2V').click(function(){        
        var EndUser1 = document.getElementById("EndUser1V");
        var EndUser2 = document.getElementById("EndUser2V");
        var EndUser3 = document.getElementById("EndUser3V");       
       
        if (EndUser2.style.zIndex === "11" || EndUser2.style.zIndex === '') {
            EndUser2.style.zIndex = "initial";
            EndUser2.style.zIndex = "13";
            EndUser3.style.zIndex = "12";
            EndUser1.style.zIndex = "11";
        } else {
            if (EndUser2.style.zIndex === "12" || EndUser2.style.zIndex === '') {
                EndUser2.style.zIndex = "initial";
                EndUser2.style.zIndex = "13";
                EndUser3.style.zIndex = "12";
                EndUser1.style.zIndex = "11";
            }  
        }
    }); 

    $('#EndUser3V').click(function(){
        var EndUser1 = document.getElementById("EndUser1V");
        var EndUser2 = document.getElementById("EndUser2V");
        var EndUser3 = document.getElementById("EndUser3V");

        if (EndUser3.style.zIndex === "11" || EndUser3.style.zIndex === '') {            
            EndUser3.style.zIndex = "initial";
            EndUser3.style.zIndex = "13";
            EndUser2.style.zIndex = "12";
            EndUser1.style.zIndex = "11";
        } else {
            if (EndUser3.style.zIndex === "12" || EndUser3.style.zIndex === '') {                
                EndUser3.style.zIndex = "initial";
                EndUser3.style.zIndex = "13";
                EndUser2.style.zIndex = "12";
                EndUser1.style.zIndex = "11";
            }      
        }
    });

    $('#Monitoreo1V').click(function(){        
        var Monitoreo1 = document.getElementById("Monitoreo1V");
        var Monitoreo2 = document.getElementById("Monitoreo2V");
        var Monitoreo3 = document.getElementById("Monitoreo3V");
     
        if (Monitoreo1.style.zIndex === "11" || Monitoreo1.style.zIndex === '') {
            Monitoreo1.style.zIndex = "initial";
            Monitoreo1.style.zIndex = "13";
            Monitoreo2.style.zIndex = "12";
            Monitoreo3.style.zIndex = "11";
        } else {
            if (Monitoreo1.style.zIndex === "12" || Monitoreo1.style.zIndex === '') {
                Monitoreo1.style.zIndex = "initial";
                Monitoreo1.style.zIndex = "13";
                Monitoreo2.style.zIndex = "12";
                Monitoreo3.style.zIndex = "11";
            }        
        }
    });

    $('#Monitoreo2V').click(function(){        
        var Monitoreo1 = document.getElementById("Monitoreo1V");
        var Monitoreo2 = document.getElementById("Monitoreo2V");
        var Monitoreo3 = document.getElementById("Monitoreo3V");       
       
        if (Monitoreo2.style.zIndex === "11" || Monitoreo2.style.zIndex === '') {
            Monitoreo2.style.zIndex = "initial";
            Monitoreo2.style.zIndex = "13";
            Monitoreo3.style.zIndex = "12";
            Monitoreo1.style.zIndex = "11";
        } else {
            if (Monitoreo2.style.zIndex === "12" || Monitoreo2.style.zIndex === '') {
                Monitoreo2.style.zIndex = "initial";
                Monitoreo2.style.zIndex = "13";
                Monitoreo3.style.zIndex = "12";
                Monitoreo1.style.zIndex = "11";
            }  
        }
    }); 

    $('#Monitoreo3V').click(function(){
        var Monitoreo1 = document.getElementById("Monitoreo1V");
        var Monitoreo2 = document.getElementById("Monitoreo2V");
        var Monitoreo3 = document.getElementById("Monitoreo3V");

        if (Monitoreo3.style.zIndex === "11" || Monitoreo3.style.zIndex === '') {            
            Monitoreo3.style.zIndex = "initial";
            Monitoreo3.style.zIndex = "13";
            Monitoreo2.style.zIndex = "12";
            Monitoreo1.style.zIndex = "11";
        } else {
            if (Monitoreo3.style.zIndex === "12" || Monitoreo3.style.zIndex === '') {                
                Monitoreo3.style.zIndex = "initial";
                Monitoreo3.style.zIndex = "13";
                Monitoreo2.style.zIndex = "12";
                Monitoreo1.style.zIndex = "11";
            }      
        }
    });

    $('#Data1V').click(function(){        
        var Data1 = document.getElementById("Data1V");
        var Data2 = document.getElementById("Data2V");
        var Data3 = document.getElementById("Data3V");
     
        if (Data1.style.zIndex === "11" || Data1.style.zIndex === '') {
            Data1.style.zIndex = "initial";
            Data1.style.zIndex = "13";
            Data2.style.zIndex = "12";
            Data3.style.zIndex = "11";
        } else {
            if (Data1.style.zIndex === "12" || Data1.style.zIndex === '') {
                Data1.style.zIndex = "initial";
                Data1.style.zIndex = "13";
                Data2.style.zIndex = "12";
                Data3.style.zIndex = "11";
            }        
        }
    });

    $('#Data2V').click(function(){        
        var Data1 = document.getElementById("Data1V");
        var Data2 = document.getElementById("Data2V");
        var Data3 = document.getElementById("Data3V");       
       
        if (Data2.style.zIndex === "11" || Data2.style.zIndex === '') {
            Data2.style.zIndex = "initial";
            Data2.style.zIndex = "13";
            Data3.style.zIndex = "12";
            Data1.style.zIndex = "11";
        } else {
            if (Data2.style.zIndex === "12" || Data2.style.zIndex === '') {
                Data2.style.zIndex = "initial";
                Data2.style.zIndex = "13";
                Data3.style.zIndex = "12";
                Data1.style.zIndex = "11";
            }  
        }
    }); 

    $('#Data3V').click(function(){
        var Data1 = document.getElementById("Data1V");
        var Data2 = document.getElementById("Data2V");
        var Data3 = document.getElementById("Data3V");

        if (Data3.style.zIndex === "11" || Data3.style.zIndex === '') {            
            Data3.style.zIndex = "initial";
            Data3.style.zIndex = "13";
            Data2.style.zIndex = "12";
            Data1.style.zIndex = "11";
        } else {
            if (Data3.style.zIndex === "12" || Data3.style.zIndex === '') {                
                Data3.style.zIndex = "initial";
                Data3.style.zIndex = "13";
                Data2.style.zIndex = "12";
                Data1.style.zIndex = "11";
            }      
        }
    });

    $('#Network1V').click(function(){        
        var Network1 = document.getElementById("Network1V");
        var Network2 = document.getElementById("Network2V");
        var Network3 = document.getElementById("Network3V");
     
        if (Network1.style.zIndex === "11" || Network1.style.zIndex === '') {
            Network1.style.zIndex = "initial";
            Network1.style.zIndex = "13";
            Network2.style.zIndex = "12";
            Network3.style.zIndex = "11";
        } else {
            if (Network1.style.zIndex === "12" || Network1.style.zIndex === '') {
                Network1.style.zIndex = "initial";
                Network1.style.zIndex = "13";
                Network2.style.zIndex = "12";
                Network3.style.zIndex = "11";
            }        
        }
    });

    $('#Network2V').click(function(){        
        var Network1 = document.getElementById("Network1V");
        var Network2 = document.getElementById("Network2V");
        var Network3 = document.getElementById("Network3V");       
       
        if (Network2.style.zIndex === "11" || Network2.style.zIndex === '') {
            Network2.style.zIndex = "initial";
            Network2.style.zIndex = "13";
            Network3.style.zIndex = "12";
            Network1.style.zIndex = "11";
        } else {
            if (Network2.style.zIndex === "12" || Network2.style.zIndex === '') {
                Network2.style.zIndex = "initial";
                Network2.style.zIndex = "13";
                Network3.style.zIndex = "12";
                Network1.style.zIndex = "11";
            }  
        }
    }); 

    $('#Network3V').click(function(){
        var Network1 = document.getElementById("Network1V");
        var Network2 = document.getElementById("Network2V");
        var Network3 = document.getElementById("Network3V");

        if (Network3.style.zIndex === "11" || Network3.style.zIndex === '') {            
            Network3.style.zIndex = "initial";
            Network3.style.zIndex = "13";
            Network2.style.zIndex = "12";
            Network1.style.zIndex = "11";
        } else {
            if (Network3.style.zIndex === "12" || Network3.style.zIndex === '') {                
                Network3.style.zIndex = "initial";
                Network3.style.zIndex = "13";
                Network2.style.zIndex = "12";
                Network1.style.zIndex = "11";
            }      
        }
    });

    /****Inicio Boton subir****/
    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ){
            $('.ir-arriba').slideDown(300);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });
    /****Fin Boton subir****/

    /*CLOSE ACCORDEON MENU WHEN CLICK X*/
    $(".menu-close").on('click', function () {
        $('.collapse').collapse('hide');
        var HCI = document.getElementById("flecha-menuHCI");
        HCI.style.display = "none";
        var Nube = document.getElementById("flecha-menuNube");
        Nube.style.display = "none";
        var Seguridad = document.getElementById("flecha-menuSeguridad");
        Seguridad.style.display = "none";
        var Proceso = document.getElementById("flecha-menuProceso");
        Proceso.style.display = "none";
        var Monitoreo = document.getElementById("flecha-menuMonitoreo");
        Monitoreo.style.display = "none";
        var Datos = document.getElementById("flecha-menuDatos");
        Datos.style.display = "none";
        var Redes = document.getElementById("flecha-menuRedes");
        Redes.style.display = "none";
        var Usuario = document.getElementById("flecha-menuUsuario");
        Usuario.style.display = "none";
    });
    /*CLOSE ACCORDEON MENU WHEN CLICK X*/

    /*if ($('#circle').length) {
        const circle = document.getElementById('circle');
        const circleStyle = circle.style;

        document.addEventListener('mousemove', e => {
            window.requestAnimationFrame(() => {
                circleStyle.top = `${e.clientY - circle.offsetHeight / 2}px`;
                circleStyle.left = `${e.clientX - circle.offsetWidth / 2}px`;
            });
        });
    }*/

    if ($('#carouselBeneficios').length) {
        $('#carouselBeneficios').carousel({
            interval: 6000
        })

        $('.carousel .carousel-item').each(function () {
            var minPerSlide = 4;
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));

            for (var i = 0; i < minPerSlide; i++) {
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }

                next.children(':first-child').clone().appendTo($(this));
            }
        });
    }
    
});

function Menu(){      
    //console.log("holasdadda")
    var x = document.getElementById("menu");
    if (x.style.display === "none") {
        //console.log("sii");
        x.style.display = "block";
    } else {
        console.log("no");
        x.style.display = "none";
    }
}

function changeColorLinkHCI() {
    var Color = '#606060';    
    var NewColor = '#ffffff';
    var elem1 = document.getElementById('linkHCI');    
    var elem2 = document.getElementById('linkNube');
    var elem3 = document.getElementById('linkSeguridad');
    var elem4 = document.getElementById('linkProceso');
    var elem5 = document.getElementById('linkMonitoreo');
    var elem6 = document.getElementById('linkDatos');
    var elem7 = document.getElementById('linkRedes');
    var elem8 = document.getElementById('linkUsuario');
    elem1.style.color = NewColor;    
    elem2.style.color = Color;
    elem3.style.color = Color;
    elem4.style.color = Color;
    elem5.style.color = Color;
    elem6.style.color = Color;
    elem7.style.color = Color;
    elem8.style.color = Color;

    //Muestra la flecha        
    var HCI = document.getElementById("flecha-menuHCI");    
    if (HCI.style.display === "none") {
        //console.log("si");
        HCI.style.display = "inline";
    } else {
        //console.log("no");
        HCI.style.display = "none";
    }

    var Nube = document.getElementById("flecha-menuNube");
    Nube.style.display = "none";
    var Seguridad = document.getElementById("flecha-menuSeguridad");
    Seguridad.style.display = "none";
    var Proceso = document.getElementById("flecha-menuProceso");
    Proceso.style.display = "none";
    var Monitoreo = document.getElementById("flecha-menuMonitoreo");
    Monitoreo.style.display = "none";
    var Datos = document.getElementById("flecha-menuDatos");
    Datos.style.display = "none";
    var Redes = document.getElementById("flecha-menuRedes");
    Redes.style.display = "none";
    var Usuario = document.getElementById("flecha-menuUsuario");
    Usuario.style.display = "none";
 }

 function changeColorLinkNube() {
    var NewColor = '#ffffff';
    var Color = '#606060';    
    var elem1 = document.getElementById('linkHCI');    
    var elem2 = document.getElementById('linkNube');
    var elem3 = document.getElementById('linkSeguridad');
    var elem4 = document.getElementById('linkProceso');
    var elem5 = document.getElementById('linkMonitoreo');
    var elem6 = document.getElementById('linkDatos');
    var elem7 = document.getElementById('linkRedes');
    var elem8 = document.getElementById('linkUsuario');  
    elem1.style.color = Color;
    elem2.style.color = NewColor;
    elem3.style.color = Color;
    elem4.style.color = Color;
    elem5.style.color = Color;
    elem6.style.color = Color;
    elem7.style.color = Color;
    elem8.style.color = Color;    

     //Muestra la flecha        
     var x = document.getElementById("flecha-menuNube");
     if (x.style.display === "none") {
         //console.log("si");
         x.style.display = "inline";
     } else {
         //console.log("no");
         x.style.display = "none";
     }

    var HCI = document.getElementById("flecha-menuHCI");
    HCI.style.display = "none";
    var Seguridad = document.getElementById("flecha-menuSeguridad");
    Seguridad.style.display = "none";
    var Proceso = document.getElementById("flecha-menuProceso");
    Proceso.style.display = "none";
    var Monitoreo = document.getElementById("flecha-menuMonitoreo");
    Monitoreo.style.display = "none";
    var Datos = document.getElementById("flecha-menuDatos");
    Datos.style.display = "none";
    var Redes = document.getElementById("flecha-menuRedes");
    Redes.style.display = "none";
    var Usuario = document.getElementById("flecha-menuUsuario");
    Usuario.style.display = "none";
 }

 function changeColorLinkSeguridad() {
    var NewColor = '#ffffff';
    var Color = '#606060';    
    var elem1 = document.getElementById('linkHCI');    
    var elem2 = document.getElementById('linkNube');
    var elem3 = document.getElementById('linkSeguridad');
    var elem4 = document.getElementById('linkProceso');
    var elem5 = document.getElementById('linkMonitoreo');
    var elem6 = document.getElementById('linkDatos');
    var elem7 = document.getElementById('linkRedes');
    var elem8 = document.getElementById('linkUsuario');    
    elem1.style.color = Color;
    elem2.style.color = Color;
    elem3.style.color = NewColor;
    elem4.style.color = Color;
    elem5.style.color = Color;
    elem6.style.color = Color;
    elem7.style.color = Color;
    elem8.style.color = Color;  
    
     //Muestra la flecha        
     var x = document.getElementById("flecha-menuSeguridad");
     if (x.style.display === "none") {
         console.log("si");
         x.style.display = "inline";
     } else {
         console.log("no");
         x.style.display = "none";
     }

    var HCI = document.getElementById("flecha-menuHCI");
    HCI.style.display = "none";
    var Nube = document.getElementById("flecha-menuNube");
    Nube.style.display = "none";
    var Proceso = document.getElementById("flecha-menuProceso");
    Proceso.style.display = "none";
    var Monitoreo = document.getElementById("flecha-menuMonitoreo");
    Monitoreo.style.display = "none";
    var Datos = document.getElementById("flecha-menuDatos");
    Datos.style.display = "none";
    var Redes = document.getElementById("flecha-menuRedes");
    Redes.style.display = "none";
    var Usuario = document.getElementById("flecha-menuUsuario");
    Usuario.style.display = "none";
 }

 function changeColorLinkProceso() {
    var NewColor = '#ffffff';
    var Color = '#606060';    
    var elem1 = document.getElementById('linkHCI');    
    var elem2 = document.getElementById('linkNube');
    var elem3 = document.getElementById('linkSeguridad');
    var elem4 = document.getElementById('linkProceso');
    var elem5 = document.getElementById('linkMonitoreo');
    var elem6 = document.getElementById('linkDatos');
    var elem7 = document.getElementById('linkRedes');
    var elem8 = document.getElementById('linkUsuario');    
    elem1.style.color = Color;
    elem2.style.color = Color;
    elem3.style.color = Color;
    elem4.style.color = NewColor;
    elem5.style.color = Color;
    elem6.style.color = Color;
    elem7.style.color = Color;
    elem8.style.color = Color;  
    
     //Muestra la flecha        
     var x = document.getElementById("flecha-menuProceso");
     if (x.style.display === "none") {
         console.log("si");
         x.style.display = "inline";
     } else {
         console.log("no");
         x.style.display = "none";
     }

     var HCI = document.getElementById("flecha-menuHCI");
     HCI.style.display = "none";
     var Nube = document.getElementById("flecha-menuNube");
     Nube.style.display = "none";
     var Seguridad = document.getElementById("flecha-menuSeguridad");
     Seguridad.style.display = "none";
     var Monitoreo = document.getElementById("flecha-menuMonitoreo");
     Monitoreo.style.display = "none";
     var Datos = document.getElementById("flecha-menuDatos");
     Datos.style.display = "none";
     var Redes = document.getElementById("flecha-menuRedes");
     Redes.style.display = "none";
     var Usuario = document.getElementById("flecha-menuUsuario");
     Usuario.style.display = "none";
 }

 function changeColorLinkMonitoreo() {
    var NewColor = '#ffffff';
    var Color = '#606060';    
    var elem1 = document.getElementById('linkHCI');    
    var elem2 = document.getElementById('linkNube');
    var elem3 = document.getElementById('linkSeguridad');
    var elem4 = document.getElementById('linkProceso');
    var elem5 = document.getElementById('linkMonitoreo');
    var elem6 = document.getElementById('linkDatos');
    var elem7 = document.getElementById('linkRedes');
    var elem8 = document.getElementById('linkUsuario');    
    elem1.style.color = Color;
    elem2.style.color = Color;
    elem3.style.color = Color;
    elem4.style.color = Color;
    elem5.style.color = NewColor;
    elem6.style.color = Color;
    elem7.style.color = Color;
    elem8.style.color = Color; 
    
     //Muestra la flecha        
     var x = document.getElementById("flecha-menuMonitoreo");
     if (x.style.display === "none") {
         console.log("si");
         x.style.display = "inline";
     } else {
         console.log("no");
         x.style.display = "none";
     }

     var HCI = document.getElementById("flecha-menuHCI");
     HCI.style.display = "none";
     var Nube = document.getElementById("flecha-menuNube");
     Nube.style.display = "none";
     var Seguridad = document.getElementById("flecha-menuSeguridad");
     Seguridad.style.display = "none";
     var Proceso = document.getElementById("flecha-menuProceso");
     Proceso.style.display = "none";
     var Datos = document.getElementById("flecha-menuDatos");
     Datos.style.display = "none";
     var Redes = document.getElementById("flecha-menuRedes");
     Redes.style.display = "none";
     var Usuario = document.getElementById("flecha-menuUsuario");
     Usuario.style.display = "none";
 }

 function changeColorLinkDatos() {
    var NewColor = '#ffffff';
    var Color = '#606060';    
    var elem1 = document.getElementById('linkHCI');    
    var elem2 = document.getElementById('linkNube');
    var elem3 = document.getElementById('linkSeguridad');
    var elem4 = document.getElementById('linkProceso');
    var elem5 = document.getElementById('linkMonitoreo');
    var elem6 = document.getElementById('linkDatos');
    var elem7 = document.getElementById('linkRedes');
    var elem8 = document.getElementById('linkUsuario');    
    elem1.style.color = Color;
    elem2.style.color = Color;
    elem3.style.color = Color;
    elem4.style.color = Color;
    elem5.style.color = Color;
    elem6.style.color = NewColor;
    elem7.style.color = Color;
    elem8.style.color = Color; 
    
     //Muestra la flecha        
     var x = document.getElementById("flecha-menuDatos");
     if (x.style.display === "none") {
         console.log("si");
         x.style.display = "inline";
     } else {
         console.log("no");
         x.style.display = "none";
     }

     var HCI = document.getElementById("flecha-menuHCI");
     HCI.style.display = "none";
     var Nube = document.getElementById("flecha-menuNube");
     Nube.style.display = "none";
     var Seguridad = document.getElementById("flecha-menuSeguridad");
     Seguridad.style.display = "none";
     var Proceso = document.getElementById("flecha-menuProceso");
     Proceso.style.display = "none";
     var Monitoreo = document.getElementById("flecha-menuMonitoreo");
     Monitoreo.style.display = "none";
     var Redes = document.getElementById("flecha-menuRedes");
     Redes.style.display = "none";
     var Usuario = document.getElementById("flecha-menuUsuario");
     Usuario.style.display = "none";
 }

 function changeColorLinkRedes() {
    var NewColor = '#ffffff';
    var Color = '#606060';    
    var elem1 = document.getElementById('linkHCI');    
    var elem2 = document.getElementById('linkNube');
    var elem3 = document.getElementById('linkSeguridad');
    var elem4 = document.getElementById('linkProceso');
    var elem5 = document.getElementById('linkMonitoreo');
    var elem6 = document.getElementById('linkDatos');
    var elem7 = document.getElementById('linkRedes');
    var elem8 = document.getElementById('linkUsuario');    
    elem1.style.color = Color;
    elem2.style.color = Color;
    elem3.style.color = Color;
    elem4.style.color = Color;
    elem5.style.color = Color;
    elem6.style.color = Color;
    elem7.style.color = NewColor;
    elem8.style.color = Color;  
    
     //Muestra la flecha        
     var x = document.getElementById("flecha-menuRedes");
     if (x.style.display === "none") {
         console.log("si");
         x.style.display = "inline";
     } else {
         console.log("no");
         x.style.display = "none";
     }

     var HCI = document.getElementById("flecha-menuHCI");
     HCI.style.display = "none";
     var Nube = document.getElementById("flecha-menuNube");
     Nube.style.display = "none";
     var Seguridad = document.getElementById("flecha-menuSeguridad");
     Seguridad.style.display = "none";
     var Proceso = document.getElementById("flecha-menuProceso");
     Proceso.style.display = "none";
     var Monitoreo = document.getElementById("flecha-menuMonitoreo");
     Monitoreo.style.display = "none";
     var Datos = document.getElementById("flecha-menuDatos");
     Datos.style.display = "none";
     var Usuario = document.getElementById("flecha-menuUsuario");
     Usuario.style.display = "none";
 }

 function changeColorLinkUsuario() {
    var NewColor = '#ffffff';
    var Color = '#606060';    
    var elem1 = document.getElementById('linkHCI');    
    var elem2 = document.getElementById('linkNube');
    var elem3 = document.getElementById('linkSeguridad');
    var elem4 = document.getElementById('linkProceso');
    var elem5 = document.getElementById('linkMonitoreo');
    var elem6 = document.getElementById('linkDatos');
    var elem7 = document.getElementById('linkRedes');
    var elem8 = document.getElementById('linkUsuario');    
    elem1.style.color = Color;
    elem2.style.color = Color;
    elem3.style.color = Color;
    elem4.style.color = Color;
    elem5.style.color = Color;
    elem6.style.color = Color;
    elem7.style.color = Color;
    elem8.style.color = NewColor; 
    
     //Muestra la flecha        
     var x = document.getElementById("flecha-menuUsuario");
     if (x.style.display === "none") {
         console.log("si");
         x.style.display = "inline";
     } else {
         console.log("no");
         x.style.display = "none";
     }
     var HCI = document.getElementById("flecha-menuHCI");
     HCI.style.display = "none";
     var Nube = document.getElementById("flecha-menuNube");
     Nube.style.display = "none";
     var Seguridad = document.getElementById("flecha-menuSeguridad");
     Seguridad.style.display = "none";
     var Proceso = document.getElementById("flecha-menuProceso");
     Proceso.style.display = "none";
     var Monitoreo = document.getElementById("flecha-menuMonitoreo");
     Monitoreo.style.display = "none";
     var Datos = document.getElementById("flecha-menuDatos");
     Datos.style.display = "none";
     var Redes = document.getElementById("flecha-menuRedes");
     Redes.style.display = "none";
 }


 /*Function to initialize owl carousel*/
 
/*$(document).ready(function () {

    var owl = $("#marcasCarousel");
    
    $(".owl-carousel").owlCarousel({
        /*animateOut: 'slideOutDown',
        animateIn: 'flipInX',*/
        /*autoPlay: 3000,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        center: true,
        nav: true,
        loop: true,
        responsive: {
            600: {
                items: 4
            }
        }
    });

    // Custom Navigation Events
    $(".next").click(function(){
    owl.trigger('owl.next');
    })
    $(".prev").click(function(){
    owl.trigger('owl.prev');
    })

   /* $(".owl-carousel").on('change.owl.carousel', function (event) {
        var el = event.target;
        $('img', el).addClass('slideInRight animated')
                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $('img', el).removeClass('slideInRight animated');
                });
    });
});*/

//Function to change between video or image in home to solve some troubles*/

function BrowserDetection() {
    //Check if browser is Safari, if it is, hide the <video> tag, otherwise hide the <img> tag
    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        document.getElementById('videoHome').style.display= "none";
        //console.log("its safari");
    } else {
        document.getElementById('imgVideo').style.display= "none";
        //console.log("its chrome or other");
    }               
}

//Function to change logo sellcom - black to white
function changeLogo(value) {
    if (value === true){
        //document.getElementById('navmenu_logo').src='../Assets/Images/Home/Logo-Sellcom-Blanco.png';
    }else{
        //document.getElementById('navmenu_logo').src='../Assets/Images/Home/Logo-Sellcom.png';
    }
}

/** Inicia Collapse Nueva landing Intel**/
function changeColorLinkIntel1() {
    var Color = '#000000';    
    var NewColor = '#000000';
    var elem1 = document.getElementById('linkIntel1');    
    elem1.style.color = NewColor;    
    
    //Cambia la imagen del "+"
    var intelmas1 = document.getElementById("intelmas1");
    var intelmenos1 = document.getElementById("intelmenos1");    
    var intelmas2 = document.getElementById("intelmas2");
    var intelmenos2 = document.getElementById("intelmenos2");
    var intelmas3 = document.getElementById("intelmas3");
    var intelmenos3 = document.getElementById("intelmenos3");    

    

    if (intelmas1.style.display === "none") {
        //console.log("si");
        intelmas1.style.display = "inline";
        intelmenos1.style.display = "none";
        intelmas2.style.display = "inline";
        intelmenos2.style.display = "none";
        intelmas3.style.display = "inline";
        intelmenos3.style.display = "none";
    } else {
        //console.log("no");
        intelmas1.style.display = "none";
        intelmenos1.style.display = "inline";
        intelmas2.style.display = "inline";
        intelmenos2.style.display = "none";
        intelmas3.style.display = "inline";
        intelmenos3.style.display = "none";
    }
 }

 function changeColorLinkIntel2() {
    var Color = '#000000';    
    var NewColor = '#000000';
    var elem1 = document.getElementById('linkIntel2');    
    elem1.style.color = NewColor;    
    
    //Cambia la imagen del "+"
    var intelmas1 = document.getElementById("intelmas1");
    var intelmenos1 = document.getElementById("intelmenos1");    
    var intelmas2 = document.getElementById("intelmas2");
    var intelmenos2 = document.getElementById("intelmenos2");
    var intelmas3 = document.getElementById("intelmas3");
    var intelmenos3 = document.getElementById("intelmenos3");    

    if (intelmas2.style.display === "none") {
        //console.log("si");
        intelmas1.style.display = "inline";
        intelmenos1.style.display = "none";
        intelmas2.style.display = "inline";
        intelmenos2.style.display = "none";
        intelmas3.style.display = "inline";
        intelmenos3.style.display = "none";
    } else {
        //console.log("no");
        intelmas1.style.display = "inline";
        intelmenos1.style.display = "none";
        intelmas2.style.display = "none";
        intelmenos2.style.display = "inline";
        intelmas3.style.display = "inline";
        intelmenos3.style.display = "none";
    }
 }

 function changeColorLinkIntel3() {
    var Color = '#000000';    
    var NewColor = '#000000';
    var elem1 = document.getElementById('linkIntel3');    
    elem1.style.color = NewColor;    
    
    //Cambia la imagen del "+"
    var intelmas1 = document.getElementById("intelmas1");
    var intelmenos1 = document.getElementById("intelmenos1");    
    var intelmas2 = document.getElementById("intelmas2");
    var intelmenos2 = document.getElementById("intelmenos2");
    var intelmas3 = document.getElementById("intelmas3");
    var intelmenos3 = document.getElementById("intelmenos3");    
    
    if (intelmas3.style.display === "none") {
        //console.log("si");
        intelmas1.style.display = "inline";
        intelmenos1.style.display = "none";
        intelmas2.style.display = "inline";
        intelmenos2.style.display = "none";
        intelmas3.style.display = "inline";
        intelmenos3.style.display = "none";
    } else {
        //console.log("no");
        intelmas1.style.display = "inline";
        intelmenos1.style.display = "none";
        intelmas2.style.display = "inline";
        intelmenos2.style.display = "none";
        intelmas3.style.display = "none";
        intelmenos3.style.display = "inline";
    }
 }
 /** Inicia Collapse Nueva landing Intel**/

/** 3D Slider owl verticales - move and timer**/
(function () {
    "use strict";
  
    var carousel = document.getElementsByClassName("carousel-new")[0],
      slider = carousel.getElementsByClassName("carousel__slider")[0],
      items = carousel.getElementsByClassName("carousel__slider__item"),
      prevBtn = carousel.getElementsByClassName("carousel__prev")[0],
      nextBtn = carousel.getElementsByClassName("carousel__next")[0];
  
    var width,
      height,
      totalWidth,
      margin = 20,
      currIndex = 0,
      interval,
      intervalTime = 4000;
  
    function init() {
      resize();
      move(Math.floor(items.length / 2));
      bindEvents();
  
      //timer();
    }
  
    function resize() {
      (width = Math.max(window.innerWidth * 0.25, 275)),
        (height = window.innerHeight * 0.50),
        (totalWidth = width * items.length);

      slider.style.width = totalWidth + "px";
  
      for (var i = 0; i < items.length; i++) {
        let item = items[i];
        item.style.width = width - margin * 2 + "px";
        item.style.height = height + "px";

        //console.log("seiz", item.style.width, item.style.height );
      }
    }
  
    function move(index) {
      if (index < 1) index = items.length;
      if (index > items.length) index = 1;
      currIndex = index;

      //console.log("curIndex", index, currIndex, items.length);
  
      for (var i = 0; i < items.length; i++) {
        let item = items[i],
          box = item.getElementsByClassName("item__3d-frame")[0];
          var auxText = item.getElementsByClassName("aux-text")[0];
          //console.log(auxText);
        if (i == index - 1) {
          item.classList.add("carousel__slider__item--active");
          box.style.transform = "perspective(1200px)";
          box.style.background = "#efefef";
          auxText.style.color = "black";
        } else {
          item.classList.remove("carousel__slider__item--active");
          box.style.background = "none";
          auxText.style.color = "white";
          box.style.transform =
            "perspective(1200px) rotateY(" + (i < index - 1 ? 20 : -20) + "deg)";
        }
      }
  
      slider.style.transform =
        "translate3d(" +
        (index * -width + width / 2 + window.innerWidth / 2) +
        "px, 0, 0)";
    }
  
    function timer() {
      clearInterval(interval);
      interval = setInterval(() => {
        move(++currIndex);
      }, intervalTime);
    }
  
    function prev() {
      move(--currIndex);
      //timer();
    }
  
    function next() {
      move(++currIndex);
      //timer();
    }
  
    function bindEvents() {
      window.onresize = resize;
      prevBtn.addEventListener("click", () => {
        prev();
      });
      nextBtn.addEventListener("click", () => {
        next();
      });
    }
  
    init();
})();
/******************************************/