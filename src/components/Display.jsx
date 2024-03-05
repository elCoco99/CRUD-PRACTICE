import './display.css'
import { pics } from '../images/images.json'
import { Button } from './Button'

export function Display() {
  function handleClick() {
    addEventListener('click', () => {
      const title = document.getElementById('title').value
      const description = document.getElementById('description').value
      console.log(title, description)
    })
  }
  
  return (
    <>
      {pics.map(pic => {
        return (
          <div key={pic.id } className='img-cont'>
            <img loading='lazy' src={pic.url} alt="image" />
                  <p>
                    ID: {pic.id}
                  </p>
            <form action="send">
              <ul>               
                <li>
                  <label htmlFor="title">Title</label>
                  <textarea id='title' type="text" />
                </li>

                <li className='desc-txt'>
                  <label htmlFor="description">Description</label>
                  <textarea id='description'className='text-desc' type="text" />
                </li>

                <li className='save-button'>
                  <Button onClick={handleClick()} />
                </li>
              </ul>
            </form>
          </div>
        )
      })}
    </>
    
  )
}