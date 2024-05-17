const btnEl = document.getElementById("btn");

const emojiNameel = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=30a70a09bef7d39e386d795da1e224271340afb5"
  );
  data = await response.json();

  //   console.table(data);
  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();

// console.log(emoji);

btnEl.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  btnEl.innerText = emoji[randomNum].emojiName;
  emojiNameel.innerText = emoji[randomNum].emojiCode;
});
