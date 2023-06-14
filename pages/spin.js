            var spin1 = document.getElementById("catterpillar1");
            var spin2 = document.getElementById("catterpillar2");
            var spin3 = document.getElementById("catterpillar3");
            var rot1 = -180;
            var rot2 = -180;
            var rot3 = -180;
            var ele1 = document.getElementById("expandable1");
            var ele2 = document.getElementById("expandable2");
            var ele3 = document.getElementById("expandable3");
            ele1.style.maxHeight = "0px";
            ele2.style.maxHeight = "0px";
            ele3.style.maxHeight = "0px";

            spin1.addEventListener("click", function() {
              spin1.style = 'transform: rotate(' + rot1 + 'deg)';
              if(rot1 == -180) {
                rot1 += 180;
              }
              else {
                rot1 += -180;
              };
            }
            );
            spin1.addEventListener("click", function() {
                if(ele1.style.maxHeight == "0px") {
                ele1.style.maxHeight = "100vh";
              }
              else {
                ele1.style.maxHeight = "0px";
              };
            });

            spin2.addEventListener("click", function() {
              spin2.style = 'transform: rotate(' + rot2 + 'deg)';
              if(rot2 == -180) {
                rot2 += 180;
              }
              else {
                rot2 += -180;
              };
            }
            );
            spin2.addEventListener("click", function() {
                if(ele2.style.maxHeight == "0px") {
                ele2.style.maxHeight = "100vh";
              }
              else {
                ele2.style.maxHeight = "0px";
              };
            });

            spin3.addEventListener("click", function() {
              spin3.style = 'transform: rotate(' + rot3 + 'deg)';
              if(rot3 == -180) {
                rot3 += 180;
              }
              else {
                rot3 += -180;
              };
            }
            );
            spin3.addEventListener("click", function() {
                if(ele3.style.maxHeight == "0px") {
                ele3.style.maxHeight = "100vh";
              }
              else {
                ele3.style.maxHeight = "0px";
              };
            })