import { mkdir, exists } from "fs/promises";

//GLOBAL VARIABLES
const staticFolder = "./build";
const audioFldr = `${__dirname}/../build/audios`;
const imgsFldr = `${__dirname}/../build/imgs`;
//DEV AND HOST ORIGIN
const host:string = 'https://frensgo.lat';
// const dev: string = "http://localhost:3000";

export const controllers = {
  root() {
    const file = Bun.file(staticFolder + "/index.html");
    return new Response(file);
  },
  async audio(req: Request, cors: ResponseInit):Promise<Response> {
    const fd: FormData = await req.formData();
    const file = fd.get("audio");
    //@ts-ignore
    if (file.size >= 4000000) {
      return new Response("FILE TOO LARGE", { ...cors, status: 409 });
    }
    if (await !exists(audioFldr)) mkdir(audioFldr);
    const audioName = `${Date.now()}.ogg`;
    await Bun.write(`${audioFldr}/${audioName}`, file!);
    return new Response(`${host}/audios/${audioName}`, cors);
  },
  async upImg(req: Request, cors: ResponseInit):Promise<Response> {
    const fd:FormData = await req.formData();
    const file = fd.get('image');
    //@ts-ignore
    if(file.size > 5000000 || !/^image\/....?$/.test(file.type)) {
      new Response('BAD FILE', { status: 500 });
    }
    //CREATE IMGS FOLDER
    if(await !exists(imgsFldr)) mkdir(imgsFldr);
    //GET IMAGE EXTENSION
    //@ts-ignore
    const ext = file.type.match(/\/....?$/)[0].replace('/', '');
    const imgName = `${Date.now()}.${ext}`;
    await Bun.write(`${imgsFldr}/${imgName}`, file!);
    return new Response(`${host}/imgs/${imgName}`, cors);
  }
};
