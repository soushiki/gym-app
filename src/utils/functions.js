import { EXERCISES, SCHEMES, TEMPOS, WORKOUTS } from "./swoldier"
import { LEVELS } from "./guide"
const exercises = exercisesFlattener(EXERCISES)

export function generateWorkout(args) {
    const { muscles, poison: workout, goal, level = "advanced", location = "gym" } = args
    let exer = Object.keys(exercises);
    exer = exer.filter((key) => isAvailable(exercises[key].meta, location));
    let includedTracker = [];
    let numSets = 5;
    let listOfMuscles;

    if (workout === "individual") {
        listOfMuscles = muscles;
    } else {
        listOfMuscles = WORKOUTS[workout][muscles[0]];
    }

    listOfMuscles = new Set(shuffleArray(listOfMuscles));
    let arrOfMuscles = Array.from(listOfMuscles);
    let scheme = goal
    let sets = SCHEMES[scheme].ratio
        .reduce((acc, curr, index) => {
            //make this compound and exercise muscle -> array of objects and destructure in loop
            return [
                ...acc,
                ...[...Array(parseInt(curr)).keys()].map((val) =>
                    index === 0 ? "compound" : "accessory"
                ),
            ];
        }, [])
        .reduce((acc, curr, index) => {
            const muscleGroupToUse =
                index < arrOfMuscles.length
                    ? arrOfMuscles[index]
                    : arrOfMuscles[index % arrOfMuscles.length];
            return [
                ...acc,
                {
                    setType: curr,
                    muscleGroup: muscleGroupToUse,
                },
            ];
        }, []);

    const { compound: compoundExercises, accessory: accessoryExercises } =
        exer.reduce(
            (acc, curr) => {
                let exerciseHasRequiredMuscle = false;
                for (const musc of exercises[curr].muscles) {
                    if (listOfMuscles.has(musc)) {
                        exerciseHasRequiredMuscle = true;
                    }
                }
                return exerciseHasRequiredMuscle
                    ? {
                        ...acc,
                        [exercises[curr].type]: {
                            ...acc[exercises[curr].type],
                            [curr]: exercises[curr],
                        },
                    }
                    : acc;
            },
            { compound: {}, accessory: {} }
        );

    const genWOD = sets.map(({ setType, muscleGroup }) => {
        const data =
            setType === "compound" ? compoundExercises : accessoryExercises;
        const filteredObj = Object.keys(data).reduce((acc, curr) => {
            if (
                includedTracker.includes(curr) ||
                !data[curr].muscles.includes(muscleGroup)
            ) {
                // if (includedTracker.includes(curr)) { console.log('banana', curr) }
                return acc;
            }
            return { ...acc, [curr]: exercises[curr] };
        }, {});
        const filteredDataList = Object.keys(filteredObj);
        const filteredOppList = Object.keys(
            setType === "compound" ? accessoryExercises : compoundExercises
        ).filter((val) => !includedTracker.includes(val));

        let randomExercise =
            filteredDataList[
            Math.floor(Math.random() * filteredDataList.length)
            ] ||
            filteredOppList[
            Math.floor(Math.random() * filteredOppList.length)
            ];

        // console.log(randomExercise)

        if (!randomExercise) {
            return {};
        }

        let repsOrDuraction =
            exercises[randomExercise].unit === "reps"
                ? Math.min(...SCHEMES[scheme].repRanges) +
                Math.floor(
                    Math.random() *
                    (Math.max(...SCHEMES[scheme].repRanges) -
                        Math.min(...SCHEMES[scheme].repRanges))
                ) +
                (setType === "accessory" ? 4 : 0)
                : Math.floor(Math.random() * 40) + 20;
        const tempos = level === "beginner" ? BEGINNER_TEMPOS : TEMPOS;
        const tempo = tempos[Math.floor(Math.random() * tempos.length)];

        if (exercises[randomExercise].unit === "reps") {
            const tempoSum = tempo
                .split(" ")
                .reduce((acc, curr) => acc + parseInt(curr), 0);
            if (tempoSum * parseInt(repsOrDuraction) > 85) {
                repsOrDuraction = Math.floor(85 / tempoSum);
            }
        } else {
            //set to nearest 5 seconds
            repsOrDuraction = Math.ceil(parseInt(repsOrDuraction) / 5) * 5;
        }
        includedTracker.push(randomExercise);

        return {
            name: randomExercise,
            tempo,
            rest: SCHEMES[scheme]["rest"][setType === "compound" ? 0 : 1],
            reps: repsOrDuraction,
            ...exercises[randomExercise],
        };
    });

    return genWOD
        .filter((element) => Object.keys(element).length > 0)
        .slice(0, LEVELS[level].maxExercises);
}

// Smooth, controlled tempos only: no long pauses or explosive reps for beginners.
const BEGINNER_TEMPOS = ['3 0 2', '2 2 2', '2 1 1']
const HOME_EQUIPMENT = ['bands', 'band', 'dumbbells', 'dumbbell']

function isAvailable(meta, location) {
    if (location === "gym") {
        return meta.environment !== "home"
    }
    return meta.environment.includes("home") &&
        meta.equipment.every((item) => HOME_EQUIPMENT.includes(item))
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

function exercisesFlattener(exercisesObj) {
    const flattenedObj = {}

    for (const [key, val] of Object.entries(exercisesObj)) {
        if (!("variants" in val)) {
            flattenedObj[key] = { ...val, base: key }
        } else {
            for (const variant in val.variants) {
                let variantName = variant + "_" + key
                let variantSubstitutes = Object.keys(val.variants).map((element) => {
                    return element + ' ' + key
                }).filter(element => element.replaceAll(' ', '_') !== variantName)

                flattenedObj[variantName] = {
                    ...val,
                    base: key,
                    variant,
                    description: val.description + '___' + val.variants[variant],
                    substitutes: [
                        ...val.substitutes, ...variantSubstitutes
                    ].slice(0, 5)
                }
            }
        }
    }
    return flattenedObj
}