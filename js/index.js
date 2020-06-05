$(function(){
	function Adicionar(){
		$("#tblCadastro tbody").append(
			"<tr>"+
			"<td><input type='text'/></td>"+
			"<td><input type='text'/></td>"+
			"<td><img src='img/disk.png' class='btnSalvar'><img src='img/delete.png' class='btnExcluir'/></td>"+
			"</tr>");

		$(".btnSalvar").bind("click", Salvar);     
		$(".btnExcluir").bind("click", Excluir);
	};

	function Salvar(){
		var par = $(this).parent().parent(); //tr
		var tdCodigo = par.children("td:nth-child(1)");
		var tdNome = par.children("td:nth-child(2)");
		var tdBotoes = par.children("td:nth-child(3)");

		tdCodigo.html(tdCodigo.children("input[type=text]").val());
		tdNome.html(tdNome.children("input[type=text]").val());
		tdBotoes.html("<img src='img/delete.png'class='btnExcluir'/>");

		$(".btnEditar").bind("click", Editar);
		$(".btnExcluir").bind("click", Excluir);
	};

	function Editar(){
		var par = $(this).parent().parent(); //tr
		var tdCodigo = par.children("td:nth-child(1)");
		var tdNome = par.children("td:nth-child(2)");
		var tdBotoes = par.children("td:nth-child(4)");

		tdCodigo.html("<input type='text'id='txtCodigo' value='"+tdCodigo.html()+"'/>");
		tdNome.html("<input type='text' id='txtNome' value='"+tdNome.html()+"'/>");
		tdBotoes.html("<img src='img/disk.png' class='btnSalvar'/>");

		$(".btnSalvar").bind("click", Salvar);
		$(".btnEditar").bind("click", Editar);
		$(".btnExcluir").bind("click", Excluir);
	};

	function Excluir(){
	    var par = $(this).parent().parent(); //tr
	    par.remove();
	};

	$(".btnEditar").bind("click", Editar);
	$(".btnExcluir").bind("click", Excluir);
	$("#btnAdicionar").bind("click", Adicionar); 
});
