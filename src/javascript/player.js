const player = {
  audio1: document.querySelector("#audio1"),
  audio2: document.querySelector("#audio2"),
  audio3: document.querySelector("#audio3"),
  audio4: document.querySelector("#audio4"),
  audio5: document.querySelector("#audio5"),
  audio6: document.querySelector("#audio6"),
  audio7: document.querySelector("#audio7"),


  init(notes, temp){
    notes.forEach((note, index) => {
      this[`audio${index + 1}plays`] = note.notes;
    });

    this.getNewValueBytemp(notes, temp);
    this.playNote();
    this.displayNote();
  },

  playNote() {
    let index = 0;

    setInterval(() => {
      if (this.audio1plays[index] === 1) {
        this.audio1.currentTime = 0;
        this.audio1.play();
      }

      if (this.audio2plays[index] === 1) {
        this.audio2.currentTime = 0;
        this.audio2.play();
      }

      if (this.audio3plays[index] === 1) {
        this.audio3.currentTime = 0;
        this.audio3.play();
      }

      if (this.audio4plays[index] === 1) {
        this.audio4.currentTime = 0;
        this.audio4.play();
      }

      if (this.audio5plays[index] === 1) {
        this.audio5.currentTime = 0;
        this.audio5.play();
      }

      if (this.audio6plays[index] === 1) {
        this.audio6.currentTime = 0;
        this.audio6.play();
      }

      if (this.audio7plays[index] === 1) {
        this.audio7.currentTime = 0;
        this.audio7.play();
      }

      index = (index + 1) % this.audio1plays.length;
    }, 400);
  },

  getNewValueBytemp(notes, temp){
    let nbChangedNotes = 0;

    notes.forEach((noteList, listIndex) => {
      let indices = [];

      noteList.notes.forEach((note, index) => {
        if (note === 1) {
          let doOrNot = Math.round(Math.random());
          if (doOrNot === 1) {
            if (parseInt(temp) - nbChangedNotes > 0) {
              if (index === noteList.length) {
                indices.push(0);
              }
              else{
                indices.push(index + 1);
              }
            }

            nbChangedNotes++;
          }
          else{
            indices.push(index);
          }
        }
      })

      this.updateNotes(indices, listIndex)
    })
  },

  updateNotes(indexes, listIndex){
    this[`audio${listIndex + 1}plays`].forEach((note, index) => {
      if (indexes.includes(index)) {
          this[`audio${listIndex + 1}plays`][index] = 1;
      } else {
          this[`audio${listIndex + 1}plays`][index] = 0;
      }
    });
  },

  displayNote() {
    const audioArrays = [
      this.audio1plays,
      this.audio2plays,
      this.audio3plays,
      this.audio4plays,
      this.audio5plays,
      this.audio6plays,
      this.audio7plays,
    ];

    for (let i = 0; i < audioArrays.length; i++) {
      const rowCells = document.querySelectorAll(`.grid > .row:nth-child(${i + 1}) .cell`);

      for (let j = 0; j < audioArrays[i].length; j++) {
        if (audioArrays[i][j] === 1) {
          rowCells[j].classList.add('active');
        } else {
          rowCells[j].classList.remove('active');
        }
      }
    }
  }
}
export default player
