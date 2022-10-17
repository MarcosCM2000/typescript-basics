//  unknown
let userInput: unknown;
let userName: string;
userInput = 5;
userName = 'Max';

//  never
function generateError(msg: string, code: number): never{
    throw{
        message: msg,
        codeNumber: code
    };
}
generateError('An error occured', 500);