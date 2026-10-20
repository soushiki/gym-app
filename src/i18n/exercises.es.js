// Spanish exercise data. Names follow what Latin American (and Colombian) gyms
// actually say, not word-for-word translations: "jalón al pecho" not "tirón
// hacia abajo del lat", "pantorrillas" not "gemelos", English loanwords where
// gyms keep them (hip thrust, face pull, curl, pullover).
//
// n: name. {v} is where an adjective variant goes (inclinado, plano...).
// g: grammatical gender/number of the name, so adjectives agree (m, f, mp, fp).
// vn: per-exercise variant labels that replace {v} directly.
// d: instructions. v: per-variant instructions.

export const MUSCLES = {
    biceps: 'bíceps',
    triceps: 'tríceps',
    chest: 'pecho',
    back: 'espalda',
    shoulders: 'hombros',
    quads: 'cuádriceps',
    hamstrings: 'femorales',
    glutes: 'glúteos',
    calves: 'pantorrillas',
    abs: 'abdomen',
}

// Split days (WORKOUTS keys that are not muscles).
export const DAYS = {
    push: 'empuje',
    pull: 'tirón',
    legs: 'pierna',
    upper: 'tren superior',
    lower: 'tren inferior',
    arms: 'brazos',
}

// Adjectives in [m, f, mp, fp].
export const ADJECTIVES = {
    incline: ['inclinado', 'inclinada', 'inclinados', 'inclinadas'],
    flat: ['plano', 'plana', 'planos', 'planas'],
    horizontal: ['plano', 'plana', 'planos', 'planas'],
    decline: ['declinado', 'declinada', 'declinados', 'declinadas'],
}

// Variants that read as a note after the name: "Remo con barra (agarre supino)".
export const PHRASES = {
    underhand: 'agarre supino',
    overhand: 'agarre prono',
    neutral_grip: 'agarre neutro',
    neutral: 'agarre neutro',
    unilateral: 'a una mano',
    two_handed: 'a dos manos',
    wide_stance: 'pies abiertos',
    neutral_stance: 'pies al ancho de hombros',
    narrow_stance: 'pies juntos',
    toes_in: 'puntas hacia adentro',
    toes_out: 'puntas hacia afuera',
    wide_grip: 'agarre abierto',
    narrow_grip: 'agarre cerrado',
    military: 'militares',
    rotating: 'con rotación',
    standard: '',
}

// Repeated variant instructions.
const BENCH = {
    incline: 'En un banco inclinado entre 30 y 45 grados, sostén la barra justo encima del pecho.',
    flat: 'Haz este ejercicio en un banco plano.',
    decline: 'Haz este ejercicio en un banco declinado unos 15 grados, con la cabeza en el extremo más bajo. Engancha las piernas en el extremo alto del banco para no resbalarte.',
    underhand: 'Acostado en un banco plano, toma la barra con agarre invertido (supino), con los pulgares hacia afuera. Usa menos peso en esta variante.',
}
const CABLE = {
    incline: 'Para enfocarte en la parte alta del pecho, pon la polea abajo, cerca del piso. Las manos van de abajo, a los lados, hacia arriba, frente a tu cara.',
    horizontal: 'Pon la polea más o menos a la altura del pecho.',
    decline: 'Pon la polea en la posición más alta, para que las manos vayan de arriba hacia abajo al juntarse frente a ti.',
}
const CABLE_VN = { incline: 'de abajo hacia arriba', horizontal: 'a la altura del pecho', decline: 'de arriba hacia abajo' }
const PULL_GRIP = {
    underhand: 'Hazlo con agarre supino: palmas mirando hacia ti.',
    neutral_grip: 'Hazlo con agarre neutro: palmas mirándose entre sí.',
    overhand: 'Hazlo con agarre prono: palmas mirando hacia el frente.',
}
const ROW_GRIP = {
    underhand: 'Hazlo con agarre supino: palmas mirando hacia adelante, lejos de tus pies.',
    neutral_grip: 'Hazlo con agarre neutro: palmas mirándose entre sí.',
    overhand: 'Hazlo con agarre prono: palmas mirando hacia tus pies.',
}
const SEATED_GRIP = {
    underhand: 'Hazlo con agarre supino: palmas mirando al techo.',
    neutral_grip: 'Hazlo con agarre neutro: palmas mirando hacia tu cuerpo.',
    overhand: 'Hazlo con agarre prono: palmas mirando al piso.',
}
const MACHINE_SEAT = {
    high: 'Ajusta la altura del asiento para que las manos se muevan a la altura de la boca o la barbilla.',
    standard: 'Ajusta la altura del asiento para que las manos se muevan a la altura de los pezones.',
    decline: 'Sube el asiento lo más posible, para que las manijas queden por debajo de la altura de los pezones.',
}
const TOES = {
    toes_in: 'Gira las puntas de los pies 30 grados hacia adentro durante el movimiento.',
    standard: 'Pies mirando al frente, separados al ancho de los hombros.',
    toes_out: 'Gira las puntas de los pies 30 grados hacia afuera durante el movimiento.',
}
const CURL = {
    hammer: 'Hazlo con agarre neutro (martillo): palmas mirando hacia tu cuerpo todo el tiempo.',
    supinated: 'Mantén el agarre supino todo el movimiento: las palmas pasan de mirar al frente a mirar hacia arriba.',
    alternating: 'Empieza con agarre neutro y termina girando la palma hacia el techo (supinación).',
}
const CURL_VN = { hammer: 'martillo', supinated: 'supino', alternating: 'alterno' }
const STANCE = {
    wide_stance: 'Pies bastante más abiertos que el ancho de los hombros, centrados en la plataforma.',
    neutral_stance: 'Pies al ancho de los hombros, centrados en la plataforma.',
    narrow_stance: 'Pies separados unos 10 cm, centrados en la plataforma.',
}
const DB_BENCH_INCLINE = 'Haz este ejercicio en un banco inclinado a 30 grados.'
const DB_BENCH_FLAT = 'Haz este ejercicio en un banco plano.'
const DB_BENCH_DECLINE = 'Haz este ejercicio en un banco declinado unos 15 grados, con la cabeza en el extremo bajo.'
const DB_NEUTRAL = 'Pon las mancuernas paralelas entre sí, con los pulgares apuntando hacia tu cabeza.'
const DB_ROTATE = 'Empieza con las mancuernas arriba del pecho y los pulgares mirándose. Al bajarlas a los lados del pecho, gíralas hasta que queden paralelas, con los pulgares hacia tu cabeza. Al subir, vuelve a la posición inicial.'

