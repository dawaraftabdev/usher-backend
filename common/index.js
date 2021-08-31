const { v4 } = require('uuid')
const uuidv4 = v4

const getWizardInfoActiveStep = activeStep => {
  const allSteps = []
  allSteps.push({
    id: uuidv4(),
    type: 'step',
    props: {
      components: [
        {
          id: uuidv4(),
          type: 'heading',
          props: {
            value: `Let's get started!`
          }
        },
        {
          id: uuidv4(),
          type: 'form',
          props: {
            components: [
              {
                id: uuidv4(),
                type: 'inputField',
                props: {
                  label: 'First Name',
                  required: true
                }
              },
              {
                id: uuidv4(),
                type: 'inputField',
                props: {
                  label: 'Last Name',
                  required: true
                }
              },
              {
                id: uuidv4(),
                type: 'datePicker',
                props: {
                  name: 'Date of Birth',
                  startYear: `1940`,
                  endYear: new Date().getFullYear(),
                  placeholderText: 'MM/DD/YYYY',
                  required: true
                }
              },
              {
                id: uuidv4(),
                type: 'inputField',
                props: {
                  label: 'Phone number',
                  required: true
                }
              },
              {
                id: uuidv4(),
                type: 'button',
                props: {
                  bType: 'primary',
                  text: 'Continue'
                }
              },
              {
                id: uuidv4(),
                type: 'button',
                props: {
                  bType: 'secondary',
                  text: 'My name is incorrect'
                }
              }
            ]
          }
        }
      ]
    }
  })
  allSteps.push({
    id: uuidv4(),
    type: 'step',
    props: {
      components: [
        {
          id: uuidv4(),
          type: 'userWelcomeText',
          props: {
            value: 'Your Home'
          }
        },
        {
          id: uuidv4(),
          type: 'heading',
          props: {
            value: `Where do you currently reside?`
          }
        },
        {
          id: uuidv4(),
          type: 'box',
          props: {
            height: '25px'
          }
        },
        {
          id: uuidv4(),
          type: 'form',
          props: {
            components: [
              {
                id: uuidv4(),
                type: 'inputField',
                props: {
                  label: 'Address',
                  required: true
                }
              },
              {
                id: uuidv4(),
                type: 'box',
                props: {
                  height: '15px'
                }
              },
              {
                id: uuidv4(),
                type: 'inputField',
                props: {
                  label: 'Unit / Floor',
                  required: true
                }
              },
              {
                id: uuidv4(),
                type: 'box',
                props: {
                  height: '15px'
                }
              },
              {
                id: uuidv4(),
                type: 'checkbox',
                props: {
                  name: 'firstTimeRenter',
                  optional: true,
                  children: `I'm a first time renter`
                }
              },
              {
                id: uuidv4(),
                type: 'button',
                props: {
                  bType: 'primary',
                  text: 'Continue'
                }
              }
            ]
          }
        }
      ]
    }
  })
  allSteps.push({
    id: uuidv4(),
    type: 'step',
    props: {
      components: [
        {
          id: uuidv4(),
          type: 'userWelcomeText',
          props: {
            value: 'Your Residency'
          }
        },
        {
          id: uuidv4(),
          type: 'heading',
          props: {
            value: `Are you a US Citizen or Green Card Holder?`
          }
        },
        {
          id: uuidv4(),
          type: 'form',
          props: {
            components: [
              {
                id: uuidv4(),
                type: 'radio',
                props: {
                  buttonValue: 'yes',
                  bordered: true,
                  iconKey: 'USFlag',
                  name: 'usCitizen',
                  text: 'Yes, I’m a US Citizen or Green Card Holder.'
                }
              },
              {
                id: uuidv4(),
                type: 'box',
                props: {
                  height: '20px'
                }
              },
              {
                id: uuidv4(),
                type: 'radio',
                props: {
                  buttonValue: 'no',
                  checked: false,
                  bordered: true,
                  name: 'usCitizen',
                  text: 'No, I am not.'
                }
              },

              {
                id: uuidv4(),
                type: 'button',
                props: {
                  bType: 'primary',
                  text: 'Continue'
                }
              }
            ]
          }
        }
      ]
    }
  })
  allSteps.push({
    id: uuidv4(),
    type: 'step',
    props: {
      components: [
        {
          id: uuidv4(),
          type: 'userWelcomeText',
          props: {
            value: 'Your Occupation'
          }
        },
        {
          id: uuidv4(),
          type: 'heading',
          props: {
            value: `What’s your employment status?`
          }
        },
        {
          id: uuidv4(),
          type: 'form',
          props: {
            components: [
              {
                id: uuidv4(),
                type: 'radio',
                props: {
                  buttonValue: 'employed',
                  bordered: true,
                  name: 'employmentStatus',
                  text: 'Employed'
                }
              },
              {
                id: uuidv4(),
                type: 'box',
                props: {
                  height: '20px'
                }
              },
              {
                id: uuidv4(),
                type: 'radio',
                props: {
                  buttonValue: 'self-employed',
                  bordered: true,
                  name: 'employmentStatus',
                  text: 'Self-Employed'
                }
              },
              {
                id: uuidv4(),
                type: 'box',
                props: {
                  height: '20px'
                }
              },
              {
                id: uuidv4(),
                type: 'radio',
                props: {
                  buttonValue: 'full-time-student',
                  bordered: true,
                  name: 'employmentStatus',
                  text: 'Full-Time Student'
                }
              },
              {
                id: uuidv4(),
                type: 'box',
                props: {
                  height: '20px'
                }
              },
              {
                id: uuidv4(),
                type: 'radio',
                props: {
                  buttonValue: 'retired',
                  bordered: true,
                  name: 'employmentStatus',
                  text: 'Retired'
                }
              },
              {
                id: uuidv4(),
                type: 'box',
                props: {
                  height: '20px'
                }
              },
              {
                id: uuidv4(),
                type: 'radio',
                props: {
                  buttonValue: 'unemployed',
                  bordered: true,
                  name: 'employmentStatus',
                  text: 'Unemployed'
                }
              },
              {
                id: uuidv4(),
                type: 'box',
                props: {
                  height: '20px'
                }
              },
              {
                id: uuidv4(),
                type: 'radio',
                props: {
                  buttonValue: 'corporation',
                  bordered: true,
                  name: 'employmentStatus',
                  text: 'Enrolling as a Corporation'
                }
              },
              {
                id: uuidv4(),
                type: 'box',
                props: {
                  height: '20px'
                }
              },
              {
                id: uuidv4(),
                type: 'inputField',
                props: {
                  label: 'Annual Income',
                  required: true
                }
              },
              {
                id: uuidv4(),
                type: 'button',
                props: {
                  bType: 'primary',
                  text: 'Continue'
                }
              }
            ]
          }
        }
      ]
    }
  })
  allSteps.push({
    id: uuidv4(),
    type: 'step',
    props: {
      components: [
        {
          id: uuidv4(),
          type: 'userWelcomeText',
          props: {
            value: 'You’re Almost There'
          }
        },
        {
          id: uuidv4(),
          type: 'heading',
          props: {
            value: `What’s your SSN?`
          }
        },
        {
          id: uuidv4(),
          type: 'form',
          props: {
            components: [
              {
                id: uuidv4(),
                type: 'inputField',
                props: {
                  label: 'Social Security Number',
                  required: true
                }
              },
              {
                id: uuidv4(),
                type: 'box',
                props: {
                  height: '15px'
                }
              },
              {
                id: uuidv4(),
                type: 'checkbox',
                props: {
                  name: 'noSSN',
                  optional: true,
                  children: `I don’t have a Social Security Number.`
                }
              },
              {
                id: uuidv4(),
                type: 'box',
                props: {
                  height: '15px'
                }
              },
              {
                id: uuidv4(),
                type: 'scrollableArea',
                props: {
                  height: `165px`,
                  text: `Please authorize TheGuarantors to do a soft credit/background check, which includes credit history, and immigration and other law enforcement records (as applicable), and share your information with relevant third parties as necessary for this application and all future renewals. I expressly acknowledge that this authorization will be in full force and effect onceI press "Get a Quote" below.
                  I hereby expressly authorize TheGuarantors Agency and The Surety to (a) request and obtain from third parties information and documentation related to me, including, but not limited to, personal information and documentation, such as credit records, immigration and other law enforcements records (as applicable), and related information and documentation, an any additional information and documentation as may be reasonably necessary; and (b) share such information and documentation, as well as any personal information and documentation provided by me (whether currently in possession of TheGuarantors Agency or The Surety, or hereafter obtained), with third parties, including, but not limited to, landlords, brokers, management companies and other third parties, in connection with (i) underwriting and credit evaluation, including, but not limited to, verification or analysis or any information, documentation or records provided and obtained; (ii) claim investigation or collection; (iii) rental or lease application; and (iv) any other purpose TheGuarantors Agency or The Surety deem reasonably necessary in connection with the Lease Rental Bond, or reinsurance thereof.`
                }
              },
              {
                id: uuidv4(),
                type: 'box',
                props: {
                  height: '15px'
                }
              },
              {
                id: uuidv4(),
                type: 'checkbox',
                props: {
                  name: 'authorizeBackground',
                  optional: true,
                  children: `I authorize TheGuarantors to do a soft credit/background check.`
                }
              },
              {
                id: uuidv4(),
                type: 'button',
                props: {
                  bType: 'primary',
                  text: 'Get Quote'
                }
              }
            ]
          }
        }
      ]
    }
  })

  let stepToShow = allSteps[activeStep - 1]

  const steps = {
    id: uuidv4(),
    type: 'steps',
    props: {
      components: [stepToShow]
    }
  }
  return steps
}
const getStepsProgressBar = (activeStep, totalSteps) => {
  const stepDots = []

  for (let i = 1; i <= totalSteps; i++) {
    stepDots.push({
      id: uuidv4(),
      type: 'stepDot',
      props: {
        complete: i <= activeStep
      }
    })
  }

  return {
    id: uuidv4(),
    type: 'stepDots',
    props: {
      components: stepDots
    }
  }
}

