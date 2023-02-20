// export const saveStorage = (name, value) => {
//     console.log(name, value)
//     try {
//         const serializedState = JSON.stringify(value);
//         window.localStorage.setItem(name, serializedState);
//     } catch (err) {
//         console.log(err);
//     }
// };


// export const loadStorage = (value) => {
//     try {
//         const serializedState = window.localStorage.getItem(value);

//         if (
//             !serializedState ||
//             serializedState === null ||
//             serializedState === undefined
//         ) {
//             return undefined;
//         }

//         return JSON.parse(serializedState);
//     } catch (err) {
//         console.log(`localStorage value not found!`);
//         return undefined;
//     }
// };



function myUtilityFunction() {
    // your utility function logic here
}

export default myUtilityFunction;
