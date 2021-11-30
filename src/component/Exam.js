import React from 'react'

function Exam(props) {
    let wraperClasses =['dro_140','edu_cat_2'];
     if(props.title==='CAT'){
 wraperClasses.push("cat-2");
     }else if(props.title==='GATE'){
            wraperClasses.push("cat-4");
         }else{
         wraperClasses.push("cat-6");
        }
     
     let iconClasses =['dro_141'];
       if(props.title==='CAT'){
            iconClasses.push("");
          }else if(props.title==='GATE'){
            iconClasses.push("st-1");
        }else{
         iconClasses.push("st-3");
        }
     
    return (
        <>
             <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <a href="#">
                    <div className={wraperClasses.join(" ")}>
                      <div className={iconClasses.join(" ")}>{props.icon}</div>
                      <div className="dro_142">
                        <h6>{props.title}</h6>
                        <p>{props.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
        </>
    )
}

export default Exam
