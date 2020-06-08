import firebaseAdmin from 'lib/firebase/admin'
import { AuthenticationError } from 'apollo-server-micro'

const meMiddleware = (handler) => async (req, res) => {
  const { session } = req.cookies
  if (!session) {
    return handler(req, res)
  }
  const CHECK_REVOKED = true

  const user = await firebaseAdmin
    .auth()
    .verifySessionCookie(session, CHECK_REVOKED)
    .then(async (claims) => {
      return claims
    })
    .catch((error) => {
      console.log(error)
      ctx.res.setHeader('Set-Cookie', `session=`)
      return handler(req, res)
    })
  req.user = user
  return handler(req, res)
}

export default meMiddleware
