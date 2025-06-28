<script>
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789èêěęėëéřþțťýùûůűüúìîïíòôõöøōóąăåäãâáàßșšşśðďğĺľłźžż¢çčćñňńÈÊĚĘÉŘÞȚŤÝÚŮŰÜÍİÎÓÖØÔĄĂÅÄÂÁÀŚȘŠŞÐĎĞĽŁŹŽŻÇČĆŃ[]{}()§¬&%$#"|';

	let string = $state('');

	setInterval(async () => {
		string = '';
		for (let i = 0; i <= 5; i++) {
			string += characters.charAt(Math.floor(Math.random() * characters.length));
		}
	}, 120);
</script>

<span aria-label="obfuscated text" class="inline-flex w-[4.6rem] justify-end overflow-hidden"
	>{string}</span
>
