function calc(){
    var q1 = parseInt(document.getElementById('idn1').value);
    var v1 = parseInt(document.getElementById('idn2').value);
    var q2 = parseInt(document.getElementById('idn3').value);
    var v2 = parseInt(document.getElementById('idn4').value);
    var q3 = parseInt(document.getElementById('idn5').value);
    var v3 = parseInt(document.getElementById('idn6').value);
    var qt1 = 0;
    var qt2 = 0;
    var qt3 = 0;
    var qtF = 0;

    qt1 = q1 * v1;
    qt2 = q2 * v2;
    qt3 = q3 * v3;
    qtF = qt1 + qt2 + qt3;

   
    document.getElementById('idresult').value = qt1;
    document.getElementById('idresult2').value = qt2;
    document.getElementById('idresult3').value = qt3;
    document.getElementById('idresult4').value = qtF;
}