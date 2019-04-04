// Code your solution in this file!
function distanceFromHqInBlocks(pickupL){
  let value = 0
  if ((value = (pickupL - 42)) < 0) {
    value *= -1
  }
  return value
}

function distanceFromHqInFeet(pickupL){
  return (distanceFromHqInBlocks(pickupL) * 264)
}

function distanceTravelledInFeet(from, to){
  return (distanceFromHqInFeet(to) - distanceFromHqInFeet(from))
}


function calculatesFarePrice(start, destination){
  let resultp = 0;
  let dist = distanceTravelledInFeet(start, destination);

  if (dist < 0) {
    dist *= -1
  }

  if (dist > 2500) {
    resultp = 'cannot travel that far';
  } else if (dist > 2000){
    resultp = 25;
  } else if (dist > 400) {
    resultp = (0.02 * (dist-400));
  }

  return resultp;
}
