const members = [
  "DrLumpi", "rizalzeus", "vgdsc", "Tirrasgo", "Xenoplayer10", "yokhikazuu", "V4ughaneenee",
  "aminemaab", "hyuk7", "angelopra", "Bahran1", "AsianPeter",
  "maiu", "ozikol100", "ShadowGarden001", "Original213", "HEGI",
  "v1pus", "iamFii", "PhilipTheGreat", "epicdragon", "db",
  "Pin0", "Polikaw", "G0d4sura", "MrSinisterSerpent", "heatseeka7209",
  "Animaboy", "hamdanfuture", "SeleneMood", "UserF", "Gogeta4906", 
  "kaizhuo", "mas2122", "Rip3ro", "BellamyBlack", "rafik2", 
  "SimagerKalimantan", "CesarAprigio", "Heinz1", "KICHIBE", "Drastic", 
  "Gravenn", "Nezura"
];

const membersGrid = document.getElementById('membersGrid');

members.forEach((member, index) => {
  const memberCard = document.createElement('div');
  memberCard.className = 'member-card';
  memberCard.innerHTML = `
    <svg class="member-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 12c2.667 0 4-1.333 4-4s-1.333-4-4-4-4 1.333-4 4 1.333 4 4 4zm0 2c-3.667 0-11 1.833-11 5.5V21h22v-1.5c0-3.667-7.333-5.5-11-5.5z"/>
    </svg>
    <div class="member-name">${index + 2}. ${member}</div>
  `;
  memberCard.onclick = () => showPopup(member);
  membersGrid.appendChild(memberCard);
});

function showPopup(name, isLeader) {
  const popup = document.createElement('div');
  popup.className = 'popup' + (isLeader ? ' popup-special' : '');
  popup.innerHTML = `
    <h2>${name}</h2>
    <p>${isLeader ? "WHO AM I?" : "Member of the Scavenger Guild."}</p>
    <button class="close-btn" onclick="closePopup()">Close</button>
  `;
  document.body.appendChild(popup);
  document.querySelector('.overlay').style.display = 'block';
  popup.style.display = 'block';
}

function closePopup() {
  const popup = document.querySelector('.popup');
  if (popup) {
    popup.remove();
  }
  document.querySelector('.overlay').style.display = 'none';
}
