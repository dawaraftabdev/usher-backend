const { v4 } = require('uuid')
const uuidv4 = v4

const getWizardInfoSteps = () => {
  const step1 = {
    id: uuidv4(),
    type: 'step',
    props: {
      components: [
        {
          id: uuidv4(),
          type: 'userWelcomeText',
          props: {
            value: 'Hi Amanda'
          }
        },
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
              }
            ]
          }
        }
      ]
    }
  }
  const steps = {
    id: uuidv4(),
    type: 'steps',
    props: {
      components: [step1]
    }
  }
  return steps
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
      type: 'heading',
      props: {
        isSub: true,
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
        value: 'Welcome to TheGuarantors'
      }
    }
    const subHeading = {
      id: uuidv4(),
      type: 'heading',
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
            type: 'socialButton',
            props: {
              size: 'm',
              bType: 'primary',
              onClick: {},
              logo: 'google-logo.png',
              text: 'Continue with google'
            }
          }
        ]
      }
    }
    return [heading, subHeading, logins]
  },
  getInfoWizardBody: () => {
    const rightSide = {
      id: uuidv4(),
      type: 'bodyColumn',
      props: {
        components: [
          {
            id: uuidv4(),
            type: 'map',
            props: {
              location: 'new york'
            }
          },
          {
            id: uuidv4(),
            type: 'address',
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
        ]
      }
    }
    const leftSide = {
      id: uuidv4(),
      type: 'bodyColumn',
      props: {
        components: [getWizardInfoSteps()]
      }
    }
    return [leftSide, rightSide]
  }
}
