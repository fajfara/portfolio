import RandomShapesSVG from '../../assets/images/random/RandomShapeSVG';
import { v4 as uuidv4 } from 'uuid';
import genRandomNumber from '../../../helpers/randomNumber';

function generateShapePosition(positionsArray, mainElement) {
  const position = { x: 0, y: 0 };
  const elementWidth = mainElement.current.getBoundingClientRect().width;
  const elementHeight = mainElement.current.getBoundingClientRect().height;

  const buffer = 12;

  while (true) {
    // Generate x position
    const x = ((Math.floor(Math.random() * elementWidth) + 10) / elementWidth) * 100;
    let valueToClose = false;

    // Loop over positions array
    if (positionsArray.length < 1) break;

    positionsArray.forEach(posInArray => {
      if (x <= posInArray.x + buffer && x >= posInArray.x - buffer) {
        valueToClose = true;
      }
    });

    if (!valueToClose) {
      position.x = x;
      break;
    }
  }

  while (true) {
    // Generate x position
    const y = ((Math.floor(Math.random() * elementHeight) + 10) / elementHeight) * 100;
    let valueToClose = false;

    // Loop over positions array
    if (positionsArray.length < 1) {
      position.y = y;
      break;
    }

    positionsArray.forEach(posInArray => {
      if (y <= posInArray.y + buffer && y >= posInArray.y - buffer) {
        valueToClose = true;
      }
    });

    if (!valueToClose) {
      position.y = y;
      break;
    }
  }

  return position;
}

function generateShapesArray(mainElement, length = 5) {
  const tempShapes = [];
  const positionsArray = [];

  for (let i = 0; i < length; i++) {
    // Generate random dimensions
    const shapeDimension = Math.round(genRandomNumber(50, 100));

    const position = generateShapePosition(positionsArray, mainElement);

    positionsArray.push(position);

    const shape = <RandomShapesSVG key={uuidv4()} position={position} dimensions={shapeDimension} />;

    tempShapes.push(shape);
  }

  return tempShapes;
}

export default generateShapesArray;
