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