import React from 'react'
import { useFormik } from 'formik'

function AddAttandance() {

   
    const formik = useFormik({
        initialValues : {
            name : 'Dharani kumar',
            income : '',
            expense : ''
            
        },
        onSubmit : async (values) => {
            console.log(values)
              await fetch(`https://61937d32d3ae6d0017da85fd.mockapi.io/userlist`,{
                  method : 'POST',
                  body : JSON.stringify(values),
                  headers : {
                      'Content-type' : 'application/json'
                  }
              })
              alert('added')
        }
    })
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
            </div>
                <div className='container'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className='col-lg-6'>
        
                            <label>Name</label>
                             <input name="name" value="name" type='text' className='form-control' 
                                onChange={formik.handleChange} value={formik.values.name}>
                            </input>

                            <label>Income</label>
                             <input name="income" value="income" type='number' className='form-control' 
                                onChange={formik.handleChange} value={formik.values.income}>
                            </input>

                            <label>Expense</label>
                             <input name="expense" value="expense" type='number' className='form-control' 
                                onChange={formik.handleChange} value={formik.values.expense}>
                            </input>
                            <input type="submit" className='btn btn-primary mt-3'>
                              </input>

                        </div>
                    </div>
                    </form>

                </div>
           


        </>
    )
}

export default AddAttandance
