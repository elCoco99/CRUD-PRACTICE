import './display.css'
import { pics } from '../images/images.json'
import { Button } from './Button'
import { client } from '../data/api/send'

export function Display() {


/*
const insertSQL = async (title, desc, rel_id) => {
  const result = await client.execute(`UPDATE ${table_name} SET TITLE = ${title}, DESCRIPTION = ${desc} WHERE REL_ID = ${rel_id}`);
  console.log(result)
  return result
 } 

 */
  const handleSubmit = async (e) => {
    e.preventDefault()
    const table_name = 'mspics'
    const title = new FormData(e.target).get('title')
    const desc = new FormData(e.target).get('description')
    const buttonID = e.target.querySelector('button').id

    const query = `UPDATE ${table_name} SET TITLE = "${title}", DESCRIPTION = "${desc}" WHERE REL_ID = ${buttonID}`
    client.execute(query)   
    /*const result = await client.execute(`UPDATE ${table_name} SET TITLE = ${title}, DESCRIPTION = ${desc} WHERE REL_ID = ${buttonID}`);
    console.log(result)*/

  }

    
  
  return (
    <>
      {pics.map(pic => {
        return (
          <div key={pic.id} className='img-cont'>
            <img loading='lazy' src={pic.url} alt="image" />
                  <p>
                    ID: {pic.id}
                  </p>
            <form onSubmit={handleSubmit} action="send">
              <ul>               
                <li>
                  <label htmlFor="title">Title</label>
                  <textarea name='title' placeholder='pic title...' id='title' type="text" />
                </li>

                <li className='desc-txt'>
                  <label  htmlFor="description">Description</label>
                  <textarea name='description'placeholder='short pic description...' id='description'className='text-desc' type="text" />
                </li>

                <div className='save-button'>
                  <Button id={pic.id} />
                </div>
              </ul>
            </form>
          </div>
        )
      })}
    </>
    
  )
}