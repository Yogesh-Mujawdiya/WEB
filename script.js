function LoadData(){
    ShowStudentData();
}

var XMLData = "";
function ShowStudentData(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        var T = document.getElementById("Students");
        XMLData = "<Students>\n"
        for(var i in myObj){
            XMLData += "\t<Student>\n";
            var rowCount = T.rows.length;
            var row = T.insertRow(rowCount);
            var k=0;
            L = ["Roll_No","First_Name","Last_Name","Gender","DOB","Email","Branch","Department","Mobile"];
            for(var j in L){
                XMLData += "\t\t<"+[L[j]]+">\n\t\t\t"+myObj[i][L[j]]+"\n\t\t</"+[L[j]]+">\n";
                var newcell	= row.insertCell(k++);
				newcell.innerHTML = myObj[i][L[j]];
            }
            XMLData += "\t</Student>\n";            
        }
        XMLData += "</Students>";
    }
    };
    xhttp.open("GET", "allStudent.jsp", true);
    xhttp.send();
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

$(document).on("change", ".file_multi_video", function(evt) {
    var $source = $('#video_here');
    $source[0].src = URL.createObjectURL(this.files[0]);
    $source.parent()[0].load();
    $source.parent()[0].play();    
});

$(document).on("change", ".file_multi_audio", function(evt) {
    var $source = $('#audio_here');
    $source[0].src = URL.createObjectURL(this.files[0]);
    $source.parent()[0].load();
    $source.parent()[0].play();    
});

function SaveData(){
    var data = XMLData;
    var filename = "Students"
    var type = "xml";
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

$(function () {
    $("#btnGenerate").click(function () {
        var xml = document.getElementById("XMLData").value;
        var xml = "<Customers>";
        xml += "<Customer>";
        xml += "<CustomerId>1</CustomerId><Name>John Hammond</Name><Country>United States</Country>";
        xml += "</Customer>";
        xml += "<Customer>";
        xml += "<CustomerId>2</CustomerId><Name>Mudassar Khan</Name><Country>India</Country>";
        xml += "</Customer>"
        xml += "<Customer>";
        xml += "<CustomerId>3</CustomerId><Name>Suzanne Mathews</Name><Country>France</Country>";
        xml += "</Customer>";
        xml += "<Customer>";
        xml += "<CustomerId>4</CustomerId><Name>Robert Schidner</Name><Country>Russia</Country>";
        xml += "</Customer>";
        xml += "</Customers>";
        
        dvTable.append(table);
    });
});