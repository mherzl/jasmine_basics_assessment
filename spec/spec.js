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
    it('empty array',function(){
        expect(
            grader.averageScore([])
        ).toEqual('error');
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
    it('empty array',function(){
        expect(
            grader.medianScore([])
        ).toEqual('error');
    });
});

describe('mode',function(){
    it('mode one',function(){
        expect(
            grader.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])
        ).toEqual([92]);
    });
    it('mode arr',function(){
        expect(
            grader.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86, 82])
        ).toEqual([82,92]);
    });
    it('empty array',function(){
        expect(
            grader.modeScore([])
        ).toEqual('error');
    });
});


