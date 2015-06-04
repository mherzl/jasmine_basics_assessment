var letterGrader = function(s) {
    if(s<60)
        return 'F';
    if(s<=62)
        return 'D-';
    if(s<67)
        return 'D';
    if(s<70)
        return 'D+';
    if(s<=72)
        return 'C-';
    if(s<77)
        return 'C';
    if(s<80)
        return 'C+';
    if(s<=82)
        return 'B-';
    if(s<87)
        return 'B';
    if(s<90)
        return 'B+';
    if(s<=92)
        return 'A-';
    if(s<97)
        return 'A';
    if(s>=97)
        return 'A+';
    else
        return 'error';
};

var averageScore = function(arr) {
    return arr.reduce(function(a,e){return a+e;},0) / arr.length;
};

var medianScore = function(arr) {
    var sorted = arr.sort();
    if(arr.length % 2 === 0)
        return sorted[arr.length / 2];
    if(arr.length % 2 === 1)
        return sorted[Math.floor(arr.length / 2)];
    return 'error';
};

var modeScore = function(arr){
    var count = function(x,arr){
        return arr.reduce(function(a,e){
            if(e==x)
                return a+1;
            return a;
            //e==x ? a+1 : a;
        },0);
    };
    var maxCount = arr.reduce(function(a,e){
        var c = count(e,arr);
        if(c>a)
            return c;
        return a;
    },0);
    var maxes = arr.filter(function(e){
        return count(e,arr)===maxCount;
    });
    var deleteDuplicates = function(arr){
        return arr.reduce(function(a,e){
            if(count(e,a)>=1)
                return a;
            a.push(e);
            return a;
        },[]);
    };
    var ans = deleteDuplicates(maxes);
    if(ans.length===1)
        return ans[0];
    return ans.sort();
};

module.exports = {
    letterGrader: letterGrader,
    averageScore: averageScore,
    medianScore: medianScore,
    modeScore: modeScore
};
