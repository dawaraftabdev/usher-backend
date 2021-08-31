const express = require('express')
const cors = require('cors')
const { v4 } = require('uuid')
const {
  getHeader,
  getFooter,
  getBody,
  getSocialLoginsBody,
  getInfoWizardBody
} = require('./common')

const uuidv4 = v4

const app = express()

app.use(cors())
app.use(express.json())

app.get('/404', (req, res) => {
  const header = {
    id: uuidv4(),
    type: 'header',
    props: {
      components: getHeader()
    }
  }

  const body = {
    id: uuidv4(),
    type: 'body',
    props: {
      style: {
        backgroundImage: '404-back.png'
      }
    }
  }

  res.json({
    page: '404',
    components: [header, body]
  })
})
app.get('/layout', (req, res) => {
  const header = {
    id: uuidv4(),
    type: 'header',
    props: {
      components: getHeader()
    }
  }
  const footer = {
    id: uuidv4(),
    type: 'footer',
    props: {
      components: getFooter()
    }
  }

  const body = {
    id: uuidv4(),
    type: 'body',
    props: {
      components: [
        {
          id: uuidv4(),
          type: 'bodyColumn',
          props: {
            components: getBody()
          }
        }
      ]
    }
  }

  res.json({
    page: 'layout',
    components: [header, body, footer]
  })
})
app.get('/social-login', (req, res) => {
  const header = {
    id: uuidv4(),
    type: 'header',
    props: {
      components: getHeader()
    }
  }
  const footer = {
    id: uuidv4(),
    type: 'footer',
    props: {
      components: getFooter()
    }
  }
  const socialLogins = {
    id: uuidv4(),
    type: 'body',
    props: {
      components: [
        {
          id: uuidv4(),
          type: 'bodyColumn',
          props: {
            styles: {
              textAlign: 'center'
            },
            components: getSocialLoginsBody()
          }
        }
      ]
    }
  }

  res.json({
    page: 'layout',
    components: [header, socialLogins, footer]
  })
})
app.get('/info-wizard/step/:activeStep', (req, res) => {
  const header = {
    id: uuidv4(),
    type: 'header',
    props: {
      components: getHeader()
    }
  }
  const footer = {
    id: uuidv4(),
    type: 'footer',
    props: {
      components: getFooter()
    }
  }
  const infoWizard = {
    id: uuidv4(),
    type: 'body',
    props: {
      components: getInfoWizardBody(req.params.activeStep || 1)
    }
  }

  res.json({
    page: 'layout',
    components: [header, infoWizard, footer]
  })
})

app.listen(3002, () =>
  console.log(`listening on port http://localhost:${3002}`)
)
