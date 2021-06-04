const dataApi = {
	url: 'https://www.breakingbadapi.com/api/',
	character: 'characters?limit=12'
}

const dataUrl = dataApi.url + dataApi.character;

fetch(dataUrl)
	.then(response => response.json())
	.then(data => {						
		// Display each character	
		let charList = document.querySelector('.character-list');	
			
		data.forEach((character, id) => {
			let charHTML = `
				<div class="col-lg-3 col-md-4">
					<div class="character character-id-${id}">
						<h5 class="character-name">${character.name}</h5>
						<div class="character-img">
							<img src="${character.img}">
						</div>
						<button class="btn btn-success btn-character">Character Info &raquo;</button>
					</div>
					
					<div class="character-modal">
						<div class="modal-wrapper">
							<div class="character-img-modal">
								<img src="${character.img}">								
							</div>
							
							<div class="character-info">
								<ul>
									<li><h4>${character.name}</h4></li>
									<li>Birthday: ${character.birthday}</li>
									<li>Nickname: ${character.nickname}</li>
									<li>Seasons: ${character.appearance}</li>
									<li>Actor: ${character.portrayed}</li>
								</ul>
							</div>
							
							<button class="btn btn-success btn-close-modal">Close</button>
						</div>						
					</div>
				</div>
			`;	
			charList.innerHTML += charHTML;		
		});
		
		// Character Info Modal
		let charBtn = document.querySelectorAll('.btn-character');
		let closeModal = document.querySelectorAll('.btn-close-modal');
		let charModal = document.querySelectorAll('.character-modal');
		
		charBtn.forEach((button) => {
			button.addEventListener('click', () => {
				event.preventDefault();
				button.parentNode.nextElementSibling.classList.add('active');				
			});
		});
				
		closeModal.forEach((modalButton) => {
			modalButton.addEventListener('click', () => {
				event.preventDefault();
				modalButton.parentNode.parentNode.classList.remove('active');
			});
		});					
	});