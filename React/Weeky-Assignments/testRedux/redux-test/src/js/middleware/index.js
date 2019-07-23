import { ADD_ARTICLE } from "../constants/action-types";

const forbiddenWords = [ "fuck", "shit", "cunt", "spam"];

export function forbiddenWordsMiddleware ({ dispatch }) {
    return function (next){
        return function(action){
            if (action.type === ADD_ARTICLE){
                const foundWord = forbiddenWords.filter(word => 
                    action.payload.title.toLowerCase().includes(word)
                    );

                    if(foundWord.length){
                        return dispatch ({ type: "FOUND_BAD_WORD" })
                    }
            }

            return next(action);
        };
    };
}