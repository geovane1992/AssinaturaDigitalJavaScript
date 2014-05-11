var text = undefined;

var textAs = undefined;

var priv_key = undefined;

function copiarAssinatura()
{
	$("#assinaturaCopiada").text($("#assinaturaGerada").val());
	return false;
}

function limpar()
{
	$("#assinaturaCopiada").text("");
	$("#assinaturaGerada").text("");
	return false;
}
function assinarDocumento()
{
	if(text == undefined)
	{
        alert ("E preciso carregar o documento!")
         	
	}

	if(priv_key=="")
	{
	alert("E preciso carregar uma chave privada!");
		
	}
	var rsa = new RSAKey();
	rsa.readPrivateKeyFromPEMString(priv_key);
	var hashAlg = $("select[name='hashAlg']").val();
	var sign = rsa.signString(text, hashAlg);
	$("textarea[name='assinaturaGerada']").text(sign);
	
	return false;
}

function checarDocumento()
{
	if(textAs == undefined)
	{
	alert("E preciso carregar o documento Assinado!");
		
	}

	if($("#assinaturaCopiada").val()=="")
	{
        alert("E preciso carregar a assinatura do documento!");
		
	}

	if($("#public_key").val()=="")
	{
	alert("E preciso carregar uma Chave Publica!");
		
	}

	var sign = $("#assinaturaCopiada").val();
	var x509 = new X509();
	x509.readCertPEM($("#public_key").val());
	var isValid = x509.subjectPublicKeyRSA.verifyString(textAs, sign);
	if(isValid)
	{
		alert("Documento e valido!");
	}
	else
	{
		alert("Documento e invalido!")
	}
}

$(document).ready(function(){

	priv_key = $("#priv_key").val();

	if(window.File && window.FileReader && window.FileList && window.Blob)
	{
		$("input[name='doc']").bind("change", function(evt){
			
			var files = evt.target.files;

			for(var i=0, f; i<files.length; ++i)
			{
				f = files[i];
				var reader = new FileReader();

				reader.onload = (function(theFile){
					return function(e)
					{
						text = reader.result;
						alert("Documento carregado!");
					};
				})(f);

				reader.onloadstart = (function(theFile){
					return function(e)
					{
						text = undefined;
						
					};
				})(f);

				reader.onabort = (function(theFile){
					return function(e)
					{
						text = undefined;
						alert("Erro ao ler documento!");
					};
				})(f);

				reader.onerror = (function(theFile){
					return function(e)
					{
						text = undefined;
						alert("Erro ao ler documento!");
					};
				})(f);

				reader.readAsBinaryString(f);
			}
		});

		$("input[name='docAs']").bind("change", function(evt){
			
			var files = evt.target.files;

			for(var i=0, f; i<files.length; ++i)
			{
				f = files[i];
				var reader = new FileReader();

				reader.onload = (function(theFile){
					return function(e)
					{
						textAs = reader.result;
						alert("Documento carregado!");
					};
				})(f);

				reader.onloadstart = (function(theFile){
					return function(e)
					{
						textAs = undefined;
						
					};
				})(f);

				reader.onabort = (function(theFile){
					return function(e)
					{
						textAs = undefined;
						alert("Erro ao ler documento!");
					};
				})(f);

				reader.onerror = (function(theFile){
					return function(e)
					{
						textAs = undefined;
						alert("Erro ao ler documento!");
					};
				})(f);

				reader.readAsBinaryString(f);
			}
		});

		$("input[name='priv_key_file']").bind("change", function(evt){
			
			var files = evt.target.files;

			for(var i=0, f; i<files.length; ++i)
			{
				f = files[i];
				var reader = new FileReader();

				reader.onload = (function(theFile){
					return function(e)
					{
						$("#priv_key").text("");
						priv_key = reader.result;
						alert("Erro ao ler documento!");
					};
				})(f);

				reader.onloadstart = (function(theFile){
					return function(e)
					{
						priv_key = undefined;
						
					};
				})(f);

				reader.onabort = (function(theFile){
					return function(e)
					{
						priv_key = undefined;
						alert("Erro ao ler documento!");
					};
				})(f);

				reader.onerror = (function(theFile){
					return function(e)
					{
						priv_key = undefined;
						alert("Erro ao ler documento!");
					};
				})(f);

				reader.readAsBinaryString(f);
			}
		});

		$("#priv_key").bind("change", function(evt){
			priv_key = $("#priv_key").val();
		});
	}
	else
	{
		alert("Navegador nao e Compativel");
	}
});