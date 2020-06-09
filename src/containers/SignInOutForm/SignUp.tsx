import React, { useContext } from 'react';
import Link from 'next/link';
import {
  Button,
  Wrapper,
  Container,
  LogoWrapper,
  Heading,
  SubHeading,
  HelperText,
  Offer,
  Input,
  Divider,
  LinkButton,
} from './SignInOutForm.style';
import { Facebook, Google } from 'components/AllSvgIcon';
import { AuthContext } from 'contexts/auth/auth.context';
import { FormattedMessage } from 'react-intl';
import Image from 'components/Image/Image';
import PickBazar from '../../image/PickBazar.png';
import { useSignupMutation } from 'generated';
import firebase from 'lib/firebase/client';
import { closeModal } from '@redq/reuse-modal';

export default function SignOutModal() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { authDispatch } = useContext<any>(AuthContext);
  const [signup] = useSignupMutation();

  const toggleSignInForm = () => {
    authDispatch({
      type: 'SIGNIN',
    });
  };

  const signUpCallback = async () => {
    event.preventDefault();

    const firebaseSignUp = await firebase.auth().createUserWithEmailAndPassword(email, password);

    const idToken = await firebaseSignUp.user?.getIdToken();
    if (idToken) {
      signup({
        variables: {
          idToken,
        },
      }).then(({ data, errors }) => {
        if (!errors && data?.signup) {
          localStorage.setItem('session', data.signup.token);
          authDispatch({ type: 'SIGNIN_SUCCESS' });
        }
      });
    }
    closeModal();
  };

  return (
    <Wrapper>
      <Container>
        {/* <LogoWrapper>
          <Image url={PickBazar} />
        </LogoWrapper> */}

        <Heading>
          <FormattedMessage id="signUpBtnText" defaultMessage="Sign Up" />
        </Heading>

        <SubHeading>
          <FormattedMessage id="signUpText" defaultMessage="Every fill is required in sign up" />
        </SubHeading>

        <FormattedMessage id="emailAddressPlaceholder" defaultMessage="Email Address or Contact No.">
          {(placeholder) => (
            <Input placeholder={placeholder} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          )}
        </FormattedMessage>

        <FormattedMessage id="passwordPlaceholder" defaultMessage="Password (min 6 characters)">
          {(placeholder) => (
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder={placeholder}
            />
          )}
        </FormattedMessage>

        <HelperText style={{ padding: '20px 0 30px' }}>
          <FormattedMessage id="signUpText" defaultMessage="By signing up, you agree to Pickbazar's" />{' '}
          <Link href="/">
            <a>
              <FormattedMessage id="termsConditionText" defaultMessage="Terms &amp; Condtion" />
            </a>
          </Link>
        </HelperText>

        <Button
          onClick={signUpCallback}
          fullwidth
          title={'Continue'}
          intlButtonId="continueBtn"
          style={{ color: '#fff' }}
        />

        <Divider>
          <span>
            <FormattedMessage id="orText" defaultMessage="or" />
          </span>
        </Divider>

        <Button
          fullwidth
          title={'Continue with Facebook'}
          iconPosition="left"
          className="facebook"
          icon={<Facebook />}
          iconStyle={{ color: '#ffffff', marginRight: 5 }}
          intlButtonId="continueFacebookBtn"
          style={{ color: '#fff' }}
        />

        <Button
          fullwidth
          title={'Continue with Google'}
          className="google"
          iconPosition="left"
          icon={<Google />}
          iconStyle={{ color: '#ffffff', marginRight: 5 }}
          intlButtonId="continueGoogleBtn"
          style={{ color: '#fff' }}
        />
        <Offer style={{ padding: '20px 0' }}>
          <FormattedMessage id="alreadyHaveAccount" defaultMessage="Already have an account?" />{' '}
          <LinkButton onClick={toggleSignInForm}>
            <FormattedMessage id="loginBtnText" defaultMessage="Login" />
          </LinkButton>
        </Offer>
      </Container>
    </Wrapper>
  );
}
