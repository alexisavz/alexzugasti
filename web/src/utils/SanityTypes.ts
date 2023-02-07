export enum text_marks {
    strong = "strong",
    em = "em",
    italic = "italic",
    code = "code",
  }
  
  export type RichText = {
    text: string
    marks: text_marks[]
    _key: string
    _type: string
  }
  
  export type SanityRawText = {
    _key: string
    _type: string
    children: RichText[]
    marksDef: any[]
    style: string
  }
  