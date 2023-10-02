let readLineSync = require("readline-sync")
let kuler= require("kuler");
let score=0;
let userName = readLineSync.question("Enter your name ")
console.log(kuler(`Hello ${userName}`,"#d946ef"))
const database={
  data : [
    {
      question : `let a={} b={}
      console.log(a==b)
      console.log(a===b)`,
      options : {
        a : "false false",
        b : "false true",
        c : "true false",
        d : "true true"
      },
      correctAnswer : "a"
    },
    {
      question : `Object.assign(target,source) 
      creates which type of copy?`,
      options : {
        a : "Deep Copy",
        b : "Shallow Copy",
        c : "Nested Copy",
        d : "Creates a new Reference"
      },
      correctAnswer : "b"
    },
    {
      question : `Is Method Chaining possible with forEach?`,
      options : {
        a : "Yes",
        b : "No",
      },
      correctAnswer : "b"
    }
  ]
};
const leaderboard={
  data : [
    {
      name : "Mani",
      score : 3
    },
    {
      name : "babi",
      score : 2
    },
    {
      name : "vrushali",
      score : 1
    }
  ]
}
function printQuestionAndOptions(database)
{
  for(let i=0;i<database.data.length;i++)
  {
    console.log(`Q${i+1} ${database.data[i].question}`)
    for(let key in database.data[i].options)
    {
        console.log(`${key}) ${database.data[i].options[key]}`)
    }
    let userAns = readLineSync.question("Enter Your Answer - (a/b/c/d)").toLowerCase()
    if(userAns===database.data[i].correctAnswer)
    {
      console.log(kuler("Your Answer is Correct","#34d399"));
      score++;
    }
    else
    {
      console.log(kuler("Your Answer is Wrong","#ef4444"));
console.log(kuler(`The Correct Answer is ${database.data[i].correctAnswer}`,"#fde047"));
    }
    console.log(`\n`)
  }
}
printQuestionAndOptions(database);
console.log(kuler(`Your Score is - ${score}`,"#38bdf8"))
function highscores(leaderboard)
{
  leaderboard.data.push({name:userName,score})
  let sortbyscore = leaderboard.data.sort((a,b)=> b.score-a.score)
  console.log(kuler(`\ncheck your position on leaderboad`,"#d946ef"))
  for(let j of sortbyscore)
    {
      console.log(`${j.name} - score:${j.score}`)
    }
  if(score>=leaderboard.data[0].score)
    console.log(kuler(`congratulations! Now You are the new HighScore Holder`,"#67e8f9"))
}
highscores(leaderboard)
