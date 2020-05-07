function submitResume() {
    
    var resumeHtml = createResume();
    var win = window.open();
    win.document.write(resumeHtml);
}
function createResume() {
    //Start html doc
    var topHtml = `<html>
    <head>
        <title>Resume</title>
        <link rel="stylesheet" type="text/css" href="cssMain.css"> 
    </head>
    <div id="exportContent">
    <body>`;
    var html = `<h1 align="center" style="margin-bottom: 0;">`+document.getElementById("nameTxt").value+`</h1>`;
    //Add Email
    if (document.getElementById("emailChk").checked == true) {
        html = html.concat('<p align="center">', document.getElementById("emailTxt").value, '</p>');
    }
    //Add Phone Number
    if (document.getElementById("numChk").checked) {
        html = html.concat('<p align="center">', document.getElementById("numTxt").value, '</p>');
    }
    html = html.concat('<p style="margin-top: 1em;">', document.getElementById("sumTxt").value,'</p>')
    //Add education heading
    if (document.getElementById("eduChk1").checked || document.getElementById("eduChk2").checked) {
        html = html.concat('<h2>Education:</h2>');
    }
    //Add education stuff
    if (document.getElementById("eduChk1").checked) {
        html = html.concat('<h4>',document.getElementById("eduDeg1").value,' - ',document.getElementById("eduNam1").value,'</h4><p>',document.getElementById("eduLoc1").value,'</p><p>',document.getElementById("eduTim1").value,'</p>');
    }
    if (document.getElementById("eduChk2").checked) {
        html = html.concat('<h4>',document.getElementById("eduDeg2").value,' - ',document.getElementById("eduNam2").value,'</h4><p>',document.getElementById("eduLoc2").value,'</p><p>',document.getElementById("eduTim2").value,'</p>');
    }
    //Add experience heading
    if (document.getElementById("jobChk1").checked || document.getElementById("jobChk2").checked || document.getElementById("jobChk3").checked) {
        html = html.concat('<h2>Experience:</h2>');
    }
    //Add experience stuff
    if (document.getElementById("jobChk1").checked) {
        html = html.concat('<h4>',document.getElementById("jobTit1").value,'</h4><p>',document.getElementById("jobCom1").value,' - ',document.getElementById("jobLoc1").value,'</p><p>',document.getElementById("jobTim1").value,'</p><p>',document.getElementById("jobInf1").value,'</p>');
    }
    if (document.getElementById("jobChk2").checked) {
        html = html.concat('<h4>',document.getElementById("jobTit2").value,'</h4><p>',document.getElementById("jobCom2").value,' - ',document.getElementById("jobLoc2").value,'</p><p>',document.getElementById("jobTim2").value,'</p><p>',document.getElementById("jobInf2").value,'</p>');
    }
    if (document.getElementById("jobChk3").checked) {
        html = html.concat('<h4>',document.getElementById("jobTit3").value,'</h4><p>',document.getElementById("jobCom3").value,' - ',document.getElementById("jobLoc3").value,'</p><p>',document.getElementById("jobTim3").value,'</p><p>',document.getElementById("jobInf3").value,'</p>');
    }
    //Add additional info
    if (document.getElementById("addChk").checked) {
        html = html.concat('<h2>Additional Information:</h2><p>', document.getElementById("addTxt").value,'</p>');
    }
    //Finish html doc
    bottomHtml = '</body></html>';
    resumeHtml = topHtml.concat(html,bottomHtml);
    exportHTML(html);
    return resumeHtml;
}
//Exports html to docx format and downloads automatically
function exportHTML(html){
       var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
            "xmlns:w='urn:schemas-microsoft-com:office:word' "+
            "xmlns='http://www.w3.org/TR/REC-html40'>"+
            "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
       var footer = "</body></html>";
       var sourceHTML = header+html+footer;
       
       var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
       var fileDownload = document.createElement("a");
       document.body.appendChild(fileDownload);
       fileDownload.href = source;
       fileDownload.download = 'myResume.doc';
       fileDownload.click();
       document.body.removeChild(fileDownload);
}