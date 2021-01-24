import Glide from '@glidejs/glide'
import { useState, useEffect } from 'react'

const Slider = ({element = 'glide', options, children}) => {
  const [slider] = useState(new Glide(`.${element}`, options));

  useEffect(() => {
    slider.mount()

    // subscribe to an event
    slider.on('run.before', (event) => {
      // ... do something cool here
    })

    // cleanup when unmounting component
    return () => slider.destroy()
  }, [])

  return (
    <div className={element}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {children.map((slide, index) => {
            return React.cloneElement(slide, {
              key: index,
              className: `${slide.props.className} glide__slide`
            })
          })
          }
        </ul>
      </div>
    </div>
  )
}

export default Slider;