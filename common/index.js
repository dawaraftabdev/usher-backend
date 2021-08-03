const { v4 } = require('uuid')
const uuidv4 = v4

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
                    value: 'success@theguarantors.com'
                  }
                },
                {
                  id: uuidv4(),
                  type: 'text',
                  isBottom: true,
                  props: {
                    isBottom: true,
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
  }
}
