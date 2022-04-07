   //Demo of Switch case 
   function calc()
        {
            document.getElementById("perc").value=(document.getElementById("om").value/document.getElementById("mm").value)*100


            var g=Math.floor(document.getElementById("perc").value/10);

            switch(g)
            {
                case 9:
                case 8:
                {
                    document.getElementById("grade").value="Amazing"
                    break;
                }
                case 7:
                    document.getElementById("grade").value="Very Good"
                    break;
                case 6:
                    document.getElementById("grade").value="Good"
                    break;
                case 5:
                    document.getElementById("grade").value="Ok"
                    break;
                case 4:
                    document.getElementById("grade").value="Pass"
                    break;
                default:
                    document.getElementById("grade").value="FAIL"

            }
        }