const tagsEl = document.getElementById("tags")
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)

  if(e.key ==='Enter'){
    setTimeout(() =>{
      e.target.value = ''
    }, 10)
    randomSelect()
  }
})


function createTags(content){
  const tags = content.split(',').map(tag => tag.trim()).filter(tag => tag.trim()!== '');

  tagsEl.innerHTML = ""
  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })}


function randomSelect(){
    const times = 20

    const interval = setInterval(() => {
      const randomTag = pickRandomTag()

      highlightTag(randomTag);
      setTimeout(() => {
        unHighlightTag(randomTag)
      },100)
    }, 100);

    setTimeout(() => {
      clearInterval(interval)

      setTimeout(() => {
        const randomTag = pickRandomTag()
        highlightTag(randomTag)
      },100)
    }, times * 100
  )
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  var i = Math.floor(Math.random() * tags.length)
  return tags[i]
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}
function unHighlightTag(tag) {
  tag.classList.remove('highlight')
}
