const breakTextIntoFragments = (text) => {
  const data = [];
  let index = 0;

  if (typeof text !== "string") {
    return "Please, enter the text";
  } else if (typeof text == "string") {
    const lengthOfText = text.length;
    const maxSymbols = 140;

    if (lengthOfText > maxSymbols) {
      const step = Math.ceil(text.length / maxSymbols);

      if (step <= 9999) {
        while (step !== data.length) {
          const result = text.slice(
            0,
            text.length > maxSymbols ? maxSymbols - index : text.length - index
          );
          index++;
          const char =
            text.length > maxSymbols ? maxSymbols - index : text.length - index;
          if (result[char] == " ") {
            text = text.replace(result, "");
            data.push(result.trim() + ` ${data.length + 1}/${step}`);
            index = 0;
          }
        }
        return data;
      }
    } else {
      data[0] = text;
      return data;
    }
  }
};

const text1 =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibuser magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,";

const text2 =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibuser";

console.log(breakTextIntoFragments(text1));
console.log(breakTextIntoFragments(text2));
