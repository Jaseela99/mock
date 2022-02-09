const evenArray=require("./index")

test("gives an array of even number",()=>{
    expect(evenArray([1,2,3,4,5,6,7,8])).toStrictEqual([ 2, 4, 6, 8 ])
})