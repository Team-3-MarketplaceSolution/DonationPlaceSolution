import * as WebBrowser from "expo-web-browser";
import React from "react";
import { AppLoading } from "expo";
import { Image } from "react-native";
import {
  Container,
  List,
  Content,
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("../node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("../node_modules/native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  To donate please create a donation list below, and then we will provide a tax return estimate on your contributions.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Activities</Text>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "http://clipart-library.com/images/8ixrGeqrT.jpg"
                  }}
                />
                <Body>
                  <Text>American Red Cross</Text>
                  <Text note>Sound the Alarm. Save a Life. Just one day of your life can change someone else's forever.</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F80902337%2F42761723304%2F1%2Foriginal.20191113-163605?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C85%2C2048%2C1024&s=ae0fe51ec356203b8f464f1a6b661b72"
                }}
                style={{ height: 300, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>42 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>24 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/f/e9/fe94cb57-0b83-5665-8879-dceca34f3aaa/59a9fbc88725b.image.jpg?resize=400%2C512"
                  }}
                />
                <Body>
                  <Text>Goodwill</Text>
                  <Text note>Earn up to $500* by hosting a Goodwill donation drive to benefit your school by collecting reusable goods.</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "https://goodwillwa.org/wp-content/uploads/2015/10/Donation-Drive_FB-post_2017.jpg"
                }}
                style={{ height: 300, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>44 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>73 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>2 Days ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                    "https://tano.org/wp-content/uploads/2015/06/salvation-army-logo1.jpg"
                  }}
                />
                <Body>
                  <Text>Salvation Army</Text>
                  <Text note>Friday, June 6th, 2014, BakeMark Executive Boyd Mulloy presents a $10,000 check to Captain Grady Brown and Jessica Martin-Mason in honor of National Donut Day and the veterans The Salvation Army serves.</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                  "https://live.staticflickr.com/5493/14357770481_c345758419_b.jpg"
                }}
                style={{ height: 300, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>3 Days ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://urbanareas.net/info/wp-content/uploads/2015/03/37847_nonprofit_helping_hands_for_the_disabled_300x300.jpg"
                  }}
                />
                <Body>
                  <Text>Helping Hands NYC</Text>
                  <Text note>Our mission is to improve the lives of under-resourced New York City youth through the arts.</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "https://urbanareas.net/info/wp-content/uploads/2015/05/39101_nonprofit_organization_creative_art_works3.jpg"
                }}
                style={{ height: 300, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>97 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>112 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>3 Days ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "http://clipart-library.com/images/8ixrGeqrT.jpg"
                  }}
                />
                <Body>
                  <Text>American Red Cross</Text>
                  <Text note>Join us for our second annual American Red Cross volunteer fair to learn about new volunteer opportunities with different non-profit organizations. This is the perfect opportunity network with...</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "https://static.scholar.harvard.edu/files/styles/media_gallery_large/public/nlanter/files/redcross_720_09.png?m=1545532646&itok=mqzp5_-A"
                }}
                style={{ height: 300, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>420 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>69 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>4 Days ago</Text>
              </Right>
            </CardItem>
          </Card>
         
          <Card style={{ flex: 0 }}>
            <CardItem header bordered>
              <Text>Organization description</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{
                    uri:
                      "https://avatars3.githubusercontent.com/u/56052335?s=400&u=34e0360e48b76117e01419d7682c0f3185436d39&v=4"
                  }}
                  style={{ height: 350, width: 350, flex: 1 }}
                />
                <Text>DonationPlace Solution is your one stop shop to getting the most out of your donations. We ensure that your donations go into the hands of the needy, and that your tax return will be maximized.</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon name="thumbs-up"/>
                  <Text>1,926 Likes</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
