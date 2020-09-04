function valueOriginDestiny(origin, destiny) {
  if ((origin === 11 && destiny === 16) || (origin === 18 && destiny === 11)) {
    return 1.9;
  } else if (origin === 16 && destiny === 11) {
    return 2.9;
  } else if (origin === 11 && destiny === 17) {
    return 1.7;
  } else if (origin === 17 && destiny === 11) {
    return 2.7;
  } else if (origin === 11 && destiny === 18) {
    return 0.9;
  }
}

function planNormal(origin, destiny, time) {
  return time * valueOriginDestiny(origin, destiny);
}

function planPlus(origin, destiny, plan, time) {
  if (time <= plan) {
    return 0.0;
  } else {
    let timeSurplus = time - plan;
    let tariffOriginDestiny = valueOriginDestiny(origin, destiny);
    let percentage = (tariffOriginDestiny * 10) / 100;
    let tariffSurplus = tariffOriginDestiny + percentage;

    return timeSurplus * tariffSurplus;
  }
}

export { planNormal, planPlus };
