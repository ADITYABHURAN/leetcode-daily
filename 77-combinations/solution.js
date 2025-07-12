

var combine = function(n, k) {
    //Write Code here
    let res = [];
    
    function helper(start, curr){
        //base case 
        if(curr.length === k){
            res.push([...curr]);  // make a copy of curr to store in res 
            return;
        }
        //recurssive case 
        for(let j = start;j<=n;j++){   //starts from 'start' to 'n'
        //include j in the current combination
        
        curr.push(j);
        helper(j+1,curr);
        //backtrack
        curr.pop(); //backtrack to remove the last element and try the next possibility 
        }
        
    }
    
    
    
    helper(1,[])
    return res;
    
};
