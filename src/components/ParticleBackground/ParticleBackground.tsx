import React, { useEffect, useRef, useState } from 'react'
import * as S from './styled'
import Particles from 'react-tsparticles'

type Props = {}

const options = {
  background: {
    color: {
      value: '#070707',
    },
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    // links: {
    //   color: '#ffffff',
    //   distance: 150,
    //   enable: true,
    //   opacity: 0.2,
    //   width: 1,
    // },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'random',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 40,
    },
    opacity: {
      value: 0.4,
    },
    shape: {
      type: 'circle',
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
}

const ParticleBackground = () => {
  const { current: id } = useRef('123')
  const [height, setHeight] = useState(0)

  const containerId = `particle-container-${id}`

  useEffect(() => {
    const element = document.getElementById(containerId)

    if (element) {
      console.log('particle height: ', height)
      setHeight(element.clientHeight)
    }
  }, [])

  return (
    <S.Container id={containerId}>
      {height > 0 && (
        <Particles
          id="tsparticles"
          height={height + 'px'}
          width="100%"
          options={options}
        />
      )}
    </S.Container>
  )
}

export default ParticleBackground
