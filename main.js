addEventListener
("DOMContentLoaded", function ()
{
 document.querySelector
  ("form[name='formulario']").addEventListener("click", function(e)
    {
     let Resultado = document.querySelector("input[name='datos']");
     (e.target.nodeName == "INPUT") 
      ?(e.target.value == "="
         ? Resultado.value = eval(Resultado.value)
         : (e.target.value == "DEL"
             ? Resultado.value = ""
             : ( e.target.value == "C"
               ? ( 
                  Resultado.value = new String(Resultado.value).substring(0,  new String(Resultado.value).length - 1)
                  )
                : ( e.target.name == "datos"
                    ? ""
                    :  Resultado.value += e.target.value
                  )
                )   
            )
       )
      : "";
    }
  )
}
)