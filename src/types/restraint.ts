export interface BannerInter{
    id:string,
    image:string,
    circleLeftId:string,
    circleRightId:string
}

export type BannerImg = BannerInter[]

export interface NewsInter{
    id:string,
    title:string,
    introduce:string,
    readerNum:number,
    time:string,
    url:string,
    img:string
}

export type NewsInformation = NewsInter[]

