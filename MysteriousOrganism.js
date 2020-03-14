// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Math.floor rounds down the random number to a whole number. The return is returning a random index number from the array dnaBases.

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Gets a random dna base 15 times.


const pAequorFactory = (specimenNumber, DNA) => {
  return {
    specimenNumber: specimenNumber,
    DNA: DNA,
    mutate () { //This funcation randomly selects a base from the DNA strand and mutates it.
      let base = this.DNA;
      let i = Math.floor(Math.random() * 15);
      if (base[i] === 'T') {
        base[i] = 'C';
        return this.DNA;
      } else if (base[i] === 'C') {
        base[i] = 'T';
        return this.DNA;
      } else if (base[i] === 'A') {
        base[i] = 'G';
        return this.DNA;
      } else {
        base[i] = 'A';
        return this.DNA;
      }
    },
    compareDNA(otherDNA) {
      let DNA1 = this.DNA;
      let DNA2 = otherDNA;
      let sum = 0;
      for (let i = 0; i < DNA1.length; i++) {
          if (DNA1[i] === DNA2[i]) {
            sum += 1;
          }
      }
      let percentage = (sum / 15) * 100;
      let percentageFinal = percentage.toFixed(0);
      return `Specimen #1 and specimen #2 have ${percentageFinal}% DNA in common`;
    },
    willLikelySurvive() {
      let survivors = this.DNA;
      let total = 0;
      for (let i = 0; i < survivors.length; i++){
        if (survivors[i] === 'C' || survivors[i] === 'G') {
          total += 1;
        }
      }
      let totalPercent = (total / 15) * 100;
      let totalPercentFinal = totalPercent.toFixed(0);
      return totalPercentFinal >= 60 ? true : false;
    },
    complementStrand() {
      const complementArr = [];
      let initialStrand = this.DNA;
      for (let i = 0; i < initialStrand.length; i++) {
        if(initialStrand[i] === 'A') {
          complementArr.push('T');
        } else if (initialStrand[i] === 'T') {
          complementArr.push('A');
       } else if (initialStrand[i] === 'C') {
          complementArr.push('G');
       } else if (initialStrand[i] === 'G') {
          complementArr.push('C');
       }
      }
      return `Initial strand: ${initialStrand} Complement strand: ${complementArr}`;
    }
  };
};

const survivorsArr = [];
let idCounter = 1;
while (survivorsArr.length < 30) {
  let test = pAequorFactory(idCounter, mockUpStrand());
  if (test.willLikelySurvive()) {
    survivorsArr.push(test);
  }
  idCounter++;
  }
      
    



//console.log(survivorsArr);
// SpecificStrand Tests
/*
const specificStrandArr= ['A', 'C', 'C', 'G', 'C', 'G', 'G', 'A', 'T', 'C', 'C', 'T', 'A', 'T', 'G' ];
const specificStrand = pAequorFactory(2, specificStrandArr);
console.log(specificStrand.complementStrand());
console.log(specificStrand.DNA);
console.log(specificStrand.mutate());
console.log(specificStrand.willLikelySurvive());
*/

//console.log(testDNA.compareDNA(specificStrandArr));

// mockUpStrand tests

const testDNA = pAequorFactory(1, mockUpStrand());
//console.log(testDNA.DNA);
//console.log(testDNA.mutate());
//console.log(testDNA.willLikelySurvive());
console.log(testDNA.complementStrand());