export const EXERCISES_ES = {
    barbell_bench_press: {
        n: 'Press de banca {v} con barra', g: 'm',
        d: 'Mantén las escápulas retraídas (hombros hacia atrás y abajo) y las manos dos palmas más abiertas que el ancho de los hombros. Baja la barra con los codos a unos 45 grados del torso, hasta tocar el pecho a la altura de los pezones.',
        v: BENCH,
    },
    prayer_press: {
        n: 'Press Svend {v} con disco', g: 'm',
        d: 'Sostén un disco liviano entre las palmas (como si estuvieras rezando). Con las escápulas retraídas, aprieta las manos una contra otra mientras empujas el disco lejos de ti.',
        v: {
            incline: 'Empuja las manos hacia adelante y hacia arriba, a 45 grados sobre la horizontal.',
            horizontal: 'Empuja las manos hacia adelante, en línea recta frente al pecho.',
            decline: 'Empuja las manos hacia adelante y hacia abajo, unos 30 grados bajo la horizontal.',
        },
    },
    pec_dec: {
        n: 'Contractora {v} (peck deck)', g: 'f', vn: { high: 'alta', standard: '', decline: 'baja' },
        d: 'Mantén las escápulas retraídas y saca pecho. Junta las manijas hasta que se toquen; el recorrido no debe pasar de 90 grados hacia cada lado.',
        v: {
            high: 'Ajusta el asiento para que las manos se junten a la altura de la boca o la barbilla.',
            standard: 'Ajusta el asiento para que las manos se junten a la altura de los pezones.',
            decline: 'Sube el asiento lo más posible, para que las manijas queden por debajo de los pezones.',
        },
    },
    standing_dumbbell_incline_fly: {
        n: 'Apertura cruzada de pie con mancuernas', g: 'f',
        d: 'De pie, con una mancuerna en cada mano, palmas al frente y pecho afuera. Sube una mancuerna hacia arriba y cruzando el cuerpo, hasta que la palma mire al techo y la mano pase al otro lado. Baja despacio y repite con el otro brazo.',
    },
    standing_plate_raises: {
        n: 'Elevación frontal con disco', g: 'f',
        d: 'De pie, sostén un disco por los lados, frente a la cadera. Súbelo frente a ti hasta la altura de los hombros, haz una pausa corta y bájalo despacio. Saca pecho hacia el techo durante el ejercicio.',
    },
    cable_fly: {
        n: 'Aperturas en polea {v}', g: 'fp', vn: CABLE_VN,
        d: 'Se puede hacer de arriba hacia abajo o de abajo hacia arriba. Con las manijas y los brazos casi rectos, junta las manos frente a ti y luego vuelve despacio hacia atrás.',
        v: CABLE,
    },
    pushup: {
        n: 'Flexiones de pecho {v}', g: 'fp',
        vn: { incline: 'con pies elevados', military: 'militares', decline: 'con manos hacia la cintura' },
        d: 'En posición de plancha, con las manos un poco más abiertas que los hombros (pulgares a la altura de los pezones), baja el pecho despacio hacia el piso con los codos a 45 grados. Luego empuja para subir. Si es muy difícil, apoya las rodillas.',
        v: {
            incline: 'Apoya los pies sobre una superficie un poco elevada y las manos en el piso.',
            military: 'Pon las manos justo debajo de los hombros, en la misma línea vertical que el pecho.',
            decline: 'Pon las manos más atrás, cerca de la línea de la cintura, para que el cuerpo quede inclinado sobre ellas.',
        },
    },
    dips: {
        n: 'Fondos en paralelas', g: 'mp',
        d: 'En las paralelas, inclínate hacia adelante sobre las manos y baja el cuerpo despacio hasta que los codos queden paralelos al piso. Luego empuja para subir. Los codos no deben abrirse más de 45 grados. Usa la máquina asistida si la hay.',
    },
    dumbbell_bench_press: {
        n: 'Press de banca {v} con mancuernas', g: 'm',
        d: 'Con las escápulas retraídas, sostén las mancuernas sobre el pecho, con las manos un poco más abiertas que los hombros. Baja las mancuernas con los codos a máximo 45 grados del torso, hasta que los pulgares lleguen a la altura de los pezones. Luego empuja para subir.',
        v: {
            incline: DB_BENCH_INCLINE,
            horizontal: DB_BENCH_FLAT,
            decline: DB_BENCH_DECLINE,
            neutral_grip_incline: DB_BENCH_INCLINE + ' ' + DB_NEUTRAL,
            neutral_grip_horizontal: DB_BENCH_FLAT + ' ' + DB_NEUTRAL,
            neutral_grip_decline: DB_BENCH_DECLINE + ' ' + DB_NEUTRAL,
            rotating_incline: DB_BENCH_INCLINE + ' ' + DB_ROTATE,
            rotating_horizontal: DB_BENCH_FLAT + ' ' + DB_ROTATE,
            rotating_decline: DB_BENCH_DECLINE + ' ' + DB_ROTATE,
        },
    },
    landmine_press: {
        n: 'Press landmine', g: 'm',
        d: 'Fija un extremo de la barra en un soporte landmine o en una esquina del piso. Pon el peso en el otro extremo. Párate detrás del extremo con peso y súbelo hasta la altura del pecho para empezar.',
        v: {
            unilateral: 'Sostén el extremo de la barra con una mano, el pulgar cerca del hombro y el cuerpo a 45 grados de la barra. Empuja la barra hacia arriba y cruzando el pecho hasta estirar el brazo, y baja despacio.',
            two_handed: 'Sostén el extremo de la barra con las dos manos, la barra apuntando lejos de tu cuerpo. Empújala hacia adelante y arriba hasta estirar los brazos, y bájala despacio.',
        },
    },
    chest_press: {
        n: 'Press de pecho {v} en máquina', g: 'm', vn: { high: 'alto', standard: '', decline: 'bajo', unilateral: 'a una mano' },
        d: 'Empieza con el pecho afuera y las escápulas abajo y atrás. Empuja las manijas hasta estirar los brazos. Luego vuelve despacio.',
        v: {
            ...MACHINE_SEAT,
            unilateral: 'Ajusta el asiento para que las manijas queden a mitad del pecho. Gira el torso 30 a 45 grados hacia el lado con el que vas a empujar y empuja la manija cruzando el cuerpo. Repite con los dos lados.',
        },
    },
    smith_machine_press: {
        n: 'Press de banca {v} en máquina Smith', g: 'm',
        d: 'Acostado bajo la máquina Smith, acomódate para que la barra toque el pecho a la altura de los pezones. Codos a máximo 45 grados del torso y manos un poco más abiertas que los hombros.',
        v: BENCH,
    },
    unilateral_cable_press: {
        n: 'Press a una mano en polea {v}', g: 'm', vn: CABLE_VN,
        d: 'Párate con el cuerpo a 30 o 45 grados de la polea. Empuja la manija cruzando el cuerpo hasta estirar el codo y vuelve despacio. Mantén los codos cerca del cuerpo.',
        v: {
            incline: 'Para la parte alta del pecho, pon la polea abajo, cerca del piso. La mano va de abajo, a tu lado, hacia arriba frente a tu cara. Usa agarre supino.',
            horizontal: 'Pon la polea a la altura del pecho. Usa agarre neutro o prono.',
            decline: 'Pon la polea en la posición más alta, para que la mano vaya de arriba hacia abajo.',
        },
    },
    cable_crossover_press: {
        n: 'Press cruzado en polea {v}', g: 'm', vn: CABLE_VN,
        d: 'Como si hicieras una flexión o un press de banca, empuja las manijas hasta juntarlas y crúzalas frente a ti. Alterna qué mano queda encima en cada repetición.',
        v: CABLE,
    },
    scapula_pushup: {
        n: 'Flexiones escapulares', g: 'fp',
        d: 'En plancha (o plancha con rodillas apoyadas), con las manos en el piso más o menos a la altura de los ojos, empuja el piso para separar las escápulas. Luego deja que se junten otra vez. Los codos siempre rectos y la parte interna del codo mirando al frente.',
    },
    dumbbell_chest_fly: {
        n: 'Aperturas {v} con mancuernas', g: 'fp',
        d: 'Con una mancuerna en cada mano sobre el pecho, bájalas despacio hacia los lados con los brazos casi rectos y las palmas hacia el techo. No bajes las mancuernas más allá de la altura de tu cuerpo.',
        v: {
            incline: 'En un banco inclinado entre 30 y 45 grados, sostén las mancuernas justo encima del pecho.',
            flat: BENCH.flat,
            decline: BENCH.decline,
        },
    },
    dumbbell_floor_press: {
        n: 'Press en el piso con mancuernas', g: 'm',
        d: 'Acostado boca arriba con las escápulas retraídas y las mancuernas sobre el pecho, bájalas con los codos a 45 grados hasta que los codos toquen el piso. Luego empuja para subir.',
    },
    barbell_floor_press: {
        n: 'Press en el piso con barra', g: 'm',
        d: 'Acostado con las escápulas retraídas y la barra sobre el pecho, bájala hacia la altura de los pezones, con los codos a 45 grados, hasta que los codos toquen el piso. Luego empuja para subir.',
    },
    dumbbell_pullover: {
        n: 'Pullover con mancuerna', g: 'm',
        d: 'Acostado, sostén una mancuerna con las dos manos (como una copa) sobre el pecho. Llévala despacio hacia atrás por encima de la cabeza, con los codos cerrados, hasta donde te sientas cómodo, y vuelve al inicio.',
    },
    pullup: {
        n: 'Dominadas', g: 'fp',
        d: 'Con las manos al ancho de los hombros o un poco más, primero lleva las escápulas abajo y atrás, y luego sube el cuerpo hasta que la barbilla pase la barra. Baja hasta quedar colgado con los brazos estirados. Usa la máquina de dominadas asistidas o una banda si lo necesitas.',
        v: PULL_GRIP,
    },
    lat_pulldown: {
        n: 'Jalón al pecho', g: 'm',
        d: 'Con las manos al ancho de los hombros o un poco más, lleva primero las escápulas abajo y atrás, y luego baja la barra hasta tocar el pecho. Vuelve arriba despacio hasta estirar los brazos.',
        v: PULL_GRIP,
    },
    straight_arm_pushdown: {
        n: 'Pullover en polea (brazos rectos)', g: 'm',
        d: 'Empieza con la barra a la altura de los ojos y los brazos casi rectos frente a ti. Baja la barra sin doblar los brazos hasta que toque la parte baja del abdomen. Saca pecho y lleva la cadera un poco hacia adelante. Vuelve despacio.',
    },
    kneeling_lat_pulldown: {
        n: 'Jalón al pecho de rodillas', g: 'm',
        d: 'De rodillas frente a la polea, con las manos al ancho de los hombros o un poco más, lleva las escápulas abajo y atrás y baja la barra hasta tocar el pecho. Mira al techo durante todo el movimiento. Vuelve arriba hasta estirar los brazos.',
        v: PULL_GRIP,
    },
    one_arm_pulldown: {
        n: 'Jalón al pecho a una mano', g: 'm',
        d: 'Sentado en la máquina de jalón, lleva el hombro y la escápula abajo y atrás. Baja la manija hasta que el pulgar pueda tocar tu hombro. Repite con los dos lados.',
    },
    barbell_bentover_row: {
        n: 'Remo con barra', g: 'm',
        d: 'De pie, sostén la barra con las manos un poco más abiertas que los hombros. Con las rodillas un poco dobladas, inclina el torso hacia adelante desde la cadera hasta unos 45 grados. Lleva los codos hacia atrás, detrás de ti, para completar el remo. Espalda recta siempre.',
        v: ROW_GRIP,
    },
    dumbbell_bentover_row: {
        n: 'Remo con mancuernas', g: 'm',
        d: 'De pie, con una mancuerna en cada mano a los lados. Con las rodillas un poco dobladas, inclina el torso desde la cadera hasta unos 45 grados. Lleva los codos hacia atrás, detrás de ti, para completar el remo. Espalda recta siempre.',
        v: ROW_GRIP,
    },
    pendlay_row: {
        n: 'Remo Pendlay', g: 'm',
        d: 'Empieza con la barra en el piso y las manos un poco más abiertas que los hombros. Aprieta el abdomen y lleva los codos hacia atrás hasta que la barra toque la mitad del pecho. Baja despacio hasta el piso y repite.',
        v: ROW_GRIP,
    },
    bodyweight_row: {
        n: 'Remo invertido', g: 'm',
        d: 'Busca una barra o una mesa firme a la altura del pecho o la cintura y cuélgate debajo, con las piernas estiradas. Lleva el pecho hacia la barra y baja despacio. Mantén el cuerpo firme y recto como una tabla.',
        v: ROW_GRIP,
    },
    tbar_row: {
        n: 'Remo en barra T', g: 'm',
        d: 'Con la barra entre las piernas, las rodillas un poco dobladas y el torso inclinado unos 45 grados desde la cadera, lleva los codos hacia atrás hasta que los discos toquen el pecho. Echa la cadera un poco hacia atrás para equilibrar el peso.',
    },
    seated_row: {
        n: 'Remo sentado en polea', g: 'm',
        d: 'Con la espalda recta y vertical, lleva los codos hacia atrás e imagina que llevas las manos hacia la cadera. Evita balancear el torso o la cadera. Tira hacia abajo, hacia el ombligo.',
        v: SEATED_GRIP,
    },
    unilateral_seated_row: {
        n: 'Remo sentado a una mano', g: 'm',
        d: 'Con la manija de un solo agarre, lleva el codo hacia atrás y la mano hacia la cadera. Luego vuelve despacio hacia adelante. Repite con los dos lados.',
        v: SEATED_GRIP,
    },
    cable_row: {
        n: 'Remo de pie en polea', g: 'm',
        d: 'Con la polea a cualquier altura, dobla las rodillas e inclínate hacia atrás contra el peso. Mantén el cuerpo quieto y lleva los codos hacia atrás, con los antebrazos en línea con el cable. Abdomen firme.',
        v: SEATED_GRIP,
    },
    unilaterial_dumbbell_row: {
        n: 'Remo serrucho con mancuerna', g: 'm',
        d: 'Inclínate hacia adelante a 45 grados, apoyando una mano en un banco o superficie firme, y deja colgar la mancuerna en la otra mano. La pierna del lado de la mano apoyada va adelante. Lleva el codo hacia atrás y la mano hacia la cadera. Repite con los dos lados.',
    },
    chest_supported_dumbbell_row: {
        n: 'Remo con mancuernas apoyado en banco inclinado', g: 'm',
        d: 'Con el pecho apoyado en un banco inclinado de 30 a 45 grados, deja colgar los brazos con una mancuerna en cada mano. Lleva los codos hacia atrás, con las manos hacia la parte baja de la cintura. Baja despacio.',
    },
    machine_row: {
        n: 'Remo en máquina', g: 'm',
        d: 'Ajusta el asiento para que las manos lleguen a la altura de la parte baja del torso al tirar. Lleva los codos hacia atrás y vuelve despacio.',
        v: SEATED_GRIP,
    },
    machine_lat_pulldown: {
        n: 'Jalón al pecho en máquina', g: 'm',
        d: 'Mira al techo durante el ejercicio. Lleva las escápulas abajo y atrás, y luego baja la barra de la máquina hasta que los pulgares puedan tocar tu pecho.',
        v: PULL_GRIP,
    },
    smith_machine_row: {
        n: 'Remo en máquina Smith', g: 'm',
        d: 'De pie, sostén la barra con las manos un poco más abiertas que los hombros. Con las rodillas un poco dobladas, inclina el torso desde la cadera hasta unos 45 grados. Lleva los codos hacia atrás para completar el remo.',
        v: {
            underhand: 'Hazlo con agarre supino: palmas mirando hacia adelante.',
            overhand: 'Hazlo con agarre prono: palmas mirando hacia atrás.',
        },
    },
    seated_dumbbell_overhead_press: {
        n: 'Press de hombro sentado con mancuernas', g: 'm',
        d: 'Sentado, con una mancuerna en cada mano a la altura de las orejas, empújalas hacia arriba por encima de la cabeza. Baja hasta que los pulgares puedan tocar tus orejas. Saca pecho durante el ejercicio.',
    },
    barbell_overhead_press: {
        n: 'Press militar con barra', g: 'm',
        d: 'De pie, con la barra a la altura de la barbilla y las manos un poco más abiertas que los hombros, empuja la barra hacia arriba. Cuando pase la cabeza, mete la cabeza hacia adelante entre los brazos. Aprieta los glúteos todo el ejercicio.',
    },
    dumbbell_lateral_raise: {
        n: 'Elevaciones laterales con mancuernas', g: 'fp',
        d: 'Con una mancuerna en cada mano, sube los brazos hacia los lados como un pájaro que aletea. Los codos siempre un poco más altos que las mancuernas y las muñecas. Baja despacio.',
    },
    dumbbell_front_raise: {
        n: 'Elevaciones frontales con mancuernas', g: 'fp',
        d: 'Con las mancuernas a los lados, sube una a la vez frente a ti hasta la altura de los ojos, con el brazo recto. Baja despacio y repite con el otro brazo.',
    },
    cable_rope_front_raise: {
        n: 'Elevación frontal con cuerda en polea', g: 'f',
        d: 'Con la polea en la posición más baja y el cable entre las piernas, toma un extremo de la cuerda en cada mano. Sube la cuerda frente a ti hasta la altura de los ojos, con los brazos rectos. Baja despacio.',
    },
    unilateral_cable_raise: {
        n: 'Elevación lateral a una mano en polea', g: 'f',
        d: 'Con la polea en la posición más baja, agárrate de la máquina con una mano e inclínate unos 30 grados hacia afuera. Con la otra mano, sube la manija hacia el lado (guiando con el codo) hasta la altura del hombro.',
    },
    cable_rope_face_pulls: {
        n: 'Face pull con cuerda en polea', g: 'm',
        d: 'Pon la polea un poco por encima de la cabeza, con la cuerda. Toma los extremos con los pulgares hacia ti. Tira de la cuerda hacia la frente, con las manos a la altura de las orejas y los pulgares apuntando hacia atrás.',
    },
    cable_push_aparts: {
        n: 'Aperturas inversas en polea', g: 'fp',
        d: 'Pon las poleas un poco por encima de la cabeza. Toma las manijas con los meñiques hacia atrás e imagina que caminas por una selva y abres las lianas hacia los lados con los brazos.',
    },
    bentover_dumbbell_push_aparts: {
        n: 'Pájaros con mancuernas', g: 'mp',
        d: 'Sentado e inclinado hacia adelante (cabeza hacia las rodillas), con mancuernas livianas colgando a los lados de las piernas. Súbelas hacia los lados, guiando con los meñiques, hasta que queden a la altura de los hombros y los pulgares apunten hacia abajo.',
    },
    chest_supported_dumbbell_face_pulls: {
        n: 'Face pull con mancuernas apoyado en banco', g: 'm',
        d: 'Acostado boca abajo en un banco inclinado de 30 a 45 grados, con una mancuerna en cada mano, lleva las mancuernas a los lados de las orejas guiando con los codos.',
    },
    chest_supported_barbell_face_pulls: {
        n: 'Face pull con barra apoyado en banco', g: 'm',
        d: 'Acostado boca abajo en un banco inclinado de 30 a 45 grados, con la barra tomada al doble del ancho de los hombros, lleva los pulgares hacia atrás hasta la línea de las orejas, guiando con los codos.',
    },
    arnold_dumbbell_press: {
        n: 'Press Arnold con mancuernas', g: 'm',
        d: 'Sentado en un banco con respaldo, sostén las mancuernas frente a ti a la altura de los ojos, con las palmas hacia tu cara. Sin bajarlas, abre los hombros y lleva los codos a los lados hasta que las mancuernas queden junto a las orejas y las palmas miren al frente. Luego empújalas por encima de la cabeza.',
    },
    lyings_ys: {
        n: 'Elevaciones en Y boca abajo', g: 'fp',
        d: 'Acostado boca abajo, estira los brazos por encima de la cabeza formando una Y, con los pulgares hacia el techo. Sube manos y brazos del piso, llevando los pulgares hacia atrás y juntando las escápulas, sin perder la forma.',
    },
    lying_ts: {
        n: 'Elevaciones en T boca abajo', g: 'fp',
        d: 'Acostado boca abajo, estira los brazos hacia los lados formando una T, a la altura de los hombros. Gira las manos para que los pulgares apunten al techo. Sube manos y brazos del piso, llevando los pulgares hacia atrás y juntando las escápulas, sin perder la forma.',
    },
    lying_ws: {
        n: 'Elevaciones en W boca abajo', g: 'fp',
        d: 'Acostado boca abajo, abre los brazos hacia los lados a la altura de los hombros y dobla los codos a 90 grados, con los dedos hacia adelante, formando una W. Pulgares hacia el techo. Sube manos y brazos del piso, llevando los pulgares hacia atrás y juntando las escápulas, sin perder la forma.',
    },
    plank_side_stars: {
        n: 'Estrella en plancha lateral', g: 'f',
        d: 'Ponte en plancha lateral apoyado en la mano (brazo recto, debajo del hombro). Sube el brazo de arriba hacia el techo y luego la pierna de arriba, formando una estrella. Sostén un momento y baja despacio. Si es muy difícil, apoya la rodilla de abajo.',
    },
    back_squats: {
        n: 'Sentadilla con barra', g: 'f',
        d: 'Pies un poco más abiertos que los hombros, puntas unos 15 grados hacia afuera. Baja despacio hasta que los muslos queden paralelos al piso. Abdomen firme y rodillas en la dirección de las puntas de los pies. La barra va apoyada en la parte alta de la espalda, detrás de la cabeza.',
    },
    bodyweight_squat: {
        n: 'Sentadilla libre (peso corporal)', g: 'f',
        d: 'Pies un poco más abiertos que los hombros, puntas unos 15 grados hacia afuera. Baja despacio hasta que los muslos queden paralelos al piso, como si te sentaras en una silla. Abdomen firme y rodillas en la dirección de las puntas de los pies.',
    },
    front_squats: {
        n: 'Sentadilla frontal', g: 'f',
        d: 'Pies un poco más abiertos que los hombros, puntas unos 15 grados hacia afuera. Baja despacio hasta que los muslos queden paralelos al piso. Abdomen firme y rodillas en la dirección de las puntas. La barra va apoyada en la parte delantera de los hombros, con los brazos cruzados al frente (codos por encima de la barra).',
    },
    goblet_squats: {
        n: 'Sentadilla goblet', g: 'f',
        d: 'Eleva los talones unos 5 cm sobre un disco. Pies un poco más cerrados que los hombros. Sostén la mancuerna como una copa, a la altura del pecho, y baja en sentadilla manteniendo la espalda lo más recta posible.',
    },
    box_squats: {
        n: 'Sentadilla al cajón', g: 'f',
        d: 'Con barra, con una mancuerna o solo con tu peso, párate de espaldas frente a un cajón, silla o superficie parecida. Pies al ancho de los hombros. Baja despacio, como si fueras a sentarte. Solo roza el cajón con los glúteos y vuelve a subir.',
    },
    bulgarian_split_squats: {
        n: 'Sentadilla búlgara', g: 'f',
        d: 'Con tu peso o con una mancuerna en cada mano, da un paso largo hacia adelante y apoya el pie de atrás en un banco de unos 20 a 30 cm de alto. Mantén el peso sobre la pierna de adelante y baja hasta que el muslo de adelante quede paralelo al piso.',
    },
    lunges: {
        n: 'Zancadas', g: 'fp',
        d: 'Da pasos largos hacia adelante, bajando despacio la rodilla de atrás hasta casi tocar el piso en cada paso. Mantén el peso del cuerpo sobre todo en la pierna de adelante.',
    },
    legpress: {
        n: 'Prensa de piernas', g: 'f',
        d: 'Baja el peso despacio hasta que las rodillas formen un ángulo de 90 grados. Luego empuja para subir, sin bloquear las rodillas arriba.',
        v: STANCE,
    },
    quad_extension: {
        n: 'Extensión de cuádriceps en máquina', g: 'f',
        d: 'Sentado en la máquina de extensión, estira las piernas contra la resistencia. Puedes girar las puntas de los pies en distintas direcciones para trabajar distintas partes del cuádriceps.',
    },
    step_ups: {
        n: 'Subidas al cajón (step-up)', g: 'fp',
        d: 'Sin saltar, súbete a una superficie elevada con una pierna. La clave es bajar despacio con una sola pierna, sin dejarte caer.',
    },
    wall_sits: {
        n: 'Sentadilla isométrica en la pared', g: 'f',
        d: 'Con la espalda contra la pared y las rodillas a unos 90 grados, como sentado en una silla invisible, aguanta lo más que puedas sin bajarte ni apoyarte con las manos.',
    },
    romanian_deadlifts: {
        n: 'Peso muerto rumano', g: 'm',
        d: 'De pie, sostén una barra o mancuernas frente a la cadera, con las manos al ancho de los hombros. Con las rodillas un poco dobladas, lleva la cadera hacia atrás mientras inclinas el torso hacia adelante. Con la espalda recta, baja el peso pegado a las piernas (como si las rozara).',
        v: {
            wide_stance: 'Pies separados una vez y media el ancho de los hombros.',
            neutral_stance: 'Pies al ancho de los hombros.',
            narrow_stance: 'Pies juntos, tocándose.',
        },
    },
    hamstring_back_extensions: {
        n: 'Hiperextensiones para femoral', g: 'fp',
        d: 'En la máquina de hiperextensiones, fija los pies y baja el torso por delante de la máquina. Resiste el movimiento intentando llevar los talones hacia atrás, hacia los glúteos, contra el soporte de los pies.',
    },
    unilateral_dumbbell_rdls: {
        n: 'Peso muerto rumano con pie adelantado', g: 'm',
        d: 'Pon un pie adelante del otro y carga el peso en el pie de adelante. Baja y sube las mancuernas a lo largo de esa pierna. Mantén la espalda recta todo el tiempo.',
    },
    seated_hamstring_curl: {
        n: 'Curl femoral sentado', g: 'm',
        d: 'Con las rodillas fijas en la máquina, lleva los talones hacia atrás, hacia los glúteos, lo más que puedas. Vuelve despacio.',
    },
    tbar_rdls: {
        n: 'Peso muerto rumano en barra T', g: 'm',
        d: 'Con la barra entre las piernas y los pies un poco adelante de tu centro de gravedad, lleva la cadera hacia atrás despacio con las piernas casi rectas, hasta que el peso toque el piso. Espalda recta todo el tiempo.',
    },
    lying_machine_hamstring_curls: {
        n: 'Curl femoral acostado en máquina', g: 'm',
        d: 'Acostado boca abajo en la máquina, lleva los talones hacia los glúteos y vuelve despacio.',
    },
    lying_dumbbell_hamstring_curls: {
        n: 'Curl femoral acostado con mancuerna', g: 'm',
        d: 'Acostado boca abajo, sostén una mancuerna entre los pies con las rodillas dobladas. Baja la mancuerna despacio hacia el piso y, al tocarlo, vuelve a subirla llevando los talones hacia los glúteos.',
    },
    cable_leg_adduction: {
        n: 'Abducción de cadera en polea', g: 'f',
        d: 'De pie, de lado junto a la máquina de poleas, con la polea en la posición más baja. Pon la tobillera en el pie de afuera y lleva esa pierna hacia el lado, alejándola de la máquina.',
    },
    cable_kickbacks: {
        n: 'Patada de glúteo en polea', g: 'f',
        d: 'De frente a la máquina, con la polea en la posición más baja y la tobillera puesta, lleva el talón hacia atrás lo más que puedas. Vuelve despacio.',
    },
    hip_thrusts: {
        n: 'Hip thrust (empuje de cadera)', g: 'm',
        d: 'Con la espalda apoyada en un banco (o acostado en el piso) y las rodillas dobladas a unos 90 grados, empuja la cadera hacia arriba y mete la barbilla. Sin mover los talones, intenta "jalarlos" hacia los glúteos durante el movimiento.',
    },
    unilateral_hip_thrusts: {
        n: 'Hip thrust a una pierna', g: 'm',
        d: 'Con la espalda apoyada en un banco (o en el piso), una rodilla doblada a 90 grados y la otra pierna estirada, empuja la cadera hacia arriba y mete la barbilla. Sin mover el talón, intenta "jalarlo" hacia el glúteo. Repite con los dos lados.',
    },
    deadlift: {
        n: 'Peso muerto', g: 'm',
        d: 'De pie con la barra sobre la mitad de los pies, tómala con agarre prono al ancho de los hombros. La espalda debe estar recta todo el ejercicio. Sube estirando las piernas y arrastrando la barra pegada a las espinillas; cuando pase las rodillas, endereza el torso. Para bajar, haz lo contrario: lleva la cadera hacia atrás hasta que la barra pase las rodillas y luego dobla las rodillas hasta tocar el piso. También se puede hacer con postura sumo (pies muy abiertos).',
    },
    donkey_kicks: {
        n: 'Patada de burro', g: 'f',
        d: 'En cuatro apoyos (manos y rodillas), con la espalda recta. Con una pierna doblada, patea hacia atrás y hacia arriba, como un burro, lo más que puedas sin arquear la espalda. Repite con los dos lados.',
    },
    good_girls: {
        n: 'Máquina de aductores', g: 'f',
        d: 'Sentado en la máquina de aductores, junta las rodillas contra la resistencia y vuelve a abrir despacio.',
    },
    fire_hydrants: {
        n: 'Hidrantes (abducción en cuatro apoyos)', g: 'mp',
        d: 'En cuatro apoyos, con las manos debajo del pecho. Sube una pierna doblada hacia el lado (como un perro junto a un hidrante) sin mover los otros tres apoyos. Baja despacio y repite con el otro lado.',
    },
    froggy_pumps: {
        n: 'Puente de glúteo rana (froggy pumps)', g: 'm',
        d: 'Acostado boca arriba, junta las plantas de los pies cerca de los glúteos y deja caer las rodillas hacia los lados. Empuja con el borde externo de los pies para subir los glúteos y la zona lumbar del piso. Haz una pausa arriba y baja despacio.',
    },
    bad_girls: {
        n: 'Máquina de abductores', g: 'f',
        d: 'En la máquina de abductores (o sentado en una silla con una banda alrededor de las rodillas), separa las rodillas contra la resistencia y vuelve despacio.',
    },
    seated_calf_raises: {
        n: 'Elevación de pantorrillas sentado', g: 'f',
        d: 'Sentado, con el soporte encima de las rodillas, sube los talones empujando con la punta de los pies, levantando las rodillas. Baja despacio.',
        v: TOES,
    },
    standing_calf_raises: {
        n: 'Elevación de pantorrillas de pie', g: 'f',
        d: 'De pie, con peso en las manos o sobre los hombros, sube los talones poniéndote en puntas de pie. Baja despacio.',
        v: TOES,
    },
    walking_calf_raises: {
        n: 'Caminata en puntas de pie', g: 'f',
        d: 'Con una mancuerna en cada mano, camina 50 pasos subiendo en cada paso lo más alto posible en puntas de pie.',
    },
    unilateral_calf_raises: {
        n: 'Elevación de pantorrilla a una pierna', g: 'f',
        d: 'Apoyado en la punta de un solo pie (puedes sostenerte de la pared), sube y baja el talón despacio.',
        v: { ...TOES, standard: 'Pie mirando al frente.' },
    },
    monster_walks: {
        n: 'Caminata de monstruo con banda', g: 'f',
        d: 'Con una banda alrededor de las rodillas, baja en media sentadilla y camina de lado como un cangrejo, de un lado a otro. Luego camina hacia adelante y hacia atrás con los pies abiertos, como un dinosaurio.',
    },
    dumbbell_curls: {
        n: 'Curl {v} con mancuernas', g: 'm', vn: CURL_VN,
        d: 'Sentado o de pie, con una mancuerna en cada mano a los lados. Puedes subir las dos a la vez o alternar. Sube cada mancuerna doblando el codo por completo. Evita balancearte o ayudarte con el hombro.',
        v: CURL,
    },
    rope_curls: {
        n: 'Curl martillo con cuerda en polea', g: 'm',
        d: 'Con la cuerda en la polea más baja, toma los extremos con agarre neutro y sube las manos hacia adentro y hacia arriba.',
    },
    spider_curl: {
        n: 'Curl araña {v}', g: 'm', vn: CURL_VN,
        d: 'Con el pecho apoyado en un banco inclinado y una mancuerna en cada mano, haz un curl alterno girando la muñeca hacia arriba al final. Sube las mancuernas un poco hacia adentro, por debajo del banco.',
        v: CURL,
    },
    barbell_curls: {
        n: 'Curl con barra', g: 'm',
        d: 'Toma la barra con agarre supino y súbela doblando los codos. Evita ayudarte con los hombros o balancearte.',
        v: {
            wide_grip: 'Manos separadas una vez y media el ancho de los hombros.',
            narrow_grip: 'Manos separadas solo el ancho de una palma.',
            standard: 'Manos al ancho de los hombros.',
        },
    },
    drag_curls: {
        n: 'Curl de arrastre {v}', g: 'm', vn: { dumbbell: 'con mancuernas', barbell: 'con barra' },
        d: 'Con agarre supino, "arrastra" el peso hacia arriba pegado al torso, llevando los codos hacia atrás. Se parece a un remo, pero estás casi derecho, apenas inclinado hacia adelante.',
        v: {
            dumbbell: 'Hazlo con mancuernas.',
            barbell: 'Hazlo con barra, con las manos un poco más abiertas que los hombros.',
        },
    },
    unilateral_hammer_cable_curl: {
        n: 'Curl martillo a una mano en polea', g: 'm',
        d: 'Con la polea en la posición más baja, toma la manija con una mano y súbela hacia arriba y hacia adentro, hasta que la mano termine en la mitad del pecho.',
    },
    preacher_curls: {
        n: 'Curl predicador {v}', g: 'm',
        vn: { underhand: 'con agarre supino', neutral_grip: 'con agarre neutro', overhand: 'con agarre prono' },
        d: 'Haz el curl con los codos apoyados en el banco predicador (banco Scott), inclinado 45 grados. Es buena idea hacer una pausa corta abajo, con el brazo casi estirado.',
        v: {
            underhand: 'Usa una barra recta o barra Z con agarre supino, palmas hacia el techo.',
            neutral_grip: 'Usa una mancuerna en cada mano con agarre neutro, palmas mirándose.',
            overhand: 'Usa una barra recta o barra Z con agarre prono, palmas hacia el piso.',
        },
    },
    cable_bar_curls: {
        n: 'Curl con barra en polea', g: 'm',
        d: 'Con la barra en la polea más baja, tómala con agarre supino (palmas al techo) y sube el peso doblando los codos, sin ayudarte con los hombros ni balancearte.',
    },
    tricep_rope_pushdown: {
        n: 'Tríceps en polea con cuerda', g: 'm',
        d: 'Pon la polea en la posición más alta. Con los codos pegados a los lados, estira los brazos empujando el peso hacia abajo. Los codos no se mueven. Abajo, abre la cuerda para que las palmas miren al piso.',
    },
    tricep_bar_pushdown: {
        n: 'Tríceps en polea con barra', g: 'm',
        d: 'Pon la polea en la posición más alta. Con los codos pegados a los lados, estira los brazos empujando el peso hacia abajo. Los codos no se mueven durante el movimiento.',
    },
    unilateral_cable_pushdown: {
        n: 'Tríceps en polea a una mano', g: 'm',
        d: 'Pon la polea en la posición más alta. Con el codo pegado a la cadera, estira el brazo empujando el peso hacia abajo. El codo no se mueve. Repite con los dos lados.',
        v: {
            overhand: 'Usa una manija y empuja el peso hacia abajo con la palma mirando al piso.',
            neutral: 'Toma la cuerda o manija con agarre neutro (martillo).',
            underhand: 'Usa una manija con agarre supino, palma hacia el techo.',
        },
    },
    skull_crushers: {
        n: 'Rompecráneos con barra (press francés)', g: 'm',
        d: 'Acostado en un banco plano o un poco inclinado, con la barra justo encima de la cabeza y los brazos estirados. Baja el peso doblando solo los codos, hacia la frente o detrás de la cabeza, y vuelve a subir. Usa el ancho de agarre más cómodo y mantén los codos cerrados.',
    },
    face_press: {
        n: 'Flexiones de tríceps inclinadas (face press)', g: 'fp',
        d: 'En plancha inclinada, con las manos apoyadas en algo a la altura del pecho (manos más juntas que los hombros), baja despacio la cara hacia la superficie con los codos pegados. Luego empuja para subir. Los codos van hacia abajo, sin abrirse.',
    },
    overhead_skull_crusher: {
        n: 'Extensión de tríceps tras nuca (copa)', g: 'f',
        d: 'Sentado y derecho, con barra, mancuerna o cuerda en polea, empieza con el peso detrás de la cabeza y los codos apuntando hacia arriba. Estira los brazos subiendo el peso por encima de la cabeza y baja despacio.',
    },
    tricep_dip: {
        n: 'Fondos de tríceps en banco', g: 'mp',
        d: 'Con un banco detrás de ti y las piernas estiradas al frente, apoya las manos en el banco. Baja los glúteos despacio por delante del banco, con los codos pegados y apuntando hacia atrás, y luego empuja para subir. Dobla las rodillas para hacerlo más fácil.',
    },
    dumbbell_skull_crushers: {
        n: 'Rompecráneos con mancuernas', g: 'm',
        d: 'Acostado en un banco plano o un poco inclinado, con una mancuerna en cada mano justo encima de la cabeza y los brazos estirados. Baja las mancuernas a los lados de la frente doblando solo los codos y vuelve a subir. Empieza con las palmas al techo y termina con agarre neutro junto a las orejas.',
    },
    diamond_pushups: {
        n: 'Flexiones diamante', g: 'fp',
        d: 'En posición de flexión, junta las manos debajo del pecho tocando las puntas de los índices y los pulgares para formar un diamante. Haz la flexión con los codos pegados al cuerpo. Apoya las rodillas si es muy difícil.',
    },
    unilateral_cable_push_aways: {
        n: 'Extensión de tríceps a una mano en polea (hacia adelante)', g: 'f',
        d: 'De espaldas a la polea, con la polea a la altura de la cabeza, toma la manija con una mano junto a la oreja y el codo apuntando al frente. Estira el brazo empujando la manija hacia adelante y un poco hacia arriba. Vuelve despacio y repite con el otro brazo.',
    },
    jack_knives: {
        n: 'Navajas sentado', g: 'fp',
        d: 'Sentado en el piso en forma de V, con las rodillas dobladas, los pies en el aire y las manos apoyadas a los lados, un poco detrás de los glúteos. Estira las piernas sin bajarlas al piso e inclínate un poco hacia atrás. Luego lleva las rodillas al pecho. Abdomen apretado todo el tiempo.',
    },
    crunches: {
        n: 'Abdominales (crunch)', g: 'mp',
        d: 'Acostado boca arriba con las rodillas dobladas, sube los hombros del piso apretando el abdomen, como si quisieras aplastar un bicho debajo de la zona lumbar contra el piso. Baja despacio.',
    },
    l_sits: {
        n: 'Escuadra (L-sit)', g: 'f',
        d: 'Sentado con las piernas estiradas al frente (o colgado de una barra), levanta las piernas y aguanta la posición con el abdomen apretado. Las piernas deben quedar, como mínimo, paralelas al piso. Dobla las rodillas si es muy difícil.',
    },
    russian_twists: {
        n: 'Giros rusos', g: 'mp',
        d: 'Sentado en el piso, con las rodillas dobladas a 90 grados y los pies apoyados, inclínate unos 30 grados hacia atrás. Gira el torso y toca el piso a un lado de la cadera con las dos manos, y luego al otro lado.',
    },
    plank: {
        n: 'Plancha', g: 'f',
        d: 'Apoyado en los antebrazos y las puntas de los pies, con el cuerpo recto como una tabla. Mete la cadera, aprieta los glúteos y el abdomen. No dejes que la cadera se hunda ni se suba. Apoya las rodillas si es muy difícil.',
    },
    side_plank: {
        n: 'Plancha lateral', g: 'f',
        d: 'Como la plancha normal, pero de lado: apóyate en un antebrazo y en los pies, con el cuerpo recto y la cadera levantada. Aguanta y cambia de lado.',
    },
    crunch_toes_touches: {
        n: 'Toques de talón (oblicuos)', g: 'mp',
        d: 'Acostado boca arriba con las rodillas dobladas a 90 grados y los pies en el piso, sube un poco los hombros. Lleva la mano izquierda hacia el pie izquierdo y luego la mano derecha hacia el pie derecho, doblándote de lado. La cabeza se queda a la misma altura.',
    },
    dead_bugs: {
        n: 'Bicho muerto (dead bug)', g: 'm',
        d: 'Acostado boca arriba, apunta los brazos y las piernas (rodillas dobladas) hacia el techo, como un bicho patas arriba. Baja despacio un brazo y la pierna contraria hacia el piso, con la zona lumbar pegada al piso y el abdomen firme. Sube y repite con el otro par.',
    },
    lying_leg_lifts: {
        n: 'Elevación de piernas acostado', g: 'f',
        d: 'Acostado boca arriba, sube las piernas rectas hacia el techo y bájalas despacio hacia el piso. Abdomen apretado. Si en algún momento te cabe la mano debajo de la zona lumbar, dobla un poco más las rodillas.',
    },
    hanging_knee_raises: {
        n: 'Elevación de rodillas colgado', g: 'f',
        d: 'Colgado de una barra, sube las rodillas hacia el pecho apretando el abdomen; idealmente hasta que casi toquen la frente. Baja despacio y evita balancearte.',
    },
    mountain_climbers: {
        n: 'Escaladores (mountain climbers)', g: 'mp',
        d: 'En posición de flexión, lleva una rodilla hacia el codo del mismo lado y vuelve a la posición inicial. Repite con el otro lado. No dejes que la zona lumbar ni los glúteos se hundan.',
    },
    kneeling_cable_crunch: {
        n: 'Crunch de rodillas en polea', g: 'm',
        d: 'De rodillas frente a la polea, con la polea en la posición más alta, sostén la cuerda con las dos manos detrás de la cabeza. Dóblate hacia abajo apretando el abdomen, llevando la cara hacia el piso, y vuelve a subir despacio.',
    },
    bicycle_crunches: {
        n: 'Abdominales bicicleta', g: 'mp',
        d: 'Acostado boca arriba, sube las piernas con las rodillas dobladas a 90 grados, apuntando al techo. Lleva un codo hacia la rodilla contraria mientras estiras la otra pierna. Vuelve al inicio y repite con el otro lado.',
    },
    banana_hold: {
        n: 'Posición banana (hollow hold)', g: 'f',
        d: 'Acostado boca arriba, curva todo el cuerpo como una banana: pega la zona lumbar al piso, sube los brazos estirados por detrás de la cabeza y las piernas a unos 30 grados del piso. Aguanta mientras el abdomen tiembla.',
    },
}

