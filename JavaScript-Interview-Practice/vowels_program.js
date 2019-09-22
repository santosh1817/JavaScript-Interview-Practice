const str='hello world'

function countVowels(str){
    let count=0
    str=str.toLowerCase()
    for(let i=0;i<str.length;i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
            count+=1
        }
    }
    return count
}

const result=countVowels(str)//3
console.log(result)