module.exports = {
  getHeader: () => {
    const logo = {
      id: uuidv4(),
      type: 'logo',
      props: {
        src: 'logo.png'
      }
    }
    const links = {
      id: uuidv4(),
      type: 'links',
      props: {
        values: [
          {
            title: 'FAQ',
            href: '#'
          },
          {
            title: 'Testing',
            href: '#'
          }
        ]
      }
    }
    const left = {
      id: uuidv4(),
      type: 'headerLeft',
      props: { components: [logo] }
    }
    const right = {
      id: uuidv4(),
      type: 'headerRight',
      props: { components: [links] }
    }
    return [left, right]
  },

  getBody: () => {
    const userWelcomeText = {
      id: uuidv4(),
      type: 'userWelcomeText',
      props: {
        value: 'Hi Amanda'
      }
    }
    const heading = {
      id: uuidv4(),
      type: 'heading',
      props: {
        value:
          'Keep your cash, and save up to 90% at move-in! Rent deposit-free!'
      }
    }
    const subHeading = {
      id: uuidv4(),
      type: 'text',
      props: {
        isHelperText: true,
        value: `With Security Deposit Replacement, you'll no longer have to provide a cash security deposit.`
      }
    }

    const emailForm = {
      id: uuidv4(),
      type: 'form',
      props: {
        components: [
          {
            id: uuidv4(),
            type: 'text',
            props: {
              bold: true,
              styles: {
                fontFamily: 'Gilroy',
                fontSize: '16px',
                fontWeight: 'bold',
                lineHeight: '24px',
                color: '#161657'
              },
              value: `Enter your email and we'll send you a link to get started.`
            }
          },
          {
            id: uuidv4(),
            type: 'inputField',
            props: {
              label: 'Email',
              required: true
            }
          },
          {
            id: uuidv4(),
            type: 'button',
            props: {
              size: 'm',
              bType: 'primary',
              text: 'Send Me Magic Link'
            }
          }
        ]
      }
    }

    return [userWelcomeText, heading, subHeading, emailForm]
  },

  getFooter: () => {
    const descriptors = {
      id: uuidv4(),
      type: 'descriptors',
      props: {
        isBottom: true,
        components: [
          {
            id: uuidv4(),
            type: 'logo',
            isBottom: true,
            props: {
              src: 'logo-white.png'
            }
          },
          {
            id: uuidv4(),
            type: 'text',
            props: {
              isBottom: true,
              styles: {
                margin: '24px 0'
              },
              value:
                'We are a Fintech company that is rethinking insurance products and financial solutions for  residential and commercial real estate professionals as well as their residents and tenants. '
            }
          },
          {
            id: uuidv4(),
            type: 'address',
            props: {
              isBottom: true,
              components: [
                {
                  id: uuidv4(),
                  type: 'text',
                  isBottom: true,
                  props: {
                    isBottom: true,
                    styles: {
                      margin: '0'
                    },
                    value: 'success@theguarantors.com'
                  }
                },
                {
                  id: uuidv4(),
                  type: 'text',
                  isBottom: true,
                  props: {
                    isBottom: true,
                    styles: {
                      margin: '0'
                    },
                    value: '7 World Trade Center New York, NY 10007'
                  }
                }
              ]
            }
          }
        ]
      }
    }
    const links = {
      id: uuidv4(),
      type: 'links',
      props: {
        isBottom: true,
        values: [
          {
            title: 'Terms of service',
            href: '#'
          },
          {
            title: 'Privacy Policy',
            href: '#'
          },
          {
            title: 'Licensing',
            href: '#'
          },
          {
            title: 'Member REBNY',
            href: '#'
          }
        ]
      }
    }
    const left = {
      id: uuidv4(),
      type: 'footerLeft',
      props: { isBottom: true, components: [descriptors] }
    }
    const right = {
      id: uuidv4(),
      type: 'footerRight',
      props: { isBottom: true, components: [links] }
    }
    return [left, right]
  },

  getSocialLoginsBody: () => {
    const heading = {
      id: uuidv4(),
      type: 'heading',
      props: {
        value: 'Welcome to The Guarantors'
      }
    }
    const subHeading = {
      id: uuidv4(),
      type: 'text',
      props: {
        isSub: true,
        value: `Use a Google/Facebook account with the same email address as in your leasing application.`
      }
    }
    const logins = {
      id: uuidv4(),
      type: 'socialLogins',
      props: {
        components: [
          {
            id: uuidv4(),
            type: 'googleButton',
            props: {
              size: 'm',
              bType: 'primary',
              onClick: {},
              text: 'Continue with google'
            }
          },
          {
            id: uuidv4(),
            type: 'facebookButton',
            props: {
              size: 'm',
              bType: 'primary',
              onClick: {},
              text: 'Continue with facebook'
            }
          }
        ]
      }
    }
    return [heading, subHeading, logins]
  },
  getInfoWizardBody: activeStep => {
    const rightSide = {
      id: uuidv4(),
      type: 'questionnaireRight',
      props: {
        components: [
          {
            id: uuidv4(),
            type: 'map',
            props: {
              src: 'map-image.png'
            }
          },
          {
            id: uuidv4(),
            type: 'address',
            props: {
              components: [
                {
                  id: uuidv4(),
                  type: 'text',
                  props: {
                    style: {
                      fontWeight: 'bold'
                    },
                    value: 'Sky - Luxury Apartment Rentals'
                  }
                },
                {
                  id: uuidv4(),
                  type: 'text',
                  props: {
                    value: '605 W 42nd st.'
                  }
                },
                {
                  id: uuidv4(),
                  type: 'text',
                  props: {
                    value: 'New York, NY 10036'
                  }
                },
                {
                  id: uuidv4(),
                  type: 'text',
                  props: {
                    value: 'United States'
                  }
                }
              ]
            }
          }
        ]
      }
    }
    const leftSide = {
      id: uuidv4(),
      type: 'questionnaireLeft',
      props: {
        components: [
          getStepsProgressBar(activeStep, 6),
          getWizardInfoActiveStep(activeStep)
        ]
      }
    }
    return [
      {
        id: uuidv4(),
        type: 'questionnaire',
        props: {
          components: [leftSide, rightSide]
        }
      }
    ]
  }
}
