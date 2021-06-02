

var v=document.getElementById('keystore')
var w=document.getElementById('mnemonic')
var x=document.getElementById('privatekey')
var y=document.getElementById('hardware')
var z=document.getElementById('btn')
function mnemonic()
{
    v.style.left='-470px';
    w.style.left='80px';
    x.style.left='600px';
    y.style.left='900px';
    z.style.left='120px';
}
function keystore()
{
    v.style.left='40px';
    w.style.left='580px';
    x.style.left='900px';
    y.style.left='1200px';
    z.style.left='0px';
}
function privatekey()
{
    v.style.left='-900px';
    w.style.left='-450px';
    x.style.left='80px';
    y.style.left='580px';
    z.style.left='120px';
}
function hardware()
{
    v.style.left='-1300px';
    w.style.left='-950px';
    x.style.left='-470px';
    y.style.left='80px';
    z.style.left='120px';
}

/* keystore file */
$("form").on("change","file-upload-field", function(){
    $(this).parent(".file-upload-wrapper").attr("data-text",$(this).val().replace(/.*(\/|\\)/,''));
})


