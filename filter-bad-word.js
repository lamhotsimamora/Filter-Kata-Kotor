const _badWord = [
	'Anjing','Babi','Monyet','Kunyuk','Bajingan','Asu','Bangsat'
	,'Kampret','Kontol','Memek','Ngentot','Pentil','Perek','Pepek'
	,'Pecun','Bencong','Banci','Jablay','Maho','Bego','Goblok','Idiot'
	,'Geblek','Gila','Sinting','Tolol','Sarap','Setan','Keparat','Bejad'
	,'Gembel','Brengsek','Tai','Anjrit','Bangsat','Fuck','Tetek','Ngulum'
	,'Jembut','Totong','Kolop'
];

String.prototype._replaceAllString = function(s, r) {
    return this.split(s).join(r);
};

function _filterBadWord(str,txt,dt){
	if (str)
	{
		var str = str.toLowerCase();
		txt = txt ? txt : "***";
		dt = dt ? dt : _badWord;
		for (var i = 0; i < dt.length; i++) 
		{
			 var kk = dt[i].toLowerCase();
			 var ii = str.search(kk);
			 if ( ii != -1)
			 {
			 	 str = str._replaceAllString(kk,txt);
			 }	
		}
		return str;
	}else{
		return undefined;
	}
}