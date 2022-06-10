// fade in up animation
export const fadeInUp = {
    initial: {
      opacity:0,
      y:60,
    },
    animate:{
      opacity:1,
      y:0,
    }
  }

//   stagger animation
export const stagger ={
    initial:{},
    animate:{
        transition:{
            staggerChildren:0.1
        }
    }
}

// route fade animation
export const routeFade = {
    hidden: {
       opacity: 0,
    },
    visible: {
       opacity: 1,
       transition: {
          delay: 0.1,
          duration: 0.1,
       },
    },
    exit: {
       opacity: 0,
       transition: {
          delay: 0.1,
          ease: 'easeInOut',
       },
    },
 }