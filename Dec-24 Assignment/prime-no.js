var num=prompt("Enter number");

	var count=0;	

	for( var i=1; i<num; i++)
	{
		if(num%i==0)
		count=count+1;		

	}
		if(count%2==0)
		{
			console.log("Perfect Square");
		}
		else
		{
			console.log("Not a  perfect Square");
		
		}