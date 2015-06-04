var grader = require('./../grader.js');

describe('letterGrader', function(){
    it('letterGrader', function(){
    expect(
        grader.letterGrader(93)
    ).toEqual('A');
    });
    it('letterGrader', function(){
    expect(
        grader.letterGrader(150)
    ).toEqual('A+');
    });
    it('letterGrader', function(){
    expect(
        grader.letterGrader(50)
    ).toEqual('F');
    });
});

describe('mean (averageScore)',function(){
    it('averageScore', function(){
        expect(
            grader.averageScore([90, 95, 87, 60])
        ).toEqual(83);
    });
});

describe('medianScore',function(){
    it('odd', function(){
        expect(
            grader.medianScore([52,80,80,86,94])
        ).toEqual(80);
    });
    it('even', function(){
        expect(
            grader.medianScore([52,80,80,94])
        ).toEqual(80);
    });
});
