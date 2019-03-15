var campeonatos = window.localStorage.getItem('campeonatos');

if (campeonatos == null) {
	campeonatos = {};
}

// teste

campeonatos = {
	"mk64" : [
		{
			"id" : 123,
			"nome" : "Campeonato Teste",
			"status" : "ativo",
			"participantes" : ["Kiliano", "Murilo", "Roger"],
			"rodada": [
				{
					"1" : "Roger",
					"2" : "Kiliano",
					"3" : "Murilo",
					"4" : ""
				},
				{
					"1" : "Kiliano",
					"2" : "Roger",
					"3" : "Murilo",
					"4" : ""
				},
				{
					"1" : "Roger",
					"2" : "Murilo",
					"3" : "Kiliano",
					"4" : ""
				}
			]
		}
	]
};

// fim teste

console.log(campeonatos);
// window.localStorage.setItem('name', 'Obaseki Nosa');
// window.localStorage.getItem('campeonatos');

jQuery(document).ready(function(){

})