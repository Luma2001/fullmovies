

 export class AppStorage  {

static async save(key,value){
  return  localStorage.setItem(key, JSON.stringify(value));
}
static async get(key) {
  return await JSON.parse(localStorage.getItem(key));
}

static async remove(key) {
  return localStorage.removeItem(key);
}
static async clear() {
  return localStorage.clear();
}

}




// AsyncStorage. para moviles


// const appStorage = {

//   get: async (key) =>{return localStorage.getItem(key)},
//   set: async (key,value) => {return localStorage.setItem(key,value)},
//   remove: async (key)=> {return localStorage.removeItem(key)}

// }

// export default appStorage