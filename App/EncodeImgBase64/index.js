const dataURL = url => fetch(url)
  .then(res => res.blob())
  .then(blob => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = () => resolve;
  }));

dataURL('/loading.png')
  .then(result => console.log(result))