const words = ["HAPPY","SAD","NOTEBOOK","EAR","EYE","WALLET"];



let output = [];
const word = words[Math.floor(Math.random() * 6)];
for(let i = 0; i < word.length; i++)
{
	output[i] = '_';
	process.stdout.write(output[i]);
}
let count = 10;
let flag;
while(count > 0)
{
	f = 0;
	console.log('');
	console.log(`남은 횟수는 ${count}회 입니다.`);
	let input = 'A';
	for(let i = 0 ; i < word.length; i++)
	{
		if(input === word[i])
			output[i] = word[i];
		process.stdout.write(output[i]);
	}
	for(let i = 0; i < word.length; i++)
		if(output[i] === '_')
		{
			f = 1;
			break;
		}
	if(flag === 0)
		break;
	count--;
}
console.log('');
if(flag === 0)
	console.log('성공');
else
{
	console.log('실패');
	console.log(`정답은 ${word}입니다`);
}

