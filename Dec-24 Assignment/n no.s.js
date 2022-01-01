var n=prompt("Enter number");

	for( var i=3; i<n ; i++)
	{
	
  		   var prime=1;

		for(var a=3; a<i; a++)
   		 {    
				
           	 	 	if(i%a==0)
               			{   
			    prime=0;
			    break;
               			 }		
			
   		 }

			if(prime==1)
			{
			console.log(i);
			}
	}
