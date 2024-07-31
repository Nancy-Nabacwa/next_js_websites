import React from "react";

interface SectionProps{
    paragraph:String
    heading:String
    contentsix_one:React.ReactNode
   

}

const SectionSixAtom = ({paragraph,heading,
contentsix_one}:SectionProps)=>{
    return(
        <div>
            <p className="text-center text-[grey] text-3xl">{paragraph}</p>
            <h1 className="text-center font-bold text-[50px]">{heading}</h1>
            {contentsix_one}
        </div>
    )
}

export default SectionSixAtom;

