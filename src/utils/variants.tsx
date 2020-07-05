const loginSectionVariants = {
  initial: {},
  animate: {},
  exit: {
    x: '-50vw',
    transition: {
      duration: 0.4
    }
  }
}

const fieldsetLoginVariants = {
  initial: {
    opacity: 0,
    x: '-50vw'
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
  }
}


const registerSectionVariants = {
  initial: {},
  animate: {},
  exit: {
    x: '50vw',
    transition: {
      duration: 0.4
    }
  }
}

const fieldsetRegisterVariants = {
  initial: {
    opacity: 0,
    x: '50vw'
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
  }
}

const formVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  },
  exit: {
    opacity: 0,
  }
}

export {
  loginSectionVariants,
  registerSectionVariants,
  formVariants,
  fieldsetLoginVariants,
  fieldsetRegisterVariants,
}