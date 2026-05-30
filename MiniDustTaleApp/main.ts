type CharacterType = {
    name: string,
    level: number,
    health: number,
    isOnline: boolean,
    specialMove?: string
}

const dustSans: CharacterType = {
    name: 'SANS',
    level: 16,
    health: 80,
    isOnline: true,
    specialMove: "!GASTER BLASTER!"
}

let userChara: CharacterType = {
    name: '',
    level: 7,
    health: 44,
    isOnline: true,
    specialMove: '!RED HELL KNIFE!'
}

function nameCHR() {
    userChara.name = <string>prompt(`Please enter a name: `)

    let charaName = document.querySelector('#charaName')

    if (charaName) {
        charaName.innerHTML = userChara.name;
    }
}

function levelCHR() {
    let charaLevel = document.querySelector('#charaLevel')

    if (charaLevel) {
        charaLevel.innerHTML = String(`LVL ${userChara.level}`);
    }
}

function healthCHR() {
    let charaHealth = document.querySelector('#charaHealth')

    if (charaHealth) {
        charaHealth.innerHTML = String(`${userChara.health}/44`);
    }
}

const fight_button = document.querySelector('#fight')
const act_button = document.querySelector('#act')
const item_button = document.querySelector('#item')
const mercy_button = document.querySelector('#mercy')

const chara_red = document.querySelector('#hp-red') as HTMLElement
const chara_hp = document.querySelector('#hp-bar') as HTMLElement

const sans = document.querySelector('#sans-img') as HTMLElement
const sans_red = document.querySelector('#sans-hp-red') as HTMLElement
const sans_green = document.querySelector('#sans-hp-green') as HTMLElement

const attackSound = document.querySelector('#attackSound') as HTMLAudioElement
const finalSound = document.querySelector('#finalSound') as HTMLAudioElement
const finalText = document.querySelector('#finalText') as HTMLElement

fight_button?.addEventListener('click', () => {
    attackSound.play();
    sans.classList.add("shake");

    setTimeout(() => {
        sans.classList.remove("shake");
    }, 1500);

    // SANS DAMAGE
    dustSans.health -= 10;

    const hpPercent = (dustSans.health / 80) * 100;
    sans_green.style.width = hpPercent + "%";

    sans_red.style.visibility = 'visible';

    setTimeout(() => {
        sans_red.style.visibility = 'hidden';
        sans.classList.remove("shake");
    }, 1500);

    // CHARA DAMAGE
    userChara.health -= 5;
    const charaPercent = (userChara.health / 44) * 100;
    chara_hp.style.width = charaPercent + "%";
    healthCHR()

    if (dustSans.health == 0) {
        attackSound.remove();
        sans.style.display = 'none'
        finalText.innerHTML = "YOU WON!!!"
        finalText.style.display = 'block'
        finalSound.play();
    }
});


nameCHR();
levelCHR();
healthCHR();