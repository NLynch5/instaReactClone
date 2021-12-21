const api = async () => {
  try {
    const res = await fetch("https://picsum.photos/200");
    const newData = await res.json();
    return newData;
  } catch (err) {
    return null;
  }
};

export { api };
