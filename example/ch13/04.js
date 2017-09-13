function getRainbowIterator(){
  const colors = ['red', 'orange', 'yellow', 'green', 'brule', 'indigo', 'violet'];
  let colorIndex = -1;
  return {
    next() {
      if(++colorIndex >= colors.length) colorIndex = 0;
      console.log("in iterator: " + colors[colorIndex]);
      return { value: colors[colorIndex], done: false};
    }
  };
}

const rainbowIterator = getRainbowIterator();
setInterval(function() {
  console.log(rainbowIterator.next().value);
}, 500);