// Substitute suggestions, keyed by the English text normalized (lowercase, spaces).
export const SUBSTITUTES = {
    'pushups': 'flexiones de pecho',
    'pushup': 'flexiones de pecho',
    'dumbbell bench press': 'press de banca con mancuernas',
    'floor press': 'press en el piso',
    'palm prayer press': 'press Svend sin peso',
    'cable chest fly': 'aperturas en polea',
    'cable fly': 'aperturas en polea',
    'inclined cable fly': 'aperturas en polea de abajo hacia arriba',
    'standing dumbbell inline fly': 'apertura cruzada de pie con mancuernas',
    'inclined dumbbell fly': 'aperturas inclinadas con mancuernas',
    'chair dip': 'fondos en silla',
    'bench press': 'press de banca',
    'barbell bench press': 'press de banca con barra',
    'prayer press': 'press Svend',
    'dumbbell press': 'press con mancuernas',
    'unilateral chest press': 'press de pecho a una mano',
    'lat pulldown': 'jalón al pecho',
    'pullup': 'dominadas',
    'kneeling lat pushdown': 'jalón al pecho de rodillas',
    'kneeling lat pulldown': 'jalón al pecho de rodillas',
    'seated row': 'remo sentado en polea',
    'dumbbell row': 'remo con mancuernas',
    'barbell row': 'remo con barra',
    'tbar row': 'remo en barra T',
    'unilateral seated row': 'remo sentado a una mano',
    'barbell overhead press': 'press militar con barra',
    'arnold press': 'press Arnold',
    'unilateral cable raise': 'elevación lateral a una mano en polea',
    'face pulls': 'face pull',
    'cable rope front raise': 'elevación frontal con cuerda en polea',
    'dumbbell front raise': 'elevaciones frontales con mancuernas',
    'dumbbell lateral raise': 'elevaciones laterales con mancuernas',
    'cable push aparts': 'aperturas inversas en polea',
    'cable rope face pulls': 'face pull con cuerda en polea',
    'dumbbell face pulls': 'face pull con mancuernas',
    'dumbbell overhead press': 'press de hombro con mancuernas',
    'supermans': 'supermanes',
    'plank side stars': 'estrella en plancha lateral',
    'lying ts': 'elevaciones en T boca abajo',
    'front squats': 'sentadilla frontal',
    'legpress': 'prensa de piernas',
    'back squats': 'sentadilla con barra',
    'lunges': 'zancadas',
    'bulgarian split squats': 'sentadilla búlgara',
    'goblet squats': 'sentadilla goblet',
    'dumbbell rdls': 'peso muerto rumano con mancuernas',
    'seated hamstring curl': 'curl femoral sentado',
    'barbell rdls': 'peso muerto rumano con barra',
    'hamstring back extensions': 'hiperextensiones para femoral',
    'unilateral dumbbell rdls': 'peso muerto rumano con pie adelantado',
    'tbar rdls': 'peso muerto rumano en barra T',
    'cable kickbacks': 'patada de glúteo en polea',
    'cable leg adduction': 'abducción de cadera en polea',
    'unilateral hip thrusts': 'hip thrust a una pierna',
    'romanian deadlifts': 'peso muerto rumano',
    'froggy pumps': 'puente de glúteo rana',
    'fire hydrants': 'hidrantes',
    'standing calf raises': 'elevación de pantorrillas de pie',
    'seated calf raises': 'elevación de pantorrillas sentado',
    'bad girls': 'máquina de abductores',
    'hammer curls': 'curl martillo',
    'hammer curl': 'curl martillo',
    'dumbbell hammer curls': 'curl martillo con mancuernas',
    'barbell curls': 'curl con barra',
    'barbell curl': 'curl con barra',
    'dumbbell curls': 'curl con mancuernas',
    'bar cable pushdown': 'tríceps en polea con barra',
    'rope cable pushdown': 'tríceps en polea con cuerda',
    'face press': 'flexiones de tríceps inclinadas',
    'overhead skull crushers': 'extensión de tríceps tras nuca',
    'crunches': 'abdominales (crunch)',
    'dead bugs': 'bicho muerto',
    'dead bug': 'bicho muerto',
    'bicycle crunches': 'abdominales bicicleta',
    'banana hold': 'posición banana',
    'plank': 'plancha',
    'side plank': 'plancha lateral',
    'jack knives': 'navajas sentado',
    'russian twists': 'giros rusos',
    'lying leg lifts': 'elevación de piernas acostado',
    'leg lifts': 'elevación de piernas',
    'hanging knee raises': 'elevación de rodillas colgado',
    'v crunches': 'abdominales en V',
    'kneeling cable crunch': 'crunch de rodillas en polea',
}
