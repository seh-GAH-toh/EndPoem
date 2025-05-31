<script>
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789èêěęėëéřþțťýùûůűüúìîïíòôõöøōóąăåäãâáàßșšşśðďğĺľłźžż¢çčćñňńÈÊĚĘÉŘÞȚŤÝÚŮŰÜÍİÎÓÖØÔĄĂÅÄÂÁÀŚȘŠŞÐĎĞĽŁŹŽŻÇČĆŃ[]{}()§¬&%$#"|';

	let string = $state('');

	async function generateGlitch() {
		string = '';
		for (let i = 0; i <= 5; i++) {
			string += characters.charAt(Math.floor(Math.random() * characters.length));
		}
	}

	setInterval(() => {
		generateGlitch();
	}, 100);
</script>

<span>{string}</span>
