import Link from 'next/link';
import {
  PolicyContainer,
  PolicyContent,
  PolicySubTitle,
  PolicyTitle,
  PolicyWrapper,
  StaticContent,
  StaticWrap,
} from './PrivacyPolicyStyle';

export default function PrivacyPolicyComp() {
  return (
    <PolicyContainer>
      <PolicyWrapper>
        <StaticContent>
          <StaticWrap>
            <PolicyTitle>Privacy Policy</PolicyTitle>
          </StaticWrap>

          <PolicyContent>
            <PolicySubTitle>
              What are cookies and what do we use them for?
            </PolicySubTitle>

            <div>
              <p>
                A cookie or computer cookie is a small information file that is
                saved in your browser every time you visit our website.The
                usefulness of cookies is to save the history of your activity on
                our website, so that when you visit it again, it can identify
                you and configure its content based on your browsing habits,
                identity.
              </p>
            </div>

            <div>
              <p>
                A cookie is harmless, it does not contain malicious or malicious
                code (eg viruses, Trojans, worms, etc.) that could harm your
                terminal (computer, smartphone, tablet, etc.), but it does have
                some impact on your right to protection. of your data, as it
                collects certain information concerning you (browsing habits,
                identity, preferences, etc.).
              </p>
            </div>
          </PolicyContent>

          <PolicyContent>
            <PolicySubTitle>
              What information does a cookie store?
            </PolicySubTitle>

            <div>
              <p>
                Cookies do not usually collect special categories of personal
                data (sensitive data). The data they keep is technical, personal
                preferences, content personalization, etc.
              </p>
            </div>
          </PolicyContent>

          <PolicyContent>
            <PolicySubTitle>What kind of cookies are there?</PolicySubTitle>

            <div>
              <p>In general, there are five types of cookies:</p>
            </div>

            <ul>
              <li>
                <h4>Technical cookies: </h4>
                <p>
                  They are the most basic cookies. They allow the user to
                  navigate through a web page, platform or application and to
                  use the different options or services that exist in it, such
                  as, for example, controlling traffic and data communication,
                  identifying the session, accessing parts of restricted access,
                  remember the elements that make up an order, carry out the
                  purchase process of an order, make the request for
                  registration or participation in an event, use security
                  elements during navigation, store content for the broadcast of
                  videos or sound or share content through social networks.
                </p>
              </li>
              <li>
                <h4>Personalization cookies:</h4>
                <p>
                  They are those that allow the user to access the service with
                  some predefined general characteristics based on a series of
                  criteria in the user's terminal, such as the language, the
                  type of browser through which the service is accessed, the
                  regional configuration from where you access the service, etc.
                </p>
              </li>
              <li>
                <h4>Analysis cookies:</h4>
                <p>
                  They are those that allow the person responsible for them to
                  monitor and analyze the behavior of the users of the websites
                  to which they are linked.
                </p>

                <p>
                  The information collected through this type of cookies is used
                  in the measurement of the activity of the websites,
                  application or platform and for the elaboration of navigation
                  profiles of the users of said sites, applications and
                  platforms, in order to introduce improvements in function of
                  the analysis of the usage data made by the users of the
                  service.
                </p>
              </li>
              <li>
                <h4>Advertising cookies:</h4>
                <p>
                  They are those that allow the management, in the most
                  efficient way possible, of the advertising spaces that, where
                  appropriate, the person responsible has included in a web
                  page, application or platform from which the requested service
                  is provided based on criteria such as content edited or the
                  frequency at which the ads are displayed.
                </p>
              </li>
              <li>
                <h4>Behavioral advertising cookies:</h4>
                <p>
                  They are those that allow the management, in the most
                  efficient way possible, of the advertising spaces that, where
                  appropriate, the person responsible has included in a web
                  page, application or platform from which the requested service
                  is provided.
                </p>
              </li>
            </ul>

            <p>
              These cookies store information on user behavior obtained through
              continuous observation of their browsing habits, allowing the
              development of a specific profile to display advertising based on
              it.
            </p>
          </PolicyContent>

          <PolicyContent>
            <PolicySubTitle>
              What are own and third party cookies?
            </PolicySubTitle>

            <ul>
              <li>
                <h4>Own cookies:</h4>
                <p>
                  Own cookies are those that are generated and managed by the
                  person responsible who provides the service requested by the
                  user.
                </p>
              </li>
              <li>
                <h4>Third party cookies:</h4>
                <p>
                  They are those that are generated by other entities other than
                  the person responsible (services or external providers, such
                  as Google).
                </p>
              </li>
            </ul>
          </PolicyContent>

          <PolicyContent>
            <PolicySubTitle>
              What kind of cookies does our website save?
            </PolicySubTitle>

            <div>
              <p>
                Next, we proceed to relate the type of cookies stored on our
                website and their purpose:
              </p>
            </div>

            <ul>
              <li>
                <b>_ga: </b>
                Google Analytics cookie that enables the unique visits control
                function. The first time a user enters the website through a
                browser, this cookie will be installed. When this user re-enters
                the web with the same browser, the cookie will consider that he
                is the same user. Only in the event that the user changes the
                browser will another user be considered.
              </li>
              <li>
                <b>_gat: </b>
                This cookie is associated with Google Analytics. It is used to
                limit request speed - limiting data collection on high traffic
                sites. It expires after 10 minutes.
              </li>
              <li>
                <b>_gid: </b>
                his cookie is associated with Google Analytics. It is used to
                distinguish users. It expires after 24 hours.
              </li>
            </ul>
          </PolicyContent>

          <PolicyContent>
            <PolicySubTitle>What can I do with cookies?</PolicySubTitle>

            <p>
              Cookies can be deleted, accepted or blocked, as desired, for this
              you only have to configure the web browser conveniently. At any
              time, you can prevent the installation of cookies (blocking) on
              your computer through the corresponding option in your browser,
              but in this case we cannot guarantee the correct operation of the
              different functionalities of our website.
            </p>

            <p>
              Below, we provide the links for managing and blocking cookies
              depending on the browser you use:
            </p>

            <ul>
              <li>
                <h4>Internet Explorer:</h4>
                <Link
                  href={
                    'https://support.microsoft.com/en-gb/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d#ie=ie-10'
                  }
                  target='_blank'
                >
                  http://windows.microsoft.com/es-xl/internet-explorer/delete-manage-cookies#ie=ie-10
                </Link>
              </li>

              <li>
                <h4>FireFox:</h4>
                <Link
                  href={
                    'https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop'
                  }
                  target='_blank'
                >
                  https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop
                </Link>
              </li>

              <li>
                <h4>Chrome:</h4>
                <Link
                  href={'https://support.google.com/chrome/answer/95647?hl=en'}
                  target='_blank'
                >
                  https://support.google.com/chrome/answer/95647?hl=en
                </Link>
              </li>

              <li>
                <h4>Safari:</h4>
                <Link
                  href={
                    'https://support.apple.com/en-in/guide/safari/sfri11471/mac'
                  }
                  target='_blank'
                >
                  https://support.apple.com/en-in/guide/safari/sfri11471/mac
                </Link>
              </li>
            </ul>

            <p>
              You can also delete the cookies stored in your browser by going to
              its configuration options.
            </p>
          </PolicyContent>
        </StaticContent>
      </PolicyWrapper>
    </PolicyContainer>
  );
}
