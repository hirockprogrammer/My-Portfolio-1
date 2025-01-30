"use client"
import { Typewriter } from 'react-simple-typewriter'

const Type_writer = () => {
    return (
        <div>
            <Typewriter
                words={['web developer',"full stack web dev."]}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}

            />
        </div>
    )
}

export default Type_writer
