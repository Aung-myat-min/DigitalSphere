export const getMessage = async (data: FormData) => {
  const formData = await data;
  for (let [key, value] of formData.entries()) {
    console.log(key, value);
  }
  //   console.log(formData.entries());
};
